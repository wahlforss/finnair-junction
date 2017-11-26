import React from 'react';
require('../css/start_page.css');
import { Link } from 'react-router-dom'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Slider from 'material-ui/Slider';
import axios from 'axios';


class StartPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      budgetInput: '2342',
      instagramName: 'alfredwahl',
      firstSlider: 300,
      dataToSend: {hoho: 'hej'},
      fetching: false

    }
  }

  handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
  }



  componentDidUpdate(prevProps,prevState) {
    if (this.state.startDate) {
      console.log(this.state.startDate._d);
    }
  }

  componentDidMount() {

  }

  fetchDataFromInstagram() {
    this.setState({
      fetching: true
    })
    axios.get('http://95.213.236.79:5000/findair?get_venues=2017-12-04:2017-12-05:500:alfredwahl').then((dataFromVlad) => {
      let newObject = {
        dataFromStartPage: dataFromVlad
      }
      
      this.props.history.push('/showme', {dataFromStartPage: dataFromVlad.data})

    })
  }

  renderDatePicker() {
    return (
      <div className='start-page-date-picker'>
        <div>
          <div className="group">
            <input
              type='text'
              value={this.state.instagramName}
              onChange={(e) => this.setState({instagramName: e.target.value})}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Instagram Name</label>
          </div>
        </div>
        <div>
          <div
            className='start-page-slider-wrapper'
          >
            <div>Budget</div>
            <div className='start-page-slider-wrapper2'>
              <div className='start-page-slider'>
                <Slider
                  min={80}
                  max={1000}
                  step={1}
                  value={this.state.firstSlider}
                  onChange={this.handleFirstSlider.bind(this)} />
              </div>
              <span>{this.state.firstSlider} €</span>
            </div>
          </div>
        </div>
        <div>
          <div className='dates-margin'>Dates</div>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
          </div>
      </div>
        )
        }
        render() {
            if (this.state.fetching) {
              return (
                <div className='start-page-wrapper'>
                  <div className='start-page-wrapper-hoho'>
                    Loading
                  </div>
                </div>
              )
            }
            return (
              <div className='start-page-wrapper'>
                <div className='start-page-wrapper-hoho'>
                  <h1>FindAir</h1>
                  <h2>One Click Journey</h2>
                  {this.renderDatePicker()}

                  <div onClick={this.fetchDataFromInstagram.bind(this)} className='start-page-button'>{this.state.fetching ? 'Loading' : 'Find your Journey'}</div>

                </div>
                <div className='start-page-bottom'>
                  <h3>Use AI to propose your perfect journey, either it's a music festival in Berlin or experiencing the spices in Mumbai. Right place, activity and food in one click!</h3>
                </div>
              </div>
       )
   }
}
export default StartPage;
