import {Button, Container, Form, Modal} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import IncomeItem from "../pages/IncomeItem";
import {addMoneyAction} from "../store/asyncActions/income";

const Income = (props)=>{
    const dispatch = useDispatch();
    const incomeItems = useSelector(state=>state.income);

    const categories = useSelector(state=>state.categories.categories);


    const addIncomeRow = (e)=>{
        e.preventDefault();
        dispatch({type: "ADD_INCOME", payload: incomeItems.incomeItem});
    }

    const deleteIncomeRow =(item,e)=>{
        e.preventDefault();
        dispatch({type: "DELETE_INCOME", payload: item})
    }

    const handleIncomeChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        dispatch({type: "ADD_INCOME_ITEM", payload: {name,value}})
    }

    const handleTitleChange = (e)=>{
        e.preventDefault();
        const {value} = e.target;
        dispatch({type: "ADD_TITLE", payload: value});
    }

    const saveMoney = (e)=>{
        e.preventDefault();
        dispatch(addMoneyAction(incomeItems));
        window.location.reload();
    }

    return <Modal show={props.show} onHide={props.onHide} centered>
        <Modal.Header>
            <Modal.Title>
                Add money
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Container>
                        <Form.Control placeholder={"Enter name"} name="header" onChange={(e)=>handleTitleChange(e)}/>
                    {
                        incomeItems.incomeList.map((el,id)=>{
                            return <IncomeItem add={addIncomeRow} del={deleteIncomeRow.bind(this, 123)} handleChange={handleIncomeChange} categories={categories}></IncomeItem>
                        })
                    }
                </Container>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
            <Button variant="outline-success" onClick={(e)=>saveMoney(e)}>Add</Button>
        </Modal.Footer>
    </Modal>
}

export default Income;