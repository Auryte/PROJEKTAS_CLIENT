import axios from 'axios';
import { domain } from '../config/domain';

const getProjects = async () => {
  try {
    const { data } = await axios.get(`${domain}/projects`);
    return data.projectsFromDb;
  } catch (err) {
    throw new Error(err.message);
  }
};
const getTwoProjects = async () => {
  try {
    const { data } = await axios.get(`${domain}/projects/2`);
    return data.twoProjectsFromDb;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getProjectBySeoUrl = async (seoUrl) => {
  try {
    const { data } = await axios.get(`${domain}/projects/${seoUrl}`);
    return data.project;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getArticles = async () => {
  try {
    const { data } = await axios.get(`${domain}/articles`);
    return data.articlesFromDb;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getTwoArticles = async () => {
  try {
    const { data } = await axios.get(`${domain}/articles/2`);
    return data.articlesFromDb;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getArticleBySeoUrl = async (seoUrl) => {
  try {
    const { data } = await axios.get(`${domain}/articles/${seoUrl}`);
    return data.article;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUsers = async () => {
  try {
    const { data } = await axios.get(`${domain}/auth/users`);
    return data.usersFromDb;
  } catch (err) {
    throw new Error(err.message);
  }
};
const APIget = {
  getProjects,
  getTwoProjects,
  getProjectBySeoUrl,
  getArticles,
  getTwoArticles,
  getArticleBySeoUrl,
  getUsers
};

export default APIget;
