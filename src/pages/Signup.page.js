import * as React from 'react';
import Container from '@mui/material/Container';
import { Card } from '@mui/material';

import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../pages/contexts/user.context";

import styles from './Signup.page.module.css'

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // As explained in the Login page.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };


  // As explained in the Login page.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  }

  // As explained in the Login page.
  const onSubmit = async () => {
    try {
      const user = await emailPasswordSignup(form.email, form.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container maxWidth="sm" >
      <br />
      <Card sx={{
        bgcolor: 'white',
        height: '70vh',
        borderRadius: '5%',
        marginTop: '1.5vh',
      }}
      >
        <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto", marginTop: '7vh' }} autocomplete="off">
          <h1 className={styles.title}>Cadastre-se</h1>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={form.email}
            onInput={onFormInputChange}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            label="password"
            type="password"
            variant="outlined"
            name="password"
            value={form.password}
            onInput={onFormInputChange}
            style={{ marginBottom: "1rem" }}
          />

          <Button variant="contained" color="primary" onClick={onSubmit}>
            Enviar Cadastro
          </Button>
          <br />
          <p>Já tem conta? <Link to="/login">
            <Button variant="contained">
              Login
            </Button>
          </Link></p>
        </form>
      </Card>
      <br />

    </Container>
  );
}

export default Signup;