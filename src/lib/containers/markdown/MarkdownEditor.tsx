import React, { useRef, useState, useEffect } from 'react'
import {
  commandList,
  CommandListType,
  MARKDOWN_COMMANDS_DATA,
} from '../../utils/synapseTypes/MarkdownCommands'
import IconSvg from '../IconSvg'
import MarkdownSynapse from './MarkdownSynapse'
import { UserMentionModal } from './UserMentionModal'
import { startCase } from 'lodash-es'
import Tooltip from '../../utils/tooltip/Tooltip'

export enum MarkdownEditorTabs {
  WRITE = 'WRITE',
  PREVIEW = 'PREVIEW',
}

export type MarkdownEditorProps = {
  placeholder?: string
  text: string
  setText: (text: string) => void
}

export const MarkdownEditor: React.FunctionComponent<MarkdownEditorProps> = ({
  placeholder,
  text,
  setText,
}) => {
  const [currentTab, setCurrentTab] = useState<MarkdownEditorTabs>(
    MarkdownEditorTabs.WRITE,
  )
  const [selectionStart, setSelectionStart] = useState<number>(0)
  const [isShowingTagModal, setIsShowingTagModal] = useState<boolean>(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  /**
   * Updates the position of the cursor. This must occur within `useEffect` because we need to ensure that the
   * cursor position is updated after the state of `text` is updated.
   */
  useEffect(() => {
    const input = textAreaRef.current
    if (input) {
      input.setSelectionRange(selectionStart, selectionStart)
    }
  }, [textAreaRef, selectionStart])

  useEffect(() => {
    textAreaRef.current?.focus()
  }, [isShowingTagModal])

  const handleUserTag = (user: string) => {
    const newText: string[] = []
    const textVal = textAreaRef.current
    if (textVal) {
      const start = textVal?.selectionStart
      const textBeforeTag = text.substring(0, start)
      const textAfterTag = text.substring(start, text.length)
      setSelectionStart(start + user.length + 1)
      newText.push(textBeforeTag, `@${user}`, textAfterTag)
    }
    setText(newText.join(''))
  }

  const handleCommands = (command: CommandListType) => {
    const textVal = textAreaRef.current
    if (textVal) {
      const start = textVal.selectionStart
      const end = textVal.selectionEnd
      const selected = text.substring(start, end)
      const textBeforeSelection = text.substring(0, start)
      const textAfterSelection = text.substring(end, text.length)

      const openSyntax = MARKDOWN_COMMANDS_DATA[command].openSyntax
      const closeSyntax = MARKDOWN_COMMANDS_DATA[command].closeSyntax

      switch (command) {
        case 'code': {
          const newText: string[] = []
          newText.push(
            textBeforeSelection,
            openSyntax,
            selected,
            closeSyntax,
            textAfterSelection,
          )

          setText(newText.join('\r\n'))
          textVal.focus()
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
          const newText = `${textBeforeSelection}${openSyntax}${selected}${closeSyntax}${textAfterSelection}`
          textVal.focus()
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
                  <IconSvg options={{ icon: type, label: startCase(type) }} />
                </button>
              )
            })}
            <Tooltip placement="top" title="Mention">
              <button
                className="tag"
                onClick={() => setIsShowingTagModal(true)}
              >
                @
              </button>
            </Tooltip>
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

      <UserMentionModal
        show={isShowingTagModal}
        onClose={() => setIsShowingTagModal(false)}
        handleUserTag={handleUserTag}
      />
    </div>
  )
}
