import React, {useState} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import axios from "axios";

const AddFinanceModal =({show, onHide})=>{
    const [value,setValue] = useState("");

    const addFinance = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/finances", {name: value});
        window.location.reload();
    }
    return(
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header>
                <Modal.Title>
                    Add finance
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={value} onChange={e=>setValue(e.target.value)} placeholder={"Enter finance name"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addFinance}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddFinanceModal;