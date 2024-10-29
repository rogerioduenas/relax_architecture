import React from 'react'
import { Box, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import texts from './texts';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

function Footer() {
  const theme = useTheme();
  const [value, setValue] = useState()
  const input = texts.input
  const contact = texts.contact

  return (
    <Box
      id='contact'>
      <Typography
        variant='h1'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px'
        }}>
        CONTACT US
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '30px',
          rowGap: '50px',
          "@media (max-width: 400px)": {
            justifyContent: 'flex-start',
          },
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}>
          {contact.map(data => (
            <Box>
              <Typography variant='subTitle'>{data.title}</Typography>
              <Typography>{data.content}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            rowGap: '20px',
          }}
          noValidate
          autoComplete="off">
          {input.map(data => (
            <TextField
              value={value}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.themeColor.main,
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: theme.typography.subTitle,
                },
                width: '40vw',
                "@media (max-width: 800px)": {
                  width: '350px',
                },
                "@media (max-width: 400px)": {
                  width: '80vw',
                },
              }}
              label={data.label}
              minRows={data.rows}
              variant="outlined"
              color="themeColor"
              onFocus={() => setValue(null)}
              multiline={data.multiline} />
          ))}
          <Button
            onClick={() => setValue('')}
            variant="contained"
            color="themeColor"
            sx={{
              fontWeight: "700",
            }}>
            SEND MESSAGE
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer