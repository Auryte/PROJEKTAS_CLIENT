import axios from 'axios';
import { domain } from '../config/domain';

export const updateProject = async (seoUrl, formData) => {
  try {
    await axios.patch(`${domain}/projects/${seoUrl}`, formData, {
      header: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
export const updateArticle = async (seoUrl, formData) => {
  try {
    await axios.patch(`${domain}/articles/${seoUrl}`, formData, {
      header: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
export const updateUser = async (id, formData) => {
  try {
    await axios.patch(`${domain}/auth/${id}`, formData);
  } catch (err) {
    throw new Error(err.message);
  }
};
const API = {
  updateProject,
  updateArticle,
  updateUser
};

export default API;
