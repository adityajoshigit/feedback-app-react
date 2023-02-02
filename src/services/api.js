import feedbacks from "../data/feedbackData";

const start = Date.now();
let millis = 0;
setInterval(() => {
  millis = Math.floor((Date.now() - start) / 1000);
}, 2000);

const isLive = false;
const CONTENT_TYPE = 'application/json';
const BASE_URL = 'http://localhost:5000/feedbackData';

let staticFeedbacks = feedbacks.map(e => e);

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

const staticOps = {
  readAll : async function () {
    console.log(staticFeedbacks);
    return staticFeedbacks;
  },
  add : async function(feedback) {
    const id = Math.floor(Math.random() * 10245) + Math.floor(Math.random() * 2411) + millis;
    const newElem = {
      id, ...feedback
    };
    staticFeedbacks.push(newElem);
    return newElem;
  },
  update : async function(feedback) {
    staticFeedbacks = staticFeedbacks.map(f => {
      if(f.id === feedback.id) {
        return feedback;
      } else {
        return f;
      }
    });
    return feedback;
  },
  delete : async function(feedbackId) {
    staticFeedbacks = staticFeedbacks.filter(f => f.id !== feedbackId);
    return true;
  },
};

const handler = isLive ? feedbackAPIOps : staticOps ;

const getAll = handler.readAll;
const postFeedback = handler.add;
const putFeedback = handler.update;
const deleteFeedback = handler.delete;

export { 
  BASE_URL, 
  CONTENT_TYPE, 
  isLive,
  reqData, 
  apiCallout,
  getAll,
  postFeedback,
  putFeedback,
  deleteFeedback
};