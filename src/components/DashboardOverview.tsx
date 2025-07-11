
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Eye, X } from 'lucide-react';
import { departmentMetrics, resellerData, recentClients, riskyAccounts } from '@/data/sampleData';

export const DashboardOverview = () => {
  const [showRiskyAccounts, setShowRiskyAccounts] = useState(false);

  const handleBlacklist = (clientName: string) => {
    console.log(`Adding ${clientName} to blacklist`);
    // Add blacklist logic here
  };

  const handleIgnore = (clientName: string) => {
    console.log(`Ignoring risk for ${clientName}`);
    // Add ignore logic here
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Critical': return 'text-red-700 bg-red-100/80 border-red-300';
      case 'High': return 'text-orange-700 bg-orange-100/80 border-orange-300';
      case 'Medium': return 'text-yellow-700 bg-yellow-100/80 border-yellow-300';
      default: return 'text-gray-700 bg-gray-100/80 border-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Department Performance Metrics Grid - 5 sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {departmentMetrics.map((metric, index) => (
          <Card 
            key={index} 
            className={`border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70 border border-white/20 ${
              metric.isClickable ? 'cursor-pointer' : ''
            }`}
            onClick={metric.isClickable ? () => setShowRiskyAccounts(!showRiskyAccounts) : undefined}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 font-sf-hello flex items-center gap-2">
                {metric.isRisky && <AlertTriangle className="h-4 w-4 text-red-500" />}
                {metric.title}
                {metric.isClickable && <span className="text-xs text-gray-400">(click to view)</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-light font-sf-hello ${
                  metric.isRisky ? 'text-red-600' : 'text-gray-900'
                }`}>
                  {metric.value}
                </span>
                <span className={`text-sm font-medium font-sf-hello ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risky Accounts Modal/Popup */}
      {showRiskyAccounts && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[80vh] overflow-y-auto border-0 bg-white/95 backdrop-blur-xl shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium text-gray-900 font-sf-hello flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-500" />
                Risky Accounts - Immediate Attention Required
              </CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowRiskyAccounts(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskyAccounts.map((account, index) => (
                  <div key={index} className="p-6 bg-white/40 backdrop-blur-lg rounded-xl border border-white/30 hover:bg-white/60 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium text-gray-900 font-sf-hello text-lg">{account.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium font-sf-hello backdrop-blur-sm border ${getRiskColor(account.riskLevel)}`}>
                            {account.riskLevel} Risk
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 font-sf-hello mb-3">Last Activity: {account.lastActivity}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            Risk Factors:
                          </h4>
                          <ul className="space-y-1">
                            {account.reasons.map((reason, reasonIndex) => (
                              <li key={reasonIndex} className="text-sm text-gray-600 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                                {reason}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-2 border-t border-white/30">
                      <Button 
                        onClick={() => handleBlacklist(account.name)}
                        variant="destructive" 
                        className="flex-1 bg-red-600 hover:bg-red-700 shadow-lg"
                      >
                        Add to Blacklist
                      </Button>
                      <Button 
                        onClick={() => handleIgnore(account.name)}
                        variant="outline" 
                        className="flex-1 border-gray-200 hover:bg-gray-50 shadow-lg bg-white/60 backdrop-blur-lg"
                      >
                        Ignore Risk
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Reseller Performance Overview */}
      <Card className="border-0 bg-white/60 backdrop-blur-xl shadow-lg border border-white/20">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-medium text-gray-900 font-sf-hello">Reseller Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {resellerData.map((reseller) => {
              const getScoreColor = (score: number) => {
                if (score >= 95) return 'bg-green-500';
                if (score >= 90) return 'bg-yellow-500';
                return 'bg-red-500';
              };
              
              const getScoreTextColor = (score: number) => {
                if (score >= 95) return 'text-green-600';
                if (score >= 90) return 'text-yellow-600';
                return 'text-red-600';
              };

              return (
                <div key={reseller.id} className="p-3 bg-white/40 backdrop-blur-lg rounded-xl hover:bg-white/60 transition-all duration-300 border border-white/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${getScoreColor(reseller.score)}`}></div>
                    <h3 className="font-medium text-gray-900 font-sf-hello text-sm">{reseller.name}</h3>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-bold ${getScoreTextColor(reseller.score)}`}>{reseller.score}</span>
                      <span className={`text-xs font-medium ${
                        reseller.scoreChange.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {reseller.scoreChange}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{reseller.accounts} accounts</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Client Onboarding - Account level data */}
      <Card className="border-0 bg-white/60 backdrop-blur-xl shadow-lg border border-white/20">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900 font-sf-hello">Recent Client Onboarding</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/40 backdrop-blur-lg rounded-xl hover:bg-white/60 transition-all duration-300 border border-white/30">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 font-sf-hello">{client.name}</h3>
                  <p className="text-sm text-gray-500 font-sf-hello">{client.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900 font-sf-hello">{client.score}%</div>
                    <Progress value={client.score} className="w-16 h-1" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-sf-hello backdrop-blur-sm ${
                    client.status === 'Approved' ? 'bg-green-100/80 text-green-800 border border-green-200/50' :
                    client.status === 'Under Review' ? 'bg-yellow-100/80 text-yellow-800 border border-yellow-200/50' :
                    'bg-gray-100/80 text-gray-800 border border-gray-200/50'
                  }`}>
                    {client.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
