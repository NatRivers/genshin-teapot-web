import { FC } from 'react';
import {
  Box,
  Container,
  Tooltip,
  Button,
  Typography,
  List,
  ListItemText,
  Divider,
} from '@mui/material';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
import { fontFamily } from '@mui/system';

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
        <Typography
          variant="subtitle1"
          component="div"
          sx={(theme) => ({ fontFamily: theme.typography.h1 })}
        >
          ABOUT SERENITEA POT
        </Typography>
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
          <Typography
            variant="subtitle1"
            component="div"
            sx={(theme) => ({
              fontFamily: theme.typography.h6,
            })}
          >
            The Serenitea Pot or Realm Within (colloquially also known Teapot,
            Housing, Homeland, or Player Housing) is a system in Genshin Impact
            that allows the player to create their own home. Players interact
            with the system using a gadget of the same name.
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            component="div"
            sx={(theme) => ({
              fontFamily: theme.typography.h6,
            })}
          >
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
            <Box
              component="img"
              src="../assets/Floating_Abode.jpg"
              sx={{ width: '25vw', height: 'auto', padding: '0px 20px' }}
            />
            <Box
              component="img"
              src="../assets/Emerald_Peak.jpg"
              sx={{ width: '25vw', height: 'auto', padding: '0px 20px' }}
            />
            <Typography
              variant="subtitle1"
              component="div"
              sx={(theme) => ({
                fontFamily: theme.typography.caption,
                width: '25vw',
                margin: 'auto',
                float: 'left',
                marginBottom: '20px',
              })}
            >
              Floating Abode
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={(theme) => ({
                fontFamily: theme.typography.caption,
                width: '25vw',
                margin: 'auto',
                float: 'left',
                marginBottom: '20px',
              })}
            >
              Emerald Peak
            </Typography>
            <br />
            <Box
              component="img"
              src="../assets/Cool_Isle.jpg"
              sx={{ width: '25vw', height: 'auto', padding: '0px 20px' }}
            />
            <Box
              component="img"
              src="../assets/Silken_Courtyard.jpg"
              sx={{ width: '25vw', height: 'auto', padding: '0px 20px' }}
            />
            <Typography
              variant="subtitle1"
              component="div"
              sx={(theme) => ({
                fontFamily: theme.typography.caption,
                width: '25vw',
                margin: 'auto',
                float: 'left',
              })}
            >
              Cool Isle
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={(theme) => ({
                fontFamily: theme.typography.caption,
                width: '25vw',
                margin: 'auto',
                float: 'left',
              })}
            >
              Silken Courtyard
            </Typography>
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
            variant="subtitle1"
            component="div"
            sx={(theme) => ({
              fontFamily: theme.typography.h5,
              paddingTop: '47%',
              width: '30vw',
              transform: 'translate(-5%)',
            })}
          >
            UNLOCKING THE SERENITEA POT HOUSING REALM
            <br />
            <Typography
              variant="subtitle1"
              component="div"
              sx={(theme) => ({
                fontFamily: theme.typography.h6,
                fontSize: '20px',
              })}
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

        <hr />
      </Container>
    </Container>
  );
};

export default ObjModal;
