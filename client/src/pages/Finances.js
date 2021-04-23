import React, {useState, useEffect} from 'react'
import {Container, Table} from 'react-bootstrap';
import axios from "axios";
import {NavLink,useHistory} from "react-router-dom";
import FinanceRow from "./FinanceRow";
const Finances = () => {
    const [finances, setFinances] = useState([]);

    const history = useHistory();

    const redirectToFinance = (id)=>{
        history.push(`/finance/${id}`);
      }
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/finances").then((resp)=>{
            setFinances(resp.data);
        });
    }, [setFinances]);
    return (
        <Container>
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