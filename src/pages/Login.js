import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.validation();
    });
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(handleUser(email));
    history.push('/carteira');
  };

  validation = () => {
    const CINCO = 5;
    const { email, password } = this.state;
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(emailRegex) && password.length > CINCO) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
  };

  render() {
    const { password, isButtonDisabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="Email">
            <input
              id="Email"
              name="email"
              data-testid="email-input"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="Password">
            <input
              id="Password"
              name="password"
              data-testid="password-input"
              type="password"
              placeholder="Digite sua senha"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <button
          type="button"
          disabled={ isButtonDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
