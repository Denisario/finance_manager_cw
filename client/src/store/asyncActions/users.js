import axios from "axios";
import {logInAction, RegisterAction} from "../userReducer";

export const logIn = (data)=>{
    return (dispatch) =>{
        console.log(data);
        axios.post("http://localhost:5000/api/login",{data}).then(data=>{
            dispatch(logInAction(data.data));
        })
    }
}

export const register = (data)=> {
    return (dispatch) => {
        console.log(data);
        axios.post("http://localhost:5000/api/register", {data}).then(data => {
            dispatch(RegisterAction());
        })
    }
}