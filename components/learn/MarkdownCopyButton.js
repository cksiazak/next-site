import React from 'react';
import mdToClipboard from '../../lib/mdToClipboard';

const MarkdownCopyButton = ({ md }) => {
  const copyHandler = () => {
    mdToClipboard(md);
  };
  return (
    <button type="button" onClick={copyHandler}>
      Copy
      <style jsx>{`
        button {
          position: absolute;
          top: 0;
          right: 0;
          border-radius: 0px;
          padding: 0.35rem 1rem;
          border: 0px;
          background: #0070f3;
          color: white;
          cursor: pointer;
          border-radius: 0px 5px 0px 5px;
          transition: 0.2s;
          user-select: none;
        }

        button:hover {
          background: rgb(18, 124, 247);
        }

        button:active {
          background: green;
        }

        @media (max-width: 960px) {
          button {
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </button>
  );
};

export default MarkdownCopyButton;
