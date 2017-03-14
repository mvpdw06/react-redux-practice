import 'whatwg-fetch';
import { COUNTER } from '../../constant/constant';

export const counterAction = {
    initCounter() {
        return (dispatch) => {
            fetch('../data/counter.json')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: COUNTER.INITCOUNTERSUCCESS,
                value: data.value
            }));
        };
    },
    updateCounter() {
        return (dispatch) => {
            fetch('../data/counter.json')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: COUNTER.UPDATECOUNTERSUCCESS,
                value: data.value
            }));
        };
    },
    doIncrement: (id) => ({ type: COUNTER.INCREMENT, id }),
    doDecrement: (id) => ({ type: COUNTER.DECREMENT, id }),
    copyCounter: () => ({ type: COUNTER.COPYCOUNTER })
}