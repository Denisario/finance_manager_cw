import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {logIn} from "../store/asyncActions/users";
import {useHistory} from "react-router-dom";

const Login = ()=>{
    const [data, setData] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }

    const logInHandler = (e)=>{
        e.preventDefault();
        dispatch(logIn(data));
    }

    return <Container>
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

                   <Button variant="primary"  onClick={(e)=>logInHandler(e)}>
                       Login
                   </Button>
               </Form>
           </Col>
        </Row>
    </Container>
}

export default Login;