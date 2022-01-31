import axios from 'axios';
import { domain } from '../config/domain';

export const createProject = async (formData) => {
  try {
    await axios.post(`${domain}/projects`, formData, {
      header: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
export const createArticle = async (formData) => {
  try {
    await axios.post(`${domain}/articles`, formData, {
      header: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

const API = {
  createProject,
  createArticle
};
export default API;
