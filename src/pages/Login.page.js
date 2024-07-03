import styles from './Login.page.module.css'

import * as React from 'react';
import Container from '@mui/material/Container';
import { Card } from '@mui/material';

import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../pages/contexts/user.context";


export default function Login() {
 
    const navigate = useNavigate();
    const location = useLocation();
    const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

    const [form, setForm] = useState({
      email: "",
      password: ""
    });

    const onFormInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
      const redirectTo = location.search.replace("?redirectTo=", "");
      navigate(redirectTo ? redirectTo : "/userhome");
    }

    const loadUser = async () => {
      if (!user) {
        const fetchedUser = await fetchUser();
        if (fetchedUser) {
          redirectNow();
        }
      }
    }

    useEffect(() => {
      loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const onSubmit = async (event) => {
      try {

        const user = await emailPasswordLogin(form.email, form.password);
        if (user) {
          redirectNow();
        }

      } catch (error) {
          if (error.statusCode === 401) {
             alert("Usuário ou senha invalidos. Tente novamente!");
         } else {
             alert(error);
         }
    
      }
    };

  return (
    <Container maxWidth="sm" >
    
    <Card sx={{ 
      bgcolor: 'white', 
      height: '70vh',
      borderRadius: '5%',
      marginTop: '10vh',
      }}
    >
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto", marginTop: '7vh' }}>
        <h1 className={styles.title}>Login</h1>
      <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={onFormInputChange}
          style={{ marginBottom: "1rem" }}
      />
      <TextField
          label="Senha"
          type="Senha"
          variant="outlined"
          name="password"
          value={form.password}
          onChange={onFormInputChange}
          style={{ marginBottom: "1rem" }}
       />

        <Button variant="contained" color="primary" onClick={onSubmit}>
          Login
        </Button>

        
        <p>Não tem um conta ainda?
           <Link to="/signup">
              <Button variant="contained">
              Criar Conta
              </Button>
            </Link></p>

      </form>
    </Card>
    
    </Container>
  );
}
