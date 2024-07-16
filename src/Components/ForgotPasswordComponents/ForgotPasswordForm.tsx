import { Box, TextField, Button, CircularProgress, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginFieldErrors } from "../../Model/LoginModel";
import { ForgotPasswordUtilities } from "../../Utilities/ForgotPasswordUtilities";

function ForgotPasswordForm() {
  const forgotpasswordUtility = ForgotPasswordUtilities();
  const { handleSubmit, fieldErrors, email, handleInputChange, loading } =
    forgotpasswordUtility;
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
        value={email}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Verify Email"}
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="/forgotpassword">Back to Login</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ForgotPasswordForm;
