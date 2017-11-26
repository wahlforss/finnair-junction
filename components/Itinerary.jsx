import React from 'react';
require('../css/start_page.css');
import { Link } from 'react-router-dom'
import ItineraryBlock from './ItineraryBlock.jsx'
import mockData from '../data/mock_data2.json'


class Itinerary extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: mockData,
      venues: mockData.venues
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.styleSheets[0].addRule('body',`overflow: visible`);
    //console.log(this.props.location.state.dataFromStartPage, 'facking props');

  }
  renderDay1() {
    let venuesForDay1 =  this.state.venues.slice();
    venuesForDay1 = venuesForDay1.splice(1,7)
    return (
      <div>
        <ItineraryBlock
          time='09.00'
          title={`Breakfast at ${venuesForDay1[0].name}` }
          review={venuesForDay1[0].stuff}
          backgroundImage={venuesForDay1[0].image}
        />
        <ItineraryBlock
          time='10.30'
          title={`Look at ${venuesForDay1[1].name}` }
          review={venuesForDay1[1].stuff}
          backgroundImage={venuesForDay1[1].image}
        />
        <ItineraryBlock
          time='12.30'
          title={`Lunch at ${venuesForDay1[2].name}` }
          review={venuesForDay1[2].stuff}
          backgroundImage={venuesForDay1[2].image}
        />
        <ItineraryBlock
          time='14.30'
          title={`Have fun at ${venuesForDay1[3].name}` }
          review={venuesForDay1[3].stuff}
          backgroundImage={venuesForDay1[3].image}
        />
        <ItineraryBlock
          time='16.30'
          title={`See ${venuesForDay1[4].name}` }
          review={venuesForDay1[4].stuff}
          backgroundImage={venuesForDay1[4].image}
        />
        <ItineraryBlock
          time='18.30'
          title={`Dinner ${venuesForDay1[5].name}` }
          review={venuesForDay1[5].stuff}
          backgroundImage={venuesForDay1[5].image}
        />
        <ItineraryBlock
          time='20.30'
          title={`Have a beer at ${venuesForDay1[6].name}` }
          review={venuesForDay1[6].stuff}
          backgroundImage={venuesForDay1[6].image}
        />
      </div>
    )
  }
   render() {
     let newVenueArray = this.state.data.venues.slice()
      newVenueArray = newVenueArray.splice(1,7)
      return (
         <div className='itinerary-wrapper'>
           <ItineraryBlock
             title={`${this.state.data.city} in 2 Days`}
             price={'223 €'}
             backgroundImage={this.state.venues[0].image}
           />
           {this.renderDay1()}
           <ItineraryBlock
             title={`Day 2`}
             backgroundImage={this.state.venues[0].image}
           />
           {this.renderDay1()}
           <ItineraryBlock
             backgroundImage={'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-sunrise-61786861.jpg?sharp=10&vib=20&w=1200'}
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
