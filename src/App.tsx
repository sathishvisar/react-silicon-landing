import React, { Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import { getRoutes } from './routes';

function AppRoutes() {
  return useRoutes(getRoutes());
}

const App: React.FC = () => {
  return (
    <Router>
        <Suspense fallback={<div>
          <div className="flex items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>}>
          <AppRoutes />
        </Suspense>
    </Router>
  );
}

export default App;
