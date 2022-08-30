import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  /* handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }; */

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  render() {
    const { currencies } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <h2>WalletForm</h2>
        <label htmlFor="valorDespesa">
          <input
            id="valorDespesa"
            data-testid="value-input"
            type="number"
            /* value={ value }
            onChange={ this.handleChange } */
            placeholder="Digite valor da despesa"
          />
        </label>
        <label htmlFor="currency">
          Escolha a moeda:

          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            /* value={ currency }
            onChange={ this.handleChange } */
          >
            {
              currencies.map((cy) => <option key={ cy } value={ cy }>{cy}</option>)
            }
          </select>
        </label>
        <label htmlFor="descriçãoDespesa">
          <input
            id="descriçãoDespesa"
            data-testid="description-input"
            type="text"
            /* value={ description }
            onChange={ this.handleChange } */
            placeholder="Descrição da despesa"
          />
        </label>
        <label htmlFor="currencies">
          Escolha a método de pagamento:

          <select
            data-testid="method-input"
            name="paymentMethod"
            id="paymentMethod"
            /* value={ paymentMethod }
            onChange={ this.handleChange } */
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="currencies">
          Escolha a método de pagamento:

          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
            /* value={ tag }
            onChange={ this.handleChange } */
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps)(WalletForm);
