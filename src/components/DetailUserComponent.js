import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Brand</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.brand}</td>
        </tr>
        <tr>
          <td width="200">Model</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.model}</td>
        </tr>
        <tr>
          <td width="200">Price</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.price}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
