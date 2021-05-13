import React, {useEffect} from 'react'
import {Container, Table, Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import FinanceRow from "./FinanceRow";
import AddFinanceModal from "../components/AddFinanceModal";
import AddCategoryModal from "../components/AddCategoryModal";
import { useSelector, useDispatch } from 'react-redux';
import {fetchFinances} from "../store/asyncActions/finances";

const Finances = () => {
    const dispatch = useDispatch();
    const finances = useSelector(state => state.finances.finances);
    const modals = useSelector(state => state.modals);
    const history = useHistory();


    const redirectToFinance = (id)=>{
        history.push(`/finance/${id}`);
    }

    useEffect(()=>{
        dispatch(fetchFinances());
        return ()=>{
            dispatch({type: "CLEAR_FINANCE"})
        }
    },[dispatch])

    return (
        <Container>
            <Button onClick={()=>dispatch({type: "SHOW_FINANCE_MODAL"})}>Add finance</Button>
            <Button onClick={()=>dispatch({type: "SHOW_CATEGORY_MODAL"})}>Add category</Button>
            <AddFinanceModal 
                             show={modals.addFinanceModal}
                             onHide={()=>dispatch({type:"SHOW_FINANCE_MODAL"})}
                             />

            <AddCategoryModal 
                             show={modals.addCategoryModal}
                             onHide={()=>dispatch({type:"SHOW_CATEGORY_MODAL"})}
                             />

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
                {
                    finances.map((el,id)=>{
                        return <FinanceRow key={id} redirect={redirectToFinance} el={el}/>
                    })
                }
                </tbody>
            </Table>
        </Container>
    )
}

export default Finances;