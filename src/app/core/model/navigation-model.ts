export interface MenuItem {
    title: string;
    icon: string;
    link: string;
    role?: string[];
    submenuItems?: MenuItem[];
    active: boolean;
}
export interface breadcrumbsItem {
    label: string;
    url?: string;
}
export interface SummaryData {
    title: string;
    count:string;
    percent:number;
}