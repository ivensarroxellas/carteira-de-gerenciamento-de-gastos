import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cost: 0,
    };
  }

  // Victor Matias ajudou imensamento no req 4
  calculate = (expenses) => expenses.reduce((acc, curr) => {
    const { value } = curr;
    const { currency } = curr;
    const { ask } = curr.exchangeRates[currency];
    const conv = Number(value) * Number(ask);
    acc += conv;
    return acc;
  }, 0);

  render() {
    const { email, expenses } = this.props;
    const { cost } = this.state;
    const totalPrice = expenses.length ? this.calculate(expenses) : cost;
    return (
      <>
        <div>Header</div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ totalPrice.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

Header.propTypes = {
  email: PropTypes.any,
  expenses: PropTypes.shape({
    length: PropTypes.number,
  }),
}.isRequired;
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
}
);

export default connect(mapStateToProps)(Header);
