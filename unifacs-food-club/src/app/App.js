// dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// css
import '../global.css';

// pages
import { DashboardTemplate, LoginPage, LandingPage } from '../pages';

function App() {
    return (
        <div className="App">
            <Router>
                <DashboardTemplate>
                    <Switch>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/login" component={LoginPage}/>
                    </Switch>
                </ DashboardTemplate>
            </Router>
        </div>
    );
}

export default App;
