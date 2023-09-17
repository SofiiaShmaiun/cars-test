import React, { useState } from 'react';
import styles from './CardsList.module.css';
import Cards from 'components/Cards/Cards';
import Modal from '../../components/Modal/Modal.jsx';
import { Filter } from 'components/Filter/Filter';

export default function CardsList({ adverts }) {
  const [isOpenModal, setIsOpenModal] = useState();
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreButton, setLoadMoreButton] = useState(true);
  const [filterData, setFilterData] = useState({
    price: '',
    brand: '',
    fromValue: '',
    toValue: '',
  });

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleCardsData = (item, showLoadMoreButton) => {
    setModalData(item);

    if (showLoadMoreButton) {
      setLoadMoreButton(true);
    }
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage * 8 >= 50) {
      setLoadMoreButton(false);
    }
  };

  return (
    <section className={styles.container}>
      <Filter filterData={filterData} setFilterData={setFilterData} />
      <Cards
        handleClick={() => handleOpenModal()}
        onData={handleCardsData}
        currentPage={currentPage}
        adverts={adverts}
        filterData={filterData}
      />
      {isOpenModal && <Modal openModal={setIsOpenModal} car={modalData} />}
      {loadMoreButton && (
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load more
        </button>
      )}
    </section>
  );
}
