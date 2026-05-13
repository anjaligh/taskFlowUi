export interface formFieldModel {
    label: string;
    controlName: string;
    placeholder: string;
    type: 'text' | 'select' | 'date';
    options?: any;
    validators?: any[];
}