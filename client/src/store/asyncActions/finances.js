import axios from "axios";
import {addFinanceAction, addFinancesAction} from "../financesReducer";

export const fetchFinances = ()=>{
    return (dispatch) =>{
        axios.get("http://localhost:5000/api/finances").then(data=>{
            dispatch(addFinancesAction(data.data))
        });
    }
}

export const fetchFinance = (id)=>{
    return (dispatch) => {
        console.log(`http://localhost:5000/api/finances/${id}`);
        axios.get(`http://localhost:5000/api/finances/${id}`).then(data=>{
            dispatch(addFinanceAction(data.data));
        })
    }
}