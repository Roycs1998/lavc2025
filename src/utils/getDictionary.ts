// Third-party Imports
import 'server-only'

// Type Imports
import type { Locale } from '@configs/i18n'

const dictionaries = {
  en: () => import('@/data/dictionaries/en.json').then(module => module.default),
  es: () => import('@/data/dictionaries/es.json').then(module => module.default),
  pt: () => import('@/data/dictionaries/pt.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
