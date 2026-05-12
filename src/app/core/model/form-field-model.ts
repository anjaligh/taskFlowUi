export interface formFieldModel {
    label: string;
    controlName: string;
    type: 'text' | 'select' | 'date';
    options?: any[];
    validators?: any[];
}