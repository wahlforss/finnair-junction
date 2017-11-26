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
      flightCost: 100
    }
  }

  componentDidMount() {
    this.stateFromLastSite = this.props.location.state
    this.setState({
      budgetTotal: this.state.budgetRestaurant + this.state.budgetActivities + this.state.flightCost,
      data: this.stateFromLastSite.data,
      shownData: this.stateFromLastSite.showndata
    })
    window.scrollTo(0, 0);
    document.styleSheets[0].addRule('body',`overflow: hidden`);
  }

  checkBox(id) {
    let newArrayFromTotalActivities = this.state.totalActivities.slice()
    const boxToBeCheckedIndex = _.findIndex(newArrayFromTotalActivities, (actObj) => {
      return actObj.id === id
    })
    const boxToBeCheckedObject = newArrayFromTotalActivities.splice(boxToBeCheckedIndex, 1)[0]
    boxToBeCheckedObject['checked'] = !boxToBeCheckedObject.checked
    newArrayFromTotalActivities.unshift(boxToBeCheckedObject)
    this.setState({
      totalActivities: newArrayFromTotalActivities
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

  renderChosenActivitiesOld() {
    return (
      <ul>
        {this.state.totalActivities.map((actObj,i) => {
          if(actObj.checked) {
            return (
              <li>
                <CustomizeBlock
                  id={actObj.id}
                  title={actObj.title}
                  checked={actObj.checked}
                  price={actObj.price}
                  backgroundImage={actObj.backgroundImage}
                  checkBox={this.checkBox.bind(this)}
                />
              </li>
            )
          }
        })}
      </ul>
    )
  }

  renderChosenActivities() {
    if (this.state.shownData) {

    return (
      <ul>
        {this.state.shownData.map((actObj) => {

          return (
            <li>
              <CustomizeBlock
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
                  title={actObj.name}
                  price={actObj.price}
                  checked={true}
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
               <div>
                 <div>Flight cost {this.state.flightCost}</div>
                 <div>Restaurants {this.state.budgetRestaurant}</div>
                 <div>Activities {this.state.budgetActivities}</div>
                 <div>Total Cost {this.state.budgetTotal}</div>
                 <Link to={'/bookit'}><div className='button'>Book Now</div></Link>
                 <Link to={'/showme'}><div className='button'>Go back</div></Link>
               </div>
             </div>
           </div>
         </div>
      );
   }
}
export default CustomizePage;
