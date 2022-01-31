import axios from 'axios';
import { domain } from '../config/domain';

export const deleteProject = async (seoUrl) => {
  try {
    await axios.delete(`${domain}/projects/${seoUrl}`);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteArticle = async (id) => {
  try {
    await axios.delete(`${domain}/articles/${id}`);
  } catch (err) {
    throw new Error(err.message);
  }
};
const API = {
  deleteProject,
  deleteArticle
};
export default API;
