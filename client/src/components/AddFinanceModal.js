import React, { useEffect} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import axios from "axios";
import AddFinanceRow from "./AddFinanceRow";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../store/asyncActions/category";
import {addFinAction} from "../store/asyncActions/finances";

const AddFinanceModal =({show, onHide})=>{
    const dispatch = useDispatch();
    const financeItems = useSelector(state => state.addFinance);
    const category = useSelector(state=>state.categories.categories);

    const addFinance = async (e)=>{
        e.preventDefault();
        dispatch(addFinAction(financeItems));
        await sendFile();

    }

    const onChange = e => {
       dispatch({type: "ADD_FILE", payload: e.target.files[0]});
    };

    const sendFile = async ()=>{
        const formData = new FormData();
        formData.append('file', financeItems.file);
        await axios.post("http://localhost:5000/api/files",formData,{headers: {
                authorization: "Bearer "+localStorage.getItem("token")
            }});
    }

    useEffect(() => {
        dispatch(fetchCategories());
        return dispatch({type: "CLEAR_CATEGORIES"});
    }, [dispatch]);

    const addRow = (event)=>{
       event.preventDefault();
       dispatch({type:"ADD_ROW", payload: financeItems.financeItem});
    }

    const handleFinanceChange = (event)=>{
        event.preventDefault();
        const{value} = event.target;
        dispatch({type: "ADD_FINANCE_HEADER", payload:value})
    }

    const handleCategoryChange = (event)=>{
        event.preventDefault();
        const {value} = event.target;
        dispatch({type: "ADD_CATEGORY_ID", payload:value});
    }
    

    const handleItemChange = (event)=>{
        event.preventDefault();
        const{name,value} = event.target;
        dispatch({type: "ADD_FINANCE_ITEM", payload:{name, value}})
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
                                  onChange={e=>handleFinanceChange(e)}
                                  placeholder={"Enter finance name"}/>
                    <Form.Control as="select" onChange={e=>handleCategoryChange(e)} name="categoryId">
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
                    <Form.File
                        id="custom-file"
                        label="Custom file input"
                        custom
                        onChange={onChange}
                    />

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