
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTM4YTczODZlY2JlNWI5M2E4ODRiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTgwNzY2MSwiZXhwIjoxNjQwMDY2ODYxfQ.gZcVOMaAj_N9aRs4iEtSJPtBod86iDC7TZ58_4UiMqM"
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});