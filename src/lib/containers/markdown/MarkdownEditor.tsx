import React, { useState } from 'react'
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
  const [text, setText] = useState<string>()

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
            <button>
              <IconSvg options={{ icon: 'title' }} />
            </button>
            <button>
              <IconSvg options={{ icon: 'bold' }} />
            </button>
            <button>
              <IconSvg options={{ icon: 'italic' }} />
            </button>
            <button>
              <IconSvg options={{ icon: 'code' }} />
            </button>
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
