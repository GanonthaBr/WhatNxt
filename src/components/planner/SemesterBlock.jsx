import { useState } from 'react';
import CourseCard from './CourseCard';

const SemesterBlock = ({ semester, courses, index }) => {
  const [expandedCourses, setExpandedCourses] = useState([]);

  const toggleCourse = (courseCode) => {
    setExpandedCourses(prev =>
      prev.includes(courseCode)
        ? prev.filter(code => code !== courseCode)
        : [...prev, courseCode]
    );
  };

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  // Color schemes for different semesters
  const getColorScheme = () => {
    const schemes = [
      { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-900', badge: 'bg-red-800 text-white' },
      { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-900', badge: 'bg-gray-700 text-white' },
      { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-900', badge: 'bg-red-800 text-white' },
      { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-900', badge: 'bg-gray-700 text-white' },
    ];
    return schemes[index % 4];
  };

  const colors = getColorScheme();

  return (
    <div className={`rounded-lg border-2 ${colors.border} ${colors.bg} p-6 transition-all hover:shadow-md`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`text-lg font-bold ${colors.text} mb-1`}>{semester}</h3>
          <p className="text-sm text-gray-600">{courses.length} courses • {totalCredits} units</p>
        </div>
        <div className={`px-3 py-1 rounded-full ${colors.badge} text-sm font-semibold`}>
          Semester {index + 1}
        </div>
      </div>

      <div className="space-y-3">
        {courses.map((course) => (
          <CourseCard
            key={course.code}
            course={course}
            isExpanded={expandedCourses.includes(course.code)}
            onToggle={() => toggleCourse(course.code)}
          />
        ))}
      </div>
    </div>
  );
};

export default SemesterBlock;
