import axiosInstance from "../../axiosInstance";

const getPostsAPI = async () => {
  const response = await axiosInstance.get("/posts");
  if (response?.length > 0) {
    return response;
  }
  return [];
};

const getPostDetailAPI = async (id) => {
  const post = await axiosInstance.get(`/posts/${id}`);
  let user;
  console.log(post);
  if (post) {
    user = await axiosInstance.get(`/users/${post.userId}`);
    if (user) {
      return { ...post, user };
    }
    return post;
  }
  return {};
};

export { getPostsAPI, getPostDetailAPI };
