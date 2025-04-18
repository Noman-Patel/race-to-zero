import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4">Created with ❤️ for a sustainable future</p>
        <p className="text-green-200 mb-8">
          Not affiliated with any organization — just doing my part
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Noman-Patel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-green-400">•</span>
          <a
            href="https://nomanpatel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white transition-colors"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 