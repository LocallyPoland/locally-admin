import _axios from "./_axios";

export const loginRequest = (data) => {
  return _axios.post("/login", data).catch((e) => e.response);
};

export const fetchActiveOrder = (token) => _axios.get("/active-orders");

export const fetchSingleOrder = (id) => _axios.get(`/new/${id}`);
