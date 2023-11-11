import { marked } from 'marked'

export const CardWithHtml = ({ textToHtml, typeToHtml }) => {
  // function renderText() {
  //   return { __html: marked(textToHtml) }
  // }

  const styleDefault = 'font-normal'
  const styleH1 = 'text-[64px] font-bold'
  const styleH2 = 'text-[48px] font-bold'
  const styleBold = 'font-bold'
  const styleItalico = 'italic '
  const styleLink =
    ' cursor-pointer text-blue-500  underline  underline-offset-2'

  const styleHorizontalLine = 'h-[1px] w-[100%] bg-zinc-200 '
  const styleCodeBlock =
    'min-h-[40px] w-[100%] bg-gray-900 rounded p-2 flex flex-wrap overflow-hidden font-medium text-[18px]'

  function styleTagSelection() {
    switch (typeToHtml) {
      case 'h1':
        return <h1 className={styleH1}>{textToHtml.replace('#', '')}</h1>
      case 'h2':
        return <h2 className={styleH2}>{textToHtml.replace('#', '')}</h2>
      case 'Bold':
        return (
          <strong className={styleBold}>{textToHtml.replace('*', '')}</strong>
        )
      case 'Italic':
        return <i className={styleItalico}>{textToHtml.replace('*', '')}</i>
      case 'Link':
        return <a className={styleLink}>{textToHtml}</a>
      case 'Code Block':
        return (
          <div className={styleCodeBlock}>{textToHtml.replace('`', '')}</div>
        )
      case 'List Item':
        return <li> {textToHtml}</li>
      case 'Horizontal Line':
        return <div className={styleHorizontalLine}></div>
      default:
        return <p className={styleDefault}>{textToHtml}</p>
    }
  }

  return (
    <>
      <h1 className="font-bold text-[24px] text-zinc-900">Markdown em HTML</h1>
      <div className="flex flex-col flex-wrap text-gray-50 gap-10 w-[100%] p-8 items-start bg-gray-950 rounded drop-shadow-md min-h-72 sm:max-w-[620px] md:max-w-[820px] lg:max-w-[1024px] overflow-hidden ">
        {styleTagSelection()}
      </div>
    </>
  )
}
