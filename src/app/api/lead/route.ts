import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
  name: string
  phone: string
  company?: string
  interest: string
  message?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  page?: string
}

export async function POST(req: NextRequest) {
  try {
    const data: LeadData = await req.json()

    if (!data.name || !data.phone) {
      return NextResponse.json({ error: 'name and phone are required' }, { status: 400 })
    }

    const webhookUrl = process.env.BITRIX_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('BITRIX_WEBHOOK_URL is not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Build comment with all details
    const comments: string[] = []
    if (data.interest) comments.push(`Интерес: ${data.interest}`)
    if (data.message) comments.push(`Сообщение: ${data.message}`)
    if (data.page) comments.push(`Страница: ${data.page}`)
    if (data.utm_source) comments.push(`UTM: ${data.utm_source} / ${data.utm_medium || ''} / ${data.utm_campaign || ''}`)

    const bitrixFields: Record<string, string> = {
      'fields[TITLE]': `Заявка с сайта: ${data.interest || 'Консультация'}`,
      'fields[NAME]': data.name,
      'fields[PHONE][0][VALUE]': data.phone,
      'fields[PHONE][0][VALUE_TYPE]': 'WORK',
      'fields[SOURCE_ID]': 'WEB',
      'fields[SOURCE_DESCRIPTION]': 'vegalegal.kz',
      'fields[COMMENTS]': comments.join('\n'),
    }

    if (data.company) {
      bitrixFields['fields[COMPANY_TITLE]'] = data.company
    }

    // Set UTM fields (Bitrix24 built-in UTM support)
    if (data.utm_source) bitrixFields['fields[UTM_SOURCE]'] = data.utm_source
    if (data.utm_medium) bitrixFields['fields[UTM_MEDIUM]'] = data.utm_medium
    if (data.utm_campaign) bitrixFields['fields[UTM_CAMPAIGN]'] = data.utm_campaign

    const response = await fetch(`${webhookUrl}crm.lead.add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(bitrixFields).toString(),
    })

    const result = await response.json()

    if (result.error) {
      console.error('Bitrix24 error:', result.error, result.error_description)
      return NextResponse.json({ error: 'CRM error' }, { status: 502 })
    }

    return NextResponse.json({ success: true, leadId: result.result })
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
