import 'whatwg-fetch';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INITCUNTERSUCCESS = 'INITCUNTERSUCCESS';

export const counterAction = {
    initCounter() {
        console.log('run init')
        return (dispatch) => {
            console.log('dis', dispatch)
            fetch('../data/counter.json')
            .then((response) => {
                console.log('response', response)
                return response.json()
            })
            .then((value) => dispatch({
                type: INITCUNTERSUCCESS,
                value
            }));
        };
    },
    doIncrement: { type: INCREMENT },
    doDecrement: { type: DECREMENT }
}