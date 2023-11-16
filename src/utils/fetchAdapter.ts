import cookies from "js-cookie";
import { FetchAdapter as IFetchAdapter } from "@/interfaces";

export class FetchAdapter implements IFetchAdapter {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });
    return await response.json();
  }
  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
}
