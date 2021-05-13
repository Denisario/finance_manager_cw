import React, {useRef, useEffect} from 'react'
import { Container, Button, Table } from 'react-bootstrap';
import axios from "axios";
import EditFinanceModal from '../components/EditFinanceModal';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFinance} from "../store/asyncActions/finances";
import {Pie} from "react-chartjs-2";


const Finance = (props) => {
    const dispatch = useDispatch();
    const showModal = useSelector(state=>state.modals);
    const finance = useSelector(state => state.finances.finance)[0];
    const financeId = useRef(props.match.params.id);
    const history = useHistory();


    const deleteFinance = ()=>{
        axios.delete(`http://localhost:5000/api/finances/${financeId.current}`,{headers: {
            authorization: "Bearer "+localStorage.getItem("token")
        }});
        history.push("/finances");

        window.location.reload();
    }


    useEffect(() => {
        dispatch(fetchFinance(financeId.current));
    }, [dispatch]);



    return finance&&finance.category&&finance.finance_items?(

        <Container>
            <Button onClick={()=>dispatch({type: "SHOW_EDIT_FINANCE_MODAL"})}>Edit finance</Button>
            <Button onClick={deleteFinance}>Delete finance</Button>
            <EditFinanceModal 
                              id={financeId.current}
                              name={finance.name}
                              show={showModal.editFinanceModal}
                              onHide={()=>dispatch({type: "SHOW_EDIT_FINANCE_MODAL"})}/>
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
                <tbody>
            {
                finance.finance_items.map((el,id)=>{
                    return <tr key={id}>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td>{el.amount}</td>
                    </tr>
                })
            }
                </tbody>
            </Table>
            <Pie height={200} width={200}  data={{labels:[finance.finance_items.map(el=>el.name)], datasets:[
                    {
                        data:finance.finance_items.map(el=>el.amount*el.price),
                        backgroundColor: [
                            "#FF6384",
                            "#63FF84",
                            "#84FF63",
                            "#8463FF",
                            "#6384FF"
                        ]
                    }
                ]}}></Pie>
        </Container>        
    ):false;
}

export default Finance;