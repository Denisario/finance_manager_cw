import axios from "axios";
import {addCreditAction} from "../creditReducer";

export const fetchCredit = (data)=>{
    return (dispatch)=>{
        axios.post("http://localhost:5000/api/credits", data).then(data=>dispatch(addCreditAction(data.data)));
    }
}