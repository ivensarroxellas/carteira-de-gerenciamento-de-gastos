import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateExpenses } from '../redux/actions/index';

class Table extends Component {
  handleClickDelete = (id) => {
    const { expenses, dispatch } = this.props;
    const expensesFiltered = expenses.filter((ex) => id !== ex.id);
    dispatch(updateExpenses(expensesFiltered));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          <tbody>
            {
              expenses.map(
                (ex) => (
                  <tr key={ ex.id }>
                    <td>{ex.description}</td>
                    <td>{ex.tag}</td>
                    <td>{ex.method}</td>
                    <td>{parseFloat(ex.value).toFixed(2)}</td>
                    <td>{ex.exchangeRates[ex.currency].name}</td>
                    <td>
                      {parseFloat(
                        ex.exchangeRates[ex.currency].ask,
                      ).toFixed(2)}

                    </td>
                    <td>
                      {(
                        ex.value * ex.exchangeRates[ex.currency].ask).toFixed(2)}
                    </td>
                    <td>Real</td>
                    <td>
                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => this.handleClickDelete(ex.id) }
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>),
              )
            }
          </tbody>
        </thead>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.any,
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Table);
