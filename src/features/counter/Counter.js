
import React from 'react';
import {decrement, decrementByAmount, increment, incrementByAmount, selectCount} from "./CounterSlice";
import {useDispatch, useSelector} from "react-redux";

export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    const [amount, setAmount] = React.useState(0);
    const [decrementAmount, setdeDrementAmount] = React.useState(0);

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
        </div>
    );
};