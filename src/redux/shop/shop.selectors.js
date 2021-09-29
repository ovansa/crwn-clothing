import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => {
    console.log('Collections', collections);
    return collections
      ? Object.keys(collections).map((key) => collections[key])
      : [];
  }
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    console.log('collectionUrlParam collection', collectionUrlParam);
    return collections ? collections[collectionUrlParam] : null;
  });
