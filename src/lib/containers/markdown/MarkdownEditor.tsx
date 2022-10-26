import React, { useRef, useState, useEffect } from 'react'
import {
  commandList,
  CommandListType,
  MARKDOWN_COMMANDS_DATA,
} from '../../utils/synapseTypes/MarkdownCommands'
import IconSvg from '../IconSvg'
import MarkdownSynapse from './MarkdownSynapse'

export enum MarkdownEditorTabs {
  WRITE = 'WRITE',
  PREVIEW = 'PREVIEW',
}

export type MarkdownEditorProps = {
  placeholder?: string
}

export const MarkdownEditor: React.FunctionComponent<MarkdownEditorProps> = ({
  placeholder,
}) => {
  const [currentTab, setCurrentTab] = useState<MarkdownEditorTabs>(
    MarkdownEditorTabs.WRITE,
  )
  const [text, setText] = useState<string>('')
  const [selectionStart, setSelectionStart] = useState<number>(0)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const input = textAreaRef.current
    if (input) {
      input.setSelectionRange(selectionStart, selectionStart)
    }
  }, [textAreaRef, selectionStart])

  const handleCommands = (command: CommandListType) => {
    const textVal = textAreaRef.current
    if (textVal) {
      const start = textVal.selectionStart
      const end = textVal.selectionEnd
      const selected = text.substring(start, end)
      const first = text.substring(0, start)
      const later = text.substring(end, text.length)

      const openSyntax = MARKDOWN_COMMANDS_DATA[command].openSyntax
      const closeSyntax = MARKDOWN_COMMANDS_DATA[command].closeSyntax

      switch (command) {
        case 'code': {
          const newText = `${first}
          ${openSyntax}
          ${selected}
          ${closeSyntax}
          ${later}`
            .split('\n')
            .map(s => s.trim())
            .join('\n')
          setText(newText)
          textAreaRef.current.focus()
          // adds 2 due to new line
          setSelectionStart(start + openSyntax.length + 2)
          break
        }
        case 'title':
        case 'bold':
        case 'italic':
        case 'strikethrough':
        case 'latex':
        case 'subscript':
        case 'superscript':
        case 'link':
        case 'image': {
          const newText = `${first}${openSyntax}${selected}${closeSyntax}${later}`
          textAreaRef.current.focus()
          setSelectionStart(start + openSyntax.length)
          setText(newText)
        }
      }
    }
  }

  return (
    <div className="bootstrap-4-backport MarkdownEditor">
      <div className="MarkdownEditorControls">
        <div className="Tabs">
          {Object.keys(MarkdownEditorTabs).map((tabName: string) => {
            return (
              <button
                className="Tab"
                role="tab"
                aria-selected={tabName === currentTab}
                key={tabName}
                onClick={e => {
                  e.stopPropagation()
                  setCurrentTab(MarkdownEditorTabs[tabName])
                }}
              >
                {tabName}
              </button>
            )
          })}
        </div>
        {currentTab === MarkdownEditorTabs.WRITE && (
          <div className="MarkdownEditorControlsToolbar">
            {commandList.map(type => {
              return (
                <button key={type} onClick={() => handleCommands(type)}>
                  <IconSvg options={{ icon: type }} />
                </button>
              )
            })}
          </div>
        )}
      </div>
      <div>
        {currentTab === MarkdownEditorTabs.WRITE ? (
          <textarea
            onChange={e => setText(e.target.value)}
            style={{ width: '100%' }}
            rows={6}
            value={text}
            ref={textAreaRef}
            placeholder={placeholder}
          />
        ) : text ? (
          <MarkdownSynapse markdown={text} />
        ) : (
          'Nothing to preview'
        )}
      </div>
    </div>
  )
}
