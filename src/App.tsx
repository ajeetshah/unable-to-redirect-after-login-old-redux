import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

//PAGES
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import AdminWrapper from "./components/AdminWrapper";
import Dashboard from "./components/Pages/Dashboard";

interface Props {
  auth: {
    token: string;
  };
}

class App extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <Router>
          <Route
            path="/admin"
            render={(props) => {
              return (
                <AdminWrapper>
                  {this.props.auth.token ? <Dashboard /> : <Login />}
                </AdminWrapper>
              );
            }}
          />

          <Route
            exact={true}
            path="/"
            render={(props) => (
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          ></Route>

          <Route
            path="/about"
            render={(props) => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <PageWrapper>
                <Contact {...props} />
              </PageWrapper>
            )}
          />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
