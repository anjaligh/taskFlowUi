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