import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SchoolIcon from '@material-ui/icons/School';
import Box from '@material-ui/core/Box';
import { stat } from 'fs';

//------Number of user,books and university component-----

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 160,
            width: 300,
            background: 'rgba(73, 186, 207, 0.85)',
            boxShadow: '5px 5px 2px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            padding: 10
        },
        paper2: {
            height: 160,
            width: 300,
            background: 'rgba(147, 100, 141, 0.85)',
            boxShadow: '5px 5px 2px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            padding: 10
        },
        paper3: {
            height: 160,
            width: 300,
            background: 'rgba(241, 103, 69, 0.85)',
            boxShadow: '5px 5px 2px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            padding: 10
        },
        insideDiv: {
            width: '100%',
            minHeight: 155,
            border: '1px solid #fff',
            boxAlign: 'center',
            textAlign: 'center',
            color: 'white'
        },
        icons: {
            width: '3em',
            height: 80
        },
        control: {
            padding: theme.spacing(3),
        },
        h2: {
            fontWeight: 100
        }
    }),
);

export const BookNum = (numbers) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={5} >
            <Grid item xs={12}>
                <Grid container justify="center" spacing={10}>
                    <Grid item>
                        <Box display={{ xs: 'none', sm: 'none', lg: 'block' }} className={classes.paper}>
                            <div>
                                <div className={classes.insideDiv}>
                                    <PeopleAltIcon className={classes.icons} />
                                    <h2 className={classes.h2}>Total Members</h2>
                                    {numbers.numbers.data ?
                                    <h2 className={classes.h2}>{numbers.numbers.data.totalUsers}</h2>
                                    : <h2></h2>}
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }} className={classes.paper2}>
                            <div>
                                <div className={classes.insideDiv}>
                                    <MenuBookIcon className={classes.icons} />
                                    <h2 className={classes.h2}>Books We Have</h2>
                                    {numbers.numbers.data ?
                                    <h2 className={classes.h2}>{numbers.numbers.data.totalDonatedBooks}</h2>
                                    : <h2></h2>}
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box display={{ xs: 'none', sm: 'block' }} className={classes.paper3}>
                            <div>
                                <div className={classes.insideDiv}>
                                    <SchoolIcon className={classes.icons} />
                                    <h2 className={classes.h2}>Number Of Universities</h2>
                                    {numbers.numbers.data ?
                                    <h2 className={classes.h2}>{numbers.numbers.data.totalUniversities}</h2>
                                    : <h2></h2>}
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
const mapStateToProps = state =>({
    numbers: state.posts.items
})
export default connect(mapStateToProps)(BookNum)