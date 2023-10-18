import { AppBar, Container, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

type TNavigationProps = {
  tabs: string[]
}

export default function Navigation({ tabs }: TNavigationProps) {
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Tooltip title="Menu" placement="left">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Tooltip>
        {tabs?.map((tab, index) => (
          <Typography key={index} component="a">
            {tab}
          </Typography>
        ))}
      </Container>
    </AppBar>
  )
}
