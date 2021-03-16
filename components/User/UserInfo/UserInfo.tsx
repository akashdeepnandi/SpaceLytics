import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthState } from "../../../redux/@types/Auth";
import { Store } from "../../../redux/@types/Store";
import { Container, UserText } from "./UserInfo.style";

interface UserInfoProps {
  user: any;
}

class UserInfo extends Component<UserInfoProps> {
  render() {
    const { user } = this.props;
    return (
      <Container>
        <UserText>Logged in as {user.email}</UserText>
      </Container>
    );
  }
}

const mapStateToProps = function (state: Store) {
  return { user: state.Auth.user };
};

export default connect(mapStateToProps)(UserInfo);
