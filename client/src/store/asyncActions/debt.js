import axios from "axios";
import {addDebtAction} from "../debtReducer";

export const fetchDebt = (data)=>{
    return (dispatch)=>{
        axios.post("http://localhost:5000/api/debts", data).then(data=>dispatch(addDebtAction(data.data)));
    }
}