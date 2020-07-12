import $axios from "./axios";

export const post = {
  getAll(params = {}) {
    return $axios.get("/posts", { params });
  },
  getPost(id = ''){
      return $axios.get("/posts/" + id);
  }
};
