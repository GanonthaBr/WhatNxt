import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DegreePlanView from '../components/planner/DegreePlanView';
import degreePlansData from '../data/degreePlans.json';
import alumniData from '../data/alumni.json';

const DegreePlanner = () => {
  const [searchParams] = useSearchParams();
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [alumni, setAlumni] = useState({});

  useEffect(() => {
    // Load plans
    setPlans(degreePlansData);

    // Create alumni lookup
    const alumniLookup = {};
    alumniData.forEach(a => {
      alumniLookup[a.id] = a;
    });
    setAlumni(alumniLookup);

    // Check if a plan is specified in URL
    const planId = searchParams.get('plan');
    if (planId) {
      const plan = degreePlansData.find(p => p.id === planId);
      if (plan) {
        setSelectedPlan(plan);
      }
    }
  }, [searchParams]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPlan(null);
  };

  if (selectedPlan) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={handleBackToList}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Plans
          </button>

          <DegreePlanView 
            plan={selectedPlan} 
            alumni={alumni[selectedPlan.alumniId]}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Degree & Course Planner</h1>
        <p className="text-lg text-gray-600">
          Explore successful degree plans from CMU Africa alumni. See the exact courses they took, understand their rationale, and learn how each course contributed to their career success.
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <svg className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">How to Use This Tool</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Browse proven degree plans from successful alumni</li>
              <li>• Click on any course to see why it was chosen</li>
              <li>• Use these plans as inspiration for your own academic journey</li>
              <li>• Connect with alumni to learn more about their experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Available Degree Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => {
            const planAlumni = alumni[plan.alumniId];
            return (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handlePlanSelect(plan)}
              >
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-3">
                    {plan.concentration}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{plan.focusArea}</h3>
                  <p className="text-red-100 text-sm">{plan.overview}</p>
                </div>

                <div className="p-6">
                  {/* Alumni Info */}
                  {planAlumni && (
                    <div className="flex items-center mb-4 pb-4 border-b border-gray-200">
                      <img
                        src={planAlumni.profileImage}
                        alt={planAlumni.name}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{planAlumni.name}</p>
                        <p className="text-xs text-gray-600">Class of {planAlumni.graduationYear}</p>
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{plan.semesters.length}</p>
                      <p className="text-xs text-gray-600">Semesters</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {plan.semesters.reduce((sum, sem) => sum + sem.courses.length, 0)}
                      </p>
                      <p className="text-xs text-gray-600">Courses</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {plan.semesters.reduce((sum, sem) => 
                          sum + sem.courses.reduce((courseSum, course) => courseSum + course.credits, 0), 0
                        )}
                      </p>
                      <p className="text-xs text-gray-600">Units</p>
                    </div>
                  </div>

                  {/* Career Outcome */}
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-green-900 mb-1">Career Outcome</p>
                        <p className="text-sm text-green-800">{plan.careerOutcome}</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                    View Full Plan
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-3">Want to Create Your Own Path?</h3>
        <p className="text-gray-300 mb-6">
          These plans are starting points. Talk to your advisor, explore electives, and create a plan that aligns with your unique goals and interests.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/alumni"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            Connect with Alumni
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/ai-assistant"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get AI Guidance
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DegreePlanner;
