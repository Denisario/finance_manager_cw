import axios from "axios";
import {addIncomes} from "../incomeReducer";

export const fetchIncome = ()=>{
    return (dispatch) =>{
        axios.get("http://localhost:5000/api/income").then(data=>{
            dispatch(addIncomes(data.data))
        });
    }
}