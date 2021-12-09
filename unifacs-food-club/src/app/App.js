// dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// css
import "../global.css";

// pages
import {
  DashboardTemplate,
  LoginPage,
  LandingPage,
  ProductsPage,
  ResponsiblesPage,
  StudentsPage,
  ProductsPurchasePage,
  ManagementTemplate,
} from "../pages";

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardTemplate>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <LandingPage />}
            />

            <Route
              path="/login"
              component={() => (
                <LoginPage />
              )}
            />

            <Route
              path="/gerenciamento"
              exact
              component={() => (
                <ManagementTemplate>
                  <ProductsPage />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/gerenciamento/produtos"
              exact
              component={() => (
                <ManagementTemplate>
                  <ProductsPage />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/comprar"
              exact
              component={() => (
                <ManagementTemplate>
                  <ProductsPurchasePage />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/gerenciamento/responsaveis"
              exact
              component={() => (
                <ManagementTemplate>
                  <ResponsiblesPage />
                </ManagementTemplate>
              )}
            />

            <Route
              path="/gerenciamento/alunos"
              exact
              component={() => (
                <ManagementTemplate>
                  <StudentsPage />
                </ManagementTemplate>
              )}
            />
          </Switch>
        </DashboardTemplate>
      </Router>
    </div>
  );
}

export default App;
