import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import NavBar from "../HomePage/NavBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  formControl: {
    minWidth: 350
  },
  textfield: {
    minWidth: 350
  }
}));

export default function AddBook() {
  const classes = useStyles();
  const [university, setUni] = React.useState("");
  const [name,setName]= React.useState("");
  const [description,setDesc]= React.useState("");
  const [imgUrl,setimgUrl]= React.useState("");
  const [univ,setUniv] = React.useState([]);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  /// To get Universities Name from Database
  React.useEffect(() =>{
    axios.get(`http://localhost:8000/university/`)
    .then(res => {
      setUniv(res.data);
  })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const handleSumbit = (event)=> {
    event.preventDefault();
    var InfoBook ={
      name:name,
      description:description,
      imgUrl: imgUrl,
      university:university,
  }
    console.log("All information of Book: ",InfoBook);
  }
  

  const onUniChange = event => {
    console.log("The University is:  ",event.target.value);
    setUni(event.target.value);
  };

  const onNameChange =(event) => {
    console.log("The Name of the Book is:  ",event.target.value)
    setName(event.target.value);
  };

  const onDescChange = (event) => {
    console.log("The Description is :  ",event.target.value)
    setDesc(event.target.value);
  }

  
  return (
    <div>
      <br />
      <NavBar />
      <Container>
        <h2>Add New Book</h2>
        <br />
        <br />
        <br />
        <form noValidate autoComplete="off" onSubmit={handleSumbit} >
          <div>
            <br />
            <div>
              <TextField className={classes.textfield} 
                id="filled-full-width" 
                label="Enter the Name of Book"
                margin="normal"
                variant="filled"
                value={name}
                onChange={onNameChange}
              />
            </div>

            <TextField
              className={classes.textfield}
              id="filled-full-width"
              label="Description"
              multiline={true}
              rows={2}
              margin="normal"
              variant="filled"
              onChange={onDescChange}
              value={description}
            />
            <br />
            <br />
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
            </FormControl>
          </div>
          <br />
          <br />
          <Typography>Please Upload the image of the Book</Typography>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" style={{ display: "none" }} />
          </Button>
          <br />
          <br />
          <br />
          <Button variant="contained" type="submit">Add Book</Button>
        </form>
      </Container>
    </div>
  );
}
