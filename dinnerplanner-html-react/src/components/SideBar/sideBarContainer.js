/**
 * 'Smart' Container component for the dish recipe presentation.
 */
import { connect } from 'react-redux'
import SideBar from './sideBar'
import { setNoGuestsAction, removeDishAction, setSidebarCollapsedAction } from '../../data/Actions'
import { calculateTotalPrice } from '../../data/dinnerModelFunctions'


const mapStateToProps = state => ({
  totalPrice: calculateTotalPrice(state.dishes, state.numberOfGuests).toFixed(1),
  numberOfGuests: state.numberOfGuests,
  dishes: state.dishes,
  userPrefs: state.userPrefs
})

const mapDispatchToProps = dispatch => {
  return {
    setNumberOfGuests: numGuests => dispatch(setNoGuestsAction(numGuests)),
    removeDish: id => dispatch(removeDishAction(id)),
    toggleSidebarCollapsed: state => dispatch(setSidebarCollapsedAction(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);