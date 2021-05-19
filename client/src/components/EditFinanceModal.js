import React, {useEffect} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {editFinanceAction} from "../store/asyncActions/finances";

const EditFinanceModal =({id,name,show, onHide})=>{
    const value = useSelector(state=>state.addFinance.financeHeader);
    const dispatch = useDispatch();

    const addFinance = (e)=>{
        e.preventDefault();
        dispatch(editFinanceAction(id, value));
        window.location.reload();
    }

    useEffect(() => {
        dispatch({type: "ADD_FINANCE_HEADER", payload: name});
    }, [dispatch, name]);

    return (
        <Modal
               show={show} 
               onHide={onHide} 
               centered>
            <Modal.Header>
                <Modal.Title>
                    Edit finance
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                                  value={value} 
                                  onChange={e=>dispatch({type: "ADD_FINANCE_HEADER", payload: e.target.value})}
                                  placeholder={"Enter finance name"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                        variant="outline-danger" 
                        onClick={onHide}>Close</Button>
                <Button 
                        variant="outline-success" 
                        onClick={addFinance}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditFinanceModal;