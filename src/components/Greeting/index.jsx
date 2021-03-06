import React from 'react'

const Greeting = props => {
    const {name} = props;
    return <div>Hello, {name} !!!</div>;
};

export default Greeting;
