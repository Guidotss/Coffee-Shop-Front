export function setHeaderTitle(path: string): string {
  if (path === "/") {
    return "Home";
  } else if (path === "/auth/login") {
    return "Login";
  } else if (path === "/auth/register") {
    return "Register";
  }
  return "Not Found";
}
