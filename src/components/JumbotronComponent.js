import React from "react";
import { Jumbotron, Container } from "reactstrap";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.users.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">Kelompok yang dibuat untuk mengikuti pembelajaran mata kuliah pengembangan aplikasi berbasis web.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
