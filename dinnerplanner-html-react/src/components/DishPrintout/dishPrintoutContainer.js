import { connect } from 'react-redux'
import DishPrintout from './dishPrintout'

const mapStateToProps = state => ({
  dishes: state.dishes
})

export default connect(mapStateToProps)(DishPrintout);