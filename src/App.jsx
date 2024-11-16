import { useState } from 'react'
import NewScreen from './components/NewScreen'
import stocks from './data/stocks';
import StockTable from './components/StockTable';

function App() {

  const tempStocks = [];
  const [filteredStocks, setFilteredStocks] = useState([]);

  const searchStocks = (queries) => {
    for(let stock of stocks) {
      let conditionSatisfied = true;
      for(let query of queries) {
        if(query.sign === ">") {
          if(stock[query.field] > query.value) continue;
          else {
            conditionSatisfied = false;
            break;
          }
        } else if(query.sign === "<") {
            if(stock[query.field] < query.value) continue;
            else {
              conditionSatisfied = false;
              break;
            }
        } else {
          if(stock[query.field] === query.value) continue;
          else {
            conditionSatisfied = false;
            break;
          }
        }
      }
      if(conditionSatisfied) {
        tempStocks.push(stock);
      }
    }
    setFilteredStocks(tempStocks);
  }

  return (
    <>
      {filteredStocks.length > 0 && <StockTable filteredStocks={filteredStocks}/>}
      <NewScreen submitQueries={searchStocks}/>
    </>
  );

}

export default App
