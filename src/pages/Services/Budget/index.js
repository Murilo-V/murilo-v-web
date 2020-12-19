import React from 'react';
import Menu from '../../../components/Menu';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Container } from './styles';

const Budget = () => {

  const currencies = [
    {
      value: 'WEB',
      label: 'site',
    },
    {
      value: 'APP',
      label: 'app',
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

        <TextField label="nome" variant="outlined" />
        <TextField label="e-mail" variant="outlined" />
        <TextField 
          select 
          label="preciso de um" 
          value={currency} 
          onChange={handleChange}
          variant="outlined">
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>

        <TextField multiline label="digite sobre o projeto" variant="outlined" />
       </form>
    </Container>
  );
};

export default Budget;
