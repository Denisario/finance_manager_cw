import React, {useState, useRef, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import axios from "axios";
const Finance = (props) => {
    const financeId = useRef(props.match.params.id);
    const [finance, setFinance] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/finances/${financeId.current}`).then((resp)=>{
            setFinance(resp.data[0]);
        });
    }, [setFinance]);
    return (
        <Container>
            <div>id: {finance.id}</div>
            <div>name: {finance.name}</div>
            <div>date: {finance.date}</div>
        </Container>        
    )
}

export default Finance;