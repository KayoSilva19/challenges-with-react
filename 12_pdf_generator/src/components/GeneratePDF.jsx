import { ImageUpload } from './ImageUpload'
import { TextStyleConfig } from './TextStyleConfig'
import { useState } from 'react'

import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export function GeneratePDF() {
  const labelStyle = 'text-zinc-900 font-semibold text-[18px]'
  const inputStyle =
    'w-full border border-blue-200 rounded mt-2 h-[2.5rem] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-4 font-normal'

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [fontSize, setFontSize] = useState('12')
  const [fontColor, setFontColor] = useState('#000000')
  const [isBold, setIsBold] = useState(false)
  const [image, setImage] = useState(null)

  function generatedPDF() {
    const customStyle = {
      fontSize: parseInt(fontSize, 10),
      color: fontColor,
      bold: isBold,
    }

    const documentDefinition = {
      content: [
        { text: `Título: ${title}`, style: 'customStyle' },
        { text: `Descrição: ${description}`, style: 'customStyle' },
        image ? { image, width: 150 } : {},
      ],
      styles: {
        customStyle,
      },
    }

    pdfMake.createPdf(documentDefinition).download()
  }

  return (
    <div className="flex flex-col mt-4 bg-zinc-50 drop-shadow-md p-4 gap-4">
      <label className={labelStyle}>
        Título:
        <input
          type="text"
          className={inputStyle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className={labelStyle}>
        Descrição:
        <input
          type="text"
          className={inputStyle}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <TextStyleConfig
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontColor={fontColor}
        setFontColor={setFontColor}
        isBold={isBold}
        setIsBold={setIsBold}
      />
      <ImageUpload setImage={setImage} />

      <button
        className="bg-blue-200 rounded p-4 text-zinc-900 font-semibold text-[18px] hover:bg-blue-500 hover:text-gray-50 transition-colors mt-4"
        onClick={generatedPDF}
      >
        Gerar PDF
      </button>
    </div>
  )
}
