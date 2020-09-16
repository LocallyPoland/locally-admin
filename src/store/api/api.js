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
export const patchSettings = (aToken, data) => {
  return _axios.patch("/settings", data, {
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
export const fetchUserStats = (aToken) => {
  return _axios.get("/users", {
    headers: {
      Authorization: `Bearer ${aToken}`,
    },
  });
};

export const fetchSingleOrder = (id, aToken) => {
  return _axios.get(`/order/${id}`, {
    headers: {
      Authorization: `Bearer ${aToken}`,
    },
  });
};

export const fetchFilteredOrders = (sortType, searchValue) => {
  let baseUrl = "/ended-orders?";
  if (sortType) {
    baseUrl += `sort=${sortType}`;
  }
  if (searchValue) {
    baseUrl += `search=${searchValue}&`;
  }
  return _axios.get(baseUrl);
};
