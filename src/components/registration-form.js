import React from "react";
import { reduxForm, Field } from "redux-form";

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="firstName">First name</label>
        <Field component="input" type="text" name="firstName" />
        <label htmlFor="lastName">Last name</label>
        <Field component="input" type="text" name="lastName" />
        <label htmlFor="username">Username</label>
        <Field component="input" type="text" name="username" />
        <label htmlFor="password">Password</label>
        <Field component="input" type="password" name="password" />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field component="input" type="password" name="passwordConfirm" />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "login"
})(RegistrationForm);
