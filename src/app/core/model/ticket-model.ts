export type TicketStatus = 'Open' | 'In Progress' | 'Waiting' | 'Resolved';
export interface TicketModel{
    id: number,
    title:string,
    description: string,
    status: TicketStatus,
    priority: 'High' | 'Low' | 'Medium',
    assignedTo: string,
    createdAt: string,
    category: 'Hardware' | 'Software' | 'Network' | 'Access';
}