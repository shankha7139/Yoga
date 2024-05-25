
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useNavigate} from "react-router-dom"


export default function NewCard(props) {
  const navigate = useNavigate()
  return (
    <div className='rounded-3xl ease-in-out duration-500 hover:shadow-2xl '  
    onClick={()=>navigate("/about",{state:{props}})}>  
        <Card sx={{ maxWidth: 345, bgcolor:"transparent" , borderRadius:"10px" , border:"2px solid white" }} className='p-5' >
      <CardHeader
        title={props.name}
        subheader={props.post}
        className=' flex justify-center text-center '
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="ramdev"
        className='rounded-full'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className='flex justify-center text-center' >
          {props.posting}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between'>
        <IconButton aria-label="instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="tweet">
          <TwitterIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}


