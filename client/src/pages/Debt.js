import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchDebt} from "../store/asyncActions/debt";
import {useState} from "react";

const Debt =(props)=>{
    const debt = useSelector(state=>state.debt);
    const [data,setData] = useState({});
    const dispatch = useDispatch();

    const countData =(e)=>{
        e.preventDefault();
        dispatch({type:"CLEAR_DEBT"});
        dispatch(fetchDebt(data));
    }

    const handleChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setData({...data, [name]: value});
        console.log(data);
    }

    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Money</Form.Label>
                            <Form.Control type="number"min={0}  name="sum" placeholder="Enter money" onChange={(e)=>handleChange(e)}/>
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
                    debt.result.map((el,id)=>{
                        return <div key={id}>{el.sum} {el.month} {el.up}</div>
                    })
                }
            </Form>
        </Container>
    )
}

export default Debt;