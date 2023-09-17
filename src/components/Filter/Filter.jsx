import { useState } from 'react';
import styles from './Filter.module.css';
import sprite from '../../img/sprite.svg';
import makes from '../makes.json';
import { Button } from 'components/Button/Button';

export const Filter = ({ setFilterData }) => {
  const [isListVisible, setBrandsListVisible] = useState(false);
  const [isPricesListVisible, setPricesListVisible] = useState(false);
  const [formData, setFormData] = useState({
    price: '',
    brand: '',
    fromValue: '',
    toValue: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFilterData(formData);
  };

  // const handleSearchByBrand = e => {
  //   formData.brand = e.target.value;
  //   const filteredMakes = makes.filter(car =>
  //     car.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  //   if (inputValue === '') {
  //     setDropdownCars(makes);
  //   }
  //   setDropdownCars(filteredMakes);
  //   setBrandsListVisible(true);
  // };

  const handleBrandClick = car => {
    setFormData({
      ...formData,
      brand: car,
    });
    setBrandsListVisible(false);
  };

  // const handleSearchByPrice = e => {
  //   formData.price = e.target.value;
  //   setPricesListVisible(true);
  // };

  const handlePriceClick = price => {
    setFormData({
      ...formData,
      price: price,
    });
    setPricesListVisible(false);
  };

  const numbers = Array.from(
    { length: 600 / 10 + 1 },
    (_, index) => 0 + index * 10
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="carSearch">Car brand</label>
        <div>
          <input
            type="text"
            id="carSearch"
            name="brand"
            placeholder="Enter the text"
            value={formData.brand}
            onChange={handleInputChange}
            className={styles.searchInput}
            autoComplete="off"
          />
          <svg
            width="20"
            height="20"
            className={`${styles.searchIcon} ${
              !isListVisible ? styles.rotateIcon : ''
            }`}
            onClick={() => setBrandsListVisible(!isListVisible)}
          >
            <use xlinkHref={`${sprite}#chevron-down`} />
          </svg>
        </div>
        {isListVisible && (
          <ul className={styles.dropDown}>
            {makes.map(car => (
              <li
                key={car}
                onClick={() => handleBrandClick(car)}
                className={styles.option}
              >
                {car}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label htmlFor="priceInput">Price/ 1 hour</label>
        <div>
          <input
            type="text"
            id="priceInput"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="To $"
            className={styles.priceInput}
            autoComplete="off"
          ></input>
          <svg
            width="20"
            height="20"
            className={`${styles.searchPriceIcon} ${
              !isPricesListVisible ? styles.rotatePriceIcon : ''
            }`}
            onClick={() => setPricesListVisible(!isPricesListVisible)}
          >
            <use xlinkHref={`${sprite}#chevron-down`} />
          </svg>
        </div>
        {isPricesListVisible && (
          <ul className={styles.dropDownPrice}>
            {numbers.map(number => (
              <li
                key={number}
                onClick={() => handlePriceClick(number)}
                className={styles.option}
              >
                {number}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.inputBlock}>
        <label htmlFor="mileageInput">Car mileage / km</label>
        <div className={styles.rangeInputs}>
          <input
            type="number"
            id="mileageInput"
            name="fromValue"
            value={formData.fromValue}
            onChange={handleInputChange}
            placeholder="From"
            className={styles.fromValue}
            autoComplete="off"
          ></input>
          <input
            type="number"
            id="mileageInput"
            name="toValue"
            value={formData.toValue}
            onChange={handleInputChange}
            placeholder="To"
            className={styles.toValue}
            autoComplete="off"
          ></input>
        </div>
      </div>

      <Button type="submit" additionalStyles={styles.searchButton}>
        Search
      </Button>
    </form>
  );
};
