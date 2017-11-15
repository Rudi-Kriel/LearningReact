import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
    var errors = [];

    return sleep(50).then(() => {
        if (!values.name) {
            errors.push("name");
            throw new SubmissionError({
                name: 'Required'
            })
        } else if (values.name.length <= 3 || values.name.length >= 20) {
            errors.push("name");
            throw new SubmissionError({
                name: 'Must be between 3 and 20 characters'
            })
        }

        if (!values.email) {
            errors.push("email");
            throw new SubmissionError({
                email: 'Required'
            })
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.push("email");
            throw new SubmissionError({
                email: 'Invalid email address'
            })
        }
    
        if (!values.validateEmail && values.validateEmail !== values.email) {
            errors.push("validate");
            throw new SubmissionError({
                validateEmail: 'Validate email and email must match'
            })
        }

        if(errors.length === 0) {
            alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        }
    })
}

export default submit;