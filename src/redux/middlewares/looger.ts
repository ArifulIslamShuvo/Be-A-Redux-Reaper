import { Middleware } from "@reduxjs/toolkit";
const logger: Middleware = (store) => (next) => (action) => {
  console.log("Current State", store.getState());
  console.log("Acton", action);

  next(action);
  console.log("Updated State", store.getState());
};
export default logger;
