import axios from "axios";
import {addFinanceAction, addFinancesAction} from "../financesReducer";

export const fetchFinances = ()=>{
    return (dispatch) =>{
        axios.get("http://localhost:5000/api/finances",{headers: {
            authorization: "Bearer "+localStorage.getItem("token")
            }}).then(data=>{
            dispatch(addFinancesAction(data.data))
        });
    }
}

export const fetchFinance = (id)=>{
    return (dispatch) => {
        axios.get(`http://localhost:5000/api/finances/${id}`,{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }}).then(data=>{
            dispatch(addFinanceAction(data.data));
        })
    }
}