import React from "react";
import Container from "@material-ui/core/Container";
import NavBar from "../HomePage/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 350
    },
    textfield: {
        minWidth: 350
    }

}));




export default function FirstAddBook() {
    const classes = useStyles();
    const [university, setUni] = React.useState("");
    const [univ,setUniv] = React.useState([]);
    const [name,setName]= React.useState("");

    React.useEffect(() =>{
        axios.get(`http://localhost:8000/university/`)
        .then(res => {
          setUniv(res.data);
      })
        .catch(err => {
          console.log(err);
        })
      }, []);

      const onUniChange = event => {
        console.log("The University is:  ",event.target.value);
        setUni(event.target.value);
      };

      return (
       <div>
          <NavBar />
          <br/>
          <Container>
          <h2>Add New Book</h2>
          <br />
          <br />
          <br />
          <form noValidate autoComplete="off" >
              <div>
              <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>
                University
              </InputLabel>

              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={university}
                onChange={onUniChange}
              >
                {univ.map((univ1) => (
                <MenuItem key={univ1.id} value={univ1.universityName}>{univ1.universityName}</MenuItem>
                 ))}
          
              </Select>

              <div>
              <TextField className={classes.textfield} 
                id="filled-full-width" 
                label="Enter the Name of Book"
                margin="normal"
                variant="filled"
              />
            </div>
            </FormControl>
              </div>
          </form>  
          </Container>
   
       </div>
      );

}