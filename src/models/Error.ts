/**
 * Representation of how an ResError should look.
 */
export default interface IResError {
    status: number;
    method: string;
    endpoint: string;
    details: string;
}
