import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';

const CustomCard = (): JSX.Element => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 325,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      color: 'blue'
    }
  });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardHeader title="Miau"></CardHeader>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.button}  variant="contained"
        onClick={(event) => { console.log('clicked') }} size="small">SELECT</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
