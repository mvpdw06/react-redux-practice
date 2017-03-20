import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const validateExampleForm = () => {
    const errorMessage = 'valid pass';
    return errorMessage
}

const form = (option) => {
    return (Component) => {
        const formContainer = () => (<Component />)
    }
}

const ExampleForm = ({username, password, error, onSubmit}) => {
    return(
        <form>
            username: <input type="text" value={username} /><br />
            password: <input type="text" value={password} /><br />
            <button onClick={onSubmit} disabled={!!error} >Submit</button>
        </form>
    );
}

// module.exports = form({validate: validateExampleForm})(ExampleForm);
module.exports = ExampleForm;

/*
class ExampleForm extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <h2>{data}</h2>
                <button onClick={browserHistory.goBack}>Go back!</button>
            </div>
        );
    }
}*/