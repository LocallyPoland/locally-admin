import _axios from "./_axios";

export const loginRequest = (data) => {
  return _axios.post("/login", data).catch((e) => e.response);
};

export const fetchOrders = (aToken) => {
  return _axios.get("/order", {
    headers: {
      Authorization: `Bearer ${aToken}`,
    },
  });
};

export const fetchSettings = (aToken) => {
  return _axios.get("/settings", {
    headers: {
      Authorization: `Bearer ${aToken}`,
    },
  });
};
export const patchSettings = (aToken) => {
  return _axios.patch("/settings", {
    headers: {
      Authorization: `Bearer ${aToken}`,
    },
  });
};

export const fetchStats = (aToken) => {
  return _axios.get("/order/stats", {
    headers: {
      Authorization: `Bearer ${aToken}`,
    },
  });
};

export const fetchSingleOrder = (id) => _axios.get(`/order/${id}`);
