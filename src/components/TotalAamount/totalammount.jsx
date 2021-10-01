import React, { useContext } from 'react';
import '../maincontainer.css'
import { CreatingContext } from '../Dynamic/context'


function TotalAmount() {
    let { context } = useContext(CreatingContext)

    const Total = () => {
        var a = 0
        for (var i = 0; i < context.length; i++) {
            if (context[i].amount > 0) {
                a = a + Number(context[i].amount)
            }
        }
        var b = 0
        for (var i = 0; i < context.length; i++) {
            if (context[i].amount < 0) {
                a = a + Number(context[i].amount)
            }
        }
        return a-b
    }
    return (
        <div className='totalAmount'>
            <h1>Expense Tracker</h1>
            <h5>YOUR BALANCE</h5>
            <h1 style={{ marginTop: '-20px' }}>${Total()}</h1>
        </div>
    );
}

export default TotalAmount;
