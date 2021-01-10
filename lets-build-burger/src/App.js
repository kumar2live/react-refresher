import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import "./App.css";
import BurderBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import LayoutContainer from "./containers/Layout/LayoutContainer";
const Burger = React.lazy(() => import("./containers/Burger/Burger"));
class App extends Component {
  state = {};

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("props", this.props);

    let routes = null;

    if (this.props.isAuthenticated) {
    } else {
      routes = (
        <>
          <Switch>
            {/* <Route path="/burger" render={(props) => <Burger {...props}/>} /> */}
            <Route path="/burger" component={Burger} />
            <Route path="/" component={BurderBuilder} />
            <Redirect to="/burger" />
          </Switch>
        </>
      );
    }

    return (
      <>
        <LayoutContainer>
          <Suspense fallback={<p>Loading..</p>}>{routes}</Suspense>
        </LayoutContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isAuthenticated: state.authState.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
