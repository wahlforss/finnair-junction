import React from 'react';
require('../css/start_page.css');
import { Link } from 'react-router-dom'
import ItineraryBlock from './ItineraryBlock.jsx'
import mockData from '../data/mock_data2.json'


class Itinerary extends React.Component {

  constructor(props) {
    super(props)
    console.log();
    this.state = {
      data: mockData,
      venues: mockData.venues,
      totalcostDay2: 0,
      totalcostDay1: 0,

    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.styleSheets[0].addRule('body',`overflow: visible`);
    this.setState({
      data: this.props.location.state.dataFromStartPage,
      venues: this.props.location.state.dataFromStartPage.venues
    })

    this.calccostday1()
    this.calccostday2()

  }
  calccostday1() {
    let venuesForDay1 =  this.state.venues.slice();
    venuesForDay1 = venuesForDay1.splice(1,7)
    let totalcostDay1 = 0
    venuesForDay1.map((venue) => {
      totalcostDay1 += venue.price
    })
    this.setState({
      totalcostDay1: totalcostDay1
    })
  }

  renderDay1() {
    let venuesForDay1 =  this.state.venues.slice();
    venuesForDay1 = venuesForDay1.splice(1,7)
    let totalcostDay1 = 0
    venuesForDay1.map((venue) => {
      totalcostDay1 += venue.price
    })

    return (
      <div>
        <ItineraryBlock
          time='09.00'
          title={`Breakfast at ${venuesForDay1[0].name}` }
          review={venuesForDay1[0].tip}
          backgroundImage={venuesForDay1[0].image}
        />
        <ItineraryBlock
          time='10.30'
          title={`Look at ${venuesForDay1[1].name}` }
          review={venuesForDay1[1].tip}
          backgroundImage={venuesForDay1[1].image}
        />
        <ItineraryBlock
          time='12.30'
          title={`Lunch at ${venuesForDay1[2].name}` }
          review={venuesForDay1[2].tip}
          backgroundImage={venuesForDay1[2].image}
        />
        <ItineraryBlock
          time='14.30'
          title={`Have fun at ${venuesForDay1[3].name}` }
          review={venuesForDay1[3].tip}
          backgroundImage={venuesForDay1[3].image}
        />
        <ItineraryBlock
          time='16.30'
          title={`See ${venuesForDay1[4].name}` }
          review={venuesForDay1[4].tip}
          backgroundImage={venuesForDay1[4].image}
        />
        <ItineraryBlock
          time='18.30'
          title={`Dinner ${venuesForDay1[5].name}` }
          review={venuesForDay1[5].tip}
          backgroundImage={venuesForDay1[5].image}
        />
        <ItineraryBlock
          time='20.30'
          title={`Have a beer at ${venuesForDay1[6].name}` }
          review={venuesForDay1[6].tip}
          backgroundImage={venuesForDay1[6].image}
        />
      </div>
    )
  }

  calccostday2() {
    let venuesForDay1 =  this.state.venues.slice();
    venuesForDay1 = venuesForDay1.splice(8,7)
    let totalcostDay2 = 0
    venuesForDay1.map((venue) => {
      totalcostDay2 += venue.price
    })
    this.setState({
      totalcostDay2: totalcostDay2
    })
  }
  renderDay2() {
    let venuesForDay1 =  this.state.venues.slice();
    venuesForDay1 = venuesForDay1.splice(8,7)
    let totalcostDay2 = 0
    venuesForDay1.map((venue) => {
      totalcostDay2 += venue.price
    })

    return (
      <div>
        <ItineraryBlock
          time='09.00'
          title={`Breakfast at ${venuesForDay1[0].name}` }
          review={venuesForDay1[0].tip}
          backgroundImage={venuesForDay1[0].image}
        />
        <ItineraryBlock
          time='10.30'
          title={`Look at ${venuesForDay1[1].name}` }
          review={venuesForDay1[1].tip}
          backgroundImage={venuesForDay1[1].image}
        />
        <ItineraryBlock
          time='12.30'
          title={`Lunch at ${venuesForDay1[2].name}` }
          review={venuesForDay1[2].tip}
          backgroundImage={venuesForDay1[2].image}
        />
        <ItineraryBlock
          time='14.30'
          title={`Have fun at ${venuesForDay1[3].name}` }
          review={venuesForDay1[3].tip}
          backgroundImage={venuesForDay1[3].image}
        />
        <ItineraryBlock
          time='16.30'
          title={`See ${venuesForDay1[4].name}` }
          review={venuesForDay1[4].tip}
          backgroundImage={venuesForDay1[4].image}
        />
        <ItineraryBlock
          time='18.30'
          title={`Dinner ${venuesForDay1[5].name}` }
          review={venuesForDay1[5].tip}
          backgroundImage={venuesForDay1[5].image}
        />
        <ItineraryBlock
          time='20.30'
          title={`Have a beer at ${venuesForDay1[6].name}` }
          review={venuesForDay1[6].tip}
          backgroundImage={venuesForDay1[6].image}
        />
      </div>
    )
  }
   render() {
     let newVenueArray = this.state.data.venues.slice()
      newVenueArray = newVenueArray.splice(1,14)
      return (
         <div className='itinerary-wrapper'>
           <ItineraryBlock
             title={`${this.state.data.city} in 2 Days`}
             price={`Total cost ${this.state.totalcostDay1 + this.state.totalcostDay2 + this.state.data.flight_price} €`}
             backgroundImage={this.state.venues[0].image}
           />
           {this.renderDay1()}
           <ItineraryBlock
             title={`Day 2`}
             backgroundImage={this.state.venues[0].image}
           />
           {this.renderDay2()}
           <ItineraryBlock
             backgroundImage={this.state.data.venues[12].image}
             title={`WOHO ${this.state.data.city} seems cool!`}
             bookflights={true}
             data={this.state.data}
             showndata={newVenueArray}
           />
         </div>
      );
   }
}
export default Itinerary;
