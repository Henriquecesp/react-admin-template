import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import { withStyles } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const ItemIcon = withStyles({
  root: {
    color: '#fff'
  }
})(ListItemIcon)

export const mainListItems = (
  <div>
    <ListItem button>
      <ItemIcon>
        <DashboardIcon />
      </ItemIcon>
      <ListItemText primary="Painel" />
    </ListItem>
    <ListItem button>
      <ItemIcon>
        <ShoppingCartIcon />
      </ItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ItemIcon>
        <PeopleIcon />
      </ItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ItemIcon>
        <BarChartIcon />
      </ItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ItemIcon>
        <LayersIcon />
      </ItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ItemIcon>
        <MoreHorizIcon />
      </ItemIcon>
      <ListItemText primary="Configurações" />
    </ListItem>
  </div>
)
