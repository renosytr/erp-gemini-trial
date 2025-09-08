
import React, { useState, useCallback } from 'react';
import { generateBusinessInsight } from '../services/geminiService';
import { SparklesIcon, XIcon } from './Icons';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse('');
    setError('');

    try {
      const insight = await generateBusinessInsight(prompt);
      setResponse(insight);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  if (!isOpen) {
    return (
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary z-50"
        aria-label="Open AI Assistant"
      >
        <SparklesIcon className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-text-primary flex items-center">
            <SparklesIcon className="h-5 w-5 mr-2 text-primary" />
            AI Business Assistant
          </h3>
          <button onClick={handleToggle} className="text-gray-400 hover:text-gray-600">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert"><p>{error}</p></div>}
              {response ? (
                 <div className="prose prose-sm max-w-none p-4 bg-gray-50 rounded-lg whitespace-pre-wrap">{response}</div>
              ) : (
                <p className="text-text-secondary text-center">Ask a question about your business data to get an AI-powered insight. For example: "Summarize Q2 sales trends." or "Which products are performing best?"</p>
              )}
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask for an insight..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isLoading || !prompt.trim()}
            >
              Generate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
