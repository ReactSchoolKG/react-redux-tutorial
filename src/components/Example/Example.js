import React from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class Example extends React.Component {
    render () {
        return (<div className='example-container'>
            <button onClick={() => this.props.changePage()}>Go to home</button>
        </div>);
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/')
}, dispatch);

export default connect(null, mapDispatchToProps)(Example);
