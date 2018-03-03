import React, { Component } from 'react';
import Eth from 'ethjs'
import UnderMoon from './UnderMoon.jsx'
import Footer from './Footer.jsx'
//import BN from 'bn.js'
//import contractABI from '../utilities/contractABI.js'
//import contractAddress from '../utilities/contractAddress.js'


class StartPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      speechBubbleText: "...",
      speechBubbleInputField: "",
      account: ""
    }
  }

  // changeWhatTimmySays() {
  //   this.token.changeWhatTimmySays(this.state.inputForTimmy, {
  //     from: this.state.account,
  //     value: 0,
  //     gas: 700000,
  //     data: '0x',
  //     gasPrice: 20000000000
  //   })
  //   // this.setState({
  //   //   timmySays: this.state.inputForTimmy
  //   // })
  // }


  // componentDidMount() {
  //   if (typeof window.web3 !== 'undefined') {
  //     const eth = new Eth(window.web3.currentProvider);
  //     this.eth = eth

  //     this.token = this.eth.contract(contractABI).at(contractAddress)
  //     this.fetchWhatTimmySays()
  //     this.eth.accounts().then((accountArray) => {
  //       this.setState({
  //         account: accountArray[0]
  //       })
  //     })

  //   }
  // }


  // fetchWhatTimmySays() {
  //   this.token.whatTimmyShouldSay().then((data) => {
  //     this.setState({
  //       timmySays: data[0]
  //     })
  //   })
  // }

  changeWhatSatoshiSays() {
    this.setState({
      speechBubbleText: this.state.speechBubbleInputField
    })
  }

  renderTweetButton() {
    return (
        <a className="twitter-share-button" href="https://twitter.com/intent/tweet" data-text="custom share text">
          Tweet
        </a>
    )
  }

  renderFacebookButton() {
    return (
      <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Dela</a></div>
    )
  }


  render() {    
    return (
      <div className="App">
        <div>          
          {this.state.speechBubbleText}
        </div>        
        <div>          
          <input
          type="text"
          value={this.state.speechBubbleInputField}
          onChange={(e) => this.setState({speechBubbleInputField: e.target.value})}
          />  
          <div onClick={this.changeWhatSatoshiSays.bind(this)}>Change what Satoshi Says</div>        
        </div>

        {this.renderTweetButton()}
        {this.renderFacebookButton()}
        <UnderMoon />  
        <Footer />                           
      </div>
    );
  }
}

export default StartPage;
