import { Box, Typography, Container } from '@mui/material'
import { Link } from 'react-router-dom'

export function Post({ posts }) {
  return (
    <Box className="mt-10 flex flex-col gap-6 ">
      {posts.map((post) => {
        return (
          <Box
            key={post.id}
            className="bg-neutral-900 rounded p-8 flex flex-col gap-4 min-h-[200px] justify-between "
          >
            <h2 className="font-medium text-purple-500 text-[1.32rem]">
              {post.title}
            </h2>
            <span className="text-[1.1rem]">{post.body}</span>
            <Box className="text-right mt-4">
              <Link
                to={`/posts/${posts.id}`}
                className="bg-purple-500 py-2 px-4 font-semibold text-[1.1rem] rounded hover:bg-purple-600 transition-colors"
              >
                Leia Mais
              </Link>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
