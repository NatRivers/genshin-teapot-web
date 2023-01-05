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
  Link,
  Stack,
} from '@mui/material';

export const ObjModal: FC = () => {
  const imageClick = (id: string) => {
    console.log(id);
  };
  return (
    <Container disableGutters maxWidth={false} data-testid="object-modal">
      <Stack
        sx={(theme) => ({
          background: theme.palette.primary.main,
          width: '100%',
          // height: 'auto',
          // maxHeight: 'auto',
          // minHeight: '210vh',
        })}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            position: 'relative',
          }}
        >
          ABOUT SERENITEA POT
        </Typography>
        <Box
          sx={{
            display: 'flex',
            marginLeft: '5%',
            width: '30vw',
            height: '100%',
          }}
        >
          <Box
            component="img"
            src="../assets/aboutTeapot.jpg"
            alt="aboutTeapot"
            sx={(theme) => ({
              display: 'flex',
              zIndex: 'tooltip',
              marginTop: '30px',
              marginLeft: '5%',
              width: '30vw',
              height: 'auto',

              [theme.breakpoints.down('sm')]: {
                width: 'auto',
                height: '30vh',
                marginTop: '5vh',
                marginRight: 'auto',
                marginLeft: 'auto',
              },
            })}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginLeft: '7%',
            width: '30vw',
            height: '100%',
            paddingTop: '40px',
          }}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
            })}
          >
            <Typography variant="h5">
              UNLOCKING THE SERENITEA POT HOUSING REALM:
              <List sx={(theme) => ({ fontStyle: theme.typography.h6 })}>
                <ListItemText primary="• Hit level 35 Adventure Rank or higher" />
                <ListItemText primary="• Complete the Archon Quest Chapter 1: Act 3 – A New Star Approaches" />
                <ListItemText primary="• Complete a Teapot to Call Home: Part 1" />
              </List>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={(theme) => ({
            marginRight: '8%',
            marginLeft: 'auto',
            display: 'flex',
            width: '50%',
            textAlign: 'justify',

            [theme.breakpoints.down('sm')]: {
              width: '100%',
              height: 'auto',
              marginTop: '50vh',
            },
          })}
        >
          <Typography variant="h6">
            The Serenitea Pot or Realm Within (colloquially also known Teapot,
            Housing, Homeland, or Player Housing) is a system in{' '}
            <Link href="https://genshin.hoyoverse.com/en/" color="inherit">
              Genshin Impact
            </Link>{' '}
            that allows the player to create their own home. Players interact
            with the system using a gadget of the same name.
            <Divider
              sx={(theme) => ({
                margin: '5px',
                width: '0%',
              })}
            />
            Players can request to visit their friend's Serenitea Pot Co-op Mode
            regardless of the World Level. Inside, the player will be greeted by
            the Teapot Spirit Tubby, who will provide access to various features
            of Housing.
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
            <Container>
              <ImageList sx={{ overflow: 'hidden' }}>
                <ImageListItem
                  onClick={() => imageClick('FA')}
                  sx={{ '&:hover': { transform: 'scale(1.08)' } }}
                >
                  <img
                    src="../assets/Floating_Abode.jpg"
                    alt="Floating Abode"
                    style={{
                      width: '25vw',
                      height: 'auto',
                      padding: '0px 20px',
                    }}
                  />
                  <ImageListItemBar
                    title="Floating Abode"
                    position="below"
                    sx={(theme) => ({
                      fontStyle: theme.typography.caption,
                      width: '25vw',
                      margin: 'auto',
                      marginBottom: '20px',
                    })}
                  />
                </ImageListItem>
                <ImageListItem
                  onClick={() => imageClick('EP')}
                  sx={{ '&:hover': { transform: 'scale(1.08)' } }}
                >
                  <img
                    src="../assets/Emerald_Peak.jpg"
                    alt="Emerald Peak"
                    style={{
                      width: '25vw',
                      height: 'auto',
                      padding: '0px 20px',
                    }}
                  />
                  <ImageListItemBar
                    title="Emerald Peak"
                    position="below"
                    sx={(theme) => ({
                      fontStyle: theme.typography.caption,
                      width: '25vw',
                      margin: 'auto',
                      marginBottom: '20px',
                    })}
                  />
                </ImageListItem>
                <ImageListItem
                  onClick={() => imageClick('CI')}
                  sx={{ '&:hover': { transform: 'scale(1.08)' } }}
                >
                  <img
                    src="../assets/Cool_Isle.jpg"
                    alt="Cool Isle"
                    style={{
                      width: '25vw',
                      height: 'auto',
                      padding: '0px 20px',
                    }}
                  />
                  <ImageListItemBar
                    title="Cool Isle"
                    position="below"
                    sx={(theme) => ({
                      fontStyle: theme.typography.caption,
                      width: '25vw',
                      margin: 'auto',
                      marginBottom: '20px',
                    })}
                  />
                </ImageListItem>
                <ImageListItem
                  onClick={() => imageClick('SC')}
                  sx={{ '&:hover': { transform: 'scale(1.08)' } }}
                >
                  <img
                    src="../assets/Silken_Courtyard.jpg"
                    alt="Silken Courtyard"
                    style={{
                      width: '25vw',
                      height: 'auto',
                      padding: '0px 20px',
                    }}
                  />
                  <ImageListItemBar
                    title="Silken Courtyard"
                    position="below"
                    sx={(theme) => ({
                      fontStyle: theme.typography.caption,
                      width: '25vw',
                      margin: 'auto',
                      marginBottom: '20px',
                    })}
                  />
                </ImageListItem>
              </ImageList>
            </Container>
          </Typography>
        </Box>

        <Container
          disableGutters
          maxWidth={false}
          sx={{
            backgroundColor: 'primary.main',
            position: 'relative',
            textAlign: 'center',
            marginTop: 6,
          }}
        >
          <Typography
            variant="h1"
            component="div"
            sx={(theme) => ({
              position: 'relative',
            })}
          >
            ABOUT ME
          </Typography>
          <Box
            component="img"
            src="../assets/aboutme.jpg"
            sx={(theme) => ({
              display: 'flex',
              zIndex: 'tooltip',
              marginTop: '30px',
              marginLeft: '5%',
              width: '30vw',
              height: 'auto',
              borderRadius: '50%',

              [theme.breakpoints.down('sm')]: {
                width: 'auto',
                height: '30vh',
                marginTop: '5vh',
                marginRight: 'auto',
                marginLeft: 'auto',
              },
            })}
          />
          <Box
            sx={(theme) => ({
              display: 'flex',

              [theme.breakpoints.down('sm')]: {
                width: 'auto',
              },
            })}
          >
            <ImageList
              cols={3}
              rowHeight={60}
              sx={{
                height: '100px',
                marginTop: '3%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '40%',
              }}
            >
              <a href="https://www.youtube.com/channel/UCKR4wancNtzemG0nslBs9xQ">
                <ImageListItem
                  title="YouTube"
                  sx={{
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                >
                  <img
                    src="../assets/yt.png"
                    alt="YouTubeIcon"
                    style={{
                      width: '60px',
                      borderRadius: '20%',
                    }}
                  />
                </ImageListItem>
              </a>
              <a href="https://www.instagram.com/_natrivers_/">
                <ImageListItem
                  title="Instagram"
                  sx={{
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                >
                  <img
                    src="../assets/ig.png"
                    alt="InstagramIcon"
                    style={{
                      width: '60px',
                      borderRadius: '20%',
                    }}
                  />
                </ImageListItem>
              </a>
              <a href="https://discord.gg/AW3WkN9vwR">
                <ImageListItem
                  title="Discord"
                  sx={{
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                >
                  <img
                    src="../assets/dc.png"
                    alt="DiscordIcon"
                    style={{
                      width: '60px',
                      borderRadius: '20%',
                    }}
                  />
                </ImageListItem>
              </a>
            </ImageList>
          </Box>
        </Container>

        <Box
          sx={{
            marginRight: '5%',
            marginLeft: 'auto',
            width: '50%',
          }}
        >
          <Typography variant="h6">Yo! Nat here :D</Typography>
          <br />
          <Typography variant="h6">
            If you are browsing through this website, I would like to thank you
            for the support. I made this website for fun as I really enjoy
            building the Genshin Impact Serenitea Pot, so why not create a
            website for it for my personal project during my chill time?
          </Typography>
          <br />
          <Typography variant="h6">
            The website has not yet contain the whole list of furnishings, I
            have only obtained furnishings data up until version 3.0. However,
            I’m planning to be able to complete the whole furnitures if I have
            the time and make this a legit working teapot website for you guys
            to use, as well for me too. This website contains really simple
            UI/UX design for users to interact with as well as advertisement
            free.
          </Typography>
          <br />
          <Typography variant="h6">
            Hope you guys enjoy using this website. Good luck with your teapot
            build fellow Genshin Architects!
          </Typography>

          <br />
          <Typography
            variant="caption"
            sx={{ color: '#FFC800', float: 'right' }}
          >
            © All rights reserved by miHoYo. Other properties belong to their
            respective owners.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default ObjModal;
