import './transactionTable.css'

const transactions = [
    {id: 1, name: 'John Ligma', bank: 'Ligma Bank', amount:'$500', status:'Completed'},
    {id: 2, name: 'Blake Deez', bank: 'Deez Bank', amount:'$3200', status:'Pending'},
    {id: 3, name: 'Fred Hot', bank: 'Hot Bank', amount:'$5000', status:'Failed'},
    {id: 4, name: 'Mary Spicy', bank: 'Spicy Bank', amount:'$100', status:'Completed'},
    {id: 5, name: 'Suss Miller', bank: 'Miller Bank', amount:'$300', status:'Completed'},
    {id: 6, name: 'Huge Balls', bank: 'Balls Bank', amount:'$50', status:'Pending'}

]


const TransactionTable = () => {

    const getStatusColor = (status) => {
        switch(status){
            case 'Completed': return 'green';
            case 'Failed': return 'red';
            case 'Pending': return 'orange';
            default: return 'black';
        }
    }
  return (
    <div className='transaction-table'>
        <table className='tablee'>
            <thead>
                <tr>
                    <th className='bally'>Name</th>
                    <th className='bally bank'>Bank</th>
                    <th className='bally'>Amount</th>
                    <th className='bally'>Status</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) =>(
                    <tr key={transaction.id}>
                        <td className='fully'>{transaction.name}</td>
                        <td className='fully bank'>{transaction.bank}</td>
                        <td className='fully'>{transaction.amount}</td>
                        <td className='fully' style={{color: getStatusColor(transaction.status)}}>{transaction.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TransactionTable