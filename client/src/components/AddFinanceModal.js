import React, {useState, useEffect} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import axios from "axios";
import AddFinanceRow from "./AddFinanceRow";

const AddFinanceModal =({show, onHide})=>{
    const [financeHeader,setFinanceHeader] = useState({name:'', categoryId:''});
    const [financeList, setFinanceList] = useState([1]); 
    const [financeItems, setFinanceItems] = useState([]); 
    const [financeItem, setFinanceItem] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const [category, setCategory] = useState([]);

    const addFinance = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:5000/api/finances", {name: financeHeader.name, categoryId: +financeHeader.categoryId, finance_item: financeItems});
        //window.location.reload();
    }

    useEffect(() => {
        axios.get("http://localhost:5000/api/categories").then((resp)=>{
            setCategory(resp.data); 
        });
    }, [setCategory]);

    const addRow = (event)=>{
       event.preventDefault();

       setFinanceItems([...financeItems, financeItem]);
       setFinanceItem({});  
       setFinanceList([...financeList,+financeList[financeList.length-1]+1]);
       financeList.length?setIsDisabled(true):setIsDisabled(false);
    }

    const handleFinanceChange = (event)=>{
        event.preventDefault();
        const{name,value} = event.target;
        setFinanceHeader({...financeHeader, [name]: value});
        console.log(name,value,financeHeader);
    }
    

    const handleItemChange = (event)=>{
        event.preventDefault();
        const{name,value} = event.target;
        console.log(name,value);
        financeItem[name] = value;
        setFinanceItem(financeItem);
    }

    // BUG WITH REMOVING
    const removeRow = (id,event)=>{
        event.preventDefault();

        const copyFinanceList = Object.assign([],financeList);
        copyFinanceList.splice(id, 1);
        setFinanceList(copyFinanceList);

        const copyFinanceItems = Object.assign([], financeItems);
        copyFinanceItems.splice(id,1);
        setFinanceItems(copyFinanceItems);

        financeList.length>2?setIsDisabled(true):setIsDisabled(false);
    }
        
    return category?(
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
                        financeList.map((el, id)=>{
                            return <AddFinanceRow 
                                                  key={id}
                                                  add={addRow}
                                                  del={removeRow.bind(this,id)}
                                                  isDisabled={isDisabled}
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
    ):false;
}

export default AddFinanceModal;