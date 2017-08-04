import { connect } from 'react-redux'
import { tryGetUser } from '../actions'
import UserTable from '../components/UserTable'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tryGetUser: () => {
      dispatch(tryGetUser('vnglst'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable)