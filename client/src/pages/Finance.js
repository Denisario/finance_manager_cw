import React, {useState, useRef, useEffect} from 'react'
import { Container, Button, Table } from 'react-bootstrap';
import axios from "axios";
import EditFinanceModal from '../components/EditFinanceModal';
import {useHistory} from "react-router-dom";


const Finance = (props) => {
    const financeId = useRef(props.match.params.id);
    const [finance, setFinance] = useState({});
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const showEditModal = ()=>{
        setShowModal(true);
    }

    const deleteFinance = ()=>{
        axios.delete(`http://localhost:5000/api/finances/${financeId.current}`);
        history.push("/finances");

        window.location.reload();
    }


    useEffect(() => {
        axios.get(`http://localhost:5000/api/finances/${financeId.current}`).then((resp)=>{
            setFinance(resp.data[0]);
           
        });
    }, [setFinance]);
    console.log(finance.finance_items);
    return finance&&finance.category&&finance.finance_items?(
        <Container>
            <Button onClick={showEditModal}>Edit finance</Button>
            <Button onClick={deleteFinance}>Delete finance</Button>
            <EditFinanceModal 
                              id={financeId.current} 
                              name={finance.name} 
                              show={showModal} 
                              onHide={()=>setShowModal(false)}/>
            <div>id: {finance.id}</div>
            <div>name: {finance.name}</div>
            <div>date: {finance.date}</div>
            <div>category: {finance.category.name}</div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
        
            {
                finance.finance_items.map((el,id)=>{
                    return <tr >
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td>{el.amount}</td>
                    </tr>
                })
            }
            </Table>

        </Container>        
    ):false;
}

export default Finance;