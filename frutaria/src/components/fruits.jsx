import React from "react";
import { useDispatch } from "react-redux";
import { actions } from '../actions/fruits.action';


const Fruit = ({ fruit }) => {

    const dispatch = useDispatch();

    return (
        <div className="fruits">
            <ul>
                <li>
                    <strong>Fruit: </strong> {fruit.name}
                </li>
                <li>
                    <strong>Quantity: </strong> {fruit.quantity}
                </li>
            </ul>

            <button onClick={() => dispatch(actions.remove(fruit))}>
                &times;
            </button>
        </div>
    );
};

export default Fruit;