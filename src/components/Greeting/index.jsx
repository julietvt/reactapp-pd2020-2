import React from 'react'

const Greeting = props => {
    const {name, surname} = props;
    return <div>Hello, {name} {surname} !!!</div>;
};

export default Greeting;
