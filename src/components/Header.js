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

  render() {
    const { email } = this.props;
    const { cost } = this.state;
    return (
      <>
        <div>Header</div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ cost }</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
}
);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
