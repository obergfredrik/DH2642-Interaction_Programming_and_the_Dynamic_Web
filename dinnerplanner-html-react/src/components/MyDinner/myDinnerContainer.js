/**
 * 'Smart' Container component for the search results presentation.
 */
import { connect } from 'react-redux'
import MyDinner from './myDinner'

const mapStateToProps = state => ({
    numberOfGuests: state.numberOfGuests
})

export default connect(mapStateToProps)(MyDinner);