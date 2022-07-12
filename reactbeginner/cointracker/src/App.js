import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Total coins {loading ? null : ": " + coins.length}</h1>
      <input onChange={onChange} placeholder="write down your money" />
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) :{" "}
              {dollar < 1
                ? coin.quotes.USD.price
                : dollar / coin.quotes.USD.price + " coins"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
