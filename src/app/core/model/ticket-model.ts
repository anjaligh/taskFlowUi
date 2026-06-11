export type TicketStatus = 'Open' | 'In Progress' | 'In Review' | 'Completed';
export interface TicketModel{
    id: string,
    title:string,
    description:string,
    type: string,
    status: TicketStatus,
    priority: 'High' | 'Low' | 'Medium' | 'Critical',
    reporter:string,
    assignee: string,
    createdAt: string,
    updatedAt:string,
    dueDate: string,
}