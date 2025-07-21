import { decode } from 'html-entities'

const normalizeText = (html: string = '') => {
  const text = html.replace(/<[^>]*>?/gm, '')
  
  return decode(text).trim()
}

export default normalizeText
