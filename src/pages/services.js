import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const services = [
  {
    title: 'Birthday Parties',
    description: 'Celebrate your special day with us!',
    image: 'https://i.pinimg.com/236x/d4/3f/24/d43f24c3d25808b7b95d8ad945b15dec.jpg'
  },
  {
    title: 'Anniversary',
    description: 'Make your anniversary memorable.',
    image: 'https://i.pinimg.com/236x/d4/3f/24/d43f24c3d25808b7b95d8ad945b15dec.jpg'
  },
  {
    title: 'Baby Showers',
    description: 'Celebrate the arrival of your bundle of joy!',
    image: 'https://i.pinimg.com/236x/d4/3f/24/d43f24c3d25808b7b95d8ad945b15dec.jpg'
  },
  {
    title: 'Naming Ceremony',
    description: 'Give your child a beautiful name with a special ceremony.',
    image: 'https://i.pinimg.com/236x/d4/3f/24/d43f24c3d25808b7b95d8ad945b15dec.jpg'
  },
  {
    title: 'Haldi Decoration',
    description: 'Add color and vibrance to your haldi ceremony.',
    image: 'https://i.pinimg.com/236x/d4/3f/24/d43f24c3d25808b7b95d8ad945b15dec.jpg'
  },
  {
    title: 'Theme Decoration',
    description: 'Transform your event with themed decorations.',
    image: 'https://i.pinimg.com/236x/d4/3f/24/d43f24c3d25808b7b95d8ad945b15dec.jpg'
  },
];

const buttonStyles = {
  padding: '10px 20px',
  backgroundColor: 'orange',
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  fontSize: '15px',
  '&:hover': {
    backgroundColor: 'orange', // Ensure button retains color on hover
  },
};

const cardStyles = {
  width: 300, // Keep the card width fixed
  height: 400,
  margin: '0 10px 20px',
  transition: 'box-shadow 0.3s',
  boxShadow: 'none',
  borderRadius: '0px', // Make edges round
  '&:hover': {
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
  },
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const imageStyles = {
  height: 220,
  width: 260,
  borderRadius: '20px', // Make edges round
  objectFit: 'cover',
  border: '4px solid white', // Add white border around image
  margin :'auto',
};

export default function MultiActionAreaCard() {
  return (
    <div>
      <div style={containerStyles}>
        {services.slice(0, 3).map((service, index) => (
          <Card key={index} sx={cardStyles}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                style={imageStyles} // Apply image styles
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button size="small" color="primary" sx={buttonStyles}>
                Enquire Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div style={containerStyles}>
        {services.slice(3).map((service, index) => (
          <Card key={index} sx={cardStyles}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                style={imageStyles} // Apply image styles
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button size="small" color="primary" sx={buttonStyles}>
                Enquire Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
