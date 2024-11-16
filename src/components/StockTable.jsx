import DataTable from 'react-data-table-component';
import './stockTable.css';

const StockTable = ({ filteredStocks }) => {

  const columns = [
    { name: 'Stock', selector: row => row["Ticker"] },
    { name: 'Mar Cap', selector: row => row["Market Capitalization"], sortable: true },
    { name: 'P/E', selector: row => row["P/E Ratio"], sortable: true },
    { name: 'ROE %', selector: row => row["ROE"], sortable: true },
    { name: 'DTE', selector: row => row["Debt To Equity Ratio"], sortable: true },
    { name: 'Div Yld %', selector: row => row["Dividend Yield"], sortable: true },
    { name: 'Revenue Growth %', selector: row => row["Revenue Growth"], sortable: true },
    { name: 'EPS', selector: row => row["EPS Growth"], sortable: true },
    { name: 'Current Ratio', selector: row => row["Current Ratio"], sortable: true },
    { name: 'Gross Margin %', selector: row => row["Gross Margin"], sortable: true },
  ];

  const customStyles = {
    headCells: {
      style: {
        color: "#625AFC",
        fontSize: "1.25em",
        fontWeight: "bolder"
      }
    },
    cells: {
      style: {
        fontSize: "1.1em"
      }
    }
  }

  return (
    <>
      <div className="table">
        <h1>Query Results</h1>
        <DataTable 
          columns={columns} 
          data={filteredStocks}
          customStyles={customStyles}
          pagination
        />
      </div>
    </>
  )
}

export default StockTable;