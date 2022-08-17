
import React, {useState} from 'react';
import {decrement, decrementByAmount, increment, incrementByAmount,setValueCount, reset, selectCount} from "./CounterSlice";
import {useDispatch, useSelector} from "react-redux";

export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    const [amount, setAmount] = useState(0);
    const [decrementAmount, setdeDrementAmount] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <div>
            <div>Count: {count}</div>
            <div>
                <button aria-label={"increment"} onClick={() => dispatch(increment())}>+</button>
                <button aria-label={"increment"} onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type={"number"} onChange={event => setAmount(event.target.value)}  />
                <button onClick={() => dispatch(incrementByAmount(amount || 0) )}>+ amout</button>

            </div>
            <div>
                <input type={"number"}  onChange={event => setdeDrementAmount(event.target.value)}  />
                <button onClick={() => dispatch( decrementByAmount(decrementAmount || 0))}>decrement amount</button>

            </div>
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
            <div>
                <input type={"number"} onChange={event => setValue(event.target.value)} />
                <button onClick={() => dispatch(setValueCount(value|| 0))}>set value</button>
            </div>
        </div>
    );
};