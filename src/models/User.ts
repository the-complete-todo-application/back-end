/**
 * Entity
 * 
 * Table (name = `users`)
 */
export default interface IUser {
    readonly id?: number;
    email: string;
    password: string;
    first_name: string;
    last_name?: string;
    color_primary?: string;
    color_secondary?: string;
}
