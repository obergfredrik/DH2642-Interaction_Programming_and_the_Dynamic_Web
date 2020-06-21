import { connect } from 'react-redux'
import DishPresenter from './dishPresenter'

const mapStateToProps = state => ({
  dishes: state.dishes
})

export default connect(mapStateToProps)(DishPresenter);