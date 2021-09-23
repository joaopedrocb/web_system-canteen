// dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// css
import '../global.css';

// pages
import { DashboardTemplate, LoginPage, LandingPage, ManagementPage } from '../pages';
import { InsertResponsible, InsertProduct, InsertStudent } from '../pages/management';

import { LocalStorageAdapter } from '../infra'
import { PRODUCTS_LIST } from '../constants'
import { productsList } from '../data'

function App() {

    const storage = new LocalStorageAdapter()
    storage.setItem(PRODUCTS_LIST, [...productsList])

    return (
        <div className="App">
            <Router>
                <DashboardTemplate>
                    <Switch>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/gerenciamento" component={ManagementPage}/>
                        <Route path="/insertProduct" component={InsertProduct} />
                        <Route path="/insertStudent" component={InsertStudent} />
                        <Route path="/insertResponsible" component={InsertResponsible} />
                    </Switch>
                </ DashboardTemplate>
            </Router>
        </div>
    );
}

export default App;
