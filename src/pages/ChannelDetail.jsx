import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../util/fetchFromAPI'

export default function ChannelDetail () {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  console.log({ channelDetail, videos })

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(data =>
      setChannelDetail(data?.items[0])
    )

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`).then(data =>
      setVideos(data?.items)
    )
  }, [id])

  return <div>ChannelDetail</div>
}
