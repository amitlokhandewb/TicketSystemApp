import { Box, TextField, Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import {
  ResetPasswordFieldErrors,
  ResetPasswordFormData,
} from "../../Model/LoginModel";
import { ResetPasswordUtilities } from "../../Utilities/ResetPasswordUtilities";
import { useParams } from "react-router-dom";

function ResetPasswordForm() {
  const { id } = useParams<{ id: string }>();
   const resetpasswordutility = ResetPasswordUtilities(id || "");
   const {handleSubmit,fieldErrors,formData,handleInputChange,loading} = resetpasswordutility;

  return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="newPassword"
          label="New Password"
          type="password"
          id="newPassword"
          autoComplete="off"
          error={!!fieldErrors.newPassword}
          helperText={fieldErrors.newPassword}
          value={formData.newPassword}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="off"
          error={!!fieldErrors.confirmPassword}
          helperText={fieldErrors.confirmPassword}
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Reset Password"}
        </Button>
      </Box>
  );
}

export default ResetPasswordForm;
