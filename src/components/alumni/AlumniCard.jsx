const AlumniCard = ({ alumni, onClick }) => {
  return (
    <div
      onClick={() => onClick(alumni)}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={alumni.profileImage}
            alt={alumni.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">{alumni.name}</h3>
            <p className="text-sm text-gray-500">Class of {alumni.graduationYear}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-start">
            <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-gray-900">{alumni.currentRole}</p>
              <p className="text-sm text-gray-600">{alumni.company}</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm text-gray-600">{alumni.location}</p>
          </div>

          <div className="flex items-start">
            <svg className="h-5 w-5 text-red-800 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-sm text-gray-700 font-medium">{alumni.concentration}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 line-clamp-2">{alumni.bio}</p>
        </div>

        {alumni.contactPreferences?.openToMentoring && (
          <div className="mt-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
              <svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 8 8">
                <circle cx={4} cy={4} r={3} />
              </svg>
              Open to Mentoring
            </span>
          </div>
        )}
      </div>

      <div className="bg-gray-50 px-6 py-3">
        <button className="text-sm font-medium text-red-600 hover:text-red-700">
          View Full Profile →
        </button>
      </div>
    </div>
  );
};

export default AlumniCard;
