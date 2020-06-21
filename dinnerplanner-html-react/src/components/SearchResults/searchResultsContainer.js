/**
 * 'Smart' Container component for the search results presentation.
 */
import { connect } from 'react-redux'
import SearchResults from './searchResults'
import { fetchDishAction } from '../../data/Actions'


const mapStateToProps = state => ({
  searchResults: state.dishSearchResults
})

const mapDispatchToProps = (dispatch) => {
  return {
    selectDish: (id) => {
      dispatch(fetchDishAction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);