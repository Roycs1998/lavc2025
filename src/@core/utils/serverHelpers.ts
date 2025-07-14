import 'server-only'

// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { Mode, SystemMode } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

export const getSettingsFromCookie = (): Settings => {
  const cookieStore = cookies()

  const cookieName = themeConfig.settingsCookieName

  return JSON.parse(cookieStore.get(cookieName)?.value || '{}')
}

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie()

  // Get mode from cookie or fallback to theme config
  const _mode = settingsCookie.mode || themeConfig.mode

  return _mode
}

export const getSystemMode = (): SystemMode => {
  const mode = getMode()

  // Validamos que el valor sea compatible con SystemMode
  if (mode === 'light' || mode === 'dark') return mode

  // Si es 'system' o cualquier otro, define un valor por defecto (por ejemplo, 'light')
  return 'light'
}

export const getServerMode = () => {
  const mode = getMode()

  return mode
}

export const getUserPreferredMode = (): Mode => {
  return getSettingsFromCookie().mode || 'system'
}

export const getResolvedMode = (): SystemMode => {
  const mode = getUserPreferredMode()

  if (mode === 'light' || mode === 'dark') return mode

  // Resolver usando media query si estás en frontend
  if (typeof window !== 'undefined') {
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    return prefersDark ? 'dark' : 'light'
  }

  // Fallback seguro
  return 'light'
}
