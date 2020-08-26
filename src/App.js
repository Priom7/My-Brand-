import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import HomePage from "./page/homepage/homepage.component";
import Shop from "./page/shopPage/shop.component";
import Header from "./components/header/header.component";
import ContactFooter from "./components/contact-footer/contact-footer.component";
import AuthPage from "./page/authPage/authPage";
import { setCurrentUser } from "./redux/user/user.action";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(
            userAuth
          );
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } else {
          setCurrentUser(userAuth);
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>

        <div className='app'>
          <Switch>
            <Route
              exact
              path='/'
              component={HomePage}
            ></Route>

            <Route path='/shop' component={Shop}></Route>
            <Route
              exact
              path='/auth'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/'></Redirect>
                ) : (
                  <AuthPage></AuthPage>
                )
              }
            ></Route>
          </Switch>
        </div>
        <ContactFooter></ContactFooter>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
