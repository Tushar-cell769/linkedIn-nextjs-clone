import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const profileModal = atom({
  key: "profileModal",
  default: false,
});

export const modalTypeState = atom({
  key: "modalTypeState",
  default: "dropIn",
});

export const editModalTypeState = atom({
  key: "editModalTypeState",
  default: "",
});
