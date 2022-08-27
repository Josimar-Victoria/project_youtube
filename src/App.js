import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar } from './components'
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from './pages'

export default function App () {
  return (
    <BrowserRouter>
      <Box sx={{ background: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' exact element={<VideoDetail />} />
          <Route path='/channel/:id' exact element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
