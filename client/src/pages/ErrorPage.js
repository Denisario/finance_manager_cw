import {Alert} from "react-bootstrap";
import React, {useState} from "react";
import "./alert.css";
import {useDispatch} from "react-redux";
const ErrorPage = (props)=>{
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    return <Alert show={show} variant="danger" onClose={() => {
        setShow(false)
        dispatch({type: "SET_ERROR_FALSE"});
    }} size={"md"} className="errorAlert" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
            {props.msg}
        </p>
    </Alert>
}
export default ErrorPage;
