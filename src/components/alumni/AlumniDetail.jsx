import { Link } from 'react-router-dom';

const AlumniDetail = ({ alumni, onClose }) => {
  if (!alumni) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Alumni Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-start mb-6">
            <img
              src={alumni.profileImage}
              alt={alumni.name}
              className="w-24 h-24 rounded-full mr-6"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{alumni.name}</h3>
              <p className="text-lg text-gray-600 mb-2">Class of {alumni.graduationYear}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-800 text-white">
                  {alumni.concentration}
                </span>
                {alumni.contactPreferences?.openToMentoring && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                    Open to Mentoring
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Current Position */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start mb-2">
              <svg className="h-6 w-6 text-red-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-lg font-semibold text-gray-900">{alumni.currentRole}</p>
                <p className="text-md text-gray-700">{alumni.company}</p>
                <p className="text-sm text-gray-600 mt-1 flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {alumni.location}
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
            <p className="text-gray-700 leading-relaxed">{alumni.bio}</p>
          </div>

          {/* Journey */}
          {alumni.journey && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">My Journey</h4>
              <p className="text-gray-700 leading-relaxed">{alumni.journey}</p>
            </div>
          )}

          {/* Expertise */}
          {alumni.expertise && alumni.expertise.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {alumni.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Degree Plan Link */}
          {alumni.degreePlanId && (
            <div className="mb-6 p-4 bg-gray-50 border border-gray-300 rounded-lg">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-red-800 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Degree Plan Available</p>
                  <p className="text-sm text-gray-700 mb-3">
                    View the exact courses {alumni.name.split(' ')[0]} took to reach their goals.
                  </p>
                  <Link
                    to={`/degree-planner?plan=${alumni.degreePlanId}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-900 transition-colors"
                    onClick={onClose}
                  >
                    View Degree Plan
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Connect</h4>
            <div className="space-y-2">
              {alumni.contactPreferences?.linkedin && (
                <a
                  href={alumni.contactPreferences.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-red-800 hover:text-red-900 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              )}
              {alumni.contactPreferences?.email && (
                <p className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {alumni.contactPreferences.email}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDetail;
