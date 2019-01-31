/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

import axios from 'axios';

export const getData = () => axios
  .get(`${process.env.REACT_APP_API}/api/vehicle`)
  .then(({ data }) => data.vehicles)
  .catch(e => new Error(e));

export const getDetails = (id) => axios
  .get(`${process.env.REACT_APP_API}/api/vehicle/${id}`)
  .then(({ data }) => data)
  .catch(e => new Error(e));

// const get = (path, callback) => {
//   const req = new XMLHttpRequest();
//   req.open('GET', path);

//   req.onreadystatechange = function() {
//     if(req.readyState === 4) {
//       if(req.status === 200) {
//         callback(JSON.parse(req.response));
//       }
//     }
//   };

// 	req.send();
// }

// export const getData = cb => get(
//   `${process.env.REACT_APP_API}/api/vehicle`,
//   cb
// );

// export const getDetails = (id, cb) => get(
//   `${process.env.REACT_APP_API}/api/vehicle/${id}`,
//   cb
// );
