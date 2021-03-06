import React from 'react';
require('../css/customize-page.css');
import { Link } from 'react-router-dom'
import CustomizeBlock from './CustomizeBlock.jsx'
import _ from 'lodash'
import mockData from '../data/mock_data2.json'



class CustomizePage extends React.Component {
  constructor(props) {
    super(props)
    let totalActivities = []
    _.range(20).map(() => {
      let actObj = {
        id: Math.floor(Math.random() * 1000000),
        title: 'Stroll through Red Square',
        checked: Math.floor(Math.random()*2),
        price: Math.floor(Math.random()*50),
        backgroundImage: mockData.venues[Math.floor(Math.random()*8)].image
      }
      totalActivities.push(actObj)
    })
    this.state = {
      totalActivities,
      budgetRestaurant: 100,
      budgetActivities: 100,
      totalcost: 100,
      flightCost: 10,
      activitiesCost: 10,
      hotelCost: 10

    }
  }

  componentDidMount() {
    this.stateFromLastSite = this.props.location.state
    this.setState({
      budgetTotal: this.state.budgetRestaurant + this.state.budgetActivities + this.state.flightCost,
      data: this.stateFromLastSite.data,
      shownData: this.stateFromLastSite.showndata,
      totalcost: this.stateFromLastSite.totalcost,
      flightCost: this.stateFromLastSite.flightCost,
      activitiesCost: this.stateFromLastSite.activitiesCost,
      hotelCost: this.stateFromLastSite.hotelCost
    })

    window.scrollTo(0, 0);
    document.styleSheets[0].addRule('body',`overflow: hidden`);
  }

  checkBox(id) {
    let newArrayFromTotalActivities = this.state.shownData.slice()
    let newArrayFromTotalDATA = this.state.shownData.slice()
    const boxToBeCheckedIndex = _.findIndex(newArrayFromTotalActivities, (actObj) => {
      return actObj.id === id
    })
    let boxToBeCheckedObject = _.find(newArrayFromTotalDATA, (actObj) => {
      return actObj.id === id
    })
    if (boxToBeCheckedIndex === -1) {
      newArrayFromTotalActivities.unshift(boxToBeCheckedObject)

    } else {
      newArrayFromTotalActivities.splice(boxToBeCheckedIndex, 1)

    }

    this.setState({
      shownData: newArrayFromTotalActivities
    })

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.totalActivities != this.state.totalActivities) {
      this.countCosts()
    }
  }

  countCosts() {
    let totalCost = 0
    this.state.totalActivities.map((actObj) => {
      if (actObj.checked) {
        totalCost += actObj.price
      }
    })
    this.setState({
      budgetTotal: totalCost
    })
  }


  renderChosenActivities() {
    if (this.state.shownData) {

    return (
      <ul>
        {this.state.shownData.map((actObj) => {

          return (
            <li>
              <CustomizeBlock
                id={actObj.id}
                title={actObj.name}
                price={actObj.price}
                checked={true}
                backgroundImage={actObj.image}
                checkBox={this.checkBox.bind(this)}
              />
            </li>
          )
        })}
      </ul>
    )
    }
  }

  renderOtherActivities() {
    if (this.state.data) {

    return (
      <ul>
        {this.state.data.venues.map((actObj) => {
          console.log(actObj);
          if (!_.includes(this.state.shownData, actObj)) {
            return (
              <li>
                <CustomizeBlock
                  id={actObj.id}
                  title={actObj.name}
                  price={actObj.price}
                  checked={false}
                  backgroundImage={actObj.image}
                  checkBox={this.checkBox.bind(this)}
                />
              </li>
            )
          }
          })}
          </ul>
        )

        }
  }

   render() {

      return (
         <div className='custom-page-wrapper'>
           <h1>Customize your trip</h1>
           <div className='custom-page-wrapp-columns'>
             <div className='custom-column'>
               <h2>Chosen activities</h2>
               <div className='chosen-activities-column'>
                 {this.renderChosenActivities()}
               </div>
             </div>
             <div className='custom-column'>
               <h2>Other activities</h2>
               <div className='other-activities-column'>
                 {this.renderOtherActivities()}
               </div>
             </div>
             <div className='custom-column'>
               <h2>Budget</h2>
               <div className='budget-column'>
                 <ul>
                   <li>Flights cost {this.state.flightCost} €</li>
                   <li>Activities {this.state.hotelCost + this.state.activitiesCost} €</li>
                   <li className='budget-total'>Total Cost {this.state.totalcost} €</li>
                 </ul>
                 <Link to={{pathname: '/bookit', state: {data: this.state.data, totalcost: this.state.totalcost, hotelCost: this.state.hotelCost, activitiesCost: this.state.activitiesCost}}}><div className='button'>Book Now</div></Link>
                 <Link to={'/showme'}><div className='button'>Go back</div></Link>
               </div>
             </div>
           </div>
         </div>
      );
   }
}
export default CustomizePage;
