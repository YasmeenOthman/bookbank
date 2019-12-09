import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import NavBar from '../HomePage/NavBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
     
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    formControl: {
        minWidth: 350,
      },
      textfield: {
        minWidth: 350,
      }
  }));

export default function Item() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
   
    }, []);

    const handleChange = event => {
    setAge(event.target.value);
    };

    return (
        <div>
        <NavBar/>
        <br/>
        <Container >
        <h2 >Add New Book</h2>
             <br/>
             <br/>
            <br/>
            <form   noValidate autoComplete="off" >
              <div >
               <br/>
               <div >
               <TextField className={classes.textfield}
                 id="filled-full-width"
                 label="Enter the Name of Book" 
                 margin="normal"
                 variant="filled"/>
               </div>

               <TextField className={classes.textfield}
                 id="filled-full-width"
                 label="Description" 
                 multiline={true}
                 rows={2}
                 margin="normal"
                 variant="filled"/>
                <br/>
                <br/>
              <FormControl variant="filled" className={classes.formControl} >
                  <InputLabel id="demo-simple-select-filled-label" 
                  fullWidth 
                  margin="normal"> University </InputLabel>

                 <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
              </div>
              <br/>
              <br/>
              <Typography>
                  Please Upload the image of the Book
              </Typography>
                <Button
                variant="contained"
                component="label"
                >
                Upload File
                <input
                type="file"
                style={{ display: "none" }}
                />
                </Button>
                <br/>
                <br/>
                <br/>
                <Button variant="contained">Add Book</Button>

            </form>
            </Container>
            </div>
         );

}







