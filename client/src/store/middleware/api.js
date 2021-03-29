import axios from "axios";

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.metaData?.api?.url) {
    return handleApiAction(action, dispatch);
  }
};

const handleApiAction = (action, dispatch) => {
  return apiRequest(action, dispatch);
};

const apiRequest = async (action, dispatch) => {
  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    headers,
  } = action.metaData.api;
  initializeAxios();
  const timestamp = Date.now();
  try {
    const response = await axios({
      url,
      method,
      headers,
      [getDataKey(method)]: data,
    });
    const actionData = onSuccess(response.data);
    dispatch({
      ...actionData,
      meta: { timestamp },
    });
    return actionData.payload;
  } catch (exception) {
    onFailure(exception);
  }
};

const getDataKey = (method) => {
  return ["GET"].includes(method) ? "params" : "data";
};

const initializeAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
  axios.defaults.headers.common["Content-Type"] = "application/json";
};

export default apiMiddleware;
