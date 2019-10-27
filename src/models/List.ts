/**
 * Entity
 * 
 * Table ( name = `lists`)
 */
export default interface IList {
    readonly id?: number;
    name: string;
    color_primary?: string;
    color_secondary?: string;
    color_priority?: string;
}
