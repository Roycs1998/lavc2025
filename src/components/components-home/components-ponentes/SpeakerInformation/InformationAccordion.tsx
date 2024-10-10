import * as React from 'react'

import Accordion from '@mui/material/Accordion'

import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface SpeakersStuff {
  title: string
  text?: string
}

export const InformationAccordion = ({ title, text }: SpeakersStuff) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          // eslint-disable-next-line react/jsx-no-undef
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>{text}</AccordionDetails>
      </Accordion>
    </div>
  )
}
