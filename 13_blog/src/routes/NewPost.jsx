import { Container, TextField, TextareaAutosize } from '@mui/material'
import { blogFetch } from '../axios/config'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function NewPost() {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const addPost = async (e) => {
    e.preventDefault()

    const post = { title, content, userId: 1 }

    await blogFetch.post('posts', {
      body: post,
    })

    navigate('/')
  }

  return (
    <Container>
      <h1 className="font-semibold text-[1.5rem]">Inserir novo post:</h1>
      <form
        onSubmit={(e) => addPost(e)}
        className="mt-4 bg-neutral-50 p-4 rounded min-h-[17rem] flex flex-col "
      >
        <TextField
          fullWidth
          label="Título"
          placeholder="Digite o título"
          name="title"
          style={{ marginBottom: '16px' }}
          onChange={(e) => setTitle(e.target.value)}
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
        />

        <button
          type="submit"
          className="bg-purple-500 rounded font-semibold text-white text-[1.2rem] py-2 hover:bg-purple-700 transition-colors"
        >
          Salvar post
        </button>
      </form>
    </Container>
  )
}
