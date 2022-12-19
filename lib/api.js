import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const createUser = async (loading, name, email, password) => {
  loading(true);
  await api.post("users", {
    name: name,
    email: email,
    password: password,
  });
};

export const createSession = async (email, password) => {
  return api.post("auth", {
    email: email,
    password: password,
  });
};
