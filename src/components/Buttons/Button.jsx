import React from 'react'
import {Button as MIButton} from "@mui/material";

const Button = (props) => {
    const {btnText,Href} = props
  return (
    <MIButton variant="outlined" sx={{color:'warning.main', borderColor:'warning.main'}} className='p-5'>Add to Card</MIButton>
  )
}

export default Button