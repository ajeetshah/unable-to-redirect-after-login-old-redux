import API from "../../utils/api";

export const login = (email, pass) => {
  return (dispatch) => {
    console.log(API);
    API.login(email, pass, (res) => {
      console.log("result", res.data);
      dispatch({
        type: "LOGIN",
        payload: {
          email: email,
          token: res.data.id,
          userId: res.data.userId,
        },
      });
    });
  };
  /* return{
        type:'LOGIN',
        payload:{email,pass}
    }*/
};

export const register = (email, pass) => {
  return {
    type: "REGISTER",
    payload: { email, pass },
  };
};
