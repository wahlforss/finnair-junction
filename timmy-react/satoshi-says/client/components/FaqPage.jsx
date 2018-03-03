import React, { Component } from 'react';
import FaqComponent from './FaqComponent.jsx'
import Footer from './Footer.jsx'

class FaqPage extends Component {    

    render() {
        const participateContent = (
            <div>
                Here’s what you need to get started:
                <ul>
                    <li>A computer or laptop running the desktop version of Chrome or Firefox</li>
                    <li>MetaMask, a digital wallet used specifically with web apps</li>
                    <li>Ether, a form of digital payment that powers CryptoKitties</li>
                </ul>
            </div>
        )
        
        const installMetaMask = (
            <div>
                <p>
                    To use CryptoKitties, you will need to install MetaMask, a digital wallet. You will need to put money in it to make your first purchase.
                    Note: A digital wallet like MetaMask acts like a bank account—treat it with respect and make sure you don’t forget your password or the seed words.
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tfETpi-9ORs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        )

        const whatisthiscontent = (
            <div>
                <p>haha</p> 
            </div>
        )
        const whitepapercontent = (
            <div>
                <p>No, but a white cat.</p> 
                <img src="https://www.thehappycatsite.com/wp-content/uploads/2017/11/persian-1.jpg" alt="" />
            </div>
        )


        return (
            <div>
                <div className='faq-header'>
                    FAQ
                </div>
                <div className='faq-component-container'>
                    <FaqComponent
                        title='What do I need to participate?'
                        content={participateContent}                        
                    />
                    <FaqComponent
                        title='Installing MetaMask, your digital wallet'
                        content = {installMetaMask}
                    />
                    <FaqComponent
                        title='What is this?'
                        content={whatisthiscontent}
                    />
                    
                    <FaqComponent
                        title='Why should I change the text?'
                        content={whatisthiscontent}
                    />
                    <FaqComponent
                        title='Where can I see past speech bubbles?'
                        content={whatisthiscontent}
                    />
                    <FaqComponent
                        title = 'Do you have a white paper?'
                        content={whitepapercontent}
                    />
                    <FaqComponent
                        title = 'Is this what satoshi wants?'
                        content={whatisthiscontent}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

export default FaqPage;