import axios from "axios";
import { API_URL } from "../APIURL";

export const FetchTicketbyId = async (id: string) => {
  try {
    const response = axios.get(`${API_URL}ticket/${id}`).then((res) => {
      return res.data;
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const RaiseTicket = async (data: any) => {
    try {
      const response = axios.post(`${API_URL}raiseticket/`, data).then((res) => {
        return res.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  export const UpdateTicket = async (data: any, id: string) => {
    try {
      const response = axios.post(`${API_URL}updateticket/${id}`, data).then((res) => {
        return res.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
