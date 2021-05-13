import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import Categories from "./Categories";
import Income from "../components/Income";
import {fetchIncome} from "../store/asyncActions/income";
import AddCategoryModal from "../components/AddCategoryModal";

const Profile = (props)=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const addMoneyModal = useSelector(state=>state.modals.addMoneyModal);
    const addCategoryModal = useSelector(state=>state.modals.addCategoryModal);
    const income = useSelector(state => state.income.fetchItems);
    useEffect(()=>{
        dispatch({type: "GET_USER"});
        dispatch(fetchIncome());
        return ()=>{
            dispatch({type: "CLEAR_INCOME"});
        }
    }, [dispatch]);

    const logout =(e)=>{
        e.preventDefault();
        localStorage.clear();
        history.push("/");
    }



    const showAddMoneyModal = (e)=>{
        e.preventDefault();
        dispatch({type:"SHOW_ADD_MONEY_MODAL"})
    }

    const showAddCategoryModal = (e)=>{
        e.preventDefault();
        dispatch({type:"SHOW_CATEGORY_MODAL"})
    }

    return <Container>
        <Row>
            <div>Welcome {localStorage.getItem("username")}</div>
            <Button onClick={()=>history.push("/finances")}>Finances</Button>
            <Button onClick={(e)=>showAddMoneyModal(e)}>Add money</Button>
            <Button onClick={(e)=>showAddCategoryModal(e)}>Add Category</Button>
            <Button onClick={(e)=>logout(e)}>Log out</Button>
            <Categories></Categories>
            <Income show={addMoneyModal} onHide={()=> dispatch({type:"SHOW_ADD_MONEY_MODAL"})}></Income>
            <AddCategoryModal
                show={addCategoryModal}
                onHide={()=>dispatch({type:"SHOW_CATEGORY_MODAL"})}
            />
        </Row>
        <Row>
            <Col>Income</Col>
        </Row>
        {
            income.map((el,id)=>{
                return <Row>{el.sum} {el.category.name}</Row>
            })
        }
    </Container>
}

export default Profile;