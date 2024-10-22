import React from 'react'
import { Typography, Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';
import texts from './texts';

function About() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        padding: '100px',
        gap: '3rem',
        "@media (max-width: 500px)": {
          padding: '30px',
      },
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Typography variant='h1'>
          ABOUT US
        </Typography>
        <Typography variant='subTitle'>
          Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}>
        <Box
          sx={{
            width: '530px'
          }}>
          <Typography
            variant='h2'
            fontWeight="700">
            Our Business
          </Typography>
          {texts.ob.map(text =>
            <Typography
              variant='text'
              sx={{
                display: 'flex',
                columnGap: '10px',
              }}>
              {text}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            width: '530px'
          }}>
          <Typography
            variant='h2'
            fontWeight="700">
            We Design Awesome Web Apps
          </Typography>
          <Typography
            variant='text'
            sx={{
              display: 'flex',
              columnGap: '10px',
            }}>
            Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, consectetur.
          </Typography>
          {texts.wd.map(text =>
            <Typography
              variant='text'
              sx={{
                display: 'flex',
                columnGap: '10px',
              }}>
              <CheckCircleIcon color='themeColor' />
              {text}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default About