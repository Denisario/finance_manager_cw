import React, {useEffect} from 'react'
import {Container, Table, Button, Form} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import FinanceRow from "./FinanceRow";
import AddFinanceModal from "../components/AddFinanceModal";
import AddCategoryModal from "../components/AddCategoryModal";
import { useSelector, useDispatch } from 'react-redux';
import {fetchFinances} from "../store/asyncActions/finances";
import "react-datepicker/dist/react-datepicker.css";

const Finances = () => {
    const dispatch = useDispatch();
    const finances = useSelector(state => state.finances.finances);
    const modals = useSelector(state => state.modals);
    const history = useHistory();


    const paginator = useSelector(state=>state.paginator);

    const redirectToFinance = (id)=>{
        history.push(`/finance/${id}`);
    }

    useEffect(()=>{
        dispatch(fetchFinances(paginator.page,paginator.itemsPerPage));
        return ()=>{
            dispatch({type: "CLEAR_FINANCE"})
        }
    },[dispatch,paginator.page,paginator.itemsPerPage])


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

            {/*Start <DatePicker  selected={startDate} onChange={(date)=>{*/}
            {/*    setStartDate(date);*/}
            {/*    dispatch({type: "CLEAR_FINANCE"});*/}
            {/*    dispatch(fetchFinances(page,itemsPerPage,startDate,finishDate));*/}
            {/*}}/>*/}
            {/*Finish<DatePicker selected={finishDate} onChange={(date)=>{*/}
            {/*    setFinishDate(date)*/}
            {/*    dispatch({type: "CLEAR_FINANCE"});*/}
            {/*    dispatch(fetchFinances(page,itemsPerPage,startDate,finishDate));*/}
            {/*}}/>*/}
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
            <Form>
                <Form.Control as="select" onChange={(e)=>{
                    dispatch({type: "CLEAR_FINANCE"});
                    dispatch({type:"CHANGE_ITEMS_PER_PAGE", payload: e.target.value})
                }} name="categoryId">
                    <option>All</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </Form.Control>
            </Form>
            <Button onClick={(e)=>{
                dispatch({type: "NEXT_PAGE"});
                dispatch({type: "CLEAR_FINANCE"});
            }}>Prev</Button>
            <Button onClick={(e)=>{
                dispatch({type: "NEXT_PAGE"});
                dispatch({type: "CLEAR_FINANCE"});
            }}>Next</Button>
        </Container>
    )
}

export default Finances;