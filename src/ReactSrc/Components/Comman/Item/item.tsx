import { Grid, Paper, styled } from '@mui/material';
import React from 'react'
import { Category, name } from '../../Constant'

const Item = styled(Paper)(({ theme }) => 
({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
  color: theme.palette.text.secondary,
}));
export default Item