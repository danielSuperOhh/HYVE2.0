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
    ['Transparency', 'glasses.png', 'sick.png'],
    ['Withdrawal to local account', 'angleSmile.png', 'diss.png'],
    ['Crypto support', 'eyes.png', 'ever.png'],
    ['User interface', 'Stable coin', 'sad.png'],
  ];

  const imageMap = {
    'glasses.png': glasses,
    'sick.png': sick,
    'angleSmile.png': angleSmile,
    'diss.png': diss,
    'eyes.png': eyes,
    'ever.png': ever,
    'sad.png': sad
  };
  

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
          {cellIndex >= 1 && imageMap[cell] ? (
            <img src={imageMap[cell]} alt={`Image ${index}`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
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
