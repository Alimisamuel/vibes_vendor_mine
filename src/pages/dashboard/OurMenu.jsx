import React, { useEffect, useState } from "react";
import Header from "../../Layouts/Header";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  ListItemButton,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Modal,
  TextField,
  Popover,
  MenuItem,
} from "@mui/material";
import Card from "../../components/common/Card";
import img1 from "../../assets/img/menu/1.jpg";
import moreIcon from "../../assets/icons/more.svg";
import serveIcon from "../../assets/icons/serve.svg";
import editIcon from "../../assets/icons/edit.svg";
import delIcon from "../../assets/icons/delete.svg";
import {
  addMenuClassification,
  editMenuClass,
  getClassificationMenu,
  getMenuList,
  deleteMenuClass,
  deleteMenuItem,
  getAllMenuItem,
  relistMenu,
  delistMenu,
} from "../../api";
import AddMenu from "../../components/Menu/AddMenu";
import UpdateMenu from "../../components/Menu/UpdateMenu";
import Loader from "../../components/common/Loader";
import { useSnackbar } from "notistack";
import emptyIcon from "../../assets/icons/team.svg";
import deleteIcon from "../../assets/icons/serve_error.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxSizing: "border-box",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const OurMenu = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDeleteItem, setOpenDeleteItem] = useState(false);
  const [openDeleteClass, setOpenDeleteClass] = useState(false);
  const [allMenu, setAllMenu] = useState(null);
  const handleClose = () => {
    setOpen(false);
    if (isSuccess) {
      setName("");
    }
  };
  const [menuClassificationData, setMenuClassification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [menuId, setMenuId] = useState(null);
  const [menuClassData, setMenuClassData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [isItemEmpty, setIsItemEmpty] = useState(true);

  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const [active, setIsActive] = useState(false);
  const handleCloseDrawer = () => {
    setDrawer(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = () => {
    setOpen(true);
    setIsSuccess(false);
    setName("");
  };
  const handleOpenPopper = (event, data) => {
    setAnchorEl(event.currentTarget);
    setEditData(data);
    console.log(editData);
  };

  const handleClosePoper = () => {
    setAnchorEl(null);
  };

  const handleEditMenuClass = async () => {
    setIsLoading(true);
    await editMenuClass(menuId, name)
      .then((res) => {
        setIsLoading(false);
        if (res?.data?.status) {
          setIsSuccess(true);
          handleGetMenuClasssification();
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };
  const handleMenuClassDeleteClick = () => {
    setIsSuccess(false);
    setIsItemEmpty(true);
    setOpenDeleteClass(true);
  };

  const handleDeleteMenuClass = async () => {
    setIsSuccess(false);
    setIsLoading(true);
    setIsItemEmpty(true);
    await deleteMenuClass(menuId, name)
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        handleAlert(`${err.response.data.message}`, "error");
        if (
          err.response.data.message ===
          "Menu Classification has associated Menu Items."
        ) {
          setIsItemEmpty(false);
        }
      });
  };

  const handleDeleteMenuItem = async () => {
    setAnchorEl(null);
    setIsLoading(true);
    console.log(editData?.id, editData?.name);
    await deleteMenuItem(editData?.id, editData?.name)
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        if (menuId !== null) {
          handleGetSingleMenuItem();
        } else {
          handleGetAllMenuItems();
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  const handleGetSingleMenuItem = async () => {
    setIsLoading(true);
    await getClassificationMenu(menuId)
      .then((res) => {
        setIsLoading(false);
        console.log(res?.data?.data);
        setMenuClassData(res?.data?.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  useEffect(() => {
    if (menuId !== null) {
      handleGetSingleMenuItem();
    }
  }, [menuId]);
  const handleGetAllMenuItems = async () => {
    setIsLoading(true);
    await getMenuList()
      .then((res) => {
        setIsLoading(false);
        console.log(res?.data);
        setAllMenu(res?.data?.data);
      })
      .catch((err) => {
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  useEffect(() => {
    if (menuId === null) {
      handleGetAllMenuItems();
    }
  }, [menuId]);

  const openPopper = Boolean(anchorEl);
  const id = openPopper ? "simple-popover" : undefined;

  const handleGetMenuClasssification = async () => {
    setIsLoading(true);
    await getMenuList()
      .then((res) => {
        setIsLoading(false);
        if (res?.data?.status) {
          setMenuClassification(res?.data?.data);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  useEffect(() => {
    handleGetMenuClasssification();
  }, []);

  const handleAddMenuClass = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    await addMenuClassification(name)
      .then((res) => {
        setIsLoading(false);
        if (res?.data?.status) {
          setIsSuccess(true);
          handleGetMenuClasssification();
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  const table_id = menuClassificationData && menuClassificationData[0]?.id;

  const handleRelist = async (id) => {
    setIsLoading(true);
    await relistMenu(id)
      .then((res) => {
        setIsLoading(false);
        setAnchorEl(null);
        handleAlert(`Relist Successful`, "success");
        if (menuId !== null) {
          handleGetSingleMenuItem();
        } else {
          handleGetAllMenuItems();
        }
      })
      .catch((err) => {
        setIsLoading(false);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  const handleDelist = async (id) => {
    setIsLoading(true);
    await delistMenu(id)
      .then((res) => {
        setAnchorEl(null);
        handleAlert(`Delist Successful`, "success");
        setIsLoading(false);
        if (menuId !== null) {
          handleGetSingleMenuItem();
        } else {
          handleGetAllMenuItems();
        }
      })
      .catch((err) => {
        setIsLoading(false);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  const handleAction = () => {
    if (menuId !== null) {
      handleGetSingleMenuItem();
    } else {
      handleGetAllMenuItems();
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Header
        title="Our Menu"
        caption="Manage and review the Menu Items that Guests can see on your profile"
      />
      <Box sx={{ mt: 17 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Card>
              <Typography variant="subtitle2" sx={{ color: "#151515" }}>
                Menu Classifications
              </Typography>
              <Box sx={{ mt: 3 }}>
                <ListItemButton
                  onClick={() => {
                    setIsActive(table_id);
                    setMenuId(table_id);
                  }}
                  selected={active === table_id}
                  sx={{
                    border: "1px solid #151515",
                    borderRadius: "12px",
                    "&.Mui-selected": {
                      border: "1px solid #75007E",
                      color: "#75007E",
                      mb: 2,
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#151515",
                        fontWeight: 500,
                        fontSize: "12px",
                        ...(active === table_id && {
                          color: "#75007E",
                        }),
                      }}
                    >
                      {menuClassificationData &&
                        menuClassificationData[0]?.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#8f8f8f",
                        fontSize: "10px",
                        ...(active === table_id && {
                          color: "#75007E",
                        }),
                      }}
                    >
                      {menuClassificationData &&
                        menuClassificationData[0]?.menu_items}{" "}
                      Menu Items
                    </Typography>
                  </Box>
                </ListItemButton>
                <Divider sx={{ my: 2 }} />
                <Box>
                  {!menuClassificationData ||
                  menuClassificationData?.length <= 1 ? (
                    <></>
                  ) : (
                    <>
                      {menuClassificationData.length > 1 &&
                        menuClassificationData?.slice(1)?.map((item, index) => (
                          <ListItemButton
                            key={index}
                            selected={active === item?.id}
                            sx={{
                              border: "1px solid #151515",
                              borderRadius: "12px",
                              cursor: "default",
                              "&.Mui-selected": {
                                border: "1px solid #75007E",
                                color: "#75007E",
                              },
                              mb: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{ cursor: "pointer", width: "55%" }}
                                onClick={() => {
                                  setIsActive(item?.id);
                                  setMenuId(item?.id);
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "#151515",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    ...(active === item?.id && {
                                      color: "#75007E",
                                    }),
                                  }}
                                >
                                  {item?.name}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: "#8f8f8f",
                                    fontSize: "10px",
                                    ...(active === item?.id && {
                                      color: "#75007E",
                                    }),
                                  }}
                                >
                                  {item?.menu_items} Menu Items
                                </Typography>
                              </Box>
                              <Box>
                                <IconButton
                                  onClick={() => {
                                    setIsSuccess(false);
                                    setOpenEdit(true);
                                    setName(item?.name);
                                    setMenuId(item?.id);
                                  }}
                                >
                                  <img src={editIcon} />
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    handleMenuClassDeleteClick();
                                    setIsSuccess(false);
                                    setName(item?.name);
                                    setMenuId(item?.id);
                                  }}
                                >
                                  <img src={delIcon} />
                                </IconButton>
                              </Box>
                            </Box>
                          </ListItemButton>
                        ))}
                    </>
                  )}
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Button
                    onClick={handleOpen}
                    fullWidth
                    sx={{
                      border: "2px dashed #007E23",
                      color: "#007E23",
                      py: 2,
                      borderRadius: "12px",
                    }}
                  >
                    Add New Classification
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item md={8}>
            {!menuId || menuId === null ? (
              <>
                <Card>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "#151515" }}>
                      All Menu Items
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: 3,
                      }}
                    >
                      <AddMenu
                        selectData={menuClassificationData}
                        action={handleAction}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    {!allMenu || allMenu.length === 0 ? (
                      <>
                        <Box
                          sx={{
                            height: "400px",
                            width: "100%",

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img src={emptyIcon} />
                          <Typography
                            sx={{
                              color: "#8f8f8f",
                              width: "60%",
                              textAlign: "center",
                              mt: 2,
                            }}
                          >
                            You currently have no menu items. Use the “ Add Menu
                            Item” button above to create items under any
                            available classification.
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ color: "#8f8f8f" }}></TableCell>
                              <TableCell sx={{ color: "#8f8f8f" }}>
                                Item Name
                              </TableCell>
                              <TableCell sx={{ color: "#8f8f8f" }}>
                                Unit Price
                              </TableCell>
                              <TableCell sx={{ color: "#8f8f8f" }}>
                                Resv Count
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ color: "#8f8f8f" }}
                              ></TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <>
                              {allMenu?.map((item, index) => (
                                <>
                                  <TableRow>
                                    <TableCell sx={{ border: "none" }}>
                                      <Typography color="primary" sx={{fontWeight:500}}>
                                        {`${item?.name} - ${item?.
menu_count} Menu Items`}
                                      </Typography>
                                    </TableCell>
                                  </TableRow>
                            {
                              item?.items.map((item, index)=>(
                                      <TableRow key={index} sx={{ border: "none" }}>
                                    <TableCell sx={{ border: "none" }}>
                                      <Avatar
                                        src={item?.image}
                                        variant="rounded"
                                      />
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        border: "none",
                                        color: "#151515",
                                        fontWeight: 500,
                                      }}
                                    >
                                      {item?.name}
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        border: "none",
                                        color: "#151515",
                                        fontWeight: 500,
                                      }}
                                    >
                                      N {item?.unit_price?.toLocaleString()}
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        border: "none",
                                        color: "#151515",
                                        fontWeight: 500,
                                      }}
                                    >
                                      {item?.resv_count}
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      sx={{
                                        border: "none",
                                      }}
                                    >
                                      <IconButton
                                        onClick={(e) =>
                                          handleOpenPopper(e, item)
                                        }
                                      >
                                        <img
                                          aria-describedby={id}
                                          src={moreIcon}
                                        />
                                      </IconButton>
                                    </TableCell>
                                    <Popover
                                      id={id}
                                      open={openPopper}
                                      anchorEl={anchorEl}
                                      onClose={handleClosePoper}
                                      anchorOrigin={{
                                        vertical: "center",
                                        horizontal: "left",
                                      }}
                                      transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                      }}
                                    >
                                      <Box
                                        sx={{ width: "180px", py: 2, px: 1 }}
                                      >
                                        <MenuItem
                                          onClick={() => {
                                            setDrawer(true);
                                            setEdit(false);
                                            handleClosePoper();
                                          }}
                                          sx={{
                                            color: "#151515",
                                            mt: 0.5,
                                            py: 1,
                                          }}
                                        >
                                          View Details
                                        </MenuItem>
                                        <MenuItem
                                          onClick={() => {
                                            setDrawer(true);
                                            setEdit(true);
                                            handleClosePoper();
                                          }}
                                          sx={{
                                            color: "#151515",
                                            mt: 0.5,
                                            py: 1,
                                          }}
                                        >
                                          Edit Menu Item
                                        </MenuItem>
                                        {item?.delisted === false ? (
                                          <MenuItem
                                            onClick={() => {
                                              handleDelist(editData?.id);
                                            }}
                                            sx={{
                                              color: "#FFB872",
                                              mt: 0.5,
                                              py: 1,
                                            }}
                                          >
                                            Delist Menu Item
                                          </MenuItem>
                                        ) : (
                                          <MenuItem
                                            onClick={() => {
                                              handleRelist(editData?.id);
                                            }}
                                            sx={{
                                              color: "#007E23",
                                              mt: 0.5,
                                              py: 1,
                                            }}
                                          >
                                            Relist Menu Item
                                          </MenuItem>
                                        )}

                                        <MenuItem
                                          onClick={() =>
                                            setOpenDeleteItem(true)
                                          }
                                          sx={{
                                            color: "#A71200",
                                            mt: 0.5,
                                            py: 1,
                                          }}
                                        >
                                          Delete Menu Item
                                        </MenuItem>
                                      </Box>
                                    </Popover>
                                  </TableRow>
                              ))
                            }
                                </>
                              ))}
                            </>
                          </TableBody>
                        </Table>
                      </>
                    )}
                  </Box>
                </Card>
              </>
            ) : (
              <>
                <Card>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "#151515" }}>
                      All Menu Items for {menuClassData && menuClassData.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: 3,
                      }}
                    >
                      <Typography
                        onClick={() => {
                          // handleGetAllMenuItems();
                          setIsActive(null);
                          setMenuId(null);
                        }}
                        color="error"
                        sx={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          fontWeight: 700,
                        }}
                      >
                        Clear Filter
                      </Typography>

                      <AddMenu
                        selectData={menuClassificationData}
                        // action={handleGetAllMenuItems}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    {!menuClassData || menuClassData?.items?.length === 0 ? (
                      <>
                        <Box
                          sx={{
                            height: "400px",
                            width: "100%",

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img src={emptyIcon} />
                          <Typography
                            sx={{
                              color: "#8f8f8f",
                              width: "60%",
                              textAlign: "center",
                              mt: 2,
                            }}
                          >
                            You currently have no menu items under this
                            classification. Use the “
                            {menuClassData && menuClassData?.name} Menu Item”
                            button above to create items under this
                            classification.
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ color: "#8f8f8f" }}></TableCell>
                              <TableCell sx={{ color: "#8f8f8f" }}>
                                Item Name
                              </TableCell>
                              <TableCell sx={{ color: "#8f8f8f" }}>
                                Unit Price
                              </TableCell>
                              <TableCell sx={{ color: "#8f8f8f" }}>
                                Resv Count
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ color: "#8f8f8f" }}
                              ></TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <>
                              {menuClassData?.items?.map((item, index) => (
                                <TableRow key={index} sx={{ border: "none" }}>
                                  <TableCell sx={{ border: "none" }}>
                                    <Avatar
                                      src={item?.image}
                                      variant="rounded"
                                    />
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      border: "none",
                                      color: "#151515",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {item?.name}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      border: "none",
                                      color: "#151515",
                                      fontWeight: 500,
                                    }}
                                  >
                                    N {item?.unit_price?.toLocaleString()}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      border: "none",
                                      color: "#151515",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {item?.resv_count}
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    sx={{
                                      border: "none",
                                    }}
                                  >
                                    <IconButton
                                      onClick={(e) => handleOpenPopper(e, item)}
                                    >
                                      <img
                                        aria-describedby={id}
                                        src={moreIcon}
                                      />
                                    </IconButton>
                                  </TableCell>
                                  <Popover
                                    id={id}
                                    open={openPopper}
                                    anchorEl={anchorEl}
                                    onClose={handleClosePoper}
                                    anchorOrigin={{
                                      vertical: "center",
                                      horizontal: "left",
                                    }}
                                    transformOrigin={{
                                      vertical: "top",
                                      horizontal: "right",
                                    }}
                                  >
                                    <Box sx={{ width: "180px", py: 2, px: 1 }}>
                                      <MenuItem
                                        onClick={() => {
                                          setDrawer(true);
                                          setEdit(false);
                                          handleClosePoper();
                                        }}
                                        sx={{
                                          color: "#151515",
                                          mt: 0.5,
                                          py: 1,
                                        }}
                                      >
                                        View Details
                                      </MenuItem>
                                      <MenuItem
                                        onClick={() => {
                                          setDrawer(true);
                                          setEdit(true);
                                          handleClosePoper();
                                        }}
                                        sx={{
                                          color: "#151515",
                                          mt: 0.5,
                                          py: 1,
                                        }}
                                      >
                                        Edit Menu Item
                                      </MenuItem>
                                      {item?.delisted === false ? (
                                        <MenuItem
                                          onClick={() => {
                                            handleDelist(editData?.id);
                                          }}
                                          sx={{
                                            color: "#FFB872",
                                            mt: 0.5,
                                            py: 1,
                                          }}
                                        >
                                          Delist Menu Item
                                        </MenuItem>
                                      ) : (
                                        <MenuItem
                                          onClick={() => {
                                            handleRelist(editData?.id);
                                          }}
                                          sx={{
                                            color: "#007E23",
                                            mt: 0.5,
                                            py: 1,
                                          }}
                                        >
                                          Relist Menu Item
                                        </MenuItem>
                                      )}

                                      <MenuItem
                                        onClick={() => setOpenDeleteItem(true)}
                                        sx={{
                                          color: "#A71200",
                                          mt: 0.5,
                                          py: 1,
                                        }}
                                      >
                                        Delete Menu Item
                                      </MenuItem>
                                    </Box>
                                  </Popover>
                                </TableRow>
                              ))}
                            </>
                          </TableBody>
                        </Table>
                      </>
                    )}
                  </Box>
                </Card>
              </>
            )}
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isSuccess ? (
            <>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={serveIcon} />
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    mt: 2,
                  }}
                >
                  “{name}” has been successfully added as a Menu Classification
                </Typography>
                <Box
                  align="center"
                  sx={{
                    mt: 4,
                  }}
                >
                  <Button onClick={handleClose} sx={{}}>
                    <Typography
                      color="error"
                      sx={{ textDecoration: "underline" }}
                    >
                      Close
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={serveIcon} />
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    mt: 2,
                  }}
                >
                  What would you like to Name this new Menu Classification
                </Typography>
                <Box sx={{ width: "100%", mt: 3 }}>
                  <TextField
                    placeholder="What would you like to name this classification?"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      style: {
                        borderRadius: "12px",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    mt: 4,
                    display: "flex",
                    alignItems: "center",
                    columnGap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    disabled={!name}
                    onClick={handleAddMenuClass}
                    sx={{
                      borderRadius: "7px",
                      py: 1,
                      "&:disabled": {
                        color: "#fff",
                        background: "#5b5b5b",
                      },
                    }}
                  >
                    Add Classification
                  </Button>
                  <Button onClick={handleClose} sx={{ px: 8 }}>
                    <Typography
                      color="error"
                      sx={{ textDecoration: "underline" }}
                    >
                      Cancel
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
      <Modal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isSuccess ? (
            <>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={serveIcon} />
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    mt: 2,
                  }}
                >
                  The Classification has been successfully updated “{name}”
                </Typography>
                <Box
                  align="center"
                  sx={{
                    mt: 4,
                  }}
                >
                  <Button onClick={() => setOpenEdit(false)} sx={{}}>
                    <Typography
                      color="error"
                      sx={{ textDecoration: "underline" }}
                    >
                      Close
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={serveIcon} />
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    mt: 2,
                  }}
                >
                  What Name you like to update this Classification to?
                </Typography>
                <Box sx={{ width: "100%", mt: 3 }}>
                  <TextField
                    placeholder="What would you like to name this classification?"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      style: {
                        borderRadius: "12px",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    mt: 4,
                    display: "flex",
                    alignItems: "center",
                    columnGap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    disabled={!name}
                    onClick={handleEditMenuClass}
                    sx={{ borderRadius: "7px", py: 1 }}
                  >
                    Save Change
                  </Button>
                  <Button onClick={() => setOpenEdit(false)} sx={{ px: 8 }}>
                    <Typography
                      color="error"
                      sx={{ textDecoration: "underline" }}
                    >
                      Cancel
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
      <Modal
        open={openDeleteItem}
        onClose={() => {
          setIsSuccess(false);
          setOpenDeleteItem(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isSuccess ? (
            <>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={deleteIcon} />
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    mt: 2,
                  }}
                >
                  Menu item successfully deleted
                </Typography>
                <Box
                  align="center"
                  sx={{
                    mt: 4,
                  }}
                >
                  <Button
                    onClick={() => {
                      handleGetMenuClasssification();
                      setOpenDeleteItem(false);
                    }}
                    sx={{}}
                  >
                    <Typography
                      color="error"
                      sx={{ textDecoration: "underline" }}
                    >
                      Close
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={deleteIcon} />
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    mt: 2,
                  }}
                >
                  Are you sure you want to delete this Menu item?
                </Typography>

                <Box
                  align="center"
                  sx={{
                    width: "80%",
                    mt: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleDeleteMenuItem}
                    sx={{ borderRadius: "7px", py: 1 }}
                  >
                    Delete Item
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>

      <Modal
        open={openDeleteClass}
        onClose={() => {
          setIsSuccess(false);
          setOpenDeleteClass(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isItemEmpty ? (
            <>
              {isSuccess ? (
                <>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src={deleteIcon} />
                    <Typography
                      sx={{
                        color: "#151515",
                        fontWeight: 500,
                        fontSize: "12px",
                        mt: 2,
                      }}
                    >
                      {name} Classification successfully deleted
                    </Typography>
                    <Box
                      align="center"
                      sx={{
                        mt: 4,
                      }}
                    >
                      <Button
                        onClick={() => {
                          setOpenDeleteClass(false);
                          handleGetMenuClasssification();
                        }}
                        sx={{}}
                      >
                        <Typography
                          color="error"
                          sx={{ textDecoration: "underline" }}
                        >
                          Close
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src={deleteIcon} />
                    <Typography
                      sx={{
                        color: "#151515",
                        fontWeight: 500,
                        fontSize: "12px",
                        mt: 2,
                      }}
                    >
                      Are you sure you want to delete "{name}" classification?
                    </Typography>

                    <Box
                      align="center"
                      sx={{
                        width: "80%",
                        mt: 4,
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={handleDeleteMenuClass}
                        sx={{ borderRadius: "7px", py: 1 }}
                      >
                        Delete Item
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </>
          ) : (
            <>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={deleteIcon} />
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    mt: 2,
                  }}
                >
                  All Menu item in this classification needs to be re-assigned
                  or deleted before the classification can be deleted
                </Typography>

                <Box
                  align="center"
                  sx={{
                    width: "80%",
                    mt: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => setOpenDeleteClass(false)}
                    sx={{ borderRadius: "7px", py: 1 }}
                  >
                    Close
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>

      <UpdateMenu
        open={drawer}
        onClose={handleCloseDrawer}
        edit={isEdit}
        data={editData}
        selectData={menuClassificationData}
        action={handleAction}
      />
    </>
  );
};

export default OurMenu;
