import axios from "axios"


export const axiosInstance = axios.create({
  baseURL: "https://goal-project-gw6n.onrender.com/goals",
});