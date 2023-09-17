import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;

export const selectCars = state => state.cars.items;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    if (cars !== undefined) {
      const result = cars.filter(product => {
        const brandMatch =
          !filter.brand ||
          product.make.toLowerCase().includes(filter.brand.toLowerCase());
        const priceMatch =
          !parseInt(filter.price) ||
          parseInt(product.rentalPrice.replace('$', '')) <=
            parseInt(filter.price);
        const mileageMatchMin =
          !parseInt(filter.fromValue) ||
          parseInt(filter.fromValue) <= parseInt(product.mileage);
        const mileageMatchMax =
          !parseInt(filter.toValue) ||
          parseInt(product.mileage) <= parseInt(filter.toValue);

        return brandMatch && priceMatch && mileageMatchMin && mileageMatchMax;
      });

      return result;
    }
  }
);
