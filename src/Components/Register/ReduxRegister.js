import * as registerActions from '../../Redux/Actions/registerActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from './Register';

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(registerActions, dispatch);
}

const ReduxRegister = connect(mapStateToProps, mapDispatchToProps)(Register);

export default ReduxRegister;