import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../gym_pics/icons/B.jpg';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '10px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : 
    { background: '#fff', borderBottomLeftRadius: '50px', width: '270px', height: '282px', cursor: 'pointer', gap: '20px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '200px', height: '150px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;