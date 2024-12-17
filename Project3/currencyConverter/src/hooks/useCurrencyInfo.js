import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${currency}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result[currency]);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (currency) {
      fetchCurrencyData();
    }
  }, [currency]);

  return { data, error, loading };
}

export default useCurrencyInfo;
