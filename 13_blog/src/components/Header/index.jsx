import { Box, Button, Drawer } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setIsOpen(open)
  }
  return (
    <>
      <Button onClick={toggleDrawer(true)}>AbriAAAAAr</Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box className="min-w-[80px]">
          <Link to="/">Home</Link>
          <Link to="/new">New</Link>
        </Box>
      </Drawer>
    </>
  )
}
