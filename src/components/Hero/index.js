import React from 'react'
import { Box, Button, Typography } from "@mui/material";

function Hero() {

  return (
    <div
      id='home'
      style={{
        marginTop: '90px',
        position: 'relative'
      }}>
      <Box sx={{
        height: "70vh",
        width: "100%",
        overflow: "hidden"
      }}>
        <img
          src="/static/background/background.jpg"
          alt="User Cover"
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <div
            style={{
              display: 'flex',
              width: '100vw',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Typography
              variant="heroSection"
              color='primary'
            >
              SUCCESS OF YOUR
            </Typography>
            <Typography
              variant="heroSection"
              color="themeColor.main"
              fontWeight="700"
              gutterBottom
            >
              BUSINESS
            </Typography>
            <Button
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
              color='primary'
              size='large'
              variant="contained">
              Find out more
            </Button>
          </div>
        </div>
      </Box>
    </div>

  )
}

export default Hero;