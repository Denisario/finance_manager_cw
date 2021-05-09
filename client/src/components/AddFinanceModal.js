import React, {useState, useEffect} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import axios from "axios";
import AddFinanceRow from "./AddFinanceRow";
import {useDispatch, useSelector} from "react-redux";

const AddFinanceModal =({show, onHide})=>{
    const [financeHeader,setFinanceHeader] = useState({name:'', categoryId:''});
    const dispatch = useDispatch();
    const financeItems = useSelector(state => state.addFinance);
    const [financeItem, setFinanceItem] = useState({});
    const [category, setCategory] = useState([]);

    const addFinance = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:5000/api/finances", {name: financeHeader.name, categoryId: +financeHeader.categoryId, finance_item: financeItems.financeItems});
        window.location.reload();
    }

    useEffect(() => {
        axios.get("http://localhost:5000/api/categories").then((resp)=>{
            setCategory(resp.data); 
        });
    }, [setCategory]);

    const addRow = (event)=>{
       event.preventDefault();
       dispatch({type:"ADD_ROW", payload: financeItem});
    }

    const handleFinanceChange = (event)=>{
        event.preventDefault();
        const{name,value} = event.target;
        setFinanceHeader({...financeHeader, [name]: value});
    }
    

    const handleItemChange = (event)=>{
        event.preventDefault();
        const{name,value} = event.target;
        setFinanceItem({...financeItem, [name]: value});
    }

    // BUG WITH REMOVING
    const removeRow = (id,event)=>{
        event.preventDefault();
        dispatch({type: "DELETE_ROW", payload: id})
    }

    return (
        <Modal
               show={show} 
               onHide={onHide} 
               centered 
               size="lg">
            <Modal.Header>
                <Modal.Title>
                    Add finance
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control name="name"
                                  value={financeHeader.name} 
                                  onChange={e=>handleFinanceChange(e)} 
                                  placeholder={"Enter finance name"}/>
                    <Form.Control as="select" onChange={e=>handleFinanceChange(e)} name="categoryId">
                        {
                            category.map((el,id)=>{
                                return <option key={el.id} value={el.id}>{el.name}</option>
                            })
                        }
                    </Form.Control>
                    {
                        financeItems.financeList.map((el, id)=>{
                            return <AddFinanceRow 
                                                  key={id}
                                                  add={addRow}
                                                  del={removeRow.bind(this,id)}
                                                  isDisabled={true}
                                                  handleChange={handleItemChange}
                                                 />
                        })
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                        variant="outline-danger"
                        onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" 
                        onClick={addFinance}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddFinanceModal;