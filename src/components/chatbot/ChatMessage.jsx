const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}>
          {isUser ? (
            <div className="w-8 h-8 rounded-full bg-red-800 flex items-center justify-center text-white font-semibold text-sm">
              You
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          )}
        </div>

        {/* Message Content */}
        <div
          className={`px-4 py-3 rounded-lg ${
            isUser
              ? 'bg-red-800 text-white'
              : 'bg-gray-100 text-gray-900'
          }`}
        >
          {message.category && !isUser && (
            <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded mb-2">
              {message.category}
            </span>
          )}
          <div className="text-sm whitespace-pre-wrap">{message.text}</div>
          {message.timestamp && (
            <div className={`text-xs mt-2 ${isUser ? 'text-red-100' : 'text-gray-500'}`}>
              {message.timestamp}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
