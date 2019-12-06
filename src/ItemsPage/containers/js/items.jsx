import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function BookItems(props){
  const {book} = props;
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          {/* <Paper className={classes.paper}> */}
          <Card id = '1' className = 'cards' style = {{maxWidth: 250}} >
        <CardActionArea>
          <CardMedia
            className='media'
            style = {{height: 200}}
            image={book.Bookcover}
            title={book.Bookname}
        />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {book.Bookname}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

          {/* </Paper> */}
        </Grid>

{/* 2nd */}

        <Grid item xs={4}>
        <Card id = '1' className = 'cards' style = {{maxWidth: 250}} >
        <CardActionArea>
          <CardMedia
            className='media'
            style = {{height: 200}}
            image={book.Bookcover}
            title="Contemplative Reptile"
        />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {book.Bookname}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
        </Grid>
{/* 3nd */}
        <Grid item xs={4}>
        <Card id = '1' className = 'cards' style = {{maxWidth: 250}} >
        <CardActionArea>
          <CardMedia
            className='media'
            style = {{height: 200}}
            image={book.Bookcover}
            title="Contemplative Reptile"
        />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {book.Bookname}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={-1}>
        {/* <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid> */}
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

// import React from "react";
// // import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// // import Dummy from '../.././API/dummy.json'
// // import Grid from '@material-ui/core/Grid';

// export default function BookItems(props){
//   const {book} = props;

//   // render() {
//     // const classes = useStyles();
//     return (
//       <Grid className= "root" style = {{flexGrow: 1}}>
      // <Card id = '1' className = 'cards' style = {{maxWidth: 250}} >
      //   <CardActionArea>
      //     <CardMedia
      //       className='media'
      //       style = {{height: 200}}
      //       image={book.Bookcover}
      //       title="Contemplative Reptile"

      //     <CardContent>
      //       <Typography gutterBottom variant="h5" component="h2">
      //         {book.Bookname}
      //       </Typography>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button size="small" color="primary">
      //       Learn More
      //     </Button>
      //   </CardActions>
      // </Card>
//      </Grid>
//     );
//   }
// }

// export default BookItems;
