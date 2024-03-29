import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { NAV } from './config-layout';
import { useResponsive } from '../hooks/use-responsiveness';

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }) {

    const lgUp = useResponsive('up', 'lg');
  return (
    <Box
      component="main"
      sx={{

        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        // py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
        //   py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
        <Box className="hide_scrollbar" sx={{width:'95%', margin:'0 auto',pt:0, height:'100vh', overflow:'scroll',  overflowX:'hide',         boxSizing:'border-box',  
       }}>

      {children}
        </Box>
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
