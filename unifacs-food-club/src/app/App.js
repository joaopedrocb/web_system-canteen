// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// css
import "../global.css";

// constants
import { productsList as productsListFromDomain } from '../common/domain';

// pages
import {
  DashboardTemplate,
  LoginPage,
  LandingPage,
  ProductsPage,
  ResponsiblesPage,
  StudentsPage,
  ProductsPurchasePage,
  UpdateProduct,
  InsertStudent,
  InsertResponsible,
  UpdateResponsible,
  UpdateStudent,
  StatementPage,
  DepositsPage,
  ManagementTemplate
} from '../pages';

// enums
import { AccessLevelEnum } from '../common/domain';

function App() {

  const [userData, setUserData] = React.useState({
    name: 'Unifacs',
    adress : 'Av. Juracy Magalhães Júnior, S/N - Rio Vermelho, Salvador - BA, 41940-060',
    phoneNumber : '(71) 3021-2800',
    email : 'funcionario@gmail.com',
    accessLevel : AccessLevelEnum.STAFF,
  });

  console.log('userData', userData);

  const [productsList, setProductsList] = React.useState(productsListFromDomain);

  console.log('productsList', productsList);

  return (
    <div className="App">
      <Router>
        <DashboardTemplate>
          <Switch>
            <Route path="/" exact component={() => <LandingPage userData={userData} />} />

            <Route path="/login" component={() => <LoginPage userData={userData} changeUserData={setUserData} />} />

            <Route path="/gerenciamento" exact component={() => (
              <ManagementTemplate userData={userData}>
                <ProductsPage 
                  productsList={productsList} 
                  userData={userData} 
                  changeProductsList={setProductsList}
                />
              </ManagementTemplate>
            )} />

            <Route path="/gerenciamento/produtos" exact component={() => (
              <ManagementTemplate userData={userData}>
                <ProductsPage 
                  productsList={productsList} 
                  userData={userData} 
                  changeProductsList={setProductsList}
                />
              </ManagementTemplate>
            )} />

            {/* <Route path="/gerenciamento/produtos/adicionar" component={InsertProduct}/>

            <Route path="/gerenciamento/produtos/alterar" component={UpdateProduct}/>

            <Route path="/gerenciamento/alunos/adicionar" component={InsertStudent}/>

            <Route path="/gerenciamento/responsaveis/adicionar" component={InsertResponsible}/>

            <Route path="/gerenciamento/responsaveis/alterar" component={UpdateResponsible}/>

            <Route path="/gerenciamento/alunos/alterar" component={UpdateStudent}/>

            <Route path="/gerenciamento/extrato" component={StatementPage}/>

            <Route path="/gerenciamento/depositos" component={DepositsPage}/>

            <Route
              path="/gerenciamento/responsaveis"
              component={ResponsiblesPage}
            />

            <Route path="/gerenciamento/alunos" component={StudentsPage} />

            <Route path="/comprar" component={ProductsPurchasePage} /> */}
          </Switch>
        </DashboardTemplate>
      </Router>
    </div>
  );
}

export default App;
