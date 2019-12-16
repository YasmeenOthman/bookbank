import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import NavBar from './NavBar';

const useStyles = makeStyles({
	card: {
		maxWidth: 250
	},
	media: {
		height: 200
	}
});

interface Props {
	book: {
		bookcover: String;
		bookname: String;
	};
}

// function sendAjaxRequest(_type: string, _url: string, _params: string, _callback: CallbackFunction) {

//   var request = $.ajax({
//       type: _type,
//       url: BASE_URL + _url,
//       data: _params,
//       contentType: 'json'
//   });
//   request.done(function(res) {
//       _callback(res);
//   });
//   request.fail(function(jqXHR, textStatus) {
//       console.error(jqXHR);
//       _callback({ err: true, message: "Request failed: " + textStatus });
//   });

// }

const Items: React.FC<Props> = ({ book }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia className={classes.media} image="{book.bookcover}" title="Contemplative Reptile" />
				<CardContent>
					<Typography gutterBottom variant="h6" component="h2">
						{book.bookname}
						{/* The HISTORY OF ENGLISH LITERATURE */}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Request
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default Items;
