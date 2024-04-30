import { create } from "zustand";
import http from "@http";
import { toast } from "react-toastify";

const useAuthStore = create(() => ({
  signin: async (payload) => {
    try {
      const response = await http.post("/auth/login", payload);
      localStorage.setItem("userToken", response?.data?.accessToken);
      toast.success("Welcome!");
      return response?.status;
    } catch (err) {
      console.log(err);
    }
  },
  signup: async (payload) => {
    try {
      const response = await http.post("/auth/register", payload);
      toast.success("You are registered!");
      return response?.status;
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useAuthStore;
