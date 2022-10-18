import {useState} from 'react'
import { Button } from '@mui/material'

function EditButton(props) {
  const [edit, setEdit] = useState(props.editStatus);
  const onClick = () => {
    !edit 
    ? setEdit(true) 
    : setEdit(false)

    if (!edit) {
      setEdit(true);
      props.getEditStatus(true)
    } else {
      setEdit(false);
      props.getEditStatus(false)
    }
  }

  return (
    edit 
      ? <Button variant="contained" onClick={onClick}>Confirm</Button>
      : <Button variant="outlined"  onClick={onClick}>Edit</Button>  
  )
}

export default EditButton