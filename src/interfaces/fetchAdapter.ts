export interface FetchAdapter {
  post<T>(url: string, body: any): Promise<T>;
  get<T>(url: string, token?: string): Promise<T>;
}
