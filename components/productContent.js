const UNITS = ['mg', 'mcg', 'ml', 'g', 'ui']

/** "3mg · 240 tabletas", skipping the empty parts of the product's `content` data. */
export function formatContent(content = {}) {
  const amount = String(content.text ?? '').trim()
  const type = String(content.type ?? '').trim()
  const size = String(content.size ?? '').trim()
  const sizeType = String(content.size_type ?? '').trim()

  const dose = amount && type ? (UNITS.includes(type.toLowerCase()) ? amount + type : `${amount} ${type}`) : amount || type
  const pack = [size, sizeType].filter(Boolean).join(' ')

  return [dose, pack].filter(Boolean).join(' · ')
}

/** Splits a long description (string or array) into readable paragraphs of a few sentences. */
export function toParagraphs(description, maxLength = 360) {
  const sentences = []
    .concat(description ?? [])
    .join(' ')
    .split(/(?<=[.!?*])\s+(?=[A-ZÁÉÍÓÚÑ¡¿])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)

  return sentences.reduce((paragraphs, sentence) => {
    const last = paragraphs[paragraphs.length - 1]
    if (last && last.length + sentence.length < maxLength) paragraphs[paragraphs.length - 1] = `${last} ${sentence}`
    else paragraphs.push(sentence)
    return paragraphs
  }, [])
}
