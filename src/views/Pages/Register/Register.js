import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import * as registerActions from './RegisterActions';
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : "",
      email: "",
      password : "",
      rePassword: "",
      validation: {}
    }
  }

  _onChange(fieldName, value){
    if(fieldName == 'username'){
      this.setState({username: value})
    } else if(fieldName == 'password'){
      this.setState({password: value})
    } else if(fieldName == 'email'){
      this.setState({email: value})
    } else if(fieldName == 'rePassword'){
      this.setState({rePassword: value})
    }
  }

  register(){
    // validation
    if(this.state.username == ""){
      this.props.setError("Please fill Username");
      return;
    } else if(this.state.email == ""){
      this.props.setError("Please fill Email");
      return;
    }else if(this.state.password == ""){
      this.props.setError("Please fill Password");
      return;
    }
    else if(this.state.rePassword == ""){
      this.props.setError("Please fill recheck Password");
      return;
    }else if(this.state.password != this.state.rePassword){
      this.props.setError("recheck password not match");
      return;
    }
    this.props.register(this.state.username, this.state.email, this.state.password, this.props.history)
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  {
                    this.props.errorMsg ?
                      <p className="alert alert-danger">{this.props.errorMsg}</p>: ""
                  }

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Username" invalid={true} onChange={(e)=>this._onChange('username', e.target.value)}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Email"  onChange={(e)=>this._onChange('email', e.target.value)}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="password" placeholder="Password"  onChange={(e)=>this._onChange('password', e.target.value)}/>
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="password" placeholder="Repeat password"  onChange={(e)=>this._onChange('rePassword', e.target.value)}/>
                  </InputGroup>
                  <Button color="success" block onClick={()=>{this.register()}}>Create Account</Button>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errorMsg: state.register.errorMsg,
    isShowLoader: state.register.isRequestingLogin,
    history: ownProps.history,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: (username, email, password, history) => {
      dispatch(registerActions.registerUser(username, email, password, history));
    },
    setError: (error) => {
      dispatch(registerActions.requestRegisterFailure(error));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
