import React from 'react';

import { connect } from 'react-redux';

import Gandalf from 'gandalf-validator';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { loginUser } from '../../redux/actions';

import styles from './styles.css';

const redButtonStyles = {
  background: '#B71C1C',
  color: '#FFF'
}

const buttonStyles = {
  margin: '20px 0'
}

class LoginForm extends Gandalf{
  constructor() {

    const fields = [
      {
        name: 'email',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
        },
        debounce: 300
      },
      {
        name: 'password',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
          type: 'password'
        },
        debounce: 300
      }
    ]

    super(fields);
  }

  handleSubmit() {
    const data = this.getCleanFormData();

    if(!data) return;

    console.log(data);
    this.props.dispatch(loginUser(data));
  }

  render() {
    const fields = this.state.fields;

    return (
      <form className={styles.loginForm}>
        <h2>Login</h2>

        { fields.email.element } <br />
        { fields.password.element } <br />
        <div className={styles.loginActions}>
          <RaisedButton
            label={'Login'}
            style={buttonStyles}
            buttonStyle={redButtonStyles}
            labelColor="#FFF"
            onTouchTap={() => this.handleSubmit()}
          />
          <FlatButton
            label={'Sign up'}
            style={buttonStyles}
          />
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    weeks: state.weeks
  };
}

export default connect(mapStateToProps)(LoginForm);
