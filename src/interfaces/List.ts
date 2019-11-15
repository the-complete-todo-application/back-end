import ICategory from "./Category";
import ITodo from "./Todo";


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
    categories?: ICategory[];
    todos?: ITodo[];
}
