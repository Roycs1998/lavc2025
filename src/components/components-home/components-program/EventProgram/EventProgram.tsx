'use client'
import React from 'react'

import { Box, Tab, Tabs, Typography } from '@mui/material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export const EventProgram = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', width: '100%', height: '100px' }}>
        <Box sx={{ display: 'flex', width: '40%', height: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Typography
            className='global-padding'
            variant='h1'
            component='div'
            sx={{
              fontSize: '2.5rem',
              fontWeight: 800,
              textAlign: 'center',
              color: 'var(--second-color-purple)'
            }}
          >
            Lavc 2025
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: '60%',
            height: '100%',
            bgcolor: 'var(--second-color-purple)',
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            sx={{
              '& .MuiTab-root.Mui-selected': {
                color: 'var(--color-on-hover)'
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'var(--color-on-hover)'
              }
            }}
          >
            <Tab
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--letter-color)', mr: 6 }}
              label='DIA UNO'
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--letter-color)', mr: 6 }}
              label='DIA DOS'
              {...a11yProps(1)}
            />
            <Tab
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--letter-color)', mr: 6 }}
              label='DIA TRES'
              {...a11yProps(2)}
            />
            <Tab
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--letter-color)', mr: 6 }}
              label='DIA CUATRO'
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </Box>
      <Box sx={{ bgcolor: 'var(--background-form)' }}>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Box>
  )
}
