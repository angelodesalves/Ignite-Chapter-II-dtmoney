import { Container } from "./styles";

export function TransactionsTable() {
	return (
		<Container>
			<table>
				<thead>
					<th>Título</th>
					<th>Valor</th>
					<th>Categoria</th>
					<th>Data</th>
				</thead>
				<tbody>
					<tr>
						<td>Desenvolvimento site</td>
						<td className="deposit">R$10000</td>
						<td>Desenvolvimento</td>
						<td>20/01/2021</td>
					</tr>
					<tr>
						<td>Aluguel</td>
						<td className="withdraw">- R$1100</td>
						<td>Casa</td>
						<td>20/01/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}