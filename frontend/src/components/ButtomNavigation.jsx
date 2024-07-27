import React ,{useState} from 'react'
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ButtomNavigation = () => {

    const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: "99%", position:'fixed', height:100 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<RestoreIcon />} />
        <BottomNavigationAction icon={<FavoriteIcon />} />
        <BottomNavigationAction icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}

export default ButtomNavigation
