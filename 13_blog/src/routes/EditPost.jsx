import { Container, TextField, TextareaAutosize } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogFetch } from '../axios/config'

export const EditPost = () => {
  const navigation = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { id } = useParams()

  const getPosts = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`)

      const data = response.data

      setTitle(data.title)
      setContent(data.body)
    } catch (err) {
      console.log(err)
    }
  }

  const editPost = async (e) => {
    e.preventDefault()

    const post = { title, content, userId: 1 }

    await blogFetch.put(`/posts/${id}`, {
      body: post,
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Container>
      <h1 className="font-semibold text-[1.5rem]">Editando: {title}</h1>
      <form
        onSubmit={(e) => editPost(e)}
        className="mt-4 bg-neutral-50 p-4 rounded min-h-[17rem] flex flex-col "
      >
        <TextField
          fullWidth
          label="Título"
          placeholder="Digite o título"
          name="title"
          style={{ marginBottom: '16px' }}
          onChange={(e) => setTitle(e.target.value)}
          value={title || ''}
        />
        <TextareaAutosize
          label="Conteúdo"
          name="content"
          placeholder="Comece a publicar"
          style={{
            marginBottom: '16px',
            width: '100%',
            resize: 'none',
            minHeight: '10rem',
            padding: '16px',
            color: '#121212',
            background: '#DDD',
            borderRadius: '4px',
          }}
          onChange={(e) => setContent(e.target.value)}
          value={content || ''}
        />

        <button
          type="submit"
          className="bg-purple-500 rounded font-semibold text-white text-[1.2rem] py-2 hover:bg-purple-700 transition-colors"
        >
          Editar post
        </button>
      </form>
    </Container>
  )
}
