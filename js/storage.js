/* ==========================================================================
   LINCONE FEDERAL CREDIT UNION - LOCALSTORAGE DATA MANAGER & DEFAULT STATE SEEDER
   ========================================================================== */

const STORAGE_KEY = 'lincone_fcu_banking_system_v5';

const DEFAULT_STATE = {
  user: {
    name: 'Monique Franco',
    id: 'L1FCU-806395',
    accountType: 'Premier Checking',
    memberSince: 'Jan 2021',
    status: 'Verified',
    email: 'Monifranc23@gmail.com',
    phone: '+1 (555) 892-3401',
    address: '742 Evergreen Terrace, New York, NY 10001'
  },
  accounts: {
    checking: {
      name: 'Premier Checking Account',
      balance: 806395.79,
      accountNumber: '********5625',
      routingNumber: '********3632'
    },
    savings: {
      name: 'High-Yield Share Savings',
      balance: 150000.00,
      accountNumber: '********9012',
      routingNumber: '********3632'
    },
    investment: {
      name: 'Credit Union Share Certificates',
      balance: 250000.00,
      firm: 'LincOne Federal Credit Union',
      dayReturnPercent: 0.71,
      dayReturnAmount: 1775.00,
      ytdReturnPercent: 14.2
    },
    creditScore: 825
  },
  beneficiary: {
    name: 'Monique Franco',
    bank: 'LincOne Federal Credit Union',
    accountNumber: '********5625',
    routingNumber: '********3632',
    investmentBond: 'UNHCR',
    disbursementMethods: ['Bank Transfer', 'Check']
  },
  card: {
    number: '4532 8912 3456 5625',
    expiry: '08/29',
    holder: 'MONIQUE FRANCO',
    cvv: '882',
    frozen: false,
    contactless: true,
    dailyLimit: 50000
  },
  transactions: [
    // --- 2026 ---
    {
      ref: 'TXN-806001',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8980.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2026-08-18',
      time: '14:22:05',
      bond: 'UNHCR',
      purpose: 'UNHCR Monthly Disbursement'
    },
    {
      ref: 'TXN-806002',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8850.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2026-07-15',
      time: '09:15:30',
      bond: 'UNHCR',
      purpose: 'UNHCR Monthly Disbursement'
    },
    {
      ref: 'TXN-806003',
      beneficiary: 'Apple Store Fifth Ave',
      bank: 'JPMorgan Chase',
      amount: 2499.00,
      type: 'Card Purchase',
      method: 'Debit Card',
      status: 'Completed',
      date: '2026-07-02',
      time: '18:40:12',
      bond: 'N/A',
      purpose: 'Hardware Equipment'
    },
    {
      ref: 'TXN-806004',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8900.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2026-06-12',
      time: '16:45:12',
      bond: 'UNHCR',
      purpose: 'UNHCR Monthly Disbursement'
    },
    {
      ref: 'TXN-806005',
      beneficiary: 'World Vision International',
      bank: 'UBS Zurich',
      amount: 12500.00,
      type: 'Wire Transfer',
      method: 'Swift Wire',
      status: 'Completed',
      date: '2026-05-28',
      time: '11:10:00',
      bond: 'N/A',
      purpose: 'Humanitarian Support Program'
    },
    {
      ref: 'TXN-806006',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8750.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2026-05-14',
      time: '11:30:00',
      bond: 'UNHCR',
      purpose: 'UNHCR Monthly Disbursement'
    },
    {
      ref: 'TXN-806007',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8620.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2026-04-10',
      time: '10:15:40',
      bond: 'UNHCR',
      purpose: 'UNHCR Monthly Disbursement'
    },
    {
      ref: 'TXN-806008',
      beneficiary: 'Delta Air Lines',
      bank: 'Bank of America',
      amount: 1840.00,
      type: 'Card Purchase',
      method: 'Debit Card',
      status: 'Completed',
      date: '2026-03-25',
      time: '15:20:00',
      bond: 'N/A',
      purpose: 'Travel Flight Booking'
    },
    {
      ref: 'TXN-806008-B',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 100000.00,
      type: 'Deposit',
      method: 'Wire Transfer',
      status: 'Completed',
      date: '2026-03-18',
      time: '11:45:00',
      bond: 'UNHCR Operations',
      purpose: 'UNHCR Special Program Deposit'
    },
    {
      ref: 'TXN-806009',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8450.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2026-03-08',
      time: '13:00:00',
      bond: 'UNHCR',
      purpose: 'UNHCR Monthly Disbursement'
    },
    {
      ref: 'TXN-806010',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 745845.79,
      type: 'Deposit',
      method: 'Wire Transfer',
      status: 'Completed',
      date: '2026-02-28',
      time: '11:00:00',
      bond: 'UNHCR Financial Allocation',
      purpose: 'UNHCR Global Reserve Funding'
    },
    {
      ref: 'TXN-806011',
      beneficiary: 'International Red Cross',
      bank: 'Credit Suisse Zurich',
      amount: 28500.00,
      type: 'Transfer',
      method: 'Bank Transfer',
      status: 'Completed',
      date: '2026-01-20',
      time: '14:05:22',
      bond: 'N/A',
      purpose: 'Program Co-Funding'
    },

    // --- 2025 ---
    {
      ref: 'TXN-705001',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 4120.00,
      type: 'Dividend',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2025-12-14',
      time: '09:30:00',
      bond: 'LincOne Share Certificate',
      purpose: 'Year-End Dividend Payout'
    },
    {
      ref: 'TXN-705002',
      beneficiary: 'Alpine Private Wealth Ltd',
      bank: 'UBS Geneva',
      amount: 25000.00,
      type: 'Wire Transfer',
      method: 'Swift Wire',
      status: 'Completed',
      date: '2025-11-28',
      time: '16:00:00',
      bond: 'N/A',
      purpose: 'Portfolio Diversification'
    },
    {
      ref: 'TXN-705003',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8500.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2025-10-18',
      time: '10:45:00',
      bond: 'UNHCR',
      purpose: 'UNHCR Advisory Stipend'
    },
    {
      ref: 'TXN-705004',
      beneficiary: 'Ritz-Carlton Geneva',
      bank: 'UBS Geneva',
      amount: 3420.00,
      type: 'Card Purchase',
      method: 'Debit Card',
      status: 'Completed',
      date: '2025-09-05',
      time: '21:15:30',
      bond: 'N/A',
      purpose: 'Executive Conference Lodging'
    },
    {
      ref: 'TXN-705005',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8650.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2025-08-12',
      time: '11:20:10',
      bond: 'UNHCR',
      purpose: 'UNHCR Field Operations'
    },
    {
      ref: 'TXN-705006',
      beneficiary: 'High-Yield Share Savings',
      bank: 'LincOne FCU (Internal)',
      amount: 20000.00,
      type: 'Transfer',
      method: 'Internal Transfer',
      status: 'Completed',
      date: '2025-07-22',
      time: '14:00:00',
      bond: 'N/A',
      purpose: 'Savings Deposit'
    },
    {
      ref: 'TXN-705007',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8400.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2025-06-15',
      time: '09:00:00',
      bond: 'UNHCR',
      purpose: 'UNHCR Mid-Year Disbursement'
    },
    {
      ref: 'TXN-705008',
      beneficiary: 'Geneva International Center',
      bank: 'Banque Cantonale de Genève',
      amount: 8900.00,
      type: 'Wire Transfer',
      method: 'Swift Wire',
      status: 'Completed',
      date: '2025-05-10',
      time: '13:40:00',
      bond: 'N/A',
      purpose: 'Institutional Dues'
    },
    {
      ref: 'TXN-705009',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8300.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2025-04-18',
      time: '10:30:15',
      bond: 'UNHCR',
      purpose: 'UNHCR Q2 Logistics Allowance'
    },
    {
      ref: 'TXN-705010',
      beneficiary: 'Lufthansa German Airlines',
      bank: 'Deutsche Bank',
      amount: 2150.00,
      type: 'Card Purchase',
      method: 'Debit Card',
      status: 'Completed',
      date: '2025-03-02',
      time: '17:50:00',
      bond: 'N/A',
      purpose: 'Flight Reservation'
    },
    {
      ref: 'TXN-705011',
      beneficiary: 'Global Relief Initiative',
      bank: 'Barclays Bank London',
      amount: 18400.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2025-02-14',
      time: '12:10:00',
      bond: 'UNHCR Co-Sponsor',
      purpose: 'Humanitarian Honorarium'
    },
    {
      ref: 'TXN-705012',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 3850.00,
      type: 'Dividend',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2025-01-10',
      time: '08:45:00',
      bond: 'LincOne Share Certificate',
      purpose: 'Annual Certificate Payout'
    },

    // --- 2024 ---
    {
      ref: 'TXN-604001',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 35000.00,
      type: 'Deposit',
      method: 'Wire Transfer',
      status: 'Completed',
      date: '2024-12-20',
      time: '15:30:00',
      bond: 'UNHCR Year-End Allocation',
      purpose: 'Special Program Grant'
    },
    {
      ref: 'TXN-604002',
      beneficiary: 'Amazon Business EU',
      bank: 'CitiBank N.A.',
      amount: 1280.00,
      type: 'Card Purchase',
      method: 'Debit Card',
      status: 'Completed',
      date: '2024-11-15',
      time: '19:22:10',
      bond: 'N/A',
      purpose: 'Office Supplies'
    },
    {
      ref: 'TXN-604003',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8100.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2024-10-08',
      time: '10:00:00',
      bond: 'UNHCR',
      purpose: 'UNHCR Monthly Field Grant'
    },
    {
      ref: 'TXN-604004',
      beneficiary: 'Zurich Financial Services',
      bank: 'UBS Zurich',
      amount: 14000.00,
      type: 'Wire Transfer',
      method: 'Swift Wire',
      status: 'Completed',
      date: '2024-09-22',
      time: '11:15:00',
      bond: 'N/A',
      purpose: 'Insurance Premium Payment'
    },
    {
      ref: 'TXN-604005',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8250.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2024-08-14',
      time: '09:20:00',
      bond: 'UNHCR',
      purpose: 'UNHCR Summer Field Disbursement'
    },
    {
      ref: 'TXN-604006',
      beneficiary: 'High-Yield Share Savings',
      bank: 'LincOne FCU (Internal)',
      amount: 10000.00,
      type: 'Transfer',
      method: 'Internal Transfer',
      status: 'Completed',
      date: '2024-07-05',
      time: '16:00:00',
      bond: 'N/A',
      purpose: 'Savings Credit'
    },
    {
      ref: 'TXN-604007',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8150.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2024-06-18',
      time: '14:10:00',
      bond: 'UNHCR',
      purpose: 'UNHCR Consultancy Disbursement'
    },
    {
      ref: 'TXN-604008',
      beneficiary: 'Hilton International',
      bank: 'JPMorgan Chase',
      amount: 1950.00,
      type: 'Card Purchase',
      method: 'Debit Card',
      status: 'Completed',
      date: '2024-05-12',
      time: '20:45:00',
      bond: 'N/A',
      purpose: 'Hotel Accommodation'
    },
    {
      ref: 'TXN-604009',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 8050.00,
      type: 'Deposit',
      method: 'Direct Credit',
      status: 'Completed',
      date: '2024-04-20',
      time: '11:00:00',
      bond: 'UNHCR',
      purpose: 'UNHCR Logistics Payout'
    },
    {
      ref: 'TXN-604010',
      beneficiary: 'Monique Franco',
      bank: 'LincOne FCU',
      amount: 50000.00,
      type: 'Deposit',
      method: 'Wire Transfer',
      status: 'Completed',
      date: '2024-03-10',
      time: '10:00:00',
      bond: 'LincOne Federal Credit Union',
      purpose: 'Initial Account Reserve Deposit'
    }
  ],
  notifications: [
    {
      id: 'notif-1',
      title: 'Welcome to LincOne Federal Credit Union',
      message: 'Your Premier Checking account balance is $806,395.79.',
      time: 'Just now',
      read: false
    },
    {
      id: 'notif-2',
      title: 'UNHCR Deposit Credited',
      message: '$8,980.00 received from UNHCR.',
      time: '6 days ago',
      read: true
    },
    {
      id: 'notif-3',
      title: 'Security Verification Successful',
      message: 'Beneficiary Monique Franco verified for transfers.',
      time: '1 week ago',
      read: true
    }
  ],
  preferences: {
    theme: 'dark',
    language: 'en',
    emailAlerts: true,
    pushAlerts: true,
    twoFactor: true
  }
};

