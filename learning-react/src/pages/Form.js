import React from 'react';
import Form from '../components/Form.js';
import GlobalValues from '../components/GlobalValues.js';

const FormPage = () => (
    <div>
        <Form />
        <GlobalValues form="formState" />
    </div>
)

export default FormPage;