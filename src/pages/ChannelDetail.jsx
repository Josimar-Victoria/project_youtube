import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChannelCard from '../components/ChannelCard'
import Videos from '../components/Videos'
import { fetchFromAPI } from '../util/fetchFromAPI'

export default function ChannelDetail () {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  console.log({ channelDetail, videos })

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)

      setChannelDetail(data?.items[0])

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      )

      setVideos(videosData?.items)
    }

    fetchResults()
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206, 3,148,1) 100%, rgba(0,212,255,1) 1000%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="'-110px'" />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}
