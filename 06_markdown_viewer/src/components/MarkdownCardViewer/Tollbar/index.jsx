import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {
  Bars3CenterLeftIcon,
  CommandLineIcon,
  InformationCircleIcon,
  LinkIcon,
  ListBulletIcon,
  NewspaperIcon,
  PaintBrushIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid'

export const Tollbar = ({ insertText }) => {
  const [selectedButton, setSelectedButton] = useState('')

  const stylesButton = `py-2 hover:text-gray-50 hover:bg-gray-950 rounded transition-al font-medium text-zinc-800 flex justify-start pl-2 gap-2 items-center  `

  const styleIcons = 'h-6 w-6 text-blue-500'

  function handleClick(e) {
    setSelectedButton(e.target.value)

    switch (e.target.value) {
      case 'h1':
        insertText('# ', '', 'h1')
        break
      case 'h2':
        insertText('## ', '', 'h2')
        break
      case 'Bold':
        insertText('**', '**', 'Bold')
        break
      case 'Italico':
        insertText('*', '*', 'Italic')
        break
      case 'Link':
        insertText('[', '](http://)', 'Link')
        break
      case 'Code block':
        insertText('```', '```', 'Code Block')
        break
      case 'List Item':
        insertText('- ', '', 'List Item')
        break
      case 'Horizontal Line':
        insertText('\n---\n', '', 'Horizontal Line')
        break
      default:
        insertText('', '', '')
    }
  }
  return (
    <Menu as="div" className="relative inline-block text-left drop-shadow-sm">
      <Menu.Button
        className={`${
          selectedButton !== ''
            ? 'bg-blue-500 hover:bg-blue-700'
            : 'bg-gray-950 hover:bg-gray-800'
        } p-2 rounded text-gray-50 font-medium transition-all`}
      >
        {selectedButton !== ''
          ? `Elemento Selecionado: ${selectedButton}`
          : `Selecione um elemento`}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2  sm:w-36 md:w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col p-2 ">
          <Menu.Item>
            {({ active }) => (
              <>
                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value="h1"
                  onClick={handleClick}
                >
                  <NewspaperIcon className={styleIcons} />
                  h1
                </button>

                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value="h2"
                  onClick={handleClick}
                >
                  <PaintBrushIcon className={styleIcons} />
                  h2
                </button>
                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value="Bold"
                  onClick={handleClick}
                >
                  <SparklesIcon className={styleIcons} />
                  Bold
                </button>
                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value="Italico"
                  onClick={handleClick}
                >
                  <InformationCircleIcon className={styleIcons} />
                  Italico
                </button>
                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value="Link"
                  onClick={handleClick}
                >
                  <LinkIcon className={styleIcons} />
                  Link
                </button>
                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value="Code block"
                  onClick={handleClick}
                >
                  <CommandLineIcon className={styleIcons} />
                  Code block
                </button>
                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value="List Item"
                  onClick={handleClick}
                >
                  <ListBulletIcon className={styleIcons} />
                  List Item
                </button>
                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value="Horizontal Line"
                  onClick={handleClick}
                >
                  <Bars3CenterLeftIcon className={styleIcons} />
                  Horizontal Line
                </button>
                <button
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  } ${stylesButton}`}
                  value=""
                  onClick={handleClick}
                >
                  {/* <AdjustmentsHorizontal className={styleIcons} /> */}
                  Default
                </button>
              </>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
