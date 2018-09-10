import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import * as ManagerTableActions from './ManagerTableActions';
import {LIST_TABLE_CONSTRAINT} from "../../../app/serviceConstants.js";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Input
} from 'reactstrap';
import Select from 'react-select'

import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities'
import swal from 'sweetalert';
import _ from 'lodash';

const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');

class ManagerTable extends Component {
  componentWillMount() {
    this.props.requestManagerTable();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <div className="card">
            <div className="card-header">
              <i className="fa fa-edit"/> ManagerTable Control
              <div className="card-header-actions">
                <button className="btn btn-primary"
                        onClick={() => this.props.handleChangeData("A", this.props.listKey)}>Add
                </button>
              </div>
            </div>
            <div className="card-body">
              {
                Object.keys(this.props.managerTableData).map((tableData) => {
                  return (
                    <div className="list-group-item panel panel-default" key={tableData}>
                      <div className="panel-body form-group">
                        <div className="row g-bg-gray-light-v3 g-py-5">
                          <label v-for={tableData}
                                 className="col-9  font-weight-bold ">{tableData}:</label>
                          <div className="col-3 text-right">
                            <button className="btn btn-primary g-mr-5 g-px-15"
                                    onClick={() => this.props.handleChangeData("E", this.props.listKey, tableData, this.props.managerTableData[tableData])}>Edit
                            </button>
                            <button className="btn btn-danger"
                                    onClick={() => this.props.handleDeleteData(tableData)}>Delete
                            </button>
                          </div>
                        </div>
                        <div className="col-12 g-pt-10">
                          {Object.keys(this.props.managerTableData[tableData]).map((property) => {
                            return (
                              <div className="form-group row" key={tableData + property}>
                                <div className="col-1"></div>
                                <label v-for={property} className="col-5">{property}:</label>
                                <div className="col-6">
                                  {/*<input className="form-control" id={property}*/}
                                  {/*value={this.props.managerTableData[tableData][property]} onChange={(e) => {*/}
                                  {/*this.props.changeData(tableData, property, e.target.value)*/}
                                  {/*}}*/}
                                  {this.props.managerTableData[tableData][property]}
                                  {/*/>*/}
                                </div>
                              </div>
                            )
                          })
                          }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Row>
        <Modal isOpen={this.props.showModal} toggle={() => this.props.handleShowModal(false)}>
          <ModalHeader toggle={() => this.props.handleShowModal(false)}>Add Data</ModalHeader>
          <ModalBody>
            {
              this.props.listKey.map(key => {
                let defaultValue = [];
                if(this.props.tmpData[key.value] && this.props.constraintData[key] && LIST_TABLE_CONSTRAINT[this.props.tableName][key]){
                  let listKey = this.props.tmpData[key.value].split(",");
                  defaultValue = this.props.constraintData[key].data.filter(v=>_.contains(listKey, v.value));
                }
                return (
                  <div className="form-group" key={key}>
                    <label className="col-12">{key}</label>
                    <div className="col-12">
                      {
                        this.props.constraintData[key] ?
                          LIST_TABLE_CONSTRAINT[this.props.tableName][key] ?
                            <Select
                              defaultValue = {defaultValue}
                              options={this.props.constraintData[key].data}
                              // value={this.props.tmpData[key]}
                              onChange={(e) => {
                                this.props.handleChangeDataAddMultiple(key, e)
                              }}
                              isMulti
                            />
                            :
                            <Input type="select" value={this.props.tmpData[key.value]} onChange={(e) => {
                              this.props.handleChangeDataAdd(key, e.target.value);
                            }}
                            >
                              {this.props.constraintData[key].data.map(k => {
                                return (
                                  <option value={k.value} key={k.value}>{k.label}</option>
                                )
                              })}
                            </Input>
                          :
                          <Input type="text" disabled={key == 'ID' && this.props.screenType == "E"}
                                 className="form-control"
                                 value={this.props.tmpData[key]} onChange={(e) => {
                            this.props.handleChangeDataAdd(key, e.target.value);
                          }}/>
                      }
                    </div>
                  </div>
                )
              })
            }

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.saveManagerTable()}>Submit</Button>
            <Button color="secondary" onClick={() => this.props.handleShowModal(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errorMsg: state.managerTable.errorMsg,
    showModal: state.managerTable.showModal,
    isShowLoader: state.managerTable.isRequesting,
    managerTableData: state.managerTable.managerTableData,
    listKey: state.managerTable.listKey,
    tmpData: state.managerTable.tmpData,
    constraintData: state.managerTable.constraintData,
    screenType: state.managerTable.screenType,
    tableName: state.managerTable.tableName
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestManagerTable: () => {
      let tableName = new URLSearchParams(ownProps.location.search).get('tableName');
      dispatch(ManagerTableActions.setTableName(tableName));
      dispatch(ManagerTableActions.requestManagerTableData());
    },
    saveManagerTable: () => {
      dispatch(ManagerTableActions.requestManagerTableData());
    },
    changeData: (obj, key, value) => {
      dispatch(ManagerTableActions.changeData(obj, key, value));
    },
    handleShowModal: (showModal) => {
      dispatch(ManagerTableActions.setShowModal(showModal));
    },
    handleChangeData: (screenType, listKey, key, data) => {
      let addData = {};
      if (screenType == "A") {
        listKey.map(k => {
          addData[k] = "";
        });
      } else {
        listKey.map(k => {
          addData[k] = k == 'ID' ? key : data[k]
        });
      }
      dispatch(ManagerTableActions.setScreenType(screenType));
      dispatch(ManagerTableActions.setShowModal(true));
      dispatch(ManagerTableActions.setTmpData(addData))
    },
    handleChangeDataAdd: (key, value) => {
      dispatch(ManagerTableActions.handleChangeDataAdd(key, value));
    },
    handleChangeDataAddMultiple: (key, value) => {
      let valueProcessed = [];
      value.map(v => {
        valueProcessed.push(v.value);
      });
      dispatch(ManagerTableActions.handleChangeDataAdd(key, valueProcessed.join(",")));
    },
    handleDeleteData: (key) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(ManagerTableActions.setScreenType("D"));
            dispatch(ManagerTableActions.handleDeleteData(key));
            dispatch(ManagerTableActions.requestManagerTableData());
          }
        });
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManagerTable));
