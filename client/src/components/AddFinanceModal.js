import React, {useState} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import axios from "axios";
import AddFinanceRow from "./AddFinanceRow";

const AddFinanceModal =({show, onHide})=>{
    const [value,setValue] = useState("");
    const [financeList, setFinanceList] = useState([1]); 
    const [financeItems, setFinanceItems] = useState([]); 
    const [financeItem, setFinanceItem] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);

    const addFinance = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:5000/api/finances", {name: value, finance_item: financeItems});
        window.location.reload();
    }

    const addRow = (event)=>{
       event.preventDefault();

       setFinanceItems([...financeItems, financeItem]);
       setFinanceItem({});  
       setFinanceList([...financeList,+financeList[financeList.length-1]+1]);
       financeList.length?setIsDisabled(true):setIsDisabled(false);
    }
    

    const handleItemChange = (event)=>{
        event.preventDefault();

        const{name,value} = event.target;
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
    
    return(
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
                    <Form.Control 
                                  value={value} 
                                  onChange={e=>setValue(e.target.value)} 
                                  placeholder={"Enter finance name"}/>
                    {
                        financeList.map((el, id)=>{
                            return <AddFinanceRow 
                                                  key={id}
                                                  add={addRow}
                                                  del={removeRow.bind(this,id)}
                                                  isDisabled={isDisabled}
                                                  handleChange={handleItemChange}/>
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
    )
}

export default AddFinanceModal;