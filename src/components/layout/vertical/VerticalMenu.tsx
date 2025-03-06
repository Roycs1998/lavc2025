'use client'

import { useEffect } from 'react'

// MUI Imports

import { useRouter } from 'next/navigation'

import Chip from '@mui/material/Chip'

import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, MenuItem } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'

import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

import type{ Session } from '@/interfaces/session/interface'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)



const VerticalMenu = ({ scrollMenu, session }: {
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void

  session: Session | null} ) => {
  // Hooks
  const theme = useTheme()
  const route = useRouter()

  useEffect(() => {
      session ?? route.push('/')
    }, [session, route])

  const { isBreakpointReached, transitionDuration } = useVerticalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
{/*         {session?.user?.user?.profileCode === 0 && (
          <>
            <SubMenu
                label='Dashboards'
                icon={<i className='ri-home-smile-line' />}
                suffix={<Chip label='5' size='small' color='error' />}
              >
                <MenuItem
                  href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/crm`}
                  suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
                  target='_blank'
                >
                  CRM
                </MenuItem>
                <MenuItem href='/'>Analytics</MenuItem>
                <MenuItem
                  href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/ecommerce`}
                  suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
                  target='_blank'
                >
                  eCommerce
                </MenuItem>
                <MenuItem
                  href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/academy`}
                  suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
                  target='_blank'
                >
                  Academy
                </MenuItem>
                <MenuItem
                  href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/logistics`}
                  suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
                  target='_blank'
                >
                  Logistics
                </MenuItem>
              </SubMenu>
              <SubMenu
                label='Front Pages'
                icon={<i className='ri-file-copy-line' />}
                suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
              >
                <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/landing-page`} target='_blank'>
                  Landing
                </MenuItem>
                <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/pricing`} target='_blank'>
                  Pricing
                </MenuItem>
                <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/payment`} target='_blank'>
                  Payment
                </MenuItem>
                <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/checkout`} target='_blank'>
                  Checkout
                </MenuItem>
                <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/help-center`} target='_blank'>
                  Help Center
                </MenuItem>
              </SubMenu>

              <MenuSection label='Misc'>
                <SubMenu label='Others' icon={<i className='ri-more-line' />}>
                  <MenuItem suffix={<Chip label='New' size='small' color='info' />}>Item With Badge</MenuItem>
                  <MenuItem
                    href='https://themeselection.com'
                    target='_blank'
                    suffix={<i className='ri-external-link-line text-xl' />}
                  >
                    External Link
                  </MenuItem>
                  <SubMenu label='Menu Levels'>
                    <MenuItem>Menu Level 2</MenuItem>
                    <SubMenu label='Menu Level 2'>
                      <MenuItem>Menu Level 3</MenuItem>
                      <MenuItem>Menu Level 3</MenuItem>
                    </SubMenu>
                  </SubMenu>
                  <MenuItem disabled>Disabled Menu</MenuItem>
                </SubMenu>
              </MenuSection>
          </>
        )} */}

        {session?.user?.user?.profileCode === 1 && (
          <>
            <MenuItem href={`/my-profile`} icon={<i className='ri-user-settings-line' />}>
              Account Settings
            </MenuItem>

            <MenuItem
              icon={<i className='ri-home-smile-line' />}
              href={`/my-events/${session?.user?.user?.userCode}`}
              suffix={<Chip /* label='Pro' */ size='small' color='primary' variant='tonal' />}
            >
              Mis tickets
            </MenuItem>
{/*             <SubMenu
                label='My Events'
                icon={<i className='ri-home-smile-line' />}
                suffix={<Chip label='5' size='small' color='error' />}
              >
                <MenuItem
                  href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/crm`}
                  suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
                  target='_blank'
                >
                  CRM
                </MenuItem>
                <MenuItem href='/'>Analytics</MenuItem>
                <MenuItem
                  href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/ecommerce`}
                  suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
                  target='_blank'
                >
                  eCommerce
                </MenuItem>
                <MenuItem
                  href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/academy`}
                  suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
                  target='_blank'
                >
                  Academy
                </MenuItem>
                <MenuItem
                  href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/logistics`}
                  suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
                  target='_blank'
                >
                  Logistics
                </MenuItem>
              </SubMenu> */}
          </>
        )}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
