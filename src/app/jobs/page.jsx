// File: app/jobs/page.jsx (or page.tsx)

import React, { Suspense } from 'react';
import JobList from '../components/jobList'; // Extracted your component to this file

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="text-center text-lg py-10">Loading jobs...</div>}>
      <JobList />
    </Suspense>
  );
}
