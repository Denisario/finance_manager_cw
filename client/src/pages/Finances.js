import React, {useState, useEffect} from 'react'
import {Container, Table, Button} from 'react-bootstrap';
import axios from "axios";
import {useHistory} from "react-router-dom";
import FinanceRow from "./FinanceRow";
import AddFinanceModal from "../components/AddFinanceModal";
import AddCategoryModal from "../components/AddCategoryModal";

const Finances = () => {
    const [finances, setFinances] = useState([]);
    const [showFinanceModal, setFinanceShowModal] = useState(false);
    const [showCategoryModal, setCategoryShowModal] = useState(false);
    const history = useHistory();

    const redirectToFinance = (id)=>{
        history.push(`/finance/${id}`);
    }

    const showAddModal = ()=>{
        setFinanceShowModal(true);
    }

    const showCatModal = ()=>{
        setCategoryShowModal(true);
    }
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/finances").then((resp)=>{
            setFinances(resp.data);
            });
    }, [setFinances]);
    
    return (
        <Container>
            <Button onClick={showAddModal}>Add finance</Button>
            <Button onClick={showCatModal}>Add category</Button>
            <AddFinanceModal 
                             show={showFinanceModal} 
                             onHide={()=>setFinanceShowModal(false)}/>

            <AddCategoryModal 
                             show={showCategoryModal} 
                             onHide={()=>setCategoryShowModal(false)}/>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Category</th>
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