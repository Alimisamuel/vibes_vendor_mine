import { Box } from "@mui/material";
import Nav from "./Nav";
import Main from "./Main";
import PropTypes from 'prop-types';



export function DashboardLayout({children}){
    return (
<>
<Box    sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: {  lg: 'row' },
          bgcolor:'#F4F4F4',

        }}>
            <Nav/>
            <Main>{children}</Main>
        </Box>
</>
    )
}

DashboardLayout.propTypes = {
    children: PropTypes.node,
  };