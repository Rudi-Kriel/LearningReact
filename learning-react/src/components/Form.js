import React from 'react';
import Jumbotron from '../components/Jumbotron.js';
import submit from '../validators/submit.js'
import { Field, reduxForm } from 'redux-form'

const renderField = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type} />
            {
                touched && ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))
            }
        </div>
    </div>
)

const Form = props => {
    const { handleSubmit, submitting } = props
    return (
        <div>
            <Jumbotron heading={"Form"} isHomePage={false} text={"Please fill in the form below and give us your personal details!"} />

            <form onSubmit={handleSubmit(submit)}>
                <div className="form-group">
                    <Field name="name" component={renderField} type="text" aria-describedby="firstName" label="Name" />
                </div>
                <div className="form-group">
                    <Field name="email" component={renderField} type="email" aria-describedby="emailHelp" label="Enter address" />
                </div>
                <div className="form-group">
                    <Field name="validateEmail" component={renderField} type="email" aria-describedby="validateEmail" label="Verify email" />
                </div>
                <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default reduxForm({
    form: 'formState'
})(Form);