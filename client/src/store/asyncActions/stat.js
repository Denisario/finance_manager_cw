import axios from "axios";
import {addIncomeStatAction, addStatAction} from "../statReducer";

export const fetchFinanceStat = (startDate, finishDate)=>{
    return (dispatch) =>{
        let url = `http://localhost:5000/api/finances/stat?id=${1}`;
        if(startDate){
            url+=`&&startDate=${new Date(startDate).toISOString().replace('T',' ').replace('Z','')};`
        }

        if(finishDate){
            url+=`&&finishDate=${new Date(finishDate).toISOString().replace('T',' ').replace('Z','')}`
        }
        axios.get(url,{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }}).then(data=>{
            dispatch(addStatAction(data.data));
        })
    }
}

export const fetchIncomeStat = (startDate, finishDate)=>{
    return (dispatch) =>{
        let url = `http://localhost:5000/api/income/stat?id=${1}`;
        if(startDate){
            url+=`&&startDate=${new Date(startDate).toISOString().replace('T',' ').replace('Z','')};`
        }

        if(finishDate){
            url+=`&&finishDate=${new Date(finishDate).toISOString().replace('T',' ').replace('Z','')}`
        }

        axios.get(url,{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }}).then(data=>{
            dispatch(addIncomeStatAction(data.data));
        })
    }
}