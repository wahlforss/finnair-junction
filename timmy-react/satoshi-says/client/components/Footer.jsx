import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-container'>
                    <div>
                        <div>Links</div>
                        <ul>
                            <li>
                                <Link to={'/faq'}>
                                
                                FAQ
                                </Link>
                            </li>                            
                            <li>
                                <Link to={'/satoshiold'}>
                                    What Satoshi has said
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    Start Page
                                </Link>
                            </li>                            
                        </ul>
                    </div>
                    <div className='eth-logo'>
                    </div>
                    <div className='metamask-logo'></div>
                    <div>
                        <p>
                            All rights reserved
                        </p>
                                                
                        <p>
                            © 2018 Satoshi Says
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;