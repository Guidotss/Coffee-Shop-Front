import { FetchAdapter as IFetchAdapter } from "@/common/interfaces";

export class FetchAdapter implements IFetchAdapter {
  async post<T>(url: string, body: any): Promise<T> {
    console.log(body); 
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
}
