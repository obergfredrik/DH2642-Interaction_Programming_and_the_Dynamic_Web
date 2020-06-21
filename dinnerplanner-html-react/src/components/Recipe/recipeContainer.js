/**
 * 'Smart' Container component for the dish recipe presentation.
 */
import { connect } from 'react-redux'
import Recipe from './recipe'
import { addDishAction } from '../../data/Actions'


const mapStateToProps = state => ({
  selectedDish: state.selectedDish,
  numberOfGuests: state.numberOfGuests
})

const mapDispatchToProps = dispatch => ({
  addToMenu: id => dispatch(addDishAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);