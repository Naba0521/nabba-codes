import axios from "axios";

// console.log(process.env.NEXT_PUBLIC_API, "api ");

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    "Content-Type": "application/json",
  },
});