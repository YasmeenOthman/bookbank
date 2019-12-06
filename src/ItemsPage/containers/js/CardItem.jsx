import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

  // const cardUrl =
  // "https://localhost:3000" + `${this.props.card.id}`;
  return ( 
    // <div className="Container" display="flex" flexWrap="nowrap">
    <Card className={classes.card} container direction={'row'}>
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
        </Card>
  )
}