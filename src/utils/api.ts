import axios from "axios";

const host = "http://localhost:8080";

const API = {
  login: (email, pass, success) => {
    fakeLogin().then((res) => {
      success(res);
    });

    // axios
    //   .post(`${host}/api/users/login`, { email: email, password: pass })
    //   .then((res) => {
    //     success(res);
    //   });
  },
};

export default API;

function fakeLogin() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        data: {
          id: 1,
          userId: 1,
        },
      });
    }, 8000);
  });
}
