import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Skeleton,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const InfiniteScroll = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMoreData, setHasMoreData] = useState(true)

  const fetchPosts = async () => {
    if (isLoading) return // Impedir chamadas simultâneas

    setIsLoading(true)
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
      )

      if (response.data.length > 0) {
        console.log(response.data)
        setPosts((prevPosts) => [...prevPosts, ...response.data])
      } else {
        setHasMoreData(false)
      }
    } catch (error) {
      console.error('Erro ao buscar os posts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [page])

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100 &&
      !isLoading &&
      hasMoreData
    ) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 150)
    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [hasMoreData, isLoading])

  return (
    <Container sx={{ mt: 10 }}>
      <Typography sx={{ fontSize: '54px' }}>Posts</Typography>
      {posts.map((post) => {
        return (
          <Card key={Math.random() * 1000} sx={{ width: '100%', marginTop: 4 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )
      })}
      {isLoading && (
        <Skeleton
          sx={{ bgcolor: 'gray.900', marginTop: '16px' }}
          className="dark:bg-zinc-900"
          height={160}
          variant="rectangular"
        />
      )}
    </Container>
  )
}
function throttle(func, delay) {
  let lastCall = 0
  return function (...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) return
    lastCall = now
    return func(...args)
  }
}
