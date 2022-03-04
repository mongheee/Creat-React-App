import { useEffect, useState } from "react";
/* 로딩메세지가 앱에 보이고  코인들이 나열되면 로딩메세지를 숨기고 코인들을 멋진 리스트로 보여준다.*/
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setcoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setcoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? null : `[${coins.length}]`}</h1>
      {loading ? (
        <strong>Loading ... </strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}
              {/* , {coin.aucoin.quotes.USD.price} */})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
