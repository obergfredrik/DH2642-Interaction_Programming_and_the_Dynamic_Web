import { connect } from 'react-redux'
import PresentTotal from './presentTotal'
import { calculateTotalPrice } from '../../data/dinnerModelFunctions'
const mapStateToProps = state => ({
    totalPrice: calculateTotalPrice(state.dishes, state.numberOfGuests).toFixed(2)
})

export default connect(mapStateToProps)(PresentTotal);