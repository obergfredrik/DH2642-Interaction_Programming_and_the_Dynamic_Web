/**
 * 'Dumb' presentation component for the search results view.
 */
import React from "react";
import DishPreview from '../DishPreview/dishPreview';
import Loader from '../Loader/loader';
import PropTypes from 'prop-types';
import './searchResults.css';

function SearchResults(props) {
  let searchResults = props.searchResults.result;
  let isLoading = props.searchResults.inProgress;
  return (
    <div className="searchResults">
      <Loader visible={isLoading} />
      <div className="dish-search-results-container">
        <div className="dish-previews-container">
          {
            searchResults.map(result =>
              <DishPreview key={result.id.toString()}
                dishImageURL={result.imageUrls[0]}
                dishTitle={result.title}
                dishPreviewClicked={() => { props.selectDish(result.id) }} />)
          }
        </div>
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  searchResults: PropTypes.object.isRequired,
  selectDish: PropTypes.func.isRequired
};
export default SearchResults;
