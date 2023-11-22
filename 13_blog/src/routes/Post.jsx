import { Skeleton } from '@mui/material'
import { Post as PostComponent } from '../components/Post/index'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { blogFetch } from '../axios/config'

export const Post = () => {
  const { id } = useParams()

  const [post, setPost] = useState([])

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`)
      const data = response.data
      setPost([data])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      {post.length === 0 ? (
        <Skeleton animation="wave" height={400} sx={{ bgcolor: 'grey.800' }} />
      ) : (
        <PostComponent posts={post} read={false} />
      )}
    </>
  )
}
