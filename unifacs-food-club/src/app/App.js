// dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// css
import '../global.css';

// pages
import { DashboardTemplate, LoginPage, LandingPage, ProductsPage } from '../pages';

import { LocalStorageAdapter } from '../infra'
import { PRODUCTS_LIST, STUDENTS_LIST, RESPONSIBLES_LIST } from '../constants'
import { productsList, studentsList, responsiblesList } from '../data'

function App() {

    const storage = new LocalStorageAdapter()
    storage.setItem(PRODUCTS_LIST, [...productsList])
    storage.setItem(STUDENTS_LIST, [...studentsList])
    storage.setItem(RESPONSIBLES_LIST, [...responsiblesList])

    return (
        <div className="App">
            <Router>
                <DashboardTemplate>
                    <Switch>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/gerenciamento" exact component={ProductsPage}/>
                        <Route path="/gerenciamento/produtos" component={ProductsPage}/>   
                    </Switch>
                </ DashboardTemplate>
            </Router>
        </div>
    );
}

export default App;
