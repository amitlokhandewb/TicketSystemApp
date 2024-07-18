import { useState, useEffect } from "react";
import RichTextEditor, { EditorValue } from "react-rte";
import { RaiseForm, FieldErrorRaise } from "../Model/LoginModel";
import {
  FetchTicketbyId,
  UpdateTicket,
  RaiseTicket,
} from "../Services/RaiseTicket";

export const RaiseTicketUtilities = (id: string) => {
  const [value, setValue] = useState<EditorValue>(
    RichTextEditor.createEmptyValue()
  );
  const [formData, setFormData] = useState<RaiseForm>({
    title: "",
    status: 0,
    priority: 0,
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrorRaise>({
    title: "",
    status: "",
    priority: "",
    description: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const fetchBYId = async (ticketid: string) => {
    const response = await FetchTicketbyId(ticketid);
    setFormData({
      title: response.title,
      status: response.status,
      priority: response.priority,
    });
    setValue(
      RichTextEditor.createValueFromString(response.description, "html")
    );
  };
  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      fetchBYId(id);
    }
    console.log(typeof id);
  }, [id]);

  const onChange = (value: EditorValue) => {
    setValue(value);
    let error = "";
    if (value.toString("html").trim() === "<p><br></p>") {
      error = "Description is required";
    }
    setFieldErrors((prevFieldErrors) => ({
      ...prevFieldErrors,
      description: error,
    }));
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    let error = "";
    if (name === "title" && value === "") {
      error = "Title is required";
    }
    setFieldErrors((prevFieldErrors) => ({
      ...prevFieldErrors,
      [name]: error,
    }));
  };

  const handleSelectChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    let error = "";
    if (name === "priority" && !value) {
      error = "Please select a priority";
    } else if (name === "status" && !value) {
      error = "Please select a status";
    }
    setFieldErrors((prevFieldErrors) => ({
      ...prevFieldErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    let errors = {
      title: "",
      status: "",
      priority: "",
      description: "",
    };

    if (!formData.title) errors.title = "Title is required";
    if (!formData.status) errors.status = "Status is required";
    if (!formData.priority) errors.priority = "Priority is required";
    if (value.toString("html").trim() === "<p><br></p>") {
      errors.description = "Description is required";
    }

    setFieldErrors(errors);
    return Object.keys(errors).every(
      (key) => !errors[key as keyof FieldErrorRaise]
    );
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm()) {
      if (isUpdate) {
        let updateddata = { ...formData, description: value };
        if (id) {
          UpdateTicket(updateddata, id);
        }
      } else {
        let data = { ...formData, description: value };
        RaiseTicket(data);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      title: "",
      status: 0,
      priority: 0,
    });
    setValue(RichTextEditor.createEmptyValue());
    setFieldErrors({
      title: "",
      status: "",
      priority: "",
      description: "",
    });
  };
  return {
    handleInputChange,
    handleReset,
    handleSelectChange,
    handleSubmit,
    formData,
    fieldErrors,
    isUpdate,
    value,
    onChange
  };
};
