import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { loginUser } from "../../store/user-slice";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {
  Card,
  CardBody,
  Label,
  Input,
  Button,
  FormGroup,
  Form,
} from "reactstrap";

const UserLoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const INITIAL_STATE = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginUser(formData));
    setFormData(INITIAL_STATE);
    // console.log(currentUser);
  };

  useEffect(() => {
    if (isLoggedIn) {
      return redirect("/");
    }
  }, [isLoggedIn]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });
  useEffect(() => {
    if (loading) {
      document.getElementById("btn-login").disabled = true;
      // } else if (!loading) {
      //   document.getElementById("btn-login").disabled = false;
    }
  }, [loading]);

  return (
    <section>
      <Card>
        <h1>Login</h1>
        <CardBody className="text-center">
          {loading ? (
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#c19595" />
            </View>
          ) : (
            ""
          )}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                className="form-control"
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                value={formData.username}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={formData.password}
              />
            </FormGroup>
            <Button
              id="btn-login"
              className="btn btn-lg btn-block"
              type="submit"
            >
              LogIn
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
};

export default UserLoginForm;
