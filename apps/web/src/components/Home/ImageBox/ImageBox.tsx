import { styled } from '@mui/system';
import { BoxProps, Box } from '@mui/material';

export const ImageBox = styled((props: BoxProps<'img'>) => (
    <Box component="img" {...props} />
  ))(({ theme }) => ({
    height: '100%',
    width: '50%',
    padding: 0,
    transition: 'transform 0.15s ease-in-out',
  
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '48vh',
    },
  
    '&:hover': { transform: 'scale(1.06)' },
  }));