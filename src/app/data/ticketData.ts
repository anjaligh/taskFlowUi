import { TicketModel, TicketStatus } from "../core/model/ticket-model";
export const TICKET_CATEGORIES = [
  'Hardware',
  'Software',
  'Network',
  'Access'
]
export const SAMPLE_TICKETS: TicketModel[] = [
  {
    id: 1,
    title: 'Email not working',
    description: 'Unable to send or receive emails',
    priority: 'High',
    status: 'Open',
    assignedTo: 'Unassigned',
    createdAt: '2026-02-15',
    category: 'Software'
  },
  {
    id: 2,
    title: 'Laptop running slow',
    description: 'Performance issue after update',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 'John',
    createdAt: '2026-02-14',
    category: 'Hardware'
  },
  {
    id: 3,
    title: 'VPN access request',
    description: 'Need VPN access for remote work',
    priority: 'Low',
    status: 'Waiting',
    assignedTo: 'Admin',
    createdAt: '2026-02-13',
    category: 'Access'
  },
  {
    id: 4,
    title: 'Wi-Fi connectivity issue',
    description: 'Intermittent network disconnection',
    priority: 'High',
    status: 'Resolved',
    assignedTo: 'Sarah',
    createdAt: '2026-02-12',
    category: 'Network'
  },
  {
    id: 5,
    title: 'Printer not responding',
    description: 'Office printer is not connecting to the system',
    priority: 'Medium',
    status: 'Open',
    assignedTo: 'Michael',
    createdAt: '2026-02-11',
    category: 'Software'
  },
  {
    id: 6,
    title: 'Software installation request',
    description: 'Need installation of licensed design software',
    priority: 'Low',
    status: 'Waiting',
    assignedTo: 'Admin',
    createdAt: '2026-02-10',
    category: 'Software'
  },
  {
    id: 7,
    title: 'Network outage on floor 3',
    description: 'No internet connectivity on the 3rd floor',
    priority: 'High',
    status: 'In Progress',
    assignedTo: 'Sarah',
    createdAt: '2026-02-09',
    category: 'Network'
  },
  {
    id: 8,
    title: 'Access revoked issue',
    description: 'Lost access to internal HR portal',
    priority: 'High',
    status: 'Waiting',
    assignedTo: 'IT Support',
    createdAt: '2026-02-08',
    category: 'Access'
  },
  {
    id: 9,
    title: 'System overheating',
    description: 'Desktop system shuts down due to overheating',
    priority: 'Medium',
    status: 'Waiting',
    assignedTo: 'John',
    createdAt: '2026-02-07',
    category: 'Software'
  },
  {
    id: 10,
    title: 'Email spam issue',
    description: 'Receiving大量 spam emails daily',
    priority: 'Low',
    status: 'Open',
    assignedTo: 'Unassigned',
    createdAt: '2026-02-06',
    category: 'Software'
  },
  {
    id: 11,
    title: 'VPN connection drops',
    description: 'VPN disconnects frequently during work',
    priority: 'Medium',
    status: 'Waiting',
    assignedTo: 'Network Team',
    createdAt: '2026-02-05',
    category: 'Access'
  },
  {
    id: 12,
    title: 'New employee system access',
    description: 'Grant system access for new joiner',
    priority: 'High',
    status: 'Resolved',
    assignedTo: 'Admin',
    createdAt: '2026-02-04',
    category: 'Access'
  }
];
export const TICKET_STATUSES: TicketStatus[] = [
  'Open',
  'In Progress',
  'Waiting',
  'Resolved'
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
export const TASKS_TREND = {
  categories: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'
  ],
  series: [
    {
      name: 'Created',
      data: [120, 150, 170, 140, 145, 150, 175, 185, 200]
    },
    {
      name: 'Completed',
      data: [100, 130, 160, 120, 150, 170, 180, 200, 190]
    }
  ]
};
export const SUMMARY_DATA = [
  {
    title: 'Tasks',
    count: 720,
    percent: '+12.1%'
  },
  {
    title: 'Completed',
    count: 540,
    percent: '+8.4%'
  },
  {
    title: 'Pending',
    count: 180,
    percent: '-2.3%'
  },
  {
    title: 'Overdue',
    count: 25,
    percent: '+1.2%'
  }
];