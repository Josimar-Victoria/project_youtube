import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from '../components'
import { fetchFromAPI } from '../util/fetchFromAPI'
import { useParams } from 'react-router-dom'

export default function SearchFeed () {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data => {
      setVideos(data.items)
    })
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography
        variant='h4'
        fontWeight='bold'
        mb={2}
        sx={{
          color: 'white'
        }}
      >
        Search Resukts for:
        <span
          style={{
            color: '#F31503',
            margin: '10px'
          }}
        >
          {searchTerm} Videos
        </span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}
