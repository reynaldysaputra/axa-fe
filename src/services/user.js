import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const user = await axios.get(`${url}/users`);
  return user;
};

export const getUserDetail = async (idUser) => {
  const user = await axios.get(`${url}/users/${idUser}`);
  return user;
};

export const getUserPosts = async (idUser) => {
  const userPosts = await axios.get(`${url}/users/${idUser}/posts`);
  return userPosts;
};

export const getUserAlbums = async (idUser) => {
  const userAlbums = await axios.get(`${url}/users/${idUser}/albums`);
  return userAlbums;
};

export const getUserPost = async (idUser, idPost) => {
  const userPost = await axios.get(`${url}/users/${idUser}/posts?id=${idPost}`);
  return userPost;
};

export const getUserCommentsOfPost = async (idPost) => {
  const userComments = await axios.get(`${url}/posts/${idPost}/comments`);
  return userComments;
};

export const getUserPhotosOfAlbums = async (idAlbum) => {
  const userPhotos = await axios.get(`${url}/albums/${idAlbum}/photos`);
  return userPhotos;
};
