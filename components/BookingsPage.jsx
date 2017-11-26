import React from 'react';
require('../css/bookings-page.css');
import { Link } from 'react-router-dom'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Slider from 'material-ui/Slider';
import axios from 'axios';


class BookingsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: 'alfred@wahlforss.com'
    }
  }

  render() {
    if (this.props.location) {


    return (
      <div className='booking-page-wrapper'>
        <div>
          <h1>LET'S FLY TO {this.props.location.state.data.city}</h1>

          <div>
            <div className='booking-page-list'>
              <ul className='booking-page-fun-list'>
                <li>Meet wonderful people</li>
                <li>See magical places</li>
                <li>Eat great food</li>
              </ul>
              <ul className='booking-page-costs-list'>
                <li>
                  Flights {this.props.location.state.flightCost} €
                </li>
                <li>Hotel {this.props.location.state.hotelCost} €</li>
                <li>Activities: {this.props.location.state.activitiesCost} €</li>
              </ul>

            </div>
            <div className='booking-page-under-list'>
              <div>A GREAT WEEKEND</div>
              <div>Total cost {this.props.location.state.totalcost} €</div>
            </div>
            <div className='button'>CONFIRM BOOKING</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        loading
      </div>
    )

  }
  }

}

export default BookingsPage
