import axios from "axios";
import { BASE_URL } from "../utils/constants/constatnts";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
