import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import data from './data'

function Team() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '-10px',
        padding: '50px',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant='h1'>
          TEAM
        </Typography>
        <Typography
          variant='subTitle'
          sx={{
            padding: '0 50px',
            "@media (max-width: 500px)": {
              padding: '0',
            },
          }}>
          Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '50px 0',
        flexWrap: 'wrap',
        gap: '50px'
      }}>
        {data.map((data) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="350px"
              image={data.img}
            />
            <CardContent>
              <Typography variant="h5" fontWeight={700}>
                {data.name}
              </Typography>
              <Typography gutterBottom variant="p">
                {data.position}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nisl iaculis, faucibus ligula sed, rutrum felis. Sed.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Team