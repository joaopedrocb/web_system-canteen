// dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// css
import "../global.css";

// pages
import {
  DashboardTemplate,
  LoginPage,
  LandingPage,
  ProductsPage,
  InsertProduct,
  ResponsiblesPage,
  StudentsPage,
  ProductsPurchasePage,
  InsertStudent,
  InsertResponsible
} from "../pages";

import { LocalStorageAdapter } from "../infra";
import { PRODUCTS_LIST, STUDENTS_LIST, RESPONSIBLES_LIST } from "../constants";
import { productsList, studentsList, responsiblesList } from "../data";

function App() {
  const storage = new LocalStorageAdapter();
  storage.setItem(PRODUCTS_LIST, [...productsList]);
  storage.setItem(STUDENTS_LIST, [...studentsList]);
  storage.setItem(RESPONSIBLES_LIST, [...responsiblesList]);

  return (
    <div className="App">
      <Router>
        <DashboardTemplate>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/gerenciamento" exact component={ProductsPage} />
            <Route path="/gerenciamento/produtos" exact component={ProductsPage} />
            <Route path="/gerenciamento/produtos/adicionar" component={InsertProduct}/>
            <Route path="/gerenciamento/alunos/adicionar" component={InsertStudent}/>
            <Route path="/gerenciamento/responsaveis/adicionar" component={InsertResponsible}/>
            <Route
              path="/gerenciamento/responsaveis"
              component={ResponsiblesPage}
            />
            <Route path="/gerenciamento/alunos" component={StudentsPage} />
            <Route path="/comprar" component={ProductsPurchasePage} />
          </Switch>
        </DashboardTemplate>
      </Router>
    </div>
  );
}

export default App;
