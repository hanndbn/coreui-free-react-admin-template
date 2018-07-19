import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');
class UserManager extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <div className="card">
            <div className="card-header">
              <i className="fa fa-edit"></i> DataTables
              <div className="card-header-actions">
                <a href="https://datatables.net" className="card-header-action" target="_blank">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div className="card-body">
              <div id="DataTables_Table_0_wrapper"
                   className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select
                      name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                      className="form-control form-control-sm">
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
                            colSpan="1" aria-sort="ascending" aria-label="Username: activate to sort column descending"
                            style={{width: '363px'}}>Username
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1"
                            aria-label="Date registered: activate to sort column ascending" style={{width: '314px'}}>Date
                          registered
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1"
                            aria-label="Role: activate to sort column ascending" style={{width: '149px'}}>Role
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1"
                            aria-label="Status: activate to sort column ascending" style={{width: '164px'}}>Status
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1"
                            aria-label="Actions: activate to sort column ascending" style={{width: '323px'}}>Actions
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr role="row" className="odd">
                        <td className="sorting_1">Adam Alister</td>
                        <td>2012/01/21</td>
                        <td>Staff</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">Adinah Ralph</td>
                        <td>2012/06/01</td>
                        <td>Admin</td>
                        <td>
                          <span className="badge badge-dark">Inactive</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">Ajith Hristijan</td>
                        <td>2012/03/01</td>
                        <td>Member</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">Alphonse Ivo</td>
                        <td>2012/01/01</td>
                        <td>Member</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">Anton Phunihel</td>
                        <td>2012/01/01</td>
                        <td>Member</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">Bao Gaspar</td>
                        <td>2012/01/01</td>
                        <td>Member</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">Bernhard Shelah</td>
                        <td>2012/06/01</td>
                        <td>Admin</td>
                        <td>
                          <span className="badge badge-dark">Inactive</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">Bünyamin Kasper</td>
                        <td>2012/08/23</td>
                        <td>Staff</td>
                        <td>
                          <span className="badge badge-danger">Banned</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">Carlito Roffe</td>
                        <td>2012/08/23</td>
                        <td>Staff</td>
                        <td>
                          <span className="badge badge-danger">Banned</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">Chidubem Gottlob</td>
                        <td>2012/02/01</td>
                        <td>Staff</td>
                        <td>
                          <span className="badge badge-danger">Banned</span>
                        </td>
                        <td>
                          <a className="btn btn-success" href="#">
                            <i className="fa fa-search-plus "></i>
                          </a>
                          <a className="btn btn-info" href="#">
                            <i className="fa fa-edit "></i>
                          </a>
                          <a className="btn btn-danger" href="#">
                            <i className="fa fa-trash-o "></i>
                          </a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">
                      Showing 1 to 10 of 32 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a
                          href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabIndex="0"
                          className="page-link">Previous</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0"
                                                                            data-dt-idx="1" tabIndex="0"
                                                                            className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0"
                                                                      data-dt-idx="2" tabIndex="0"
                                                                      className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0"
                                                                      data-dt-idx="3" tabIndex="0"
                                                                      className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0"
                                                                      data-dt-idx="4" tabIndex="0"
                                                                      className="page-link">4</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#"
                                                                                                       aria-controls="DataTables_Table_0"
                                                                                                       data-dt-idx="5"
                                                                                                       tabIndex="0"
                                                                                                       className="page-link">Next</a>
                        </li>
                      </ul>
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

export default UserManager;
