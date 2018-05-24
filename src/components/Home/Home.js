import React from 'react';
import Input from "../Input";
import Counter from "../Counter";

class Home extends React.Component {
    render () {
        return (<div className='home-container'>
            <div className='counter-part'>
                <Counter />
            </div>
            <div className='input-part'>
                <Input />
            </div>
        </div>);
    }
}

export default Home;
