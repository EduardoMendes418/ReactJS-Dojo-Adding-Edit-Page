import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY2Mzg2ZDVmZTQ1YmU2NGVlM2E1MDkiLCJpYXQiOjE2ODQ0MjA3MjN9.I5sYoBPRcclK2nP-5Dlp5DtdF2lK1PBzUnKO_AAkKio",
  },
});
