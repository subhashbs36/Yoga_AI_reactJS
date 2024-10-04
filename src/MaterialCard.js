import React from 'react';
import { Link } from 'react-router-dom';
import { Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography } from '@mui/material';



export default function ImgMediaCard(props) {
  const images = require.context('./images', true);
  let yoga = images(`./${props.src}`);
    

  return (
    <Card style={{borderRadius:"25px",boxShadow: "2px 2px 40px black" , margin:"20px", width:"30%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          src={yoga}
          alt="Yoga Image not found !"
        />
        <CardContent style={{backgroundColor:"#f1f1f1"}}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.disc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor:"#f1f1f1", alignContent:"center"}}>
        <Link to={`/App/${props.name}/${props.prt}`}>
          <Button style={{backgroundColor: "dodgerblue", color: "white", boxShadow: "2px 2px 4px black",borderRadius:"25px", 
    fontWeight: "bold",
    textDecoration: "none"}} id="practice" href="#" size="small" color="primary">
            Practice
          </Button>
        </Link>
        <Button href={props.link} target="_blank" size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}