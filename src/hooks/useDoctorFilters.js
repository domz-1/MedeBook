import { useState, useMemo } from 'react';

export const useDoctorFilters = (doctors) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesSpecialty = selectedSpecialty === 'All Specialties' || 
        doctor.specialty === selectedSpecialty;
      
      const matchesSearch = searchQuery === '' || 
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSpecialty && matchesSearch;
    });
  }, [doctors, selectedSpecialty, searchQuery]);

  return {
    selectedSpecialty,
    setSelectedSpecialty,
    searchQuery,
    setSearchQuery,
    filteredDoctors
  };
}; 