import React, {useState, useEffect} from 'react'
import {Container, Table, Button, DropdownButton} from 'react-bootstrap';
import axios from "axios";
import {NavLink,useHistory} from "react-router-dom";
import FinanceRow from "./FinanceRow";
import AddFinanceModal from "../components/AddFinanceModal";
const Finances = () => {
    const [finances, setFinances] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const redirectToFinance = (id)=>{
        history.push(`/finance/${id}`);
    }

    const showAddModal = ()=>{
        setShowModal(true);
    }
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/finances").then((resp)=>{
            setFinances(resp.data);
        });
    }, [setFinances]);
    return (
        <Container>
            <Button onClick={showAddModal}>Add finance</Button>
            <AddFinanceModal show={showModal} onHide={()=>setShowModal(false)}/>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {finances.map((el)=>
                            <FinanceRow key={el.id} redirect={redirectToFinance} el={el}/>
                    )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Finances;