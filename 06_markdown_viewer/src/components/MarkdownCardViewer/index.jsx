import { useState, useEffect, useRef } from 'react'
import { Tollbar } from './Tollbar'
import { CardWithHtml } from '../CardWithHtml'

export const MarkdownCardViewer = () => {
  const [text, setText] = useState('# Olá, eu sou feito de markdown')
  return (
    <>
      <div className="flex flex-col flex-1 grow gap-10 w-[100%] p-8 items-start bg-zinc-50 rounded mt-10 drop-shadow-md min-h-72 sm:max-w-[600px] md:max-w-[820px] lg:max-w-[1024px]">
        <Tollbar />
        <textarea
          rows="4"
          className="rounded-md  border-none outline-none w-[100%] bg-gray-950 text-gray-500 p-6 font-medium text-[18px] resize-none h-[360px]"
        ></textarea>
        <CardWithHtml />
      </div>
    </>
  )
}
