/**
 * Entity
 * 
 * Table ( name = `todos`)
 */
export default interface ITodo {
    // ID from server
    readonly id?: number;

    // Required
    readonly group_id: number;
    name: string;

    // Optional
    category_id?: number;
    description?: string;
    due_date?: Date;
};
