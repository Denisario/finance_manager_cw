import axios from "axios";
import {addIncomes} from "../incomeReducer";

export const fetchIncome = ()=>{
    return (dispatch) =>{
        axios.get("http://localhost:5000/api/income",{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }}).then(data=>{
            dispatch(addIncomes(data.data))
        }).then();
    }
}

export const addMoneyAction = (data)=>{
    return ()=>{
        axios.post("http://localhost:5000/api/income", {title: data.title,userId: localStorage.getItem("id"), items:data.incomeItems},{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }});
    }
}