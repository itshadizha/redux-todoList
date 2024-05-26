import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { actionTypes } from "../store/reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  console.log(isAuth);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("email");

    const password = formData.get("password");

    if (name === "hadizhakozubaeva@gmail.com" && password === "222") {
      dispatch({ type: actionTypes.setTrue });
    }
  };

  console.log(isAuth);

  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <FormTitle>Log in </FormTitle>

      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" name="password" />
      </FormGroup>
      <SubmitButton type="submit">Sign Up</SubmitButton>
    </FormContainer>
  );
};

export default Login;

const FormContainer = styled(Form)`
  width: 450px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
