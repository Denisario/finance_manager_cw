import React,{useState} from 'react';
import {Container, Form,Row,Col, Button}from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {fetchCredit} from "../store/asyncActions/credit";

const Credit = () => {
    const [money,setMoney] = useState({sum:0, months:0,procent:0});
    const credit = useSelector(state=>state.credit.result);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setMoney({...money, [name]: value});
    }

    const countData = (e)=>{
        e.preventDefault();
        dispatch({type: "CLEAR_CREDIT"});
        dispatch(fetchCredit(money));
    }

    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Money</Form.Label>
                            <Form.Control type="number" min={1} name="sum" placeholder="Enter money" onChange={(e)=>handleChange(e)}/>
                        </Form.Group>   
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Procent per year</Form.Label>
                            <Form.Control type="number" min={1} name="procent" placeholder="Enter procent" onChange={(e)=>handleChange(e)}/>
                        </Form.Group>   
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Months</Form.Label>
                            <Form.Control type="number" min={1} name="months" placeholder="Enter months" onChange={(e)=>handleChange(e)}/>
                        </Form.Group>   
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Button variant="primary" onClick={(e)=>countData(e)}>Count</Button>
                    </Col>
                </Row>

                {
                    credit.map((el,id)=>{
                        return <div key={id}>{el.month} {el.mainSum} {el.procentPerMonth} {el.sumPerMonth}</div>
                    })
                }
            </Form>
        </Container>
    )
}

export default Credit;