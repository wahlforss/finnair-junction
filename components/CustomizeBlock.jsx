import React from 'react';
import { Link } from 'react-router-dom'



class CustomizeBlock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      widthOfBox: 230
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateBlackBox.bind(this));
    this.updateBlackBox()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateBlackBox.bind(this));
  }

  updateBlackBox() {
    let widthOfBox = document.getElementsByClassName('custom-block-small-wrapper')[0].getBoundingClientRect().width
    document.styleSheets[0].addRule('.custom-block-wrapper::after',`width: ${widthOfBox}px`);
  }

  checkBox() {
    this.props.checkBox(this.props.id)
  }
   render() {
     let backgroundImageStyle = {
        backgroundImage: `url(${this.props.backgroundImage})`,
     }

    let checkbox = {
      opacity: this.props.checked ? 1 : 0
    }

    let widthOfBox = {
      width: this.state.widthOfBox
    }

      return (
         <div onClick={this.checkBox.bind(this)} style={backgroundImageStyle} className='custom-block-wrapper'>
           <div className='custom-block-small-wrapper'>
             <div className='custom-block-title-price'>
               <div className='custom-block-title'>
                 {this.props.title}
               </div>
               <div>
                 {this.props.price} €
               </div>
             </div>
             <div>
               <div className='custom-checkbox'>
                 <div style={checkbox} className='custom-checkbox-inner'>
                 </div>
               </div>
             </div>
           </div>
         </div>
      );
   }
}
export default CustomizeBlock;
