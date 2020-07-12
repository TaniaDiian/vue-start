import $axios from "./axios";

export const comments = {
  getCommentByPostId(postId = null) {
    return $axios.get("/comments", {params: {postId} });
  },
};