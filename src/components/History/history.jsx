import React, { useContext } from 'react';
import '../maincontainer.css'
import { CreatingContext } from '../Dynamic/context'
import {TiDelete} from 'react-icons/ti'

function MinusRemover(val) {
    let split = val.toString().split('')
    const filter = split.filter((value) => {
        return value !== '-'
    })
    return Number(filter.join(''))
}

function History() {
    const { context,Remove } = useContext(CreatingContext)
    // const context = [{text:'text',amount:100}]
    return (
        <div className="history">
            <h2 style={{ lineHeight: '10px' }}>History</h2>
            <hr />

            <ul className='historyDiv'>
                {
                    context.map((val, index) => {
                        return (
                            <li key={index}>
                                <div className={val.amount.toString().charAt(0) === '-' ? 'borderColorExpense' : 'borderColorIncome'}></div>
                                <div>{val.text}</div>
                                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                    <div>${val.amount.toString().charAt(0) === '-' ? MinusRemover(val.amount) : val.amount - 0}</div>
                                    <TiDelete className='deleteButton' onClick={()=>Remove(val.id)} style={{marginRight:'-20px',marginLeft:'10px'}} />
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
}

export default History;