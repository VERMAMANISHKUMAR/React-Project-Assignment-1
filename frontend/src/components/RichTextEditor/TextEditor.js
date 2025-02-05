import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const parsedData = JSON.parse(savedUserData);
      setUserData(parsedData);
      setContent(`
        <h2>User Profile</h2>
        <p><strong>Name:</strong> ${parsedData.name}</p>
        <p><strong>Email:</strong> ${parsedData.email}</p>
        <p><strong>Phone:</strong> ${parsedData.phone}</p>
        <p><strong>Address:</strong> ${parsedData.address}</p>
      `);
    }
  }, []);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
  ];

  return (
    <div className="editor-container">
      <h2 className="editor-title">Rich Text Editor</h2>
      {userData && <p className="user-info">Welcome, {userData.name}!</p>}
      <div className="editor-wrapper">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
};

export default TextEditor;
