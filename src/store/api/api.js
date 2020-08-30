import _axios from "./_axios";
import axios from "axios";
import _axsios from "./_axios";

export const fetchActiveOrders = () => _axsios.get("/orders");
export const fetchOrdersHistory = () => _axsios.get("/orders");
