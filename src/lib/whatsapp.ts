import { CONTACTS } from './constants'

export function buildWALink(data: { name: string; phone: string; interest: string }) {
  const text = `Здравствуйте! Меня интересует: ${data.interest}.\nИмя: ${data.name}\nТелефон: ${data.phone}`
  return `https://wa.me/${CONTACTS.phoneRaw}?text=${encodeURIComponent(text)}`
}
