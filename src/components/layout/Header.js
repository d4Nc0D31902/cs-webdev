import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <Fragment>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6">Capstone Solutions</Typography>
            </Link>
          </div>
          {user ? (
            <div>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <Avatar alt={user.name} src={user.avatar && user.avatar.url} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {user.role === "admin" && (
                  <MenuItem onClick={handleClose}>
                    <Link
                      to="/dashboard"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Dashboard
                    </Link>
                  </MenuItem>
                )}
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/orders/me"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Orders
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/me"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            !loading && (
              <Button
                component={Link}
                sx={{ borderRadius: "20px" }}
                to="/login"
                color="inherit"
                variant="outlined"
              >
                Login
              </Button>
            )
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
