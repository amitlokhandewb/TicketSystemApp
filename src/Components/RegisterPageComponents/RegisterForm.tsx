import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterFormData, RegisterFormErrors } from "../../Model/LoginModel";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  reportingperson1: string;
  reportingperson2: string;
}

interface FormErrors {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  password?: string;
  role?: string;
  reportingperson1?: string;
  reportingperson2?: string;
}

function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    role: 0,
    reportingperson1: 0,
    reportingperson2: 0,
  });

  const [fieldErrors, setFieldErrors] = useState<RegisterFormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email address";
  };

  const validatePassword = (password: string): string => {
    return password.length >= 6 ? "" : "Password must be at least 6 characters";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "email") {
      error = validateEmail(value);
    } else if (name === "password") {
      error = validatePassword(value);
    }
    setFieldErrors({ ...fieldErrors, [name]: error });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    let error = "";
    if (name === "role" && !value) {
      error = "Role is required";
    } else if (name === "reportingperson1" && !value) {
      error = "Reporting Person 1 is required";
    } else if (name === "reportingperson2" && !value) {
      error = "Reporting Person 2 is required";
    }
    setFieldErrors({ ...fieldErrors, [name]: error });
  };
  const validateFields = () => {
    let errors: FormErrors = {};
    if (!formData.firstname) errors.firstname = "First name is required";
    if (!formData.lastname) errors.lastname = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.role) errors.role = "Role is required";
    if (!formData.reportingperson1)
      errors.reportingperson1 = "Reporting Person 1 is required";
    if (!formData.reportingperson2)
      errors.reportingperson2 = "Reporting Person 2 is required";

    setFieldErrors(errors);
    return Object.keys(errors).every(
      (key) => !errors[key as keyof FormErrors]
    );
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          alert("Account Created  successfully!");
          console.log(formData)
        }, 2000);
      }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoComplete="off"
            id="firstname"
            label="First Name"
            name="firstname"
            autoFocus
            error={!!fieldErrors.firstname}
            helperText={fieldErrors.firstname}
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoComplete="off"
            id="lastname"
            label="Last Name"
            name="lastname"
            error={!!fieldErrors.lastname}
            helperText={fieldErrors.lastname}
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoComplete="off"
            id="phone"
            label="Phone"
            name="phone"
            error={!!fieldErrors.phone}
            helperText={fieldErrors.phone}
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoComplete="off"
            id="email"
            label="Email Address"
            name="email"
            error={!!fieldErrors.email}
            helperText={fieldErrors.email}
            value={formData.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth error={!!fieldErrors.role}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="role"
              value={formData.role.toString()}
              onChange={handleSelectChange}
              label="Role"
            >
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={2}>ER</MenuItem>
              <MenuItem value={3}>Employee</MenuItem>
            </Select>
            {fieldErrors.role && (
              <p style={{ color: "red" }}>{fieldErrors.role}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth error={!!fieldErrors.reportingperson1}>
            <InputLabel id="reportingperson1-label">
              Reporting Person 1
            </InputLabel>
            <Select
              labelId="reportingperson1-label"
              id="reportingperson1"
              name="reportingperson1"
              value={formData.reportingperson1.toString()}
              onChange={handleSelectChange}
              label="Reporting Person 1"
            >
              <MenuItem value={1}>abc</MenuItem>
              <MenuItem value={2}>def</MenuItem>
              <MenuItem value={3}>ijk</MenuItem>
            </Select>
            {fieldErrors.reportingperson1 && (
              <p style={{ color: "red" }}>{fieldErrors.reportingperson1}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={5}>
          <FormControl fullWidth error={!!fieldErrors.reportingperson2}>
            <InputLabel id="reportingperson2-label">
              Reporting Person 2
            </InputLabel>
            <Select
              labelId="reportingperson2-label"
              id="reportingperson2"
              name="reportingperson2"
              value={formData.reportingperson2.toString()}
              onChange={handleSelectChange}
              label="Reporting Person 2"
            >
              <MenuItem value={1}>abc</MenuItem>
              <MenuItem value={2}>def</MenuItem>
              <MenuItem value={3}>ijk</MenuItem>
            </Select>
            {fieldErrors.reportingperson2 && (
              <p style={{ color: "red" }}>{fieldErrors.reportingperson2}</p>
            )}
          </FormControl>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Sign Up"}
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="/forgot-password">Forgot password?</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegisterForm;
