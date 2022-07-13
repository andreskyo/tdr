import React from 'react'
import Button from '@material-ui/core/Button';


export const ButtonPrimary = (props) => {
  return (
    <>
      <Button
        variant={props.variant}
      >
        {props.text}
      </Button>

    </>
  )
}

export default ButtonPrimary