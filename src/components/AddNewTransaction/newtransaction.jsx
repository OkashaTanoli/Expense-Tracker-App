import React, { useContext, useState } from 'react';
import '../maincontainer.css'
import {CreatingContext} from '../Dynamic/context'

function NewTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {SetAdding} = useContext(CreatingContext)

    const CheckingEmpty =()=>{
        var a = 0
        var b;
        for(var i = amount.toString().slice(0,1)=== '-'?1:0;i<amount.toString().length;i++){
            if(amount.toString()[i] == 0){
                a = a+1
            }
        }
        amount.toString().slice(0,1)=== '-'?b = amount.toString().length-1:b = amount.toString().length
        if(text === '' || b === a ){
            alert('Please fill all fields or inter correct value')
        }
        else{
            SetAdding({text,amount})
            setText('')
            setAmount(0)
            // console.log(amount)
        }
        a= 0
    }

    return (
        <div>
            <h2 style={{ lineHeight: '10px' }}>Add Transaction</h2>
            <hr />
            <div >
                <h4 style={{ lineHeight: '0px',color:'#575757',marginBottom:'10px' }}>Text</h4>
                <input value={text} placeholder='Enter Text' className='inputField' onChange={(e) => { setText(e.target.value) }} required type="text" />
            </div>
            <div>
                <h4 style={{ lineHeight: '0px',color:'#575757',marginBottom:'10px' }}>Amount</h4>
                <input value={amount} placeholder='Enter Amount' className='inputField' onChange={(e) => { setAmount(e.target.value) }} required type="number" />
                <p style={{ marginTop: '0px', color: '#424242' }}>Negative amount for (Expense) and Positive for (Income)</p>
            </div>
            <div style={{ width: '100%' }}>
                <input  onClick={()=>CheckingEmpty()} type="button" value="Add Transaction" className='submitButton' />
            </div>
        </div>
    );
}

export default NewTransaction;