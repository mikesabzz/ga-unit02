import React from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isLoggedIn: false}
  }

  handleClick = () => {
    this.setState(prevState => {
      return prevState.isLoggedIn ?
        {isLoggedIn: false} :
        {isLoggedIn: true}
    })
  }

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = <LogoutButton onClick={this.handleClick} />
    } else {
      button = <LoginButton onClick={this.handleClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}
export default LoginControl;