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
        {/* Banner Section */}
        <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <button
              onClick={handleBackToList}
              className="flex items-center text-white hover:text-red-300 mb-4 transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Plans
            </button>
            <div className="inline-block mb-3 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-semibold">
              📚 Detailed View
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{selectedPlan.title}</h1>
            <p className="text-lg md:text-xl text-gray-300">{selectedPlan.overview}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 60L60 53.3C120 46.7 240 33.3 360 26.7C480 20 600 20 720 23.3C840 26.7 960 33.3 1080 36.7C1200 40 1320 40 1380 40L1440 40V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f9fafb"/>
            </svg>
          </div>
        </div>

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
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-semibold">
              📚 Plan Your Journey
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Degree Planner</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Explore successful degree plans from CMU Africa alumni. See the exact courses they took across 4 semesters, understand their rationale, and learn how each course contributed to their career success.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">📖</span>
                <span>Real Course Plans</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">💡</span>
                <span>Course Rationales</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🎯</span>
                <span>Career-Aligned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Browse Degree Plans</h2>
          <p className="text-lg text-gray-600">
            Select a plan to view the complete 4-semester course timeline and rationale.
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <svg className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-red-900 mb-2">How to Use This Tool</h3>
            <ul className="text-sm text-red-800 space-y-1">
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
                <div className="bg-gradient-to-r from-red-800 to-red-900 p-6 text-white">
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
    </div>
  );
};

export default DegreePlanner;
