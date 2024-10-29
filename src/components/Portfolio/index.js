import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import images from './images'

function Portfolio() {
  const theme = useTheme();

  return (
    <Box
      id='portfolio'
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '100px 0',
        marginTop: '-10px'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant='h1'>
          PORTFOLIO
        </Typography>
        <Typography
          variant='subTitle'
          sx={{
            padding: '0 100px',
            "@media (max-width: 500px)": {
              padding: '0 30px',
            },
          }}>
          Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
        {images.map((item) => (
          <img
            src={item.img}
            alt={item.title}
            width='25%'
          />
        ))}
      </Box>
    </Box>
  )
}

export default Portfolio