import { FC } from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItemText,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';

export const ObjModal: FC = () => {
  return (
    <Container disableGutters maxWidth={false} data-testid="object-modal">
      <Container
        disableGutters
        maxWidth={false}
        sx={(theme) => ({
          background: theme.palette.primary.main,
          height: '210vh',
          position: 'absolute',
          textAlign: 'center',
        })}
      >
        <Typography variant="h1">ABOUT SERENITEA POT</Typography>
        <Container
          sx={{
            position: 'relative',
            float: 'right',
            marginRight: '15px',
            marginTop: '110px',
            width: '60%',
            textAlign: 'justify',
          }}
        >
          <Typography variant="h6">
            The Serenitea Pot or Realm Within (colloquially also known Teapot,
            Housing, Homeland, or Player Housing) is a system in Genshin Impact
            that allows the player to create their own home. Players interact
            with the system using a gadget of the same name.
          </Typography>
          <br />
          <Typography variant="h6">
            Players can request to visit their friend's Serenitea Pot Co-op Mode
            regardless of the World Level. Inside, the player will be greeted by
            the Teapot Spirit Tubby, who will provide access to various features
            of Housing.
          </Typography>
          <Divider
            sx={{
              margin: '20px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '30px',
              backgroundColor: '#FFC800',
              width: '50%',
            }}
          />
          <Container sx={{ margin: 'auto' }}>
            <ImageList>
              <ImageListItem>
                <img
                  src="../assets/Floating_Abode.jpg"
                  style={{ width: '25vw', height: 'auto', padding: '0px 20px' }}
                />
                <ImageListItemBar
                  title="Floating Abode"
                  position="below"
                  sx={(theme) => ({
                    fontStyle: theme.typography.caption,
                    width: '25vw',
                    margin: 'auto',
                    float: 'left',
                    marginBottom: '20px',
                  })}
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="../assets/Emerald_Peak.jpg"
                  style={{ width: '25vw', height: 'auto', padding: '0px 20px' }}
                />
                <ImageListItemBar
                  title="Emerald Peak"
                  position="below"
                  sx={(theme) => ({
                    fontStyle: theme.typography.caption,
                    width: '25vw',
                    margin: 'auto',
                    float: 'left',
                    marginBottom: '20px',
                  })}
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="../assets/Cool_Isle.jpg"
                  style={{ width: '25vw', height: 'auto', padding: '0px 20px' }}
                />
                <ImageListItemBar
                  title="Cool Isle"
                  position="below"
                  sx={(theme) => ({
                    fontStyle: theme.typography.caption,
                    width: '25vw',
                    margin: 'auto',
                    float: 'left',
                    marginBottom: '20px',
                  })}
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="../assets/Silken_Courtyard.jpg"
                  style={{ width: '25vw', height: 'auto', padding: '0px 20px' }}
                />
                <ImageListItemBar
                  title="Silken Courtyard"
                  position="below"
                  sx={(theme) => ({
                    fontStyle: theme.typography.caption,
                    width: '25vw',
                    margin: 'auto',
                    float: 'left',
                    marginBottom: '20px',
                  })}
                />
              </ImageListItem>
            </ImageList>
          </Container>
        </Container>

        <Container>
          <Box
            component="img"
            src="../assets/aboutTeapot.jpg"
            sx={{
              position: 'absolute',
              zIndex: 'tooltip',
              top: '100px',
              left: '23%',
              transform: 'translate(-50%)',
              width: '30vw',
              height: 'auto',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              paddingTop: '47%',
              width: '30vw',
              transform: 'translate(-5%)',
            }}
          >
            UNLOCKING THE SERENITEA POT HOUSING REALM
            <br />
            <Typography
              variant="h6"
              sx={{
                fontSize: '20px',
              }}
            >
              To unlock the housing teapot, you’ll need to do the following:
              <List>
                <ListItemText primary="• Hit level 35 Adventure Rank or higher" />
                <ListItemText primary="• Complete the Archon Quest Chapter 1: Act 3 – A New Star Approaches" />
                <ListItemText primary="• Complete a Teapot to Call Home: Part 1" />
              </List>
            </Typography>
          </Typography>
        </Container>

        <Container
          disableGutters
          maxWidth={false}
          sx={{
            backgroundColor: 'primary.main',
            position: 'relative',
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            component="div"
            sx={(theme) => ({ fontFamily: theme.typography.h1 })}
          >
            ABOUT ME
          </Typography>
          <Box
            component="img"
            src="../assets/aboutme.jpg"
            sx={{
              position: 'absolute',
              zIndex: 'tooltip',
              top: '100px',
              left: '23%',
              transform: 'translate(-50%)',
              width: '30vw',
              height: 'auto',
              borderRadius: '50%',
            }}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default ObjModal;
