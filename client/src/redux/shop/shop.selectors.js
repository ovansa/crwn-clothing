import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => {
    return collections
      ? Object.keys(collections).map((key) => collections[key])
      : [];
  }
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    console.log('Select Collections', collections);
    return collections ? collections[collectionUrlParam] : null;
  });

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
