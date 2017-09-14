import React from 'react';

function Anchor(props) {
    return (
        <a className={props.className} href={props.href} role={props.role}>{props.text}</a>
    )};

    export default Anchor;