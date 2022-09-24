import api from "./api";

const Userservice = {
  Signup: (user) => {
    return api.post("/user", user);
  },
  Login: (user) => {
    return api.post("/user/authenticate", user);
  },

  getAllByUser: (data) => {
    return api.get("/reservationAllByUser", data);
  },

  delete: async (reservationId) => {
    
    return api.delete(`/reservationAllByUser/?reservationId=${reservationId}`);
  },

  update: async (user) => {
    return await api.put("/reservationAllByUser", user);
  },
};

export default Userservice;
