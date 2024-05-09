import { guardMsgAxios } from "../common/authErrors/guardsMsgAxios";
import { notifyError } from "../common/notify/notify";
import apiDeveGeorge from "../libs/configAxios";

export const login = async (email, password) => {
  try {
    const response = await apiDeveGeorge.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    notifyError(guardMsgAxios(error));
  }
};
