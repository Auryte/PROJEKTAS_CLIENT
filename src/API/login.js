import axios from 'axios';
import { formatResponseErrorMsg } from '../utils/errorFormat';
import { domain } from '../config/domain';

const login = async (body) => {
  try {
    const { data } = await axios.post(`${domain}/auth/login`, body);
    const { token, ...appData } = data;
    localStorage.token = token;
    return appData;
  } catch (err) {
    throw formatResponseErrorMsg(err);
  }
};

const API = {
  login
};
export default API;
