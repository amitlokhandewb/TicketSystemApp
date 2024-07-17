import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { LoginUtilities } from "../../Utilities/LoginUtilities";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

function LoginForm() {
  const loginUtility = LoginUtilities();
  const { handleSubmit, fieldErrors, formData, handleInputChange, loading } =
    loginUtility;
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        autoComplete="off"
        id="email"
        label="Email Address"
        name="email"
        autoFocus
        error={!!fieldErrors.email}
        helperText={fieldErrors.email}
        value={formData.email}
        onChange={handleInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="off"
        error={!!fieldErrors.password}
        helperText={fieldErrors.password}
        value={formData.password}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Sign In"}
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="/forgot-password">Forgot password?</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
