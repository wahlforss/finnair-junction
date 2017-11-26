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
    return (
      <div className='booking-page-wrapper'>
        <div>
          <h1>LET'S FLY TO MOSCOW</h1>
          <h2>24 - 26 December</h2>
          <div>
            <div className='booking-page-list'>
              <ul className='booking-page-fun-list'>
                <li>Meet wonderful people</li>
                <li>See magical places</li>
                <li>Eat great food</li>
              </ul>
              <ul className='booking-page-costs-list'>
                <li>
                  Flights 100 €
                </li>
                <li>Hotel 50 €</li>
                <li>Activities: 70 €</li>
              </ul>

            </div>
            <div className='booking-page-under-list'>
              <div>A GREAT WEEKEND</div>
              <div>Total cost 175 €</div>
            </div>
            <div className='button'>CONFIRM BOOKING</div>
          </div>
        </div>
      </div>
    )
  }

}

export default BookingsPage
