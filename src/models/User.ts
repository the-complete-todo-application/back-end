// REMINDER: This is created with a Java/Spring server brain

/**
 * Entity
 * 
 * Table (name = `users`)
 */
export default interface IUser {
    email: string;
    password: string;
    first_name: string;
    last_name?: string;
    color_primary?: string;
    color_secondary?: string;
}
