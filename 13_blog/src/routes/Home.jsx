import axios from 'axios'
import { useEffect, useState } from 'react'
import { Post } from '../components/Post'
import { Skeleton } from '@mui/material'

export function Home() {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      )

      const data = response.data

      setPosts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPosts()
  })

  return (
    <>
      <h1 className="font-semibold text-[1.5rem]">Últimos Posts</h1>
      {posts.length === 0 ? (
        <Skeleton animation="wave" height={150} sx={{ bgcolor: 'grey.800' }} />
      ) : (
        <Post posts={posts} />
      )}
    </>
  )
}
