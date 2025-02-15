export function parseWhatsappURL( phone: number|string, text: string)
{
  return `https://wa.me/${phone}?text=${ encodeURIComponent(text) }`
}
