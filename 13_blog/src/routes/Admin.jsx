import { Box, Skeleton } from '@mui/material'
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

      setPosts(data)
    } catch (err) {
      console.log(err)
    }
  }

  const dedletePost = async (id) => {
    await blogFetch.delete(`/posts/${id}`)

    const filteredDeletePost = posts.filter((post) => post.id !== id)
    setPosts(filteredDeletePost)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <h1 className="font-semibold text-[1.5rem]">Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <Skeleton animation="wave" height={400} sx={{ bgcolor: 'grey.800' }} />
      ) : (
        posts.map((postItem) => {
          return (
            <Box
              key={postItem.id}
              className="bg-neutral-950 rounded flex justify-between p-4 mb-4 mt-4 items-center"
            >
              <h1 className="font-semibold text-[1.2rem]">{postItem.title}</h1>
              <Box className={`flex gap-4 justify-end mt-4`}>
                <Link
                  className={`py-2 px-4 bg-blue-500 font-semibold rounded hover:bg-blue-700 transition-all hover:scale-110 duration-300`}
                >
                  Editar
                </Link>
                <button
                  type="button"
                  className={`py-2 px-4 bg-red-500 font-semibold rounded hover:bg-red-700 transition-all hover:scale-110 duration-300`}
                  onClick={() => dedletePost(postItem.id)}
                >
                  Deletar
                </button>
              </Box>
            </Box>
          )
        })
      )}
    </>
  )
}
