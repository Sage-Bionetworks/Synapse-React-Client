import React, { useRef, useState, useEffect } from 'react'
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
  const commandList = [
    'title',
    'bold',
    'italic',
    'strikethrough',
    'code',
    'latex',
    'subscript',
    'superscript',
    'link',
    'image',
  ]

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const input = textAreaRef.current
    if (input) {
      input.setSelectionRange(selectionStart, selectionStart)
    }
  }, [textAreaRef, selectionStart])

  const handleCommands = (command: string) => {
    const textVal = textAreaRef.current
    if (textVal) {
      const start = textVal.selectionStart
      const end = textVal.selectionEnd
      const selected = text.substring(start, end)
      const first = text.substring(0, start)
      const later = text.substring(end, text.length)

      let openSyntax = ''
      let closeSyntax = ''
      if (command === 'bold') {
        openSyntax = closeSyntax = '**'
      } else if (command == 'italic') {
        openSyntax = closeSyntax = '_'
      } else if (command === 'strikethrough') {
        openSyntax = closeSyntax = '--'
      } else if (command === 'latex') {
        openSyntax = '$$\\('
        closeSyntax = '\\)$$'
      } else if (command === 'subscript') {
        openSyntax = closeSyntax = '~'
      } else if (command === 'superscript') {
        openSyntax = closeSyntax = '^'
      } else if (command === 'title') {
        openSyntax = '###'
      } else if (command === 'link') {
        openSyntax = '['
        closeSyntax = '](url)'
      } else if (command === 'image') {
        openSyntax = '!['
        closeSyntax = '](image-url)'
      } else if (command == 'code') {
        openSyntax = closeSyntax = '```'
        const newTextList = `${first}
        ${openSyntax}
        ${selected}
        ${closeSyntax}
        ${later}`.split('\n')
        // removes first empty line
        newTextList.shift()
        const newText = newTextList.map(s => s.trim()).join('\n')
        setText(newText)
        textAreaRef.current.focus()
        // adds one due to new line
        setSelectionStart(start + openSyntax.length + 1)
        return
      }

      const newText = `${first}${openSyntax}${selected}${closeSyntax}${later}`
      textAreaRef.current.focus()
      setSelectionStart(start + openSyntax.length)
      setText(newText)
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
