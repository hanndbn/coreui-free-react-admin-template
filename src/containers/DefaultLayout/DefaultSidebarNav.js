import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const {children, ...attributes} = this.props;

    return (
      <div className="sidebar">
        <nav className="sidebar-nav ps ps--active-y">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                <i className="nav-icon icon-speedometer"></i> Dashboard
                {/*<span className="badge badge-info">NEW</span>*/}
              </a>
            </li>
            <li className="nav-title">Challenge</li>
            <li className="nav-item">
              <a className="nav-link" onClick = {()=> {window.location.href="/#/managerTable?tableName=ChallengeData";window.location.reload();}}>
                <i className="nav-icon icon-drop"></i> Challenge Data</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick = {()=> {window.location.href="/#/managerTable?tableName=ChallengeTitle";window.location.reload();}}>
                <i className="nav-icon icon-drop"></i> Challenge Title</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick = {()=> {window.location.href="/#/managerTable?tableName=GameSettings";window.location.reload();}}>
                <i className="nav-icon icon-pencil"></i> Game Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick = {()=> {window.location.href="/#/managerTable?tableName=GameTypes";window.location.reload();}}>
                <i className="nav-icon icon-pencil"></i>Game Types</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick = {()=> {window.location.href="/#/managerTable?tableName=PlayType";window.location.reload();}}>
                <i className="nav-icon icon-pencil"></i>Play Type</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick = {()=> {window.location.href="/#/managerTable?tableName=Environment";window.location.reload();}}>
                <i className="nav-icon icon-pencil"></i>Environment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick = {()=> {window.location.href="/#/managerTable?tableName=Reward";window.location.reload();}}>
                <i className="nav-icon icon-pencil"></i>Reward</a>
            </li>
          </ul>
          <div className="ps__rail-x" >
            <div className="ps__thumb-x" tabIndex="0" ></div>
          </div>
          <div className="ps__rail-y" >
            <div className="ps__thumb-y" tabIndex="0"></div>
          </div>
        </nav>
        <button className="sidebar-minimizer brand-minimizer" type="button"></button>
      </div>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
