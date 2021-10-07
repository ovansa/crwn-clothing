import React, { useEffect } from 'react';
import { Route } from 'react-router';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionPage from '../collection/collection.component';

import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStart, match, isCollectionsLoaded }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
