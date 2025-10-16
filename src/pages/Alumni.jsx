import { useState, useEffect } from 'react';
import AlumniCard from '../components/alumni/AlumniCard';
import AlumniDetail from '../components/alumni/AlumniDetail';
import SearchBar from '../components/alumni/SearchBar';
import alumniData from '../data/alumni.json';

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConcentration, setSelectedConcentration] = useState('all');
  const [concentrations, setConcentrations] = useState([]);

  useEffect(() => {
    // Load alumni data
    setAlumni(alumniData);
    setFilteredAlumni(alumniData);

    // Extract unique concentrations
    const uniqueConcentrations = [...new Set(alumniData.map(a => a.concentration))];
    setConcentrations(uniqueConcentrations);
  }, []);

  useEffect(() => {
    // Filter alumni based on search and concentration
    let filtered = alumni;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(a =>
        a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.concentration.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by concentration
    if (selectedConcentration !== 'all') {
      filtered = filtered.filter(a => a.concentration === selectedConcentration);
    }

    setFilteredAlumni(filtered);
  }, [searchTerm, selectedConcentration, alumni]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (concentration) => {
    setSelectedConcentration(concentration);
  };

  const handleAlumniClick = (alumniMember) => {
    setSelectedAlumni(alumniMember);
  };

  const handleCloseDetail = () => {
    setSelectedAlumni(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-br from-red-800 via-red-900 to-gray-900 text-white py-16 md:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-semibold">
              👥 Connect with Success
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Alumni Connect</h1>
            <p className="text-xl md:text-2xl text-red-100 mb-6 leading-relaxed">
              Learn from the journeys of CMU Africa graduates who've successfully navigated their Master's programs and launched remarkable careers at top companies worldwide.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🎓</span>
                <span>50+ Alumni Profiles</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">💼</span>
                <span>Top Tech Companies</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🌍</span>
                <span>Global Careers</span>
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
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-800 mr-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{alumni.length}</p>
              <p className="text-sm text-gray-600">Alumni Profiles</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-gray-100 text-gray-800 mr-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {alumni.filter(a => a.contactPreferences?.openToMentoring).length}
              </p>
              <p className="text-sm text-gray-600">Open to Mentoring</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-gray-100 text-gray-800 mr-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{concentrations.length}</p>
              <p className="text-sm text-gray-600">Programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <SearchBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        concentrations={concentrations}
        label="Program"
      />

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold">{filteredAlumni.length}</span> of <span className="font-semibold">{alumni.length}</span> alumni
        </p>
      </div>

      {/* Alumni Grid */}
      {filteredAlumni.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumniMember) => (
            <AlumniCard
              key={alumniMember.id}
              alumni={alumniMember}
              onClick={handleAlumniClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No alumni found</h3>
          <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Alumni Detail Modal */}
      {selectedAlumni && (
        <AlumniDetail alumni={selectedAlumni} onClose={handleCloseDetail} />
      )}
      </div>
    </div>
  );
};

export default Alumni;
