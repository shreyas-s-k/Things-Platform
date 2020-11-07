<<<<<<< HEAD
import axios from 'axios'
import { domain } from '../../config/domain.js'
export const userLogin = (user) =>{
    const url = domain.localhost+'auth/token/login/'
    return(dispatch,getState) => {
        dispatch({type:'LOADING',action:true})
        axios(
            {
                method:'post',
                url:url,
                data:user
            }).then(res =>{
            console.log(res);
            localStorage.setItem('token',res.data.auth_token)
            dispatch({type:'AUTH_SUCCESS',user}) 
        }).catch(err=>{
            if(!err.response){
                console.log("NET_ERROR");
                dispatch({type:'NET_ERR',err:{net_err:'Network Error'}})
            }
            console.log(err.response.data.status);
            console.log(err.response.data);
            dispatch({type:'AUTH_FAILED',err})
        })
        
    }
}

export const userLogout = () =>{
    const url = domain.localhost+'auth/token/logout/'
    return(dispatch,getState)=>{
        axios(
            {
                method:'post',
                url:url,
                data:null,
                headers:{
                    Authorization:'Token '+localStorage.getItem('token')
                }
            }).then(res=>{
                localStorage.clear();
                dispatch({type:'LOGOUT_SUCCESS'});
            }).catch(err=>{
                console.log(err);
            });
    }
}
=======
import axios from "axios";
import { domain } from "../../config/domain.js";
export const userLogin = (user) => {
  const url = process.env.REACT_APP_API_URL + "/auth/token/login/";
  return (dispatch, getState) => {
    axios({
      method: "post",
      url: url,
      data: user,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.auth_token);
        dispatch({ type: "AUTH_SUCCESS", user });
      })
      .catch((err) => {
        console.log(err.response.data.code);
        console.log(err.response.data);
        dispatch({ type: "AUTH_FAILED", err });
      });
  };
};
>>>>>>> dc96b79a210fc6fff310d24eb8a7fad474773e08

export const userLogout = () => {
  const url = process.env.REACT_APP_API_URL + "/auth/token/logout/";
  return (dispatch, getState) => {
    axios({
      method: "post",
      url: url,
      data: null,
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        localStorage.clear();
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

<<<<<<< HEAD
export const userSignup = (user) =>{
    const url = domain.localhost+'auth/users/'
    return(dispatch,getState) =>{
        dispatch({type:'LOADING',action:true})
        axios(
            {
                method:'post',
                url:url,
                data:user

            }).then(res =>{
            dispatch({type:'REG_SUCCESS',user})
            //post req to auto login after successful sign-up
            axios(
                {
                    method:'post',
                    url:domain.localhost+'auth/token/login/',
                    data:{email:user.email,password:user.password}
                }).then(res =>{
                console.log(res);
                localStorage.setItem('token',res.data.auth_token)
                dispatch({type:'AUTH_SUCCESS',user}) 
            }).catch(err=>{
                console.log(err.response.data);
                console.log(err.response.data);
                dispatch({type:'AUTH_FAILED',err})
            })
          
           
        }).catch(err=>{
            dispatch({type:'REG_FAILED',err})
=======
export const userSignup = (user) => {
  const url = process.env.REACT_APP_API_URL + "/auth/users/";
  return (dispatch, getState) => {
    axios({
      method: "post",
      url: url,
      data: user,
    })
      .then((res) => {
        dispatch({ type: "REG_SUCCESS", user });
        //post req to auto login after successful sign-up
        axios({
          method: "post",
          url: process.env.REACT_APP_API_URL + "/auth/token/login/",
          data: { email: user.email, password: user.password },
>>>>>>> dc96b79a210fc6fff310d24eb8a7fad474773e08
        })
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.auth_token);
            dispatch({ type: "AUTH_SUCCESS", user });
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err.response.data);
            dispatch({ type: "AUTH_FAILED", err });
          });
      })
      .catch((err) => {
        dispatch({ type: "REG_FAILED", err });
      });
  };
};
