// dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// css
import "../global.css";

// constants
import {
  productsList as productsListFromDomain,
  responsiblesList as responsiblesListFromDomain,
  studentsList as studentsListFromDomain,
} from "../common/domain";

// pages
import {
  DashboardTemplate,
  LoginPage,
  LandingPage,
  ProductsPage,
  ResponsiblesPage,
  StudentsPage,
  ProductsPurchasePage,
  StatementPage,
  DepositsPage,
  ManagementTemplate,
} from "../pages";

function App() {
  const [userData, setUserData] = React.useState();

  const [productsList, setProductsList] = React.useState(
    productsListFromDomain
  );

  const [responsiblesList, setResponsiblesList] = React.useState(
    responsiblesListFromDomain
  );

  const [studentsList, setStudentsList] = React.useState(
    studentsListFromDomain
  );

  return (
    <div className="App">
      <Router>
        <DashboardTemplate>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <LandingPage userData={userData} />}
            />

            <Route
              path="/login"
              component={() => (
                <LoginPage
                  userData={userData}
                  changeUserData={setUserData}
                  setUserData={setUserData}
                />
              )}
            />

            <Route
              path="/gerenciamento"
              exact
              component={() => (
                <ManagementTemplate userData={userData}>
                  <ProductsPage
                    productsList={productsList}
                    userData={userData}
                    changeProductsList={setProductsList}
                  />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/gerenciamento/produtos"
              exact
              component={() => (
                <ManagementTemplate userData={userData}>
                  <ProductsPage
                    productsList={productsList}
                    userData={userData}
                    changeProductsList={setProductsList}
                  />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/comprar"
              exact
              component={() => (
                <ManagementTemplate userData={userData}>
                  <ProductsPurchasePage
                    productsList={productsList}
                    userData={userData}
                  />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/gerenciamento/responsaveis"
              exact
              component={() => (
                <ManagementTemplate userData={userData}>
                  <ResponsiblesPage
                    responsiblesList={responsiblesList}
                    userData={userData}
                    updateResponsibles={setResponsiblesList}
                  />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/gerenciamento/alunos"
              exact
              component={() => (
                <ManagementTemplate userData={userData}>
                  <StudentsPage
                    studentsList={studentsList}
                    userData={userData}
                    changeStudentsList={setStudentsList}
                  />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/gerenciamento/extrato"
              exact
              component={() => (
                <ManagementTemplate userData={userData}>
                  <StatementPage />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/gerenciamento/depositos"
              exact
              component={() => (
                <ManagementTemplate userData={userData}>
                  <DepositsPage />
                </ManagementTemplate>
              )}
            />

            {/* 
            
            <Route path="/gerenciamento/produtos/alterar" component={UpdateProduct}/>

            */}
          </Switch>
        </DashboardTemplate>
      </Router>
    </div>
  );
}

export default App;
