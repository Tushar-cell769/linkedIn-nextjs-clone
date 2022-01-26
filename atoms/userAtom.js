import { atom } from "recoil";

export const handleSingleUserState = atom({
  key: "handleSingleUserState",
  default: false,
});

export const useSSRUserState = atom({
  key: "useSSRUserState",
  default: true,
});
