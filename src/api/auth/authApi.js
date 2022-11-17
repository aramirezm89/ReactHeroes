import axios from "axios";

export const userLoogin = async (usuario) => {
  const url = `${process.env.REACT_APP_BASE_URL}/auth/login`;
  const response = await axios.post(url, usuario);

  return response;
};
