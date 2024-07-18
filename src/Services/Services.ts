import axios from "axios";
import { API_URL } from "../APIURL";

export const LoginAsync = async (data: any) => {
    try {
      const response = axios.post(`${API_URL}login/`, data).then((res) => {
        return res.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  export const RegisterAsync = async (data: any) => {
    try {
      const response = axios.post(`${API_URL}Register/`, data).then((res) => {
        return res.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  export const VerifyEmailAsync = async (data: any) => {
    try {
      const response = axios.post(`${API_URL}Register/`, data).then((res) => {
        return res.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  export const ResetPasswordAsync = async (data: any, id : string) => {
    try {
      const response = axios.put(`${API_URL}Register/`, data).then((res) => {
        return res.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };