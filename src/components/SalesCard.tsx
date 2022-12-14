import './styles/SalesCard.css';
import { NotificationButton } from './NotificationButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function SalesCard() {
  return (
    <div className="card">
      <h2 className="sales-title">Vendas</h2>
      <div>
        <div className="form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <div className="red-btn">
                    <NotificationButton />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
