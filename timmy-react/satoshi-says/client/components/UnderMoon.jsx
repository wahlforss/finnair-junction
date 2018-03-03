import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UnderMoon extends Component {

    renderTable() {
        return (
            <div className="under-moon-table">
            <h2 className="under-moon">Example</h2>
            <div>
                <div>
                Change speech bubble
                </div>
                <div>
                1 ETH
                </div>
            </div>
            <div>
                <div>
                <div>
                    Next person change speech bubble
                </div>
                <div>
                    1.2 ETH
                </div>
                </div>
                <div>
                <div>
                    Next person change speech bubble
                </div>
                <div>
                    1.2 ETH
                </div>
                </div>
            </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <div className='under-moon-text'>
                    <h2 className="under-moon">
                        What is this?
                    </h2>
                    <p>
                        Control what Satoshi says with a smart contract.
                        Change the text by sending ETH to a smart contract.
                        If someone changes the text after you, they pay your amount plus 20 % extra.
                        This ETH goes directly to you minus a 5 % developer fee.
                        So you profit 15 % by changing the text, as long as someone changes it after you.
                    </p>
                </div>
                <div className='under-moon-text'>
                    <h2 className="under-moon">
                        Why should I change the text?
                    </h2>
                    <p>
                        We have thousands of visitors, every day.  You also profit 15 % if someone changes it after you. 
                        Spread your message and unify the crypto community today! 
                    </p>
                </div>

                {this.renderTable()}         
                <div className='under-moon-text'>
                    <Link to={'/faq'}>
                        <h2 className="under-moon">
                            Still have some questions?
                        </h2>
                        <p>
                            See our FAQ
                        </p>
                    </Link>
                </div>
                <Link to={'/satoshiold'}>
                <div className="button">
                    See what Satoshi has said before
                </div>
                </Link>
            </div>            
        )
    }
}

export default UnderMoon;
