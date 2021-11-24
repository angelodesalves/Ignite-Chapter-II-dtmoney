import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction {
	id: number,
	title: string,
	amount: number,
	type: string,
	category: string,
	createdAt: string
}

// interface TransactionInput {
// 	title: string,
// 	amount: number,
// 	type: string,
// 	category: string
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
	children: ReactNode
}

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
//	ao criar um contexto, gera erro pois não retorna o formato esperado
//	o recomendado é "forçar" a tipagem para enganar o typescript
//	isso não acaba sendo um problema, pois o valor já é setado no provider logo abaixo
	{} as TransactionsContextData
);

export function TransactionsProvider({ children } : TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('transactions')
			.then(response => setTransactions(response.data.transactions));
	}, []);

	async function createTransaction(TransactionInput: TransactionInput) {
		const response = await api.post('/transactions', {
			...TransactionInput,
			createdAt: new Date()
		});
		const { transaction } = response.data;

		setTransactions([
			...transactions,
			transaction
		]);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	)
}