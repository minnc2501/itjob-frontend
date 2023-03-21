import axios from "axios";
// import setAuthToken from "../../utils/setAuthToken";
// import jwtDecode from "jwt-decode";
import {SERVER} from "../constants/config";

export const fetchData = (callback) => {
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("jwtToken"),
      fingerprint: "123456",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
      
    // const username = decoded.username
    // const user_id = decoded.user_id  
    return dispatch => {
      axios
        .get(`${SERVER}/api/job_it`, {
          headers: headers,
        //   params: input,
        })
        .then(res => {
          callback(res.data)
        })
        .catch(err => {
          // console.log(large)
          dispatch({
            // type: GET_ERRORS,
            payload: err.response.data.detail
          });
        });
    }
  }