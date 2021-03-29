import axios from "axios";
import { REDUCER_LABEL as Labels } from "constant";

const header = { berear: "" };

export function logIn(username, password) {
  const url = "https://private-052d6-testapi4528.apiary-mock.com/authenticate";
  return new Promise((resolve, reject) => {
    axios
      .post(url, { username, password })
      .then((response) => {
        resolve(response.data[0]);
      })
      .catch((error) => {
        apiErr(error);
      });
  });
}

export function setUser(user) {
  return {
    type: Labels.setUser,
    payload: user,
  };
}

export function getPosts(userToken) {
  header.berear = userToken;
  return apiAction({
    url: `http://localhost:3000/getposts`,
    onSuccess: function (posts) {
      return {
        type: Labels.setPosts,
        payload: posts,
      };
    },
    onFailure: apiErr,
    headers: header,
  });
}

export function addPost(post) {
  return apiAction({
    url: `http://localhost:3000/addpost`,
    data: post,
    onSuccess: function () {
      return {
        type: Labels.setPosts,
        payload: post,
      };
    },
  });
}

function apiErr(err, callback) {
  callback && callback();
  console.log(err.message);
  return {
    type: "API_ERR",
    payload: err,
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headers = null,
  payload = null,
  type = "API",
}) {
  return {
    type,
    payload,
    metaData: {
      api: {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headers,
      },
    },
  };
}
