import React from 'react';
import Gandalf from 'gandalf-validator';

import TextField from 'material-ui/TextField';

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

  render() {
    const fields = this.state.fields;

    return (
      <form>
        <h2>Login</h2>

        { fields.email.element } <br />
        { fields.password.element } <br />
      </form>
    );
  }
}

export default LoginForm;
