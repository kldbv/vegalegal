import { buildWALink } from './whatsapp'

interface LeadData {
  name: string
  phone: string
  company?: string
  interest: string
  message?: string
}

export async function submitLead(data: LeadData, page: string) {
  // Get UTM params from URL
  const params = new URLSearchParams(window.location.search)
  const utm = {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
  }

  // 1. Send to Bitrix via API
  try {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, ...utm, page }),
    })
  } catch (e) {
    console.error('Failed to send lead to CRM:', e)
  }

  // 2. Open WhatsApp
  const waUrl = buildWALink(data)
  window.open(waUrl, '_blank')
}
