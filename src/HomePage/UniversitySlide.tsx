import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
export interface IAppProps {
  
}
export interface Books {
  id: Number,
  universityName: String,
  __v: Number,
  _id: String
}
//-----------------Unifersity Link Component----------
const images = [
    {
        url: 'https://geopoliticalfutures.com/wp-content/uploads/2019/04/Harvard-University.jpg',
        title: 'university-1',
        width: '25%',
    },
    {
        url: 'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/iol/2018/10/19/17554222/NS%20cape%20town%20university.jpg&operation=CROP&offset=0x55&resize=730x408',
        title: 'university-2',
        width: '25%',
    },
    {
        url: 'https://www.collegeatlas.org/wp-content/uploads/2014/06/4-year-accredited-colleges-and-universities-main-image2.jpg',
        title: 'university-3',
        width: '25%',
    },
    {
        url: 'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/james_madison_university.jpg?itok=29bxi7ZM',
        title: 'university-4',
        width: '25%',
    },

];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 300,
            width: '100%',
        },
        image: {
            position: 'relative',
            height: 200,
            border: '3px solid #77b747',
            [theme.breakpoints.down('xs')]: {
                width: '100% !important', // Overrides inline-style
                height: 100,
            },
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& $imageBackdrop': {
                    opacity: 0.15,
                },
                '& $imageMarked': {
                    opacity: 0,
                },
                '& $imageTitle': {
                    border: '4px solid currentColor',
                },
            },
        },
        focusVisible: {},
        imageButton: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        },
        imageSrc: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.black,
            opacity: 0.4,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageMarked: {
            height: 3,
            width: 18,
            backgroundColor: theme.palette.common.white,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
        },
        h2: {
            color: 'gray',
            marginBottom: 20,
            marginTop: 60
        }

    }),
);

const UniversitySlide: React.SFC<IAppProps> = (props) => {
  const [universities, setUniversities] = useState<any>([])
  const allInfo = async () => {
    axios.get('http://localhost:8000/')
      .then(({ data }) => {
        let universities = data.universities;
        setUniversities(universities);
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    allInfo();
  }, [])



    const classes = useStyles();

    return (
        <Container style={{marginBottom:50}}>
            <h2 className={classes.h2}>University</h2>
            <div className={classes.root}>
                {universities.map((universitie:any)=> (
                    <ButtonBase
                        focusRipple
                        key={universitie.id}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: '25%',
                        }}
                    >
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/james_madison_university.jpg?itok=29bxi7ZM)`,
                            }}
                        />
                        <Link href={`/univBooks/${universitie.id}`}>
                        <span className={classes.imageBackdrop} />
                        
                        <span className={classes.imageButton}>
                        
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                            >
                                {universitie.universityName}
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                        </Link>
                    </ButtonBase>
                ))}
            </div>
        </Container>
    );
}
export default  UniversitySlide;