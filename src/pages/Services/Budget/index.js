import React from 'react';
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

  const [currency, setCurrency] = React.useState('WEB');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container>
       <Menu/>
       <h1>serviços</h1>

       <form>
         <h2>pedido de orçamento</h2>
         <h3>todos os campos são obrigatórios</h3>

      <ThemeProvider theme={theme}>

        <TextField id="txtNome" fullWidth size="small" label="Nome" variant="outlined" />

        <TextField id="txtEmail" fullWidth type="email" size="small" label="E-mail" variant="outlined" />

        <TextField 
          select
          fullWidth
          size="small" 
          label="Preciso de um" 
          value={currency} 
          onChange={handleChange}
          variant="outlined">
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField multiline size="small" fullWidth label="Digite sobre o projeto" variant="outlined" />
      </ThemeProvider>

      <button type="submit">enviar</button>
      </form>
    </Container>
  );
};

export default Budget;
