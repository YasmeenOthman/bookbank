import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 30,
        borderTop: '2px solid #77b748',
        marginTop: 150,
        background: '#f6f7f9'
    },
    imgAva: {
        height: 80,
    width: 80,
    border: '2px solid white'
    }
}));

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs>
                      <img alt="img" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160902988/62320150-hotel-employees-avatar-icon-vector-illustration-design.jpg" className={classes.imgAva}/>
                      <p>Nazeh M.Taha</p>
                    </Grid>
                    <Grid item xs>
                    <img alt="img" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160902988/62320150-hotel-employees-avatar-icon-vector-illustration-design.jpg" className={classes.imgAva}/>
                      <p>Nazeh M.Taha</p>
                    </Grid>
                    <Grid item xs>
                    <img alt="img" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160902988/62320150-hotel-employees-avatar-icon-vector-illustration-design.jpg" className={classes.imgAva}/>
                      <p>Nazeh M.Taha</p>
                    </Grid>
                    <Grid item xs>
                    <img alt="img" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160902988/62320150-hotel-employees-avatar-icon-vector-illustration-design.jpg" className={classes.imgAva}/>
                      <p>Nazeh M.Taha</p>
                    </Grid>
                    <Grid item xs>
                    <img alt="img" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160902988/62320150-hotel-employees-avatar-icon-vector-illustration-design.jpg" className={classes.imgAva}/>
                      <p>Nazeh M.Taha</p>
                    </Grid>
                </Grid>
            </Container>
            {/* <div className={cla}></div> */}
        </div>
    );
};

export default Footer;