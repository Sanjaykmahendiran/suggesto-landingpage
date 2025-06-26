'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Bold, Italic, Underline, List, ListOrdered } from 'lucide-react'
import { stateToHTML } from 'draft-js-export-html';
import { useDebouncedCallback } from 'use-debounce';

import 'draft-js/dist/Draft.css'

interface RichTextEditorProps {
  onContentChange: (htmlContent: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onContentChange }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const editor = useRef<Editor>(null)

  const focus = () => {
    if (editor.current) editor.current.focus()
  }

  const handleKeyCommand = useCallback(
    (command: string, editorState: EditorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command)
      if (newState) {
        setEditorState(newState)
        return 'handled'
      }
      return 'not-handled'
    },
    []
  )

  const mapKeyToEditorCommand = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.keyCode === 9 /* TAB */) {
        const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */)
        if (newEditorState !== editorState) {
          setEditorState(newEditorState)
        }
        return null
      }
      return getDefaultKeyBinding(e)
    },
    [editorState]
  )

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType))
  }

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))
  }

  const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  }

  const getBlockStyle = (block: any) => {
    switch (block.getType()) {
      case 'blockquote':
        return 'text-xl italic border-l-4 border-gray-300 pl-4 py-2 my-4'
      default:
        return ''
    }
  }

  const debouncedContentChange = useDebouncedCallback((html: string) => {
    if (html !== '<p><br></p>') {
      onContentChange(html);
    }
  }, 300)

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);
  
    if (contentState.hasText() || html !== '<p><br></p>') {
      debouncedContentChange(html);
    }
  }, [editorState, debouncedContentChange]);

  return (
    <TooltipProvider>
      <div className="w-full max-w-4xl mx-auto p-4 border rounded-lg shadow-lg bg-background">
        <div className="mb-4 flex flex-wrap gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleInlineStyle('BOLD')}
              >
                <Bold className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleInlineStyle('ITALIC')}
              >
                <Italic className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleInlineStyle('UNDERLINE')}
              >
                <Underline className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Underline</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleBlockType('unordered-list-item')}
              >
                <List className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Unordered List</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleBlockType('ordered-list-item')}
              >
                <ListOrdered className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Ordered List</TooltipContent>
          </Tooltip>
        </div>
        <div
          className="border rounded-md p-4 min-h-[200px] focus-visible:ring-0 focus-visible:ring-offset-0 max-w-[20rem]"
          onClick={focus}
        >
          <Editor
            ref={editor}
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={mapKeyToEditorCommand}
            customStyleMap={styleMap}
            blockStyleFn={getBlockStyle}
            placeholder="Write something..."
            spellCheck={true}
          />
        </div>
      </div>
    </TooltipProvider>
  )
}

export default RichTextEditor
