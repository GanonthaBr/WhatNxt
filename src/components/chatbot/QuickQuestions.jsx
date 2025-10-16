const QuickQuestions = ({ questions, onSelect, disabled }) => {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600 mb-3 font-medium">Quick Questions:</p>
      <div className="grid grid-cols-1 gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onSelect(question)}
            disabled={disabled}
            className="text-left px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-red-800 hover:bg-red-50 transition-all text-sm text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-start group"
          >
            <svg className="h-4 w-4 text-gray-400 group-hover:text-red-800 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{question.question}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickQuestions;
