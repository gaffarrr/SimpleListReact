import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { Divider, ListItemButton, ListItemText, TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';

const App = () => {
  const [listFruit, setList] = useState(
    ["Apple1", "Grape1", "Mango1"]
  )

  const [value, setValue] = useState("")

  const addToList = () =>{
    let tempArr = listFruit
    tempArr.push(value)
    setList(tempArr)
    setValue("")
  }

  return (
    <div>
      <div className="App">
        <h1>Simple List in React</h1>
        <h2>Adding a dynamically generated list item</h2>
        <Box sx={{border:1, mx:'200px', width:'auto' ,justifyContent:'center', bgcolor:'#e4e4ff', borderRadius:'8px'}}>
          {
            listFruit.map( (item,index) =>
            
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText key={index} sx={{textAlign:'center'}}>
                      {item}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider sx={{bgcolor:'#898989'}}/>
              </List>
            )
          }
        </Box>
          
      </div>

      <div className="Form">
        <p>
          <a>Fruit Name</a>
          <TextField id="input-value" placeholder='ex. lemon' variant="outlined" size='small' value={value} onChange={ (e) => setValue(e.target.value)} sx={{paddingLeft:'10px'}}/>
          <Button type="submit" variant="contained" onClick={addToList}>add fruit</Button>
        </p>
      
      </div>
    </div>
    
  );
}

export default App;
