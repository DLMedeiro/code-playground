import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  Label,
  Input,
  Button,
  FormGroup,
  Form,
  Row,
  Col,
} from "reactstrap";
import { registerUser } from "../../store/user-slice";
import { ActivityIndicator, StyleSheet, View } from "react-native";

function NewUserForm() {
  const dispatch = useDispatch();

  const INITIAL_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(registerUser(formData));
    setFormData(INITIAL_STATE);
  };
  useEffect(() => {
    if (isLoggedIn) {
      return redirect("/code-playground/");
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
    }
  }, [loading]);

  return (
    <section>
      <Card
        style={{
          borderColor: "#a0070a",
          backgroundColor: "#dac6c5",
          // background: "transparent",
          margin: "5rem",
          marginLeft: "10rem",
          marginRight: "10rem",
          paddingTop: "2rem",
          color: "#a0070a",
        }}
      >
        <h1>Create New Account</h1>
        <CardBody className="text-center">
          {loading ? (
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#a0070a" />
            </View>
          ) : (
            ""
          )}
          <Form onSubmit={submit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    required="required"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    required="required"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    required="required"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    required="required"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  required="required"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormGroup>
            </Row>

            <Button id="btn-login" className="btn btn-primary btn-lg btn-block">
              Create Account
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default NewUserForm;
