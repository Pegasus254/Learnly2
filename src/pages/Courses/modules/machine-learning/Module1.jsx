import React from 'react';
import ModuleLayout from '../../../../components/Courses/ModuleLayout';
import ModuleContent from '../../../../components/Courses/ModuleContent';

const Module1 = () => {
  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: 'Machine Learning', link: '/courses/machine-learning' },
    { label: 'Module 1: Introduction to Machine Learning' }
  ];

  return (
    <ModuleLayout breadcrumbItems={breadcrumbItems}>
      <ModuleContent />
    </ModuleLayout>
  );
};

export default Module1; 