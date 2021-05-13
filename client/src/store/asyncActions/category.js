import axios from "axios";
import {addCategoriesAction} from "../categoriesReducer";

export const fetchCategories = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:5000/api/categories").then(data=>{
            dispatch(addCategoriesAction(data.data));
        })
    }
}

