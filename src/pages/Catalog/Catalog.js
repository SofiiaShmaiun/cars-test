import CardsList from 'components/CardsList/CardsList';
import { useEffect, useState } from 'react';
import styles from './Catalog.module.css';

export default function Catalog() {
  const [adverts, setAdverts] = useState([]);
  const [loadMoreButton, setLoadMoreButton] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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

  const loadMore = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage * 8 >= 35) {
      setLoadMoreButton(false);
    }
  };

  return (
    <div>
      <CardsList adverts={adverts} currentPage={currentPage}>
        {loadMoreButton && (
          <button onClick={loadMore} className={styles.loadMoreButton}>
            Load more
          </button>
        )}
      </CardsList>
    </div>
  );
}
