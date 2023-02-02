const CONTENT_TYPE = 'application/json';
const BASE_URL = 'http://localhost:5000/feedbackData';

let reqData = {
  url: BASE_URL,
  method: 'POST',
  contentType: CONTENT_TYPE,
  body: null
};

const apiCallout = function({
  method,
  stringifiedBody,
  contentType,
  url
}) {
  let reqParams = {
    method: method,
    headers: {
      'Content-Type': contentType
    },
  };
  if (stringifiedBody) {
    reqParams = {
      ...reqParams, 
      body: stringifiedBody
    };
  }
  return fetch(
    url,
    reqParams
  );
};

const feedbackAPIOps = {
  delete: async function (id) {
    try {
      await apiCallout({ ...reqData, method: 'DELETE', url: (BASE_URL + '/' + id) });
      return true;
    } catch (error) {
      return false;
    }
  },
  add: async function (feedback) {
    const response = (await apiCallout({ ...reqData, stringifiedBody: JSON.stringify(feedback) }));
    const savedFeedback = await response.json();
    return savedFeedback;
  },
  update: async function (feedback) {
    const response = (await apiCallout({ 
      ...reqData, 
      stringifiedBody: JSON.stringify(feedback),
      url: BASE_URL + '/' + feedback.id,
      method: 'PUT'
    }));
    const updatedFeedback = await response.json();
    return updatedFeedback;
  },
  readAll: async function() {
    let dataList = [];
    try {
      const response = (await apiCallout({ ...reqData, method: 'GET' }));
      dataList = await response.json();
    } catch (error) {
      console.log(error);
    }
    return dataList;
  }
};

const getAll = feedbackAPIOps.readAll;
const postFeedback = feedbackAPIOps.add;
const putFeedback = feedbackAPIOps.update;
const deleteFeedback = feedbackAPIOps.delete;


export { 
  BASE_URL, 
  CONTENT_TYPE, 
  reqData, 
  apiCallout,
  getAll,
  postFeedback,
  putFeedback,
  deleteFeedback
};