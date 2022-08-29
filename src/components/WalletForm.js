import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        <div>WalletForm</div>
        <label htmlFor="valorDespesa">
          <input
            id="valorDespesa"
            data-testid="value-input"
            type="number"
            placeholder="Digite valor da despesa"
          />
        </label>
        <label htmlFor="currencies">
          Escolha a moeda:

          <select data-testid="currency-input" name="currencies" id="currencies">
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
            placeholder="Descrição da despesa"
          />
        </label>
        <label htmlFor="currencies">
          Escolha a método de pagamento:

          <select data-testid="method-input" name="currencies" id="currencies">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="currencies">
          Escolha a método de pagamento:

          <select data-testid="tag-input" name="currencies" id="currencies">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </>
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
