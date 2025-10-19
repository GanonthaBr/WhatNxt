import { Link } from 'react-router-dom';
import SemesterBlock from './SemesterBlock';

const DegreePlanView = ({ plan, alumni }) => {
  const totalCredits = plan.semesters.reduce((sum, sem) => 
    sum + sem.courses.reduce((courseSum, course) => courseSum + course.credits, 0), 0
  );

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mr-3">
                  {plan.concentration}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2">{plan.focusArea}</h2>
              <p className="text-red-100 text-lg mb-4">{plan.overview}</p>
            </div>
          </div>

          {alumni && (
            <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md">
              <img
                src={alumni.profileImage}
                alt={alumni.name}
                className="w-12 h-12 rounded-full border-2 border-red-800"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium mb-1">This path led to:</p>
                <p className="font-bold text-gray-900 text-lg">{plan.careerOutcome}</p>
                <Link
                  to="/alumni"
                  className="text-sm text-red-800 hover:text-red-900 underline inline-flex items-center mt-1 font-medium"
                >
                  View {alumni.name}'s profile
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">{plan.semesters.length}</p>
              <p className="text-sm text-gray-600 mt-1">Semesters</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">
                {plan.semesters.reduce((sum, sem) => sum + sem.courses.length, 0)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Total Courses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">{totalCredits}</p>
              <p className="text-sm text-gray-600 mt-1">Total Units</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Course Timeline</h3>
            <p className="text-gray-600">
              Click on any course to see why it was chosen and how it contributed to the career outcome.
            </p>
          </div>

          <div className="space-y-6">
            {plan.semesters.map((semester, index) => (
              <SemesterBlock
                key={index}
                semester={semester.semester}
                courses={semester.courses}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegreePlanView;
