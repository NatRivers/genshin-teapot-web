import { FC } from 'react';
import { styled } from '@mui/system';
import { Stack, BoxProps, Box, Container } from '@mui/material';

const StyledImageBox = styled((props: BoxProps<'img'>) => (
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

export const Home: FC = () => {
  return (
    <>
      <Box
        component="img"
        src="../assets/teapotlogo.png"
        sx={(theme) => ({
          position: 'absolute',
          borderRadius: '50%',
          borderStyle: 'solid',
          borderColor: theme.palette.primary.dark,
          borderWidth: { xs: theme.spacing(1), sm: theme.spacing(2) },
          zIndex: 'tooltip',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '20vw',
          height: 'auto',
        })}
      />
      <Container
        disableGutters
        maxWidth={false}
        sx={(theme) => ({
          background: theme.palette.primary.dark,
          padding: theme.spacing(2),
          maxHeight: '100vh',
          overflow: 'hidden',
        })}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          justifyContent="space-evenly"
          sx={{ height: '97vh' }}
        >
          <StyledImageBox src="../assets/exterior_home.png" alt="exterior" />
          <StyledImageBox src="../assets/interior_home.png" alt="interior" />
        </Stack>
      </Container>
    </>
  );
}

export default Home;
