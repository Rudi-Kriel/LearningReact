import React from 'react';
import { values as valuesDecorator } from 'redux-form';

const GlobalValues = ({ form, format = values => JSON.stringify(values, null, 2) }) => {
    const decorator = valuesDecorator({ form })
    const component = ({ values }) =>
    (
        <div style={{display: values != null ? 'block' : 'none' }}>
            <h2>Values</h2>
            <p>{format(values)}</p>
        </div>
    )

    const Decorated = decorator(component)
    return <Decorated/>
}

export default GlobalValues;