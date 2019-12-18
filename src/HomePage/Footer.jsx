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
    height: 80,
    width: 80,
    border: '2px solid white'
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
              <img alt="img" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160902988/62320150-hotel-employees-avatar-icon-vector-illustration-design.jpg" className={classes.imgAva} />
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