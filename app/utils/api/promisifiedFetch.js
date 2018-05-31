import fetchJson from './fetchJson';

const handleSuccess = (response, resolveFunc) => {
  response.json().then(resolveFunc);
};

const handleError = (response, rejectFunc) => {
  response.json().then(rejectFunc);
};

// Wraps the fetch in a Promise to control the resolve/reject callbacks
const promisifiedFetch = (input, init) => new Promise((resolve, reject) => {
  fetch(input).then((response) => {
    // fetchJson(input, init).then((response) => {
    if (response.ok) {
      handleSuccess(response, resolve);
    } else {
      handleError(response, reject);
    }
  });
});

export default promisifiedFetch;

// const handleSuccess = (response, resolveFunc) => {
//   const responseContentType = response.headers.get("Content-Type");
//   if (
//     responseContentType &&
//     responseContentType.indexOf("application/json") !== -1
//   ) {
//     response.json().then(resolveFunc);
//   } else {
//     resolveFunc();
//   }
// };

// const handleError = (response, rejectFunc) => {
//   const responseContentType = response.headers.get("Content-Type");
//   if (responseContentType.indexOf("text/plain") !== -1) {
//     response.text().then(text => rejectFunc({ message: text }));
//   } else if (responseContentType.indexOf("application/json") !== -1) {
//     response.json().then(rejectFunc);
//   } else {
//     rejectFunc({ message: "An error occured" });
//   }
// };
