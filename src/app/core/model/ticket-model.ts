export type TicketStatus = 'Open' | 'In Progress' | 'In Review' | 'Completed';
export interface TicketModel{
    id: string,
    title:string,
    type: string,
    status: TicketStatus,
    priority: 'High' | 'Low' | 'Medium' | 'Critical',
    assignee: string,
    createdAt: string,
    dueDate: string,
}