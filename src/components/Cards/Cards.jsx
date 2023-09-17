import React from 'react';
import { useFavorites } from '../../FavoriteContext';
import styles from './Cards.module.css';
import sprite from '../../img/sprite.svg';
import { Button } from 'components/Button/Button';

export default function Cards({
  handleClick,
  onData,
  currentPage,
  adverts,
  filterData,
}) {
  const { toggleFavorite, itemStates } = useFavorites();

  const getData = (inputString, n) => {
    return inputString.split(',')[n].trim();
  };

  const filteredCars = adverts.filter(product => {
    const brandMatch =
      !filterData.brand ||
      product.make.toLowerCase().includes(filterData.brand.toLowerCase());
    const priceMatch =
      !parseInt(filterData.price) ||
      parseInt(product.rentalPrice.replace('$', '')) <=
        parseInt(filterData.price);
    const mileageMatchMin =
      !parseInt(filterData.fromValue) ||
      parseInt(filterData.fromValue) <= parseInt(product.mileage);

    const mileageMatchMax =
      !parseInt(filterData.toValue) ||
      parseInt(product.mileage) <= parseInt(filterData.toValue);

    return brandMatch && priceMatch && mileageMatchMin && mileageMatchMax;
  });

  return (
    <ul className={styles.cardList}>
      {filteredCars.slice(0, currentPage * 8).map(item => (
        <li key={item.id} className={styles.card}>
          <button
            className={styles.favoriteButton}
            onClick={() => toggleFavorite(item)}
          >
            <svg
              width="18"
              height="18"
              className={` ${
                itemStates[item.id]
                  ? styles.activeFavoriteIcon
                  : styles.favoriteIcon
              }`}
            >
              <use xlinkHref={`${sprite}#heart`} />
            </svg>
          </button>

          <div className={styles.imageWrapper}>
            <img
              src={item.img || item.photoLink}
              alt={item.description}
              className={styles.image}
            />
          </div>

          <div className={styles.title}>
            <p>
              {item.make} <span className={styles.model}>{item.model},</span>{' '}
              {item.year}
            </p>
            <span>{item.rentalPrice}</span>
          </div>

          <div className={styles.information}>
            <ul className={styles.informationList}>
              <li>{getData(item.address, 1)}</li>
              <li>{getData(item.address, 2)}</li>
              <li>{item.rentalCompany}</li>
            </ul>
            <ul className={styles.informationList}>
              <li>{item.type}</li>
              <li>{item.model}</li>
              <li>{item.mileage}</li>
              <li
                style={{
                  width: '150px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.functionalities[0]}
              </li>
            </ul>
          </div>

          <Button
            additionalStyles={styles.learnMoreButton}
            onClick={() => {
              handleClick();
              onData(item);
            }}
          >
            Learn more
          </Button>
        </li>
      ))}
    </ul>
  );
}
