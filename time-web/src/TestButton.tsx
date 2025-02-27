import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)({
    backgroundColor: 'purple',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkpurple',
    },
  });

const TestButton = () => {
    return <CustomButton variant="contained">Styled MUI Button</CustomButton>;
  };

export default TestButton;
