import React from 'react'

const FinanceRow = (props) => {
    return (
        <tr onClick={()=>props.redirect(props.el.id)}>
            <td>{props.el.id}</td>
            <td>{props.el.name}</td>
            <td>{new Date(props.el.date).toISOString().replace('T',' ').replace('Z','')}</td>
            <td>{props.el.category.name}</td>
        </tr>
    )
}

export default FinanceRow;