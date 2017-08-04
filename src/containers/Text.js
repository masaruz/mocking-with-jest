import { connect } from 'react-redux'
import { setText } from '../actions'
import Textbox from '../components/Textbox'

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    typeText: (e) => {
      dispatch(setText(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Textbox)