import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import NavBar from '../../../HomePage/NavBar';
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            // background: 'rgb(0, 179, 0)',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        imgBook: {
            height: 250,
            marginBottom: 10,
            maxWidth: '100%'
        },
        h2: {
            color: 'gray',
            marginBottom: 20
        },
        root1:{
          marginTop: 50,
          textAlign: 'center',
          marginBottom: 100,
          fontSize:30
        }
      })
);

export const UniversityItems  = () => {
  const [books, setbooks] = useState([]);
  const [university,setUniversity]=useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/university`
      )
      .then(({ data }) => {
                let universities = data.universities;
                setUniversities(universities);
              })
      .catch(err => {
        console.log(err);
      })
    },[]);
  

    return (
      <div>
      <NavBar />
        {/* <Container > */}
        <h2 className={classes.root1}>Universities</h2>
        </div>
    )
}
export default UniversityItems;
           {/* <Grid  container direction="row"
                justify="center"
                alignItems="center" spacing={3}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={book.id}>
                        <Paper className={classes.paper}>
                            <img alt="img" src={book.bookCover} className={classes.imgBook}></img>
                            <Link href={`/university/${book.universityId}/book/${book.id}`} style={{color: 'black'}}>
                                <h3 style={{marginBottom:5}}>{book.bookName}</h3>
                            </Link>
                            <Link href={`/university/${book.universityId}/book/${book.id}`} style={{color: 'white'}}>
                            <Button style={{color: 'Black',border: '1px solid white'}} variant="outlined">View More</Button>
                            </Link>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container> *}
        </div>
    )
}

export default ItemsPage;


// import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';


// // export interface Books {
// //   id: Number,
// //   universityName: String,
// //   __v: Number,
// //   _id: String
// // }
// //-----------------University Link Component----------
// // const images = [
// //     {
// //         url: 'https://geopoliticalfutures.com/wp-content/uploads/2019/04/Harvard-University.jpg',
// //         title: 'university-1',
// //         width: '25%',
// //     },
// //     {
// //         url: 'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/iol/2018/10/19/17554222/NS%20cape%20town%20university.jpg&operation=CROP&offset=0x55&resize=730x408',
// //         title: 'university-2',
// //         width: '25%',
// //     },
// //     {
// //         url: 'https://www.collegeatlas.org/wp-content/uploads/2014/06/4-year-accredited-colleges-and-universities-main-image2.jpg',
// //         title: 'university-3',
// //         width: '25%',
// //     },
// //     {
// //         url: 'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/james_madison_university.jpg?itok=29bxi7ZM',
// //         title: 'university-4',
// //         width: '25%',
// //     },
// // ];
// const useStyles = makeStyles(theme =>
//     createStyles({
//         root: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             minWidth: 300,
//             width: '100%',
//         },
//         image: {
//             position: 'relative',
//             height: 200,
//             border: '3px solid #77B747',
//             [theme.breakpoints.down('xs')]: {
//                 width: '100% !important', // Overrides inline-style
//                 height: 100,
//             },
//             '&:hover, &$focusVisible': {
//                 zIndex: 1,
//                 '& $imageBackdrop': {
//                     opacity: 0.15,
//                 },
//                 '& $imageMarked': {
//                     opacity: 0,
//                 },
//                 '& $imageTitle': {
//                     border: '4px solid currentColor',
//                 },
//             },
//         },
//         focusVisible: {},
//         imageButton: {
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: theme.palette.common.white,
//         },
//         imageSrc: {
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center 40%',
//         },
//         imageBackdrop: {
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//             backgroundColor: theme.palette.common.black,
//             opacity: 0.4,
//             transition: theme.transitions.create('opacity'),
//         },
//         imageTitle: {
//             position: 'relative',
//             padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
//         },
//         imageMarked: {
//             height: 3,
//             width: 18,
//             backgroundColor: theme.palette.common.white,
//             position: 'absolute',
//             bottom: -2,
//             left: 'calc(50% - 9px)',
//             transition: theme.transitions.create('opacity'),
//         },
//         h2: {
//             color: 'gray',
//             marginBottom: 20,
//             marginTop: 60
//         }
//     }),
// );
// export const UniversityItems  = () => {
//   const [universities, setUniversities] = useState([])
//   const allInfo = async () => {
//     axios.get('http://localhost:8000/university')
//       .then(({ data }) => {
//         let universities = data.universities;
//         setUniversities(universities);
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   useEffect(() => {
//     allInfo();
//   }, [])
//     const classes = useStyles();
//     return (
//         <Container style={{marginBottom:50}}>
//             {/* <h2 className={classes.h2}>University</h2> */}
//             <div className={classes.root}>
//                 {universities.map((universitie)=> (
//                     <ButtonBase
//                         focusRipple
//                         key={universitie.id}
//                         className={classes.image}
//                         focusVisibleClassName={classes.focusVisible}
//                         style={{
//                             width: '25%',
//                         }}
//                     >
//                         <span
//                             className={classes.imageSrc}
//                             style={{
//                                 backgroundImage: `url(https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/james_madison_university.jpg?itok=29bxi7ZM)`,
//                             }}
//                         />
//                         <Link href={`/university/${universitie.id}`}>
//                         <span className={classes.imageBackdrop} />
                        
//                         <span className={classes.imageButton}>
                        
//                             <Typography
//                                 component="span"
//                                 variant="subtitle1"
//                                 color="inherit"
//                                 className={classes.imageTitle}
//                             >
//                                 {universitie.universityName}
//                                 <span className={classes.imageMarked} />
//                             </Typography>
//                         </span>
//                         </Link>
//                     </ButtonBase>
//                 ))}
//             </div>
//         </Container>
//     );
// }
// export default  UniversityItems;