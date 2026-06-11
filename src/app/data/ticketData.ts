import { TicketModel, TicketStatus } from "../core/model/ticket-model";

export const TICKET_STATUSES: TicketStatus[] = [
  'Open',
  'In Progress',
  'In Review',
  'Completed'
];
export const IT_SUPPORT_WORKFLOW = {
  id: 'it-support-workflow',
  name: 'IT Support Ticket Workflow',

  nodes: [
    {
      id: 'created',
      label: 'Ticket Created',
      type: 'start',
      position: { x: 50, y: 200 }
    },
    {
      id: 'assigned',
      label: 'Assigned to Technician',
      type: 'process',
      position: { x: 250, y: 200 }
    },
    {
      id: 'in_progress',
      label: 'In Progress',
      type: 'process',
      position: { x: 450, y: 200 }
    },
    {
      id: 'waiting',
      label: 'Waiting for User',
      type: 'process',
      position: { x: 450, y: 350 }
    },
    {
      id: 'resolved',
      label: 'Resolved',
      type: 'end',
      position: { x: 650, y: 200 }
    }
  ],

  connections: [
    {
      from: 'created',
      to: 'assigned',
      label: 'Assign'
    },
    {
      from: 'assigned',
      to: 'in_progress',
      label: 'Start Work'
    },
    {
      from: 'in_progress',
      to: 'waiting',
      label: 'Need Info'
    },
    {
      from: 'waiting',
      to: 'in_progress',
      label: 'User Responded'
    },
    {
      from: 'in_progress',
      to: 'resolved',
      label: 'Issue Fixed'
    }
  ]
};
export const BUGS_TREND = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  series: [
    {
      name: 'Bugs Reported',
      data: [12, 18, 15, 22, 28, 16, 10,9,15]
    },
    {
      name: 'Bugs Resolved',
      data: [8, 14, 12, 18, 24, 14, 9, 8, 13]
    }
  ]
};
export const BUG_PRIORITY = ['Critical', 'High', 'Medium', 'Low'];
export const LAST_WEEK_COMPLETION_SUMMARY = {
  categories: [
    '17 Apr', '18 Apr', '19 Apr', '20 Apr', '21 Apr', '22 Apr', '23 Apr'
  ],
  series: {
    name: 'Tasks Completed (Last 7 Days)',
    data: [20, 24, 29, 28, 25, 30, 28]

  }
}
export const BUGS_BY_DEVELOPER = {
  categories: ['Anu', 'Rahul', 'Meera', 'Arjun', 'Neha'],
  series: [
    {
      name: 'Assigned Bugs',
      data: [18, 25, 20, 15, 22]
    }
  ]
};
export const SUMMARY_DATA =  [
  {
    title: 'Total Issues',
    count: 720,
    percent: '+12.1%'
  },
  {
    title: 'Resolved',
    count: 540,
    percent: '+8.4%'
  },
  {
    title: 'Open Issues',
    count: 180,
    percent: '-2.3%'
  },
  {
    title: 'Critical Bugs',
    count: 25,
    percent: '+1.2%'
  }
];
export const TICKET_LIST:TicketModel[] = [
  {
    id: 'TKT-101',
    title: 'Fix login API error',
    description: 'Users receive a 500 response when logging in with valid credentials.',
    type: 'Bug',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Priya Nair',
    reporter: 'Rahul Menon',
    createdAt: '2026-04-27T10:30:00',
    updatedAt: '2026-04-28T09:15:00',
    dueDate: '2026-05-02T00:00:00'
  },
  {
    id: 'TKT-102',
    title: 'Add export feature',
    description: 'Allow users to export task data to Excel.',
    type: 'Feature',
    status: 'Open',
    priority: 'Medium',
    assignee: 'John Mathew',
    reporter: 'Rahul Menon',
    createdAt: '2026-04-26T14:15:00',
    updatedAt: '2026-04-26T14:15:00',
    dueDate: '2026-05-04T00:00:00'
  },
  {
    id: 'TKT-103',
    title: 'Update UI alignment',
    description: 'Fix alignment issues on dashboard cards.',
    type: 'Task',
    status: 'Completed',
    priority: 'Low',
    assignee: 'John Mathew',
    reporter: 'Neha Sharma',
    createdAt: '2026-04-25T09:00:00',
    updatedAt: '2026-04-29T16:30:00',
    dueDate: '2026-04-30T00:00:00'
  },
  {
    id: 'TKT-104',
    title: 'Fix payment gateway issue',
    description: 'Payment requests fail intermittently.',
    type: 'Bug',
    status: 'In Review',
    priority: 'Critical',
    assignee: 'Priya Nair',
    reporter: 'Sarah Joseph',
    createdAt: '2026-04-24T11:20:00',
    updatedAt: '2026-04-28T11:45:00',
    dueDate: '2026-04-29T00:00:00'
  },
  {
    id: 'TKT-105',
    title: 'Implement role-based access',
    description: 'Restrict feature access based on user roles.',
    type: 'Feature',
    status: 'In Progress',
    priority: 'High',
    assignee: 'John Mathew',
    reporter: 'Rahul Menon',
    createdAt: '2026-04-23T16:45:00',
    updatedAt: '2026-04-25T10:20:00',
    dueDate: '2026-05-01T00:00:00'
  },
  {
    id: 'TKT-106',
    title: 'Fix chart rendering bug',
    description: 'Charts overlap when resizing browser window.',
    type: 'Bug',
    status: 'Completed',
    priority: 'Medium',
    assignee: 'Priya Nair',
    reporter: 'Neha Sharma',
    createdAt: '2026-04-22T13:10:00',
    updatedAt: '2026-04-27T15:10:00',
    dueDate: '2026-04-28T00:00:00'
  },
  {
    id: 'TKT-107',
    title: 'Add notification service',
    description: 'Send notifications when task status changes.',
    type: 'Feature',
    status: 'Open',
    priority: 'Medium',
    assignee: 'John Mathew',
    reporter: 'Rahul Menon',
    createdAt: '2026-04-21T10:00:00',
    updatedAt: '2026-04-21T10:00:00',
    dueDate: '2026-05-05T00:00:00'
  },
  {
    id: 'TKT-108',
    title: 'Fix sidebar responsiveness',
    description: 'Sidebar breaks on tablet-sized screens.',
    type: 'Bug',
    status: 'In Progress',
    priority: 'Low',
    assignee: 'John Mathew',
    reporter: 'Neha Sharma',
    createdAt: '2026-04-20T15:30:00',
    updatedAt: '2026-04-24T13:40:00',
    dueDate: '2026-04-27T00:00:00'
  },
  {
    id: 'TKT-109',
    title: 'Optimize API performance',
    description: 'Reduce API response times for dashboard endpoints.',
    type: 'Task',
    status: 'Open',
    priority: 'High',
    assignee: 'Priya Nair',
    reporter: 'Rahul Menon',
    createdAt: '2026-04-19T12:25:00',
    updatedAt: '2026-04-20T09:50:00',
    dueDate: '2026-05-03T00:00:00'
  },
  {
    id: 'TKT-110',
    title: 'Fix dropdown selection issue',
    description: 'Dropdown loses selected value after refresh.',
    type: 'Bug',
    status: 'In Review',
    priority: 'High',
    assignee: 'John Mathew',
    reporter: 'Neha Sharma',
    createdAt: '2026-04-18T17:40:00',
    updatedAt: '2026-04-24T17:15:00',
    dueDate: '2026-04-26T00:00:00'
  },
  {
    id: 'TKT-111',
    title: 'Improve form validation',
    description: 'Add validation messages and error handling.',
    type: 'Task',
    status: 'Completed',
    priority: 'Low',
    assignee: 'John Mathew',
    reporter: 'Rahul Menon',
    createdAt: '2026-04-17T09:15:00',
    updatedAt: '2026-04-23T11:30:00',
    dueDate: '2026-04-24T00:00:00'
  },
  {
    id: 'TKT-112',
    title: 'Add audit logs',
    description: 'Track task creation and update history.',
    type: 'Feature',
    status: 'Open',
    priority: 'Medium',
    assignee: 'Priya Nair',
    reporter: 'Sarah Joseph',
    createdAt: '2026-04-16T11:50:00',
    updatedAt: '2026-04-18T14:20:00',
    dueDate: '2026-05-06T00:00:00'
  },
  {
    id: 'TKT-113',
    title: 'Fix mobile layout issues',
    description: 'Correct responsive layout problems on mobile devices.',
    type: 'Bug',
    status: 'In Progress',
    priority: 'High',
    assignee: 'John Mathew',
    reporter: 'Neha Sharma',
    createdAt: '2026-04-15T14:05:00',
    updatedAt: '2026-04-26T10:45:00',
    dueDate: '2026-04-28T00:00:00'
  },
  {
    id: 'TKT-114',
    title: 'Refactor authentication module',
    description: 'Improve maintainability of authentication logic.',
    type: 'Task',
    status: 'In Review',
    priority: 'Critical',
    assignee: 'Priya Nair',
    reporter: 'Rahul Menon',
    createdAt: '2026-04-14T10:20:00',
    updatedAt: '2026-04-29T16:00:00',
    dueDate: '2026-04-30T00:00:00'
  },
  {
    id: 'TKT-115',
    title: 'Integrate third-party API',
    description: 'Connect application with external analytics service.',
    type: 'Feature',
    status: 'Open',
    priority: 'High',
    assignee: 'Priya Nair',
    reporter: 'Sarah Joseph',
    createdAt: '2026-04-13T13:35:00',
    updatedAt: '2026-04-17T09:10:00',
    dueDate: '2026-05-07T00:00:00'
  }
];