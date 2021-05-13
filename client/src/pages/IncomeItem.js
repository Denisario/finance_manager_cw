import {Button, Col, Form, Row} from "react-bootstrap";
import React from "react";

const IncomeItem = (props)=>{
    return <Row>
        <Col md={4}>
            <Form.Control placeholder={"Enter sum"} name="sum" onChange={props.handleChange}/>
        </Col>
        <Col md={4}>
            <Form.Control as="select" onChange={props.handleChange} name="categoryId">
                {
                    props.categories.map((el,id)=>{
                        return <option key={el.id} value={el.id}>{el.name}</option>
                    })
                }
            </Form.Control>
        </Col>
        <Col md={2}>
            <Button onClick={props.del}>Remove</Button>
        </Col>
        <Col md={2}>
            <Button onClick={props.add}>Add</Button>
        </Col>

    </Row>
}

export default IncomeItem;