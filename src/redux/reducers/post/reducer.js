import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostDetailAPI, getPostsAPI } from "../../../api/post";

const initialState = {
  posts: [],
  postDetail: {},
  isLoading: true,
};

export const getPosts = createAsyncThunk("post/getPosts", async (request) => {
  const { callback } = request;
  const response = await getPostsAPI();
  if (callback) {
    callback();
  }
  return response;
});

export const getPostDetail = createAsyncThunk(
  "post/getPostDetail",
  async (request) => {
    const { id, callback } = request;
    const response = await getPostDetailAPI(id);
    if (callback) {
      callback();
    }
    return response;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    clearPostDetail: (state, action) => {
      state.postDetail = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPostDetail.fulfilled, (state, action) => {
      state.postDetail = action.payload;
    });
  },
});

export const { setLoader, clearPostDetail } = postSlice.actions;
export default postSlice.reducer;
