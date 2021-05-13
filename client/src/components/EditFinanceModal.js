import React, {useState, useEffect} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import axios from "axios";

const EditFinanceModal =({id,name, show, onHide})=>{
    const [value,setValue] = useState('');

    const addFinance = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/api/finances/${id}`, {name: value},{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }});
        window.location.reload();
    }

    useEffect(() => {
        setValue(name);
    }, [name]);
    
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
                                  onChange={e=>setValue(e.target.value)} 
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