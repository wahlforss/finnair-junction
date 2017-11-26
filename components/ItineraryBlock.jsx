import React from 'react';
require('../css/itinerary-block.css');
import { Link } from 'react-router-dom'



class Itinerary extends React.Component {
  changeBlock() {

  }
  renderSmallWrapper() {
    if (this.props.bookflights) {      
      return (
        <div>
          <div className='itinerary-block-time'>{this.props.title}</div>
          <div className='itinerary-block-buttons'>
            <Link to={'/bookit'}><div className='button'>Book Now</div></Link>
            <Link to={{pathname: '/customize', state: {data: this.props.data, showndata: this.props.showndata, totalcost: this.props.totalcost, flightCost: this.props.flightCost,activitiesCost: this.props.activitiesCost, hotelCost: this.props.hotelCost }}} ><div className='button'>Change itinerary</div></Link>
          </div>
        </div>
          )
          } else {
            return (
              <div>
                <div className='itinerary-block-time'>{this.props.time}</div>
                <div className='itinerary-block-title'>{this.props.title}</div>
                <div className='itinerary-block-review'>{this.props.review}</div>
                <div className='itinerary-block-price'>{this.props.price}</div>
                {/* <div className='button' onClick={this.changeBlock.bind(this)}>Want something else?</div> */}
              </div>
      )
    }
  }

   render() {
     let backgroundImageStyle = {
        backgroundImage: `url(${this.props.backgroundImage})`,
     }

    return (
        <div style={backgroundImageStyle} className='itinerary-block-wrapper'>
          <div className='itinerary-block-small-wrapper'>
            {this.renderSmallWrapper()}
          </div>
        </div>
       )
     }
}
export default Itinerary;
