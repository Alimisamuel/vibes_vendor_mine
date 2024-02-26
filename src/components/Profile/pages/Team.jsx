import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  ListItemButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Modal,
} from "@mui/material";
import Info from "../../common/Info";
import teamImg from "../../../assets/icons/team.svg";
import AddTeam from "../../Team/AddTeam";
import { deleteTeam, getProflie } from "../../../api";
import removeIcon from "../../../assets/icons/del-circle.svg";
import Loader from "../../common/Loader";
import teamDelIcon from "../../../assets/icons/delTeam.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: 6,
  boxShadow: 24,
  px: 7,
  py: 7,
  boxSizing: "border-box",
};

const Team = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [teamId, setTeamId] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [deleted, setDeleted] = useState(false)
  const handleOpen = (id) => {
    setDeleted(false)
    setTeamId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleGetProfile = async () => {
    setIsLoading(true);
    await getProflie()
      .then((res) => {
        setIsLoading(false);
        setData(res?.data?.data?.team_members);
        // console.log(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    handleGetProfile();
  }, []);

  const handleDeleteTeam = async (id) => {
    
    setIsLoading(true);
    await deleteTeam(id)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        if(res.data?.status){
          setDeleted(true)
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb:2
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#151515" }}>
            Team{" "}
            <Info content="Enlist team members on your profile to facilitate guest check-ins or generate invoices for payment collection to VibezsUp guests. Streamline collaboration and enhance efficiency with your team." />
          </Typography>
          <AddTeam action={handleGetProfile} />
        </Box>
        {!data || data?.length === 0 ? (
          <>
            <Box
              sx={{
                mt: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={teamImg} />
              <Typography
                sx={{
                  color: "#151515",
                  mt: 3,
                  width: "60%",
                  textAlign: "center",
                }}
              >
                Currently, there are no team members added. Utilize the "Add
                Team Member" button above to include a new member. Once added,
                the member can log in using the team member login option on the
                login page.
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Table>
              <TableHead>
                <TableRow sx={{ borderBottom: "0px solid" }}>
                  <TableCell
                    sx={{ fontSize: "13px", fontWeight: 500, color: "#8f8f8f" }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "13px", fontWeight: 500, color: "#8f8f8f" }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "13px", fontWeight: 500, color: "#8f8f8f" }}
                  >
                    Access Code
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "13px", fontWeight: 500, color: "#8f8f8f" }}
                  >
                    Resv Count
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "13px", fontWeight: 500, color: "#8f8f8f" }}
                  >
                    Inv. Count
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "13px", fontWeight: 500, color: "#8f8f8f" }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((team, index) => (
                  <TableRow key={index}>
                    <TableCell>{team.name}</TableCell>
                    <TableCell>{team?.email}</TableCell>
                    <TableCell>{team?.
access_code}</TableCell>
                    <TableCell>{team?.
resv_count
}</TableCell>
                    <TableCell>{team?.
inv_count
}</TableCell>

                    <TableCell align="right">
                      <IconButton onClick={() => handleOpen(team?.id)}>
                        <img src={removeIcon} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: 3,
            }}
          >
            <img src={teamDelIcon} />
            {
              deleted ? (
                <>
                      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
   Team member successfully deleted
            </Typography>
                      <Button
                onClick={()=>{
                  handleClose()
                  handleGetProfile()
                
                }}
                sx={{ textDecoration: "underline", color: "#A71200" }}
              >
                Close
              </Button>
                </>
              ):(
                <>
                       <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
              Are you sure you want to delete this team member?
            </Typography>
     
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ py: 1, px: 4, borderRadius: 3 }}
                onClick={()=>handleDeleteTeam(teamId)}
              >
                Delete
              </Button>
              <Button
                onClick={handleClose}
                sx={{ textDecoration: "underline", color: "#A71200" }}
              >
                Cancel
              </Button>
            </Box>
                </>
              )
            }
     
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Team;
