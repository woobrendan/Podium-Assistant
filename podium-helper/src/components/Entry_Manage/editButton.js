import {useState} from 'react'
import { Button } from '@mui/material'

function EditButton(props) {
  const [edit, setEdit] = useState(false);
  const onClick = () => {
    !edit ? setEdit(true) : setEdit(false)
  }

  return (
    !edit 
    ? <Button variant="outlined"  onClick={onClick}>Edit</Button>  
    : <Button variant="contained" onClick={onClick}>Confirm</Button>
  )
}

export default EditButton