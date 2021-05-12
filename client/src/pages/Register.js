import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {logIn, register} from "../store/asyncActions/users";

const Register = ()=>{
    const [data, setData] = useState();
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }

    const RegisterHandler = (e)=>{
        e.preventDefault();
        dispatch(register(data));
    }
    return  <Container>
        <Row>
            <Col>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>handleChange(e)}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>handleChange(e)}/>
                    </Form.Group>
                    <Form.Group controlId="RepeatPassword">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="repeatPassword" onChange={(e)=>handleChange(e)}/>
                    </Form.Group>

                    <Button variant="primary" onClick={(e)=>RegisterHandler(e)}>
                       Register
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default Register;