import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Debt =(props)=>{
    const [money,setMoney] = useState([{sum:0, month:0}]);
    const [moneyItem, setMoneyItem] = useState({});

    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setMoneyItem({...moneyItem, [name]:+value});
    }

    //need to rework formulaыh
    const countData = (e)=>{
        const moneys = [];
        e.preventDefault();
        for(let i=0;i<moneyItem.months;i++){
            let mon={month:i, sum:0};
            if(moneys.length === 0){
                mon.sum = moneyItem.money +moneyItem.money*(moneyItem.procent/100);
            }
            else{
                mon.sum = moneyItem.money +moneyItem.money*(moneyItem.procent/100);
            }
            moneys.push(mon);
        }
        setMoney(moneys);
    }

    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Money</Form.Label>
                            <Form.Control type="number" name="money" placeholder="Enter money" onChange={(e)=>handleChange(e)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Procent per year</Form.Label>
                            <Form.Control type="number" name="procent" placeholder="Enter procent" onChange={(e)=>handleChange(e)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Months</Form.Label>
                            <Form.Control type="number" name="months" placeholder="Enter months" onChange={(e)=>handleChange(e)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Button variant="primary" onClick={(e)=>countData(e)}>Count</Button>
                    </Col>
                </Row>

                {
                    money.map((el,id)=>{
                        return <div key={id}>{el.sum} {el.month}</div>
                    })
                }
            </Form>
        </Container>
    )
}

export default Debt;