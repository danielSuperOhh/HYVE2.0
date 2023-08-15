import './table.css';
import glasses from '../../assets/glasses.png'
import sick from '../../assets/sick.png'
import angleSmile from '../../assets/angleSmile.png'
import diss from '../../assets/diss.png'
import eyes from '../../assets/eyes.png'
import ever from '../../assets/ever.png'
import sad from '../../assets/sad.png'



const Table = () => {
  const data = [
    ['Fees', '1.8%', '2% - 14%'],
    ['Processing time', 'Instant', '1 - 5 days'],
    ['Transparency', glasses, sick],
    ['Withdrawal to local account', angleSmile, diss],
    ['Crypto support', eyes, ever],
    ['User interface', 'Stable coin', sad],
  ];

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th></th>
            <th>Hyve's</th>
            <th>Others</th>
          </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                    {typeof cell === 'string' && cell.endsWith('.png') ? (
                        <img src={cell} alt={`Image ${index}`} style={{ maxWidth: '50px', maxHeight: '50px' }} />
                    ) : (
                        cell
                    )}
                    </td>
                ))}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
