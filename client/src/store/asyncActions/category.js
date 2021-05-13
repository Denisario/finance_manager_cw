import axios from "axios";
import {addCategoriesAction} from "../categoriesReducer";

export const fetchCategories = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:5000/api/categories",{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }}).then(data=>{
            dispatch(addCategoriesAction(data.data));
        })
    }
}

