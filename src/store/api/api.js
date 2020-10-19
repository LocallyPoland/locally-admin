import _axios from "./_axios";

export const loginRequest = (data) => {
  return _axios.post("/login", data, {}).catch((e) => e.response);
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

export const fetchFilteredOrders = (sort, status, from, to, search, aToken) => {
  let baseUrl = "/history?";
  if (search) {
    baseUrl += `search=${search}`;
  } else {
    baseUrl += `sort=${sort}&status=${status}&from=${from}&to=${to}`;
  }
  return _axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${aToken}`,
    },
  });
};

export const patchOrder = (id, status, aToken) => {
  return _axios.patch(
    `/order/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${aToken}`,
      },
    }
  );
};
