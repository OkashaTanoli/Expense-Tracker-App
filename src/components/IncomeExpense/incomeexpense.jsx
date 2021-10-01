import React, { useContext } from 'react';
import '../maincontainer.css'
import { CreatingContext } from '../Dynamic/context'

function IncomeExpense() {
    let { context } = useContext(CreatingContext)
    const Income = () => {
        var a = 0
        for (var i = 0; i < context.length; i++) {
            if (context[i].amount > 0) {
                a = a + Number(context[i].amount)
            }
        }
        return a
    }
    const Expense = () => {
        var a = 0
        for (var i = 0; i < context.length; i++) {
            if (context[i].amount < 0) {
                a = a + Number(context[i].amount)
            }
        }
        let split = a.toString().split('')
        const filter = split.filter((value) => {
            return value !== '-'
        })
        return Number(filter.join(''))
    }

    return (
        <div className='IncomeExpense'>
            <div className='IncomeExpenseOne'>
                <div style={{overflow:'auto'}}>
                    <h4>INCOME</h4>
                    <h2 style={{ lineHeight: '10px', textAlign: 'center' }}>${Income()}</h2>
                </div>
            </div>
            <div className='IncomeExpenseTwo'></div>
            <div className='IncomeExpenseThree'>
                <div  style={{overflow:'auto'}}>
                    <h4>EXPENSE</h4>
                    <h2 style={{ lineHeight: '10px', textAlign: 'center' }}>${Expense()}</h2>
                </div>
            </div>
        </div>
    );
}

export default IncomeExpense;