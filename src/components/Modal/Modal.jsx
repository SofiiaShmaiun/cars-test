import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import sprite from '../../img/sprite.svg';
import { createPortal } from 'react-dom';
import { Button } from 'components/Button/Button';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ openModal, car }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        openModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      openModal();
    }
  };

  const getAddress = (inputString, n) => {
    return inputString.split(',')[n].trim();
  };

  let todayYear = new Date();

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => openModal()}
        >
          <svg width="24" height="24" className={styles.closeIcon}>
            <use xlinkHref={`${sprite}#x`} />
          </svg>
        </button>
        <div className={styles.imageWrapper}>
          <img
            src={car.img}
            alt={car.description}
            className={styles.modalImage}
          />
        </div>
        <div className={styles.title}>
          <p>
            {car.make} <span className={styles.model}>{car.model},</span>{' '}
            {car.year}
          </p>
        </div>
        <div className={styles.information}>
          <ul className={styles.informationList}>
            <li>{getAddress(car.address, 1)}</li>
            <li>{getAddress(car.address, 2)}</li>
            <li>Id: {car.id}</li>
            <li>Year: {car.year}</li>
            <li>Type: {car.type}</li>
          </ul>
          <ul className={styles.informationList}>
            <li>Fuel Consumption: {car.fuelConsumption}</li>
            <li>Engine Size: {car.engineSize}</li>
          </ul>
        </div>
        <p className={styles.description}>{car.description}</p>
        <p className={styles.titles}>Accessories and functionalities:</p>
        <div className={styles.accessoriesFunctionalities}>
          <ul>
            {car.accessories.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {car.functionalities.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className={styles.titles}>Rental Conditions: </p>
        <div className={styles.conditions}>
          <ul>
            <li>
              Minimum age: <span>{todayYear.getFullYear() - car.year}</span>
            </li>
            <li>Valid driver's license</li>
          </ul>
          <ul>
            <li>Security deposite required </li>
            <li>
              Mileage:{' '}
              <span>
                {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </li>
            <li>
              Price: <span>{car.rentalPrice}</span>
            </li>
          </ul>
        </div>
        <a href="tel:+380730000000" target="_blank" rel="noreferrer noopener">
          <Button additionalStyles={styles.learnMoreButton}>Rental car</Button>
        </a>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
