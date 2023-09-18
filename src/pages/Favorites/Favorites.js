import React, { useState } from 'react';
import { useFavorites } from '../../FavoriteContext';
import Cards from 'components/Cards/Cards';
import Modal from 'components/Modal/Modal';
import styles from './Favorites.module.css';

export default function Favorites() {
  const { favorites } = useFavorites();

  const [isOpenModal, setIsOpenModal] = useState();
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleCardsData = item => {
    setModalData(item);
  };

  return (
    <main style={{ paddingBottom: '100px' }}>
      {favorites.length > 0 ? (
        <Cards
          handleClick={() => handleOpenModal()}
          onData={handleCardsData}
          currentPage={1000}
          adverts={favorites}
        />
      ) : (
        <h2 className={styles.text}>There is no favorites yet&#129335;</h2>
      )}

      {isOpenModal && <Modal openModal={setIsOpenModal} car={modalData} />}
    </main>
  );
}
