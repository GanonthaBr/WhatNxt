const CourseCard = ({ course, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 focus:outline-none"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-mono font-semibold text-red-600">{course.code}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-600">{course.credits} units</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">{course.name}</h4>
          </div>
          <svg
            className={`h-5 w-5 text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
          <div className="flex items-start">
            <svg className="h-5 w-5 text-red-800 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-xs font-semibold text-gray-700 mb-1">Why this course?</p>
              <p className="text-sm text-gray-600 leading-relaxed">{course.rationale}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
