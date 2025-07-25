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
  { id: 1, name: '倍升', score: 96, accounts: 15, scoreChange: '+2.1', status: 'Active', metrics: { alignment: '96.2%', ubRate: '88.7%', marketPurchase: '12', vatVsSo: '34' } },
  { id: 2, name: '和诚', score: 89, accounts: 12, scoreChange: '-1.3', status: 'Active', metrics: { alignment: '91.5%', ubRate: '90.3%', marketPurchase: '8', vatVsSo: '28' } },
  { id: 3, name: '大恒', score: 92, accounts: 18, scoreChange: '+0.8', status: 'Active', metrics: { alignment: '94.1%', ubRate: '87.9%', marketPurchase: '15', vatVsSo: '42' } },
  { id: 4, name: '方正', score: 87, accounts: 9, scoreChange: '-2.1', status: 'Review', metrics: { alignment: '89.3%', ubRate: '92.1%', marketPurchase: '6', vatVsSo: '19' } },
  { id: 5, name: '易信', score: 94, accounts: 14, scoreChange: '+1.5', status: 'Active', metrics: { alignment: '95.7%', ubRate: '89.4%', marketPurchase: '11', vatVsSo: '31' } },
  { id: 6, name: '智懋', score: 88, accounts: 11, scoreChange: '+0.3', status: 'Active', metrics: { alignment: '90.8%', ubRate: '91.2%', marketPurchase: '9', vatVsSo: '25' } },
  { id: 7, name: '神码', score: 85, accounts: 8, scoreChange: '-1.8', status: 'Review', metrics: { alignment: '87.9%', ubRate: '93.5%', marketPurchase: '5', vatVsSo: '17' } },
  { id: 8, name: '索电', score: 97, accounts: 16, scoreChange: '+3.2', status: 'Active', metrics: { alignment: '97.4%', ubRate: '86.8%', marketPurchase: '13', vatVsSo: '38' } },
  { id: 9, name: '蜂云', score: 86, accounts: 10, scoreChange: '-0.9', status: 'Active', metrics: { alignment: '88.7%', ubRate: '94.1%', marketPurchase: '7', vatVsSo: '22' } },
  { id: 10, name: '佳杰', score: 90, accounts: 13, scoreChange: '+1.7', status: 'Active', metrics: { alignment: '92.3%', ubRate: '90.8%', marketPurchase: '10', vatVsSo: '29' } },
  { id: 11, name: '新博航', score: 88, accounts: 1, scoreChange: '+0.7', status: 'Active', metrics: { alignment: '90.3%', ubRate: '97.8%', marketPurchase: '2', vatVsSo: '10' } },
];

// Account level data (lowest level, individual clients)
export const recentClients = [
  { name: 'TechCorp Industries', score: 96, status: 'Approved', date: '2025-07-09', resellerId: 1 },
  { name: 'Global Solutions Ltd', score: 88, status: 'Under Review', date: '2025-07-08', resellerId: 2 },
  { name: 'Innovation Partners', score: 92, status: 'Approved', date: '2025-07-08', resellerId: 6 },
  { name: 'Future Dynamics', score: 85, status: 'Pending', date: '2025-07-07', resellerId: 9 },
  { name: 'Digital Ventures Inc', score: 91, status: 'Approved', date: '2025-07-07', resellerId: 3 },
  { name: 'Enterprise Systems', score: 87, status: 'Under Review', date: '2025-07-06', resellerId: 4 },
  { name: 'CloudTech Solutions', score: 94, status: 'Approved', date: '2025-07-06', resellerId: 5 },
  { name: 'Data Analytics Pro', score: 89, status: 'Approved', date: '2025-07-05', resellerId: 1 },
  { name: 'Smart Business Hub', score: 83, status: 'Pending', date: '2025-07-05', resellerId: 7 },
  { name: 'NextGen Technologies', score: 95, status: 'Approved', date: '2025-07-04', resellerId: 8 },
  { name: 'Quantum Computing Ltd', score: 90, status: 'Approved', date: '2025-07-04', resellerId: 1 },
  { name: 'AI Solutions Group', score: 86, status: 'Under Review', date: '2025-07-03', resellerId: 10 },
  { name: 'Blockchain Dynamics', score: 93, status: 'Approved', date: '2025-07-03', resellerId: 2 },
  { name: 'Cybersecurity Plus', score: 88, status: 'Approved', date: '2025-07-02', resellerId: 3 },
  { name: 'Mobile First Corp', score: 84, status: 'Pending', date: '2025-07-02', resellerId: 4 },
  { name: 'Green Energy Tech', score: 91, status: 'Approved', date: '2025-07-01', resellerId: 5 },
  { name: 'Financial Systems Pro', score: 87, status: 'Under Review', date: '2025-07-01', resellerId: 6 },
  { name: 'Healthcare Innovations', score: 92, status: 'Approved', date: '2025-06-30', resellerId: 7 },
];

// Risky accounts data
export const riskyAccounts = [
  {
    name: 'Suspicious Trading Corp',
    riskLevel: 'High',
    reasons: ['Unusual transaction patterns', 'Missing compliance documents', 'Frequent policy violations'],
    lastActivity: '2025-07-08',
    resellerId: 4
  },
  {
    name: 'Red Flag Industries',
    riskLevel: 'Critical',
    reasons: ['Failed KYC verification', 'Connection to sanctioned entities', 'Suspicious fund sources'],
    lastActivity: '2025-07-07',
    resellerId: 7
  },
  {
    name: 'Warning Signals Ltd',
    riskLevel: 'Medium',
    reasons: ['Late payment history', 'Inconsistent reporting', 'Location in high-risk jurisdiction'],
    lastActivity: '2025-07-06',
    resellerId: 2
  },
  {
    name: 'Alert Systems Inc',
    riskLevel: 'High',
    reasons: ['Rapid account changes', 'Unusual beneficiary structures', 'PEP connections'],
    lastActivity: '2025-07-05',
    resellerId: 9
  },
  {
    name: 'Flagged Ventures',
    riskLevel: 'Medium',
    reasons: ['Volume inconsistencies', 'Geographic risk factors', 'Regulatory warnings'],
    lastActivity: '2025-07-04',
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
