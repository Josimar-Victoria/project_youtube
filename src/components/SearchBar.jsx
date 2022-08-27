import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

export default function SearchBar () {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmitSearchTerm = e => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}/`)
      setSearchTerm('')
    }
  }

  return (
    <Paper
      component='from'
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <form onSubmit={handleSubmitSearchTerm}>
        <input
          className='search-bar'
          type='text'
          placeholder='Search-'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
          <Search />
        </IconButton>
      </form>
    </Paper>
  )
}
