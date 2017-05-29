import Rxjs from 'rxjs';
import 'whatwg-fetch';
import { counter } from '../../action/action';
import { COUNTER }  from '../../constant/constant';

const counterInitEpic = (action$) =>
    action$.ofType(COUNTER.INITCOUNTER)
        .mergeMap(() =>
            fetch('/../data/counter.json')
                .then((response) => response.json())
                .then((data) => (counter.initCounterSuccess(data.value)))
        );

const counterUpdateEpic = (action$) =>
    action$.ofType(COUNTER.UPDATECOUNTER)
        .mergeMap(() =>
            fetch('/../data/counter.json')
                .then((response) => response.json())
                .then((data) => (counter.updateCounterSuccess(data.value)))
        );

module.exports = {
    counterInitEpic,
    counterUpdateEpic
};