import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const buttonStyle = makeStyles((theme) => ({
    large: {
      width: 256,
    },
    medium: {
      width: 164,
    },
    small: {
      width: 75,
    },
  }));

export const ButtonComponent = ({ ...props }) => {
    const { text, size, onClick } = props;
    const sizeStyle = buttonStyle();

    return (
        <Button variant="contained" className={sizeStyle[size]} onClick={onClick}>
        {text}
        </Button>
        );
}