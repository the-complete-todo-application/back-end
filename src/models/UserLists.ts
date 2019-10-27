/**
 * Entity
 * 
 * Table ( name = `userlists`)
 * 
 * This Table hold the `Many-to-many` relationship between
 * the "users" table and the "lists" table.
 */
export default interface IUserList {
    readonly id?: number;
    userid: number;
    listid: number;
}
