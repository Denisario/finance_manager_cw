import React from "react";
import {Form, Container, Row,Col, Button} from 'react-bootstrap';

const AddFinanceRow = (props) => {
    return(<Container >
        <Row pt={5}>
            <Col sm>
                <Form.Control
                              placeholder={"Item name"} 
                              onChange={props.handleChange}
                              name="name"/>
            </Col>
            <Col sm>
                <Form.Control 
                              placeholder={"Price"} 
                              onChange={props.handleChange} 
                              name="price"/>
            </Col>
            <Col sm>
                <Form.Control 
                              placeholder={"Amount"} 
                              onChange={props.handleChange} 
                              name="amount"/>
            </Col>
            <Col sm>
                <Form.Control 
                              placeholder={"Category"} 
                              onChange={props.handleChange} 
                              name="category"/>
            </Col>
            <Button 
                    onClick={props.del} 
                    disabled={!props.isDisabled}>Remove elem</Button>
            <Button onClick={props.add}>Save</Button>
        </Row>
      </Container>);
}

export default AddFinanceRow;