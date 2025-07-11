// Sample data structure for easy replacement with real data

// Department level metrics (highest level overview)
export const departmentMetrics = [
  { title: 'Risky Accounts', value: '12', change: '+3', trend: 'up', isRisky: true, isClickable: true },
  { title: 'SO/ST/SF Alignment', value: '94.7%', change: '+2.3%', trend: 'up' },
  { title: 'UB Rate', value: '89.3%', change: '+1.2%', trend: 'up' },
  { title: 'Market Purchase', value: '84', change: '+15.6%', trend: 'up' },
  { title: 'VAT vs SO', value: '267', change: '+0.8%', trend: 'up' },
];

// Reseller level data (10 resellers total)
export const resellerData = [
  { id: 1, name: 'Reseller 1', score: 96, accounts: 15, scoreChange: '+2.1', status: 'Active' },
  { id: 2, name: 'Reseller 2', score: 89, accounts: 12, scoreChange: '-1.3', status: 'Active' },
  { id: 3, name: 'Reseller 3', score: 92, accounts: 18, scoreChange: '+0.8', status: 'Active' },
  { id: 4, name: 'Reseller 4', score: 87, accounts: 9, scoreChange: '-2.1', status: 'Review' },
  { id: 5, name: 'Reseller 5', score: 94, accounts: 14, scoreChange: '+1.5', status: 'Active' },
  { id: 6, name: 'Reseller 6', score: 88, accounts: 11, scoreChange: '+0.3', status: 'Active' },
  { id: 7, name: 'Reseller 7', score: 85, accounts: 8, scoreChange: '-1.8', status: 'Review' },
  { id: 8, name: 'Reseller 8', score: 97, accounts: 16, scoreChange: '+3.2', status: 'Active' },
  { id: 9, name: 'Reseller 9', score: 86, accounts: 10, scoreChange: '-0.9', status: 'Active' },
  { id: 10, name: 'Reseller 10', score: 90, accounts: 13, scoreChange: '+1.7', status: 'Active' },
];

// Account level data (lowest level, individual clients)
export const recentClients = [
  { name: 'TechCorp Industries', score: 96, status: 'Approved', date: '2024-07-09', resellerId: 1 },
  { name: 'Global Solutions Ltd', score: 88, status: 'Under Review', date: '2024-07-08', resellerId: 2 },
  { name: 'Innovation Partners', score: 92, status: 'Approved', date: '2024-07-08', resellerId: 6 },
  { name: 'Future Dynamics', score: 85, status: 'Pending', date: '2024-07-07', resellerId: 9 },
  { name: 'Digital Ventures Inc', score: 91, status: 'Approved', date: '2024-07-07', resellerId: 3 },
  { name: 'Enterprise Systems', score: 87, status: 'Under Review', date: '2024-07-06', resellerId: 4 },
  { name: 'CloudTech Solutions', score: 94, status: 'Approved', date: '2024-07-06', resellerId: 5 },
  { name: 'Data Analytics Pro', score: 89, status: 'Approved', date: '2024-07-05', resellerId: 1 },
  { name: 'Smart Business Hub', score: 83, status: 'Pending', date: '2024-07-05', resellerId: 7 },
  { name: 'NextGen Technologies', score: 95, status: 'Approved', date: '2024-07-04', resellerId: 8 },
  { name: 'Quantum Computing Ltd', score: 90, status: 'Approved', date: '2024-07-04', resellerId: 1 },
  { name: 'AI Solutions Group', score: 86, status: 'Under Review', date: '2024-07-03', resellerId: 10 },
  { name: 'Blockchain Dynamics', score: 93, status: 'Approved', date: '2024-07-03', resellerId: 2 },
  { name: 'Cybersecurity Plus', score: 88, status: 'Approved', date: '2024-07-02', resellerId: 3 },
  { name: 'Mobile First Corp', score: 84, status: 'Pending', date: '2024-07-02', resellerId: 4 },
  { name: 'Green Energy Tech', score: 91, status: 'Approved', date: '2024-07-01', resellerId: 5 },
  { name: 'Financial Systems Pro', score: 87, status: 'Under Review', date: '2024-07-01', resellerId: 6 },
  { name: 'Healthcare Innovations', score: 92, status: 'Approved', date: '2024-06-30', resellerId: 7 },
];

// Risky accounts data
export const riskyAccounts = [
  {
    name: 'Suspicious Trading Corp',
    riskLevel: 'High',
    reasons: ['Unusual transaction patterns', 'Missing compliance documents', 'Frequent policy violations'],
    lastActivity: '2024-07-08',
    resellerId: 4
  },
  {
    name: 'Red Flag Industries',
    riskLevel: 'Critical',
    reasons: ['Failed KYC verification', 'Connection to sanctioned entities', 'Suspicious fund sources'],
    lastActivity: '2024-07-07',
    resellerId: 7
  },
  {
    name: 'Warning Signals Ltd',
    riskLevel: 'Medium',
    reasons: ['Late payment history', 'Inconsistent reporting', 'Location in high-risk jurisdiction'],
    lastActivity: '2024-07-06',
    resellerId: 2
  },
  {
    name: 'Alert Systems Inc',
    riskLevel: 'High',
    reasons: ['Rapid account changes', 'Unusual beneficiary structures', 'PEP connections'],
    lastActivity: '2024-07-05',
    resellerId: 9
  },
  {
    name: 'Flagged Ventures',
    riskLevel: 'Medium',
    reasons: ['Volume inconsistencies', 'Geographic risk factors', 'Regulatory warnings'],
    lastActivity: '2024-07-04',
    resellerId: 3
  }
];

// Helper function to get accounts by reseller
export const getAccountsByReseller = (resellerId: number) => {
  return recentClients.filter(client => client.resellerId === resellerId);
};

// Helper function to get risky accounts by reseller
export const getRiskyAccountsByReseller = (resellerId: number) => {
  return riskyAccounts.filter(account => account.resellerId === resellerId);
};