import { Summary } from "../Sumamry";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
	return (
		<Container>
			<Summary></Summary>
			<TransactionsTable/>
		</Container>
	);
}