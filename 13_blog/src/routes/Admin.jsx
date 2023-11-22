import { Skeleton } from '@mui/material'
import { blogFetch } from '../axios/config'
import { useState, UseEffect, useEffect } from 'react'
import { Post as PostComponent } from '../components/Post/index'

import { Link } from 'react-router-dom'

export const Admin = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await blogFetch.get('/posts')
      const data = response.data

      setPosts([data])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPosts()
  })

  return (
    <>
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <Skeleton animation="wave" height={400} sx={{ bgcolor: 'grey.800' }} />
      ) : (
        posts.map((postItem) => {
          return (
            <PostComponent
              key={postItem.id}
              posts={postItem}
              read={false}
              edit={true}
            />
          )
        })
      )}
    </>
  )
}
