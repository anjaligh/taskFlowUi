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