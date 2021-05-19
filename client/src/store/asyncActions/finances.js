import axios from "axios";
import {addFinanceAction, addFinancesAction} from "../financesReducer";

export const fetchFinances = (page,itemsPerPage)=>{
    return (dispatch) =>{
        axios.get(`http://localhost:5000/api/finances?page=${page}&&itemsPerPage=${itemsPerPage}`,{headers: {
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

export const addFinAction = (data)=>{
    return ()=>{
        axios.post("http://localhost:5000/api/finances",
            {name: data.financeHeader,
                categoryId: +data.categoryId,
                finance_item: data.financeItems},{headers: {
                    authorization: "Bearer "+localStorage.getItem("token")
                }})
    }
}

export const editFinanceAction = (id,data)=>{
    return ()=>{
        axios.put(`http://localhost:5000/api/finances/${id}`, {name: data},{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }});
    }
}