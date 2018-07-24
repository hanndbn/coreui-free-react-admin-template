import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import * as SettingControlActions from './SettingControlActions';
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
class SettingControl extends Component {
  componentWillMount() {
    this.props.requestSetting();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <div className="card">
            <div className="card-header">
              <i className="fa fa-edit"/> Setting Control
              <div className="card-header-actions">
              </div>
            </div>
            <div className="card-body">
              {
                Object.keys(this.props.settingData).map((settingKey)=>{
                  return(
                    <div className="form-group" key={settingKey}>
                      <label v-for={settingKey} className="col-3">{settingKey}:</label>
                      <div className="col-9 d-inline-block">
                        <input className="form-control" id={settingKey} value={this.props.settingData[settingKey]} onChange={(e)=>{this.props.changeData(settingKey, e.target.value)}}/>
                      </div>
                    </div>
                  )
                })
              }
              <div className="form-group text-center">
                <button className="btn btn-primary" onClick={()=>{this.props.saveSetting()}}>Save</button>
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
    errorMsg: state.setting.errorMsg,
    isShowLoader: state.setting.isRequesting,
    settingData: state.setting.settingData,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestSetting: () => {
      dispatch(SettingControlActions.requestSettingData());
    },
    saveSetting: () => {
      dispatch(SettingControlActions.setScreenType("E"));
      dispatch(SettingControlActions.requestSettingData());
    },
    changeData: (key, value) => {
      dispatch(SettingControlActions.changeData(key, value));
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingControl));
