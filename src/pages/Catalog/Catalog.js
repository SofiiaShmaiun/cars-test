import CardsList from 'components/CardsList/CardsList';
import { useEffect, useState } from 'react';

export default function Catalog() {
  const [adverts, setAdverts] = useState([]);

  const BASE_URL = 'https://648b429517f1536d65eab001.mockapi.io/adverts';

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Ошибка сети: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAdverts(data);
      })
      .catch(error => {
        console.error('Произошла ошибка при загрузке данных:', error);
      });
  }, []);

  return <CardsList adverts={adverts} />;
}
