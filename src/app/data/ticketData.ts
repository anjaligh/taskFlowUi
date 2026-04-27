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
    type: 'Bug',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Anu',
    createdAt: '2026-04-27T10:30:00',
    dueDate: '2026-05-02'
  },
  {
    id: 'TKT-102',
    title: 'Add export feature',
    type: 'Feature',
    status: 'Open',
    priority: 'Medium',
    assignee: 'Rahul',
    createdAt: '2026-04-26T14:15:00',
    dueDate: '2026-05-04'
  },
  {
    id: 'TKT-103',
    title: 'Update UI alignment',
    type: 'Task',
    status: 'Completed',
    priority: 'Low',
    assignee: 'Meera',
    createdAt: '2026-04-25T09:00:00',
    dueDate: '2026-04-30'
  },
  {
    id: 'TKT-104',
    title: 'Fix payment gateway issue',
    type: 'Bug',
    status: 'In Review',
    priority: 'Critical',
    assignee: 'Arjun',
    createdAt: '2026-04-24T11:20:00',
    dueDate: '2026-04-29'
  },
  {
    id: 'TKT-105',
    title: 'Implement role-based access',
    type: 'Feature',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Neha',
    createdAt: '2026-04-23T16:45:00',
    dueDate: '2026-05-01'
  },
  {
    id: 'TKT-106',
    title: 'Fix chart rendering bug',
    type: 'Bug',
    status: 'Completed',
    priority: 'Medium',
    assignee: 'Rahul',
    createdAt: '2026-04-22T13:10:00',
    dueDate: '2026-04-28'
  },
  {
    id: 'TKT-107',
    title: 'Add notification service',
    type: 'Feature',
    status: 'Open',
    priority: 'Medium',
    assignee: 'Anu',
    createdAt: '2026-04-21T10:00:00',
    dueDate: '2026-05-05'
  },
  {
    id: 'TKT-108',
    title: 'Fix sidebar responsiveness',
    type: 'Bug',
    status: 'In Progress',
    priority: 'Low',
    assignee: 'Meera',
    createdAt: '2026-04-20T15:30:00',
    dueDate: '2026-04-27'
  },
  {
    id: 'TKT-109',
    title: 'Optimize API performance',
    type: 'Task',
    status: 'Open',
    priority: 'High',
    assignee: 'Arjun',
    createdAt: '2026-04-19T12:25:00',
    dueDate: '2026-05-03'
  },
  {
    id: 'TKT-110',
    title: 'Fix dropdown selection issue',
    type: 'Bug',
    status: 'In Review',
    priority: 'High',
    assignee: 'Neha',
    createdAt: '2026-04-18T17:40:00',
    dueDate: '2026-04-26'
  },
  {
    id: 'TKT-111',
    title: 'Improve form validation',
    type: 'Task',
    status: 'Completed',
    priority: 'Low',
    assignee: 'Rahul',
    createdAt: '2026-04-17T09:15:00',
    dueDate: '2026-04-24'
  },
  {
    id: 'TKT-112',
    title: 'Add audit logs',
    type: 'Feature',
    status: 'Open',
    priority: 'Medium',
    assignee: 'Anu',
    createdAt: '2026-04-16T11:50:00',
    dueDate: '2026-05-06'
  },
  {
    id: 'TKT-113',
    title: 'Fix mobile layout issues',
    type: 'Bug',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Meera',
    createdAt: '2026-04-15T14:05:00',
    dueDate: '2026-04-28'
  },
  {
    id: 'TKT-114',
    title: 'Refactor authentication module',
    type: 'Task',
    status: 'In Review',
    priority: 'Critical',
    assignee: 'Arjun',
    createdAt: '2026-04-14T10:20:00',
    dueDate: '2026-04-30'
  },
  {
    id: 'TKT-115',
    title: 'Integrate third-party API',
    type: 'Feature',
    status: 'Open',
    priority: 'High',
    assignee: 'Neha',
    createdAt: '2026-04-13T13:35:00',
    dueDate: '2026-05-07'
  }
];