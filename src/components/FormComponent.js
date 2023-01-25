import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";

const renderField = ({ input, type, placeholder, label, disabled, readOnly, meta: { touched, error, warning } }) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></Input>
      {touched && ((error && <p style={{ color: "red" }}>{error}</p>) || (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      brand: state.users.getUserDetail.brand,
      model: state.users.getUserDetail.model,
      price: state.users.getUserDetail.price,
    },
  };
};

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field type="text" name="brand" component={renderField} label="Brand :" />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field type="text" name="model" component={renderField} label="Model :" />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field type="text" name="price" component={renderField} label="Price :" />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button color="primary" type="submit" disabled={this.props.submitting}>
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "FormCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
