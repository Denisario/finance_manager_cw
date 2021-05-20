import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import React, {useEffect, useState} from "react";
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

    const [tabKey, setTabKey] = useState("categories");
    useEffect(()=>{
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
            <Income show={addMoneyModal} onHide={()=> dispatch({type:"SHOW_ADD_MONEY_MODAL"})}></Income>
            <AddCategoryModal
                show={addCategoryModal}
                onHide={()=>dispatch({type:"SHOW_CATEGORY_MODAL"})}
            />
        </Row>

        <Tabs activeKey={tabKey} onSelect={(k)=>setTabKey(k)}>
            <Tab eventKey="income" title="Income">
                <Row>
                    <Col>Income</Col>
                </Row>
                {
                    income.map((el,id)=>{
                        return <Row><a href={`/income/${el.id}`}>{el.header}</a></Row>
                    })
                }
            </Tab>
            <Tab eventKey="categories" title="Categories">
                <Categories></Categories>
            </Tab>
        </Tabs>
    </Container>
}

export default Profile;