import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";
import {
  TextField,
  Button,
  Avatar,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <MetaData title={"Register User"} />

      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "black",
              border: "2px solid white",
              borderRadius: "20px",
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Register
            </Typography>

            <form onSubmit={submitHandler} encType="multipart/form-data">
              <TextField
                label="Name"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                fullWidth
                margin="normal"
                focused
              />
              <TextField
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                fullWidth
                focused
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                fullWidth
                focused
                margin="normal"
              />
              <div
                style={{
                  margin: "20px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Avatar Preview"
                  src={avatarPreview}
                  style={{
                    marginRight: "10px",
                    border: "2px white solid",
                    height: "100px",
                    width: "100px",
                  }}
                />
                <div>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={onChange}
                    style={{ display: "none" }}
                    id="avatar-upload"
                  />
                  <label htmlFor="avatar-upload">
                    <Button
                      component="span"
                      variant="outlined"
                      startIcon={<CloudUpload />}
                    >
                      Choose Avatar
                    </Button>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                fullWidth
                style={{ margin: "20px 0" }}
              >
                {loading ? <CircularProgress size={24} /> : "REGISTER"}
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
