'use client'

// React Imports
import { useRef, useState } from 'react'

// Next Imports
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'

import { TbLanguage } from 'react-icons/tb'

// MUI Imports
import IconButton from '@mui/material/IconButton'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'

// Type Imports
import type { Locale } from '@configs/i18n'

interface Props {
  isScroled?: boolean
  className?: string
}

// Hook Imports

type LanguageDataType = {
  langCode: Locale
  langName: string
}

const getLocalePath = (pathName: string, locale: string) => {
  if (!pathName) return '/'
  const segments = pathName.split('/')

  segments[1] = locale

  return segments.join('/')
}

// Vars
const languageData: LanguageDataType[] = [
  {
    langCode: 'en',
    langName: 'English'
  },
  {
    langCode: 'es',
    langName: 'Español'
  },
  {
    langCode: 'pt',
    langName: 'Portuguese'
  }
]

const LanguageDropdown = ({ isScroled, className }: Props) => {
  // States
  const [open, setOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)

  // Hooks
  const pathName = usePathname()
  const { lang } = useParams()

  const handleClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleSelectLanguage = (langCode: string) => {
    setOpen(false)
    const daysToExpire = 7 // Duración de la cookie en días
    const expiryDate = new Date(Date.now() + daysToExpire * 24 * 60 * 60 * 1000).toUTCString()

    document.cookie = `language=${encodeURIComponent(langCode)}; expires=${expiryDate}; path=/; samesite=Lax`
    window.location.reload()
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleToggle}
        className={`${className} ${isScroled ? 'text-white' : pathName.toString() === '/en' || pathName.toString() === '/es' || pathName.toString() === '/pt' ? 'text-white' : 'text-blue-800'}`}
      >
        <TbLanguage />
      </IconButton>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-start'
        anchorEl={anchorRef.current}
        className='min-is-[160px] !mbs-3 z-[1]'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'right top' }}
          >
            <Paper className={''}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleClose}>
                  {languageData.map(locale => (
                    <MenuItem
                      key={locale.langCode}
                      component={Link}
                      href={getLocalePath(pathName, locale.langCode)}
                      onClick={() => handleSelectLanguage(locale.langCode)}
                      selected={lang === locale.langCode}
                    >
                      {locale.langName}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default LanguageDropdown
