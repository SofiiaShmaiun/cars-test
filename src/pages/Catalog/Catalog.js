import CardsList from 'components/CardsList/CardsList';
import { useEffect, useState } from 'react';
import styles from './Catalog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredCars } from '../../redux/selectors';
import { fetchCars } from '../../redux/operations';

export default function Catalog() {
  const dispatch = useDispatch();

  const [loadMoreButton, setLoadMoreButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const filteredCars = useSelector(selectFilteredCars);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage * 8 >= filteredCars.length) {
      setLoadMoreButton(false);
    }
  };

  useEffect(() => {
    if (filteredCars.length > 8) {
      setLoadMoreButton(true);
    } else {
      setLoadMoreButton(false);
    }
  }, [filteredCars]);

  return (
    <CardsList adverts={filteredCars} currentPage={currentPage}>
      {loadMoreButton && (
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load more
        </button>
      )}
    </CardsList>
  );
}
