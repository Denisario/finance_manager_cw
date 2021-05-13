import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCategories} from "../store/asyncActions/category";

const Categories = ()=>{
    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCategories());
        return dispatch({type: "GET_CATEGORIES"})
    }, [dispatch])

    return (
        <div>
            <div>Categories</div>

            <div>
                {
                    categories.map((el, id)=>{
                        return <div key={id}>{el.id} {el.name}</div>
                    })
                }
            </div>
        </div>
    );


}

export default Categories;