const StorageManager = {
  // Get entire state tree
  getStore() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        this.saveStore(DEFAULT_STATE);
        return JSON.parse(JSON.stringify(DEFAULT_STATE));
      }
      const parsed = JSON.parse(data);
      if (!parsed.user || parsed.user.name !== 'Monique Franco' || !parsed.transactions || parsed.transactions.length < 10) {
        this.saveStore(DEFAULT_STATE);
        return JSON.parse(JSON.stringify(DEFAULT_STATE));
      }
      return parsed;
    } catch (e) {
      console.error('Error loading LocalStorage state:', e);
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  },

  // Save entire state tree
  saveStore(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Error saving LocalStorage state:', e);
    }
  },

  // Specific Getters & Modifiers
  getUser() {
    return this.getStore().user;
  },

  updateUser(userData) {
    const store = this.getStore();
    store.user = { ...store.user, ...userData };
    this.saveStore(store);
  },

  getAccounts() {
    return this.getStore().accounts;
  },

  updateCheckingBalance(newBalance) {
    const store = this.getStore();
    store.accounts.checking.balance = newBalance;
    this.saveStore(store);
  },

  getBeneficiary() {
    return this.getStore().beneficiary;
  },

  getCard() {
    return this.getStore().card;
  },

  updateCard(cardData) {
    const store = this.getStore();
    store.card = { ...store.card, ...cardData };
    this.saveStore(store);
  },

  getTransactions() {
    return this.getStore().transactions || [];
  },

  addTransaction(txn) {
    const store = this.getStore();
    store.transactions.unshift(txn);
    this.saveStore(store);
  },

  getNotifications() {
    return this.getStore().notifications || [];
  },

  addNotification(title, message) {
    const store = this.getStore();
    const newNotif = {
      id: 'notif-' + Date.now(),
      title,
      message,
      time: 'Just now',
      read: false
    };
    store.notifications.unshift(newNotif);
    this.saveStore(store);
  },

  getPreferences() {
    return this.getStore().preferences;
  },

  savePreferences(prefs) {
    const store = this.getStore();
    store.preferences = { ...store.preferences, ...prefs };
    this.saveStore(store);
  },

  resetToDefaults() {
    this.saveStore(DEFAULT_STATE);
  }
};
