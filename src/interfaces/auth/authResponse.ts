export interface AuthResponse {
  ok: boolean;
  message: string;
  token: string;
  data: Data;
}

interface Data {
  name: string;
  email: string;
}
