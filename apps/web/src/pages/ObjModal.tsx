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
} from '@mui/material';

export const ObjModal: FC = () => {
  return (
    <Container disableGutters maxWidth={false} data-testid="object-modal">
      <Container
        disableGutters
        maxWidth={false}
        sx={(theme) => ({
          background: theme.palette.primary.main,
          height: 'auto',
          maxHeight: 'auto',
          minHeight: '210vh',
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
            Housing, Homeland, or Player Housing) is a system in{' '}
            <Link href="https://genshin.hoyoverse.com/en/" color="inherit">
              Genshin Impact
            </Link>{' '}
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
            <ImageList sx={{ overflow: 'hidden' }}>
              <ImageListItem sx={{ '&:hover': { transform: 'scale(1.08)' } }}>
                <img
                  src="../assets/Floating_Abode.jpg"
                  alt="Floating Abode"
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
              <ImageListItem sx={{ '&:hover': { transform: 'scale(1.08)' } }}>
                <img
                  src="../assets/Emerald_Peak.jpg"
                  alt="Emerald Peak"
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
              <ImageListItem sx={{ '&:hover': { transform: 'scale(1.08)' } }}>
                <img
                  src="../assets/Cool_Isle.jpg"
                  alt="Cool Isle"
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
              <ImageListItem sx={{ '&:hover': { transform: 'scale(1.08)' } }}>
                <img
                  src="../assets/Silken_Courtyard.jpg"
                  alt="Silken Courtyard"
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

        <Container sx={{ marginLeft: '5%' }}>
          <Box
            component="img"
            src="../assets/aboutTeapot.jpg"
            alt="aboutTeapot"
            sx={{
              position: 'absolute',
              zIndex: 'tooltip',
              top: '100px',
              // left: '23%',
              transform: 'translate(-50%)',
              width: '30vw',
              height: 'auto',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              marginTop: '47%',
              width: '30vw',
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
            marginTop: 6,
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
              top: '120px',
              left: '23%',
              transform: 'translate(-50%)',
              width: '30vw',
              height: 'auto',
              borderRadius: '50%',
            }}
          />
          <ImageList
            cols={3}
            rowHeight={60}
            sx={{
              width: '34.7vw',
              height: '100px',
              position: 'absolute',
              marginTop: '43%',
              marginLeft: '8%',
              padding: '10px',
              overflow: 'hidden',
            }}
          >
            <a href="https://www.youtube.com/channel/UCKR4wancNtzemG0nslBs9xQ">
              <ImageListItem
                title="YouTube"
                sx={{ '&:hover': { transform: 'scale(1.08)' } }}
              >
                <img
                  src="../assets/yt.png"
                  alt="YouTubeIcon"
                  style={{
                    width: '60px',
                    height: 'auto',
                    borderRadius: '20%',
                  }}
                />
              </ImageListItem>
            </a>
            <a href="https://www.instagram.com/_natrivers_/">
              <ImageListItem
                title="Instagram"
                sx={{ '&:hover': { transform: 'scale(1.08)' } }}
              >
                <img
                  src="../assets/ig.png"
                  alt="InstagramIcon"
                  style={{ width: '60px', height: 'auto', borderRadius: '20%' }}
                />
              </ImageListItem>
            </a>
            <a href="https://discord.gg/AW3WkN9vwR">
              <ImageListItem
                title="Discord"
                sx={{ '&:hover': { transform: 'scale(1.08)' } }}
              >
                <img
                  src="../assets/dc.png"
                  alt="DiscordIcon"
                  style={{ width: '60px', height: 'auto', borderRadius: '20%' }}
                />
              </ImageListItem>
            </a>
          </ImageList>
        </Container>

        <Container
          sx={{
            float: 'right',
            marginRight: '5%',
            marginTop: '8%',
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
            The website has not yet contain the whole 793 list of furnishings,
            welp as you know 793 isn’t a small number. However, I’m planning to
            be able to complete the whole 793 furnitures if I have the time and
            make this a legit teapot website for you guys to use, as well for me
            too. This website contains really simple UI/UX design for users to
            interact with as well as advertisement free.
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
        </Container>
      </Container>
    </Container>
  );
};

export default ObjModal;
