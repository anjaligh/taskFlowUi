export interface formFieldModel {
    label: string;
    controlName: string;
    placeholder: string;
    type: 'text' | 'select' | 'date' | 'text-area';
    options?: any;
    validators?: any[];
    errorMsg?: string
}