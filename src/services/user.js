import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const user = await axios.get(`${url}/users`)
  return user;
}

export const getUserDetail = async (id) => {
  const user = await axios.get(`${url}/users/${id}`)
  return user;
}

export const getUserPosts = async (id) => {
  const userPosts = await axios.get(`${url}/users/${id}/posts`)
  return userPosts;
}

export const getUserAlbums = async (id) => {
  const userAlbums = await axios.get(`${url}/users/${id}/albums`)
  return userAlbums;

}