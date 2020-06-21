/** Smart component for the presentation component dishSearch*/
import { connect } from 'react-redux'
import DishSearch  from './dishSearch'
import { fetchSearchDishesAction } from '../../data/Actions'

const mapDispatchToProps = dispatch => ({
  searchForDish: (type, query) => {
  dispatch(fetchSearchDishesAction(type, query))},
  searchForAutoComplete: text => {console.log(text)}
})

export default connect(null, mapDispatchToProps)(DishSearch);