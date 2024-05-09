import { Slide, toast } from "react-toastify";

export function notifyError({
  message,
  position = "top-right",
  timeClose = 5000,
  hideProgressBar = false,
  cuantity = 1,
}) {
  console.log(message);
  for (let i = 0; i < cuantity; i++) {
    toast.error(typeof message === "string" ? message : message[i], {
      position: position,
      autoClose: timeClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }
}

export function notifySuccess({
  message,
  position = "top-right",
  timeClose = 5000,
  hideProgressBar = false,
  cuantity = 1,
}) {
  for (let i = 0; i < cuantity; i++) {
    toast.success(typeof message === "string" ? message : message[i], {
      position: position,
      autoClose: timeClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }
}

export function notifyInfo({
  message,
  position = "top-right",
  timeClose = 5000,
  hideProgressBar = false,
  cuantity = 1,
}) {
  for (let i = 0; i < cuantity; i++) {
    toast.info(typeof message === "string" ? message : message[i], {
      position: position,
      autoClose: timeClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }
}

export function notifyWarning({
  message,
  position = "top-right",
  timeClose = 5000,
  hideProgressBar = false,
  cuantity = 1,
}) {
  for (let i = 0; i < cuantity; i++) {
    toast.warn(typeof message === "string" ? message : message[i], {
      position: position,
      autoClose: timeClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }
}

export function notifyDone() {
  toast.dismiss();
}
