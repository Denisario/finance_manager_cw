import {Container, Row} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

const IncomeItems = (props)=>{
    const itemId = useRef(props.match.params.id);

    const [item, setItem] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/income/${itemId.current}`).then(data=>data.data).then(data=>setItem(data[0]));
    },[setItem])
    console.log(item);
    return item?<Container>
        <Row>
            <div>Name:{item.header}</div>
        </Row>
        {
            item.income_items.map((el,id)=>{
                return <Row>
                    <div>Title: {el.title} Sum: {el.sum} Category: {el.category.name}</div>
                </Row>
            })
        }
    </Container>:false;
}

export default IncomeItems;