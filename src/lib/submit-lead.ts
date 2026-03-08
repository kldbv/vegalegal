interface LeadData {
  name: string
  phone: string
  company?: string
  interest: string
  message?: string
}

interface SubmitResult {
  success: boolean
  error?: string
}

export async function submitLead(data: LeadData, page: string): Promise<SubmitResult> {
  const params = new URLSearchParams(window.location.search)
  const utm = {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
  }

  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, ...utm, page }),
    })

    const result = await res.json()

    if (!res.ok || result.error) {
      return { success: false, error: result.error || 'Ошибка отправки' }
    }

    return { success: true }
  } catch (e) {
    console.error('Failed to send lead to CRM:', e)
    return { success: false, error: 'Ошибка сети' }
  }
}
