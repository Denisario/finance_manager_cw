import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import IncomeItem from "../pages/IncomeItem";
import axios from "axios";

const Income = (props)=>{
    const [title, setTitle] = useState();
    const [incomeItem, setIncomeItem] = useState();
    const dispatch = useDispatch();
    const incomeItems = useSelector(state=>state.income);

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/categories").then((resp)=>{
            setCategory(resp.data);
        });
    }, [setCategory]);

    const addIncomeRow = (e)=>{
        e.preventDefault();
        dispatch({type: "ADD_INCOME", payload: incomeItem});
    }

    const deleteIncomeRow =(item,e)=>{
        e.preventDefault();
            dispatch({type: "DELETE_INCOME", payload: item})
    }

    const handleIncomeChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setIncomeItem({...incomeItem, [name]: value})
    }

    const handleTitleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setTitle(value);
    }

    const saveMoney = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/income", {title, items:incomeItems.incomeItems});
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
                            return <IncomeItem add={addIncomeRow} del={deleteIncomeRow.bind(this, 123)} handleChange={handleIncomeChange} categories={category}></IncomeItem>
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