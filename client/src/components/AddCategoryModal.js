import React, {useState} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import axios from "axios";

const AddCategoryModal =({show, onHide})=>{
    const [value,setValue] = useState('');

    const addCategory = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/api/categories`, {name: value});
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
                                  onChange={e=>setValue(e.target.value)} 
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