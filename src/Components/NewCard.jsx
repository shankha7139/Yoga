
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ramdev from "../assets/ramdev.jpeg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='rounded-3xl' >  
        <Card sx={{ maxWidth: 345, bgcolor:"transparent" , borderRadius:"10px" , border:"2px solid white" }} className='p-5' >
      <CardHeader
        title={props.name}
        subheader={props.post}
        className=' flex justify-center text-center '
      />
      <CardMedia
        component="img"
        height="194"
        image={ramdev}
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
