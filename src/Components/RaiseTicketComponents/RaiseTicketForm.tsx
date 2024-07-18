import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import RichTextEditor, { EditorValue } from "react-rte";
import { FieldErrorRaise, RaiseForm } from "../../Model/LoginModel";
import { useParams } from "react-router-dom"; // Assuming you're using react-router for routing
import axios from "axios"; // Assuming you're using axios for API calls
import {
  FetchTicketbyId,
  RaiseTicket,
  UpdateTicket,
} from "../../Services/RaiseTicket";
import { RaiseTicketUtilities } from "../../Utilities/RaiseTicketUtilities";

function RaiseTicketForm() {
  const { id } = useParams<{ id: string }>();
  const raiseUtulity = RaiseTicketUtilities(id || "");
  const {
    handleInputChange,
    handleReset,
    handleSelectChange,
    handleSubmit,
    formData,
    fieldErrors,
    isUpdate,
    value,
    onChange,
  } = raiseUtulity;

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              margin="normal"
              fullWidth
              autoComplete="off"
              id="title"
              label="Title"
              name="title"
              autoFocus
              error={!!fieldErrors.title}
              helperText={fieldErrors.title}
              value={formData.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl
              sx={{ marginTop: 2 }}
              fullWidth
              error={!!fieldErrors.status}
            >
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                name="status"
                value={formData.status.toString()}
                onChange={handleSelectChange}
                label="Status"
              >
                <MenuItem value={1}>Open</MenuItem>
                <MenuItem value={2}>Close</MenuItem>
              </Select>
            </FormControl>
            {fieldErrors.status && (
              <FormHelperText style={{ color: "#D32F2F" }}>
                {fieldErrors.status}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={4}>
            <FormControl
              sx={{ marginTop: 2 }}
              fullWidth
              error={!!fieldErrors.priority}
            >
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                labelId="priority-label"
                id="priority"
                name="priority"
                value={formData.priority.toString()}
                onChange={handleSelectChange}
                label="Priority"
              >
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Medium</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
              {fieldErrors.priority && (
                <FormHelperText style={{ color: "#D32F2F" }}>
                  {fieldErrors.priority}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <RichTextEditor value={value} onChange={onChange}  />
            {fieldErrors.description && (
              <FormHelperText style={{ color: "#D32F2F" }}>
                {fieldErrors.description}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            {isUpdate ? (
              <Button type="submit" variant="contained" color="warning">
                Update
              </Button>
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            )}
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleReset}
              style={{ marginLeft: "10px" }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default RaiseTicketForm;
