import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
	models: {
		transaction: Model
	},
	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freela de website',
					type: 'deposit',
					amount: 5000,
					category: 'Dev',
					createdAt: '2021-02-12 09:00:00'
				},
				{
					id: 2,
					title: 'Financiamento',
					amount: 2000,
					type: 'withdraw',
					category: 'Casa',
					createdAt: '2021-02-27 08:00:00'
				}
			]
		});
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction')
		})

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody)

			return schema.create('transaction', data)
		})
	}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);