import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 100,
  },
 direction:{ ///it's not working
   display: "flex",
  }
});

export default function BookItems(props){
  const {book} = props;
  const classes = useStyles();
  var path = window.location.href;
  var univId = parseInt(path[path.length - 1]);
  var bookId = parseInt(path[path.length - 1]);

  return ( 

    <Card className={classes.card} container direction={'row'}>
      <Link to={`http://localhost:8000/university/${univId}/book/${bookId}`}>
      <CardActionArea>
          <CardMedia
            className='media'
            style = {{height: 200}}
            image={book.bookCover }
            title={book.bookName}
        />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {book.bookName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
        </Link>
        </Card>
  )
}