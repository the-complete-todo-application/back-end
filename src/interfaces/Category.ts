/**
 * Entity
 * 
 * Table ( name = `categories`)
 */
export default interface ICategory {
    readonly id?: number;
    readonly list_id: number;
    name: string;
    color_primary?: string;
    color_secondary?: string;
}
