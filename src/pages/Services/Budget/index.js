import React, { useState } from 'react';
import axios from 'axios';
import Menu from '../../../components/Menu';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { ThemeProvider } from '@material-ui/styles';
import { Container } from './styles';
import { createMuiTheme } from '@material-ui/core/styles';

const Budget = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#232323',
        main: '#232323',
        dark: '#232323',
        contrastText: '#232323',
      },
    },
  });

  const currencies = [
    {
      value: 'WEB',
      label: 'Site',
    },
    {
      value: 'APP',
      label: 'Aplicativo',
    },
  ];

  const [currency, setCurrency] = useState('WEB');

  const handleChangeSelect = (e) => {
    setCurrency(e.target.value);
    setInputs((prev) => ({
      ...prev,
      servico: e.target.value,
    }))

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  };

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    nome: '',
    email: '',
    servico: currency,
    sobre: '',
  })

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })

      setInputs({
        nome: '',
        email: '',
        servico: currency,
        sobre: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
        setInputs((prev) => ({
          ...prev,
          [e.target.id]: e.target.value,
        }))

        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mpzoowdr',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Obrigado! Em poucos dias entrarei em contato.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    <Container>
       <Menu/>
       <h1>serviços</h1>

       <form onSubmit={handleOnSubmit}>

         <h2>pedido de orçamento</h2>

         <h3>todos os campos são obrigatórios</h3>

      <ThemeProvider theme={theme}>

        <TextField type="text" id="nome" fullWidth onChange={handleOnChange} value={inputs.nome} size="small" label="Nome" variant="outlined" />

        <TextField id="email" onChange={handleOnChange} value={inputs.email} fullWidth type="text" size="small" label="E-mail" variant="outlined" />

        <TextField
          id="servico" 
          select
          fullWidth
          size="small" 
          label="Preciso de um" 
          value={currency} 
          onChange={handleChangeSelect}
          variant="outlined">
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField id="sobre" multiline size="small" onChange={handleOnChange} value={inputs.sobre} fullWidth label="Digite sobre o projeto" variant="outlined" />
      
      </ThemeProvider>

      <button type="submit" disabled={status.submitting}>
        {!status.submitting
              ? !status.submitted
                ? 'enviar'
                : 'pronto!'
              : 'carregando...'}
      </button>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p classname="ok">{status.info.msg}</p>}
      </form>
    </Container>
  );
};

export default Budget;
