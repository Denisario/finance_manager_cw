import React from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {addCategoryAction} from "../store/asyncActions/category";

const AddCategoryModal =({show, onHide})=>{
    const value = useSelector(state=>state.categories.addCategoryName);
    const dispatch = useDispatch();

    const addCategory = (e)=>{
        e.preventDefault();
        dispatch(addCategoryAction(value));
        window.location.reload();
    }
    
    return (
        <Modal
               show={show} 
               onHide={onHide} 
               centered>
            <Modal.Header>
                <Modal.Title>
                    Add category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={value}
                                  onChange={e=>dispatch({type: "ADD_CATEGORY", payload: e.target.value})}
                                  placeholder={"Enter category"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                        variant="outline-danger" 
                        onClick={onHide}>Close</Button>
                <Button 
                        variant="outline-success" 
                        onClick={addCategory}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddCategoryModal;