import React, { Fragment, useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import {
  Divider,
  TextField,
  Button,
  Link,
  Typography,
  Grid,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  const redirect = new URLSearchParams(location.search).get("redirect");
  const notify = (error = "") =>
    toast.error(error, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  useEffect(() => {
    if (isAuthenticated && redirect === "shipping") {
      navigate(`/${redirect}`, { replace: true });
    } else if (isAuthenticated) navigate("/");
    if (error) {
      console.log(error);
      notify(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Login"} />
          <Grid
            container
            justifyContent="center"
            sx={{
                // border: "2px white solid",
              marginTop: "20px",
              height: "100vh",
            }}
          >
            <Grid
              item
              xs={10}
              lg={5}
              sx={{
                alignContent: "center",
              }}
            >
              <form
                style={{
                  border: "2px solid white",
                  //   backgroundColor: "white",
                  margin: "20px",
                  padding: "20px",
                  height: "480px",
                  borderRadius: "50px",
                }}
                className="shadow-lg"
                onSubmit={submitHandler}
              >
                <Typography
                  sx={{ color: "white", textAlign: "center" }}
                  variant="h2"
                  gutterBottom
                >
                  Login
                </Typography>
                <TextField
                  id="email_field"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  focused
                  InputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />

                <TextField
                  id="password_field"
                  label="Password"
                  type="password"
                  focused
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  InputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />

                <Link
                  component={RouterLink}
                  to="/password/forgot"
                  variant="body2"
                  className="float-right mb-4"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Forgot Password?
                </Link>
                <Button
                  id="login_button"
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  className="py-3"
                  sx={{ borderRadius: "20px" }}
                >
                  LOGIN
                </Button>
                <Link
                  component={RouterLink}
                  to="/register"
                  variant="body2"
                  style={{ textDecoration: "none", color: "white" }}
                  className="float-right mt-3"
                >
                  New User?
                </Link>
              </form>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;
