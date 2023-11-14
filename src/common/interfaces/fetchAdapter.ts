export interface FetchAdapter {
    post<T>(url: string, body: any): Promise<T>;
}