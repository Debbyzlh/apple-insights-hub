
import { useState } from 'react';
import { ComplianceScoring } from '@/components/ComplianceScoring';
import { SalesDataChatbot } from '@/components/SalesDataChatbot';
import { Navigation } from '@/components/Navigation';
import { DashboardOverview } from '@/components/DashboardOverview';

const Index = () => {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Enterprise Dashboard</h1>
          <p className="text-gray-600">Monitor compliance and analyze sales data</p>
        </div>

        {activeView === 'overview' && <DashboardOverview />}
        {activeView === 'compliance' && <ComplianceScoring />}
        {activeView === 'chat' && <SalesDataChatbot />}
      </main>
    </div>
  );
};

export default Index;
