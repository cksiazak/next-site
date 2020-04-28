import React, { useState } from 'react';
import mdToClipboard from '../../lib/mdToClipboard';

const MarkdownCopyButton = ({ md }) => {
  const [copyStatus, setCopyStatus] = useState('Copy');

  const copyHandler = () => {
    mdToClipboard(md);
    setCopyStatus('Copied');
    setTimeout(() => {
      setCopyStatus('Copy');
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={copyHandler}
      className={copyStatus === 'Copied' ? 'copy-active' : 'copy-inactive'}
    >
      {copyStatus}
      <style jsx>{`
        button {
          position: absolute;
          top: 0;
          right: 0;
          border-radius: 0px;
          padding: 0.5rem 1rem;
          border: 0px;
          background: #0070f3;
          color: white;
          transition: 0.2s;
          cursor: pointer;
          border-radius: 0px 5px 0px 5px;
          min-width: 5rem;
          user-select: none;
        }

        button:active {
          outline: none;
        }

        .copy-inactive:hover {
          background: rgba(0, 118, 255, 0.9);
        }

        .copy-active {
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
