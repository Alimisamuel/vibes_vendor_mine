import React, { useState, forwardRef, useCallback } from "react";
import clsx from "clsx";
import { makeStyles } from '@mui/styles'

import { useSnackbar, SnackbarContent, CustomContentProps } from "notistack";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    "@media (min-width:600px)": {
      minWidth: "344px !important"
    }
  },
  card: {
    width: "100%"
  },
  typography: {
    color: "#000"
  },
  actionRoot: {
    padding: "8px 8px 8px 16px",
    justifyContent: "space-between"
  },
  icons: {
    marginLeft: "auto"
  },
  expand: {
    padding: "8px 8px",
    transform: "rotate(0deg)",
    color: "#000",
    transition: "all .2s"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  paper: {
    backgroundColor: "#fff",
    padding: 16
  },
  checkIcon: {
    fontSize: 20,
    paddingRight: 4
  },
  button: {
    padding: 0,
    textTransform: "none"
  }
}));

const SuccessAlert = forwardRef(({ id, ...props }, ref) => {
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(false);



  const handleDismiss = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);

  return (
    <SnackbarContent ref={ref} className={classes.root}>
      <Card className={classes.card} style={{ backgroundColor: "#00D23B1a", borderRadius:"0px", backdropFilter:'blur(10px)' }}>
        <Box sx={{p:1, bgcolor:'#00D23B', }}></Box>
        <CardActions classes={{ root: classes.actionRoot }}>
          <Typography variant="body2" sx={{fontFamily:'outfit', color:'#00D23B'}}>
            {props.message}
          </Typography>
          <div className={classes.icons}>
          
            <IconButton
              size="small"
              className={classes.expand}
              onClick={handleDismiss}
            >
              <CloseIcon sx={{color:'#00D23B'}} fontSize="small" />
            </IconButton>
          </div>
        </CardActions>
    
      </Card>
    </SnackbarContent>
  );
});

SuccessAlert.displayName = "SuccessAlert";

export default SuccessAlert;
