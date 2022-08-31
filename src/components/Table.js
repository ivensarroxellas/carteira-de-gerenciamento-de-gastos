import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
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
                  <tr key={ expenses.id }>
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
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps)(Table);
