import React from 'react';
import StartPage from './components/StartPage.jsx'
import Itinerary from './components/Itinerary.jsx'
import CustomizePage from './components/CustomizePage.jsx'
import BookingsPage from './components/BookingsPage.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  slider: {
    selectionColor: 'white',
    handleFillColor: 'white'
  }
});

class App extends React.Component {


   render() {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router>
            <div>
              <Route exact={true} path='/' component={StartPage} />
              <Route path='/showme' component={Itinerary} />
              <Route path='/customize' component={CustomizePage} />
              <Route path='/bookit' component={BookingsPage} />
            </div>
          </Router>
        </MuiThemeProvider>
      );
   }
}
export default App;
