import { FC } from 'react';
import { Stack, Box, Container } from '@mui/material';

import { ImageBox } from '../components/Home';

export const Home: FC = () => {
  return (
    <Container disableGutters data-testid="home-page">
      <Box
        component="img"
        src="../assets/teapotlogo.jpg"
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
          <ImageBox src="../assets/exterior_home.jpg" alt="exterior" />
          <ImageBox src="../assets/interior_home.jpg" alt="interior" />
        </Stack>
      </Container>
    </Container>
  );
};

export default Home;
