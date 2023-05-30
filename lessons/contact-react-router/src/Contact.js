import React from 'react'

class Contact extends React.Component {
    constructor (props) {
        super(props);

        this.props = props;
    }

    redirectMe = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div onClick={this.redirectMe}>Contact</div>
        )
    }

}

export default Contact