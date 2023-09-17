import React, { useState } from 'react';
import { useFavorites } from '../../FavoriteContext';
import Cards from 'components/Cards/Cards';
import Modal from 'components/Modal/Modal';

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
    <section style={{ paddingBottom: '100px' }}>
      <Cards
        handleClick={() => handleOpenModal()}
        onData={handleCardsData}
        currentPage={1000}
        adverts={favorites}
      />
      {isOpenModal && <Modal openModal={setIsOpenModal} car={modalData} />}
    </section>
  );
}
