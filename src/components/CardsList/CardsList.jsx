import React, { useState } from 'react';
import styles from './CardsList.module.css';
import Cards from 'components/Cards/Cards';
import Modal from '../../components/Modal/Modal.jsx';
import { Filter } from 'components/Filter/Filter';

export default function CardsList({ adverts, children, currentPage }) {
  const [isOpenModal, setIsOpenModal] = useState();
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleCardsData = item => {
    setModalData(item);
  };

  return (
    <main className={styles.container}>
      <Filter />
      <Cards
        handleClick={() => handleOpenModal()}
        onData={handleCardsData}
        currentPage={currentPage}
        adverts={adverts}
      />
      {isOpenModal && <Modal openModal={setIsOpenModal} car={modalData} />}
      {children}
    </main>
  );
}
