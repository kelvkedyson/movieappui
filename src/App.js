import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import "./Assets/css/styles.css";


const TITLE = "MovieLib";
const preloading = () => (
  <div class="lds-dual-ring"></div>
);

const PanelLayout = React.lazy(() => import("./Views/PanelLayout"));
const Dashboard = React.lazy(() => import("./Components/Dashboard/index.js"));

function App() {
  return (
    <div className="App">
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </>
      <HashRouter>
        <Suspense fallback={preloading()}>
          <Switch>
            <Route
              path="/"
              name="app"
              render={() => <PanelLayout/>}
            />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
