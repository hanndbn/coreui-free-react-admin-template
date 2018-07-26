import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import * as JackpotManagerActions from './JackpotManagerActions';
import Pagination from 'react-js-pagination';
import {
  Row,
} from 'reactstrap';

import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');
class JackpotManager extends Component {
  componentWillMount() {
    this.props.requestJackpotManager();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <div className="card">
            <div className="card-header">
              <i className="fa fa-edit"/> JackpotManager Control
              <div className="card-header-actions">
              </div>
            </div>
            <div className="card-body">
              {
                Object.keys(this.props.jackpotManagerData).map((jackpotManagerKey)=>{
                  return(
                    <div className="form-group" key={jackpotManagerKey}>
                      <label v-for={jackpotManagerKey} className="col-3">{jackpotManagerKey}:</label>
                      <div className="col-9 d-inline-block">
                        <input className="form-control" id={jackpotManagerKey} value={this.props.jackpotManagerData[jackpotManagerKey]} onChange={(e)=>{this.props.changeData(jackpotManagerKey, e.target.value)}}/>
                      </div>
                    </div>
                  )
                })
              }
              <div className="form-group text-center">
                <button className="btn btn-primary" onClick={()=>{this.props.saveJackpotManager()}}>Save</button>
              </div>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    errorMsg: state.jackpotManager.errorMsg,
    isShowLoader: state.jackpotManager.isRequesting,
    jackpotManagerData: state.jackpotManager.data,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestJackpotManager: () => {
      dispatch(JackpotManagerActions.requestJackpotManagerData());
    },
    saveJackpotManager: () => {
      dispatch(JackpotManagerActions.setScreenType("E"));
      dispatch(JackpotManagerActions.requestJackpotManagerData());
    },
    changeData: (key, value) => {
      dispatch(JackpotManagerActions.changeData(key, value));
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JackpotManager));
