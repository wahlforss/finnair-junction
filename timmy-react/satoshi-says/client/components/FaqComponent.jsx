import React, { Component } from 'react';


class FaqComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    openFaq() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        let isOpenClass = this.state.isOpen ? 'faq-component-open' : ''
        return (
            <div onClick={this.openFaq.bind(this)} className={`faq-component ${isOpenClass}`}>
                <div className='faq-title'>
                    <div>{this.props.title}</div>
                    <div>+</div>
                </div>
                <div className='faq-content'>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default FaqComponent;
