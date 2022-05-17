import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Criação landing page</td>
            <td className="deposit">R$800,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Conta de energia elétrica</td>
            <td className="withdraw" >- R$500,00</td>
            <td>Casa</td>
            <td>22/02/2021</td>
          </tr>
          <tr>
            <td>Vendas</td>
            <td className="deposit">R$200,00</td>
            <td>Extra</td>
            <td>27/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}