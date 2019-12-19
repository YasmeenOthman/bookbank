import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { white } from 'material-ui/styles/colors';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 40,
    borderTop: '2px solid #77b748',
    marginTop: 150,
    background: '#f6f7f9',
    textAlign: 'center'
  },
  imgAva: {
    height: 100,
    width: 100,
    border: '2px solid white',
    borderRadius: '50%'
  },
  grayFotter: {
    background: '#484848',
    height: 50,
    width: '100%'
  },
  copyRight: {
    color: white,
    marginLeft: 20,
    padding: 15
  }
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Container>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item xs>
              <img alt="img" src="https://serving.photos.photobox.com/019848108651f78a4223f48aad7d12b0fabb7291aa896c9de9f665acbf513fb80f693f9c.jpg" className={classes.imgAva} />
              <p>Nazeh M.Taha</p>
            </Grid>
            <Grid item xs>
              <img alt="img" src="https://cdn2.vectorstock.com/i/thumb-large/08/26/beautiful-face-of-arabic-muslim-woman-in-hijab-vector-20260826.jpg" className={classes.imgAva} />
              <p>Nour Saqqa</p>
            </Grid>
            <Grid item xs>
              <img alt="img" src="https://cdn2.vectorstock.com/i/thumb-large/08/26/beautiful-face-of-arabic-muslim-woman-in-hijab-vector-20260826.jpg" className={classes.imgAva} />
              <p>Alaa Al Agha</p>
            </Grid>
            <Grid item xs>
              <img alt="img" src="https://cdn2.vectorstock.com/i/thumb-large/08/26/beautiful-face-of-arabic-muslim-woman-in-hijab-vector-20260826.jpg" className={classes.imgAva} />
              <p>Tasnim Zakarneh</p>
            </Grid>
            <Grid item xs>
              <img alt="img" src="https://cdn2.vectorstock.com/i/thumb-large/08/26/beautiful-face-of-arabic-muslim-woman-in-hijab-vector-20260826.jpg" className={classes.imgAva} />
              <p>Yasmeen Othman</p>
            </Grid>
          </Grid>
        </Container>

      </div>
      <div className={classes.grayFotter}>
        <p className={classes.copyRight}>2019 All Rights Reserved By © BookBank</p>
      </div>
    </div>
  );
};

export default Footer;