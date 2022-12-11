import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "../userSlices/contentSlice";
import userSlice from "../userSlices/userSlices";

export default configureStore({
  reducer: {
    user: userSlice,
    content: contentSlice,
  },
});
