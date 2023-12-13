import Logo from "../../assets/images/logo.png"
import Logo1 from "../../assets/images/logo1.jpg"
import ModalLogIn from "../content/home/ModalLogIn";


import { AppBar, Box, Toolbar, IconButton, Menu, MenuItem, Avatar, Tooltip } from '@mui/material';
import { Container, Grid, Typography, Button, Badge } from "@mui/material";
import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


import { useEffect, useState } from "react";

import { auth, googleProvider } from "../../firebase";

import { useDispatch, useSelector } from "react-redux"


const navLinkStyle = ({ isActive }) => ({
  textDecoration: "none",
  backgroundColor: isActive ? "#cf2e2e" : "",
  padding: "12px 20px",
  borderRadius: "10px",
  fontSize: "12px",
  fontWeight: isActive ? "bold" : "",
})

const navLinkResponsiveStyle = ({ isActive }) => ({
  textDecoration: "none",
  // color: isActive ? "white" : "black",
  backgroundColor: isActive ? "rgb(207,46,46) 100%)" : "",
  padding: "8px 30px",
  borderRadius: "4px 16px",
})

function Header() {
  const { user, nameProduct } = useSelector((reduxData) => reduxData.taskReducer);
  const { cart } = useSelector((reduxData) => reduxData.cartReducer);

  const dispatch = useDispatch();


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  //MODAL LOGIN
  const [openModalLogIn, setOpenModalLogIn] = useState(false);

  // LOGIN GOOGLE
  // const [user, setUser] = useState(null);

  const loginGoogle = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: "USER",
          user: result.user
        })
        // setUser(result.user);
        setOpenModalLogIn(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const logoutGoogle = () => {
    auth.signOut()
      .then(() => {
        dispatch({
          type: "USER",
          user: null
        })
        // setUser(null);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      // console.log(result);
      dispatch({
        type: "USER",
        user: result
      })
      // setUser(result)
    });
  }, []);



  //MODAL
  const logIn = () => {
    setOpenModalLogIn(true);
  }

  const handleCloseModal = () => {
    setOpenModalLogIn(false);
  }


  //NAVBAR
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Container style={{ marginBottom: "78px" }}>
      <AppBar position="fixed" style={{ backgroundColor: "#fff" }}>
        <div>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 5,
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
                width: { xs: "160px", md: "180px" }
              }}
            >
              {/* <img src={Logo1} width="100" /> */}
              <img src={Logo} width="100%" />
            </Typography>

            {/* Responsive */}
            <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem>
                  <NavLink to="/" style={navLinkResponsiveStyle}>
                    <Tooltip title="Trang chủ">
                      <Button>
                        <HomeIcon sx={{ fontSize: 30, color: "black" }} />
                        <Typography className="mt-1" variant="body2" style={{ color: "black" }}>Trang chủ</Typography>
                      </Button>
                    </Tooltip>
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink to="/products" style={navLinkResponsiveStyle}>
                    <Tooltip title="Trang sản phẩm">
                      <Button>
                        <FormatListBulletedIcon sx={{ fontSize: 30, color: "black" }} />
                        <Typography className="mt-1" variant="body2" style={{ color: "black" }}>Sản phẩm</Typography>
                      </Button>
                    </Tooltip>
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink to="/cart" style={navLinkResponsiveStyle}>
                    <Tooltip title="Giỏ hàng">
                      <Badge color="error" badgeContent={cart}>
                        <Button sx={{ color: "black" }}><ShoppingCartIcon sx={{ fontSize: 30, color: "black" }} />Giỏ hàng</Button>
                      </Badge>
                    </Tooltip>
                  </NavLink>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                // mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 5,
                textDecoration: 'none',
              }}
            >
              <img src={Logo1} width="120" />
              {/* <img src={Logo} width="100" /> */}
            </Typography>
            {/* Responsive */}



            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} style={{ marginRight: "50px" }}>
              <Container
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to="/" style={navLinkStyle}>
                  <Tooltip title="Trang chủ">
                    <Button>
                      <HomeIcon sx={{ fontSize: 22, color: "black" }} />
                      <Typography className="mt-1" variant="body2" style={{ color: "black" }}>Trang chủ</Typography>
                    </Button>
                  </Tooltip>
                </NavLink>

                <NavLink to="/products" style={navLinkStyle}>
                  <Tooltip title="Trang sản phẩm">
                    <Button>
                      <FormatListBulletedIcon sx={{ fontSize: 22, color: "black" }} />
                      <Typography className="" variant="body2" style={{ color: "black" }}>Sản phẩm</Typography>
                    </Button>
                  </Tooltip>
                </NavLink>

                <NavLink to="/cart" style={navLinkStyle}>
                  <Tooltip title="Giỏ hàng">
                    <Badge color="error" badgeContent={cart}>
                      <Button><ShoppingCartIcon sx={{ fontSize: 30, color: "black" }} /></Button>
                    </Badge>
                  </Tooltip>
                </NavLink>
              </Container>
            </Box>

            {
              user ?
                <Box sx={{ flexGrow: 0, mr: 5 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={user.photoURL} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    anchorEl={anchorElUser}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography variant="body1">{user.displayName}</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography variant="body1" onClick={logoutGoogle} color="primary"><b><LogoutIcon /> Đăng xuất</b></Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                :
                <Box sx={{ flexGrow: 0, mr: 5 }}>
                  <Button variant="contained" className="btn-login" onClick={logIn} style={{ cursor: "pointer" }}>
                    <LoginIcon /> Đăng nhập
                  </Button>

                </Box>
            }

          </Toolbar>
        </div>
      </AppBar >


      {/* Modal LogIn */}
      < ModalLogIn openModalLogIn={openModalLogIn} handleCloseModal={handleCloseModal} loginGoogle={loginGoogle} />

    </Container >
  );
}

export default Header;