import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import * as userManagerActions from './UserManagerActions';
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
class UserManager extends Component {
  componentWillMount() {
    this.props.requestUser("");
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <div className="card">
            <div className="card-header">
              <i className="fa fa-edit"/> List Users
              <div className="card-header-actions">
              </div>
            </div>
            <div className="card-body">
              <div id="DataTables_Table_0_wrapper"
                   className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="DataTables_Table_0_length"><label>Show
                      <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                              className="form-control form-control-sm" onChange={(e) => {
                        this.props.setNumberPerPage(e.target.value)
                      }} value={this.props.numberPerPage}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select> entries</label></div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search"
                                                                                                           className="form-control form-control-sm"
                                                                                                           placeholder=""
                                                                                                           value={this.props.txtSearch}
                                                                                                           onChange={(e) => this.props.setTextSearch(e.target.value)}
                                                                                                           onKeyDown={(e) => {
                                                                                                             if (e.keyCode == 13) {
                                                                                                               this.props.requestUser();
                                                                                                             }
                                                                                                           }}
                                                                                                           aria-controls="DataTables_Table_0"/></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-striped table-bordered datatable dataTable no-footer"
                           id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info"
                           style={{borderCollapse: 'collapse !important'}}>
                      <thead>
                      <tr role="row">
                        <th className="sorting_asc" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1"
                            colSpan="1" aria-sort="ascending">STT
                        </th>
                        <th className="sorting_asc" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1"
                            colSpan="1" aria-sort="ascending">Username
                        </th>
                        <th className="sorting_asc" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1"
                            colSpan="1" aria-sort="ascending">Key
                        </th>
                        <th className="sorting_asc" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1"
                            colSpan="1" aria-sort="ascending">Email
                        </th>
                        <th className="sorting_asc" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1"
                            colSpan="1" aria-sort="ascending">Telephone
                        </th>
                        <th tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1"
                            colSpan="1">Action
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                        this.props.userData.map((user, idx) => {
                          return (
                            <tr role="row" className="odd" key={user.Key}>
                              <td className="sorting_1">{idx + 1}</td>
                              <td>{user.UserName}</td>
                              <td className="sorting_1">{user.Key}</td>
                              <td>{user.Email}</td>
                              <td>{user.Telephone}</td>
                              <td>
                                <button className="btn btn-info" style={{color: "white"}}>Detail</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                      {/*<tr role="row" className="odd">*/}
                      {/*<td className="sorting_1">Adam Alister</td>*/}
                      {/*<td>2012/01/21</td>*/}
                      {/*<td>Staff</td>*/}
                      {/*<td>*/}
                      {/*<span className="badge badge-success">Active</span>*/}
                      {/*</td>*/}
                      {/*<td>*/}
                      {/*<a className="btn btn-success" href="#">*/}
                      {/*<i className="fa fa-search-plus "/>*/}
                      {/*</a>*/}
                      {/*<a className="btn btn-info" href="#">*/}
                      {/*<i className="fa fa-edit "/>*/}
                      {/*</a>*/}
                      {/*<a className="btn btn-danger" href="#">*/}
                      {/*<i className="fa fa-trash-o "/>*/}
                      {/*</a>*/}
                      {/*</td>*/}
                      {/*</tr>*/}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">
                      {/*Showing {(this.props.numberPerPage * (this.props.pageIndex - 1)) + 1} to {this.props.numberPerPage * this.props.pageIndex} of {this.props.userData.length} entries*/}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                      <Pagination
                        activePage={this.props.pageIndex}
                        itemsCountPerPage={this.props.numberPerPage}
                        totalItemsCount={this.props.itemCount}
                        onChange={(e) => {
                          this.props.setPageIndex(e)
                        }}
                      />
                    </div>
                  </div>
                </div>
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
    errorMsg: state.userManager.errorMsg,
    isShowLoader: state.userManager.isRequesting,
    userData: state.userManager.userData,
    pageIndex: state.userManager.pageIndex,
    numberPerPage: state.userManager.numberPerPage,
    txtSearch: state.userManager.txtSearch,
    itemCount: state.userManager.itemCount,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestUser: () => {
      dispatch(userManagerActions.requestUserData());
    },
    setNumberPerPage: (numberPerPage) => {
      dispatch(userManagerActions.setNumberPerPage(numberPerPage));
      dispatch(userManagerActions.requestUserData());
    },
    setPageIndex: (pageIndex) => {
      dispatch(userManagerActions.setPageIndex(pageIndex));
      dispatch(userManagerActions.requestUserData());
    },
    setTextSearch: (txtSearch) => {
      dispatch(userManagerActions.setTextSearch(txtSearch));
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserManager));
