import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const BlogPostEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const getHtmlContent = () => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
        }}
      />
      <textarea
        value={getHtmlContent()}
        
        placeholder="Write your content here..."
        className="w-full p-2 h-48 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
      ></textarea>
    </div>
  );
};

export default BlogPostEditor;
