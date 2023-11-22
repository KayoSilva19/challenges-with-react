import { Box, Button, Drawer } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List as ListIcon, HouseSimple, Newspaper } from '@phosphor-icons/react'

import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

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
    <Box className="p-4">
      <Button onClick={toggleDrawer(true)}>
        <ListIcon
          className="text-neutral-500 hover:text-purple-500 transition-colors"
          size={32}
          weight="fill"
        />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          className="min-w-[13rem] bg-neutral-800 min-h-screen"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Home', 'Novo Post'].map((text, i) => {
              return (
                <ListItem key={i}>
                  <Link to={text === 'Home' ? '/' : '/new'}>
                    <ListItemButton>
                      <ListItemIcon>
                        {text === 'Home' ? (
                          <HouseSimple
                            className="text-neutral-200 hover:text-purple-500 transition-colors"
                            size={28}
                            weight="fill"
                          />
                        ) : (
                          <Newspaper
                            className="text-neutral-200 hover:text-purple-500 transition-colors"
                            size={28}
                            weight="fill"
                          />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        className="text-neutral-200 hover:text-purple-500 transition-colors"
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
