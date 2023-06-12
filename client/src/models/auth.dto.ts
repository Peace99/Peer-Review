export class AuthDto {
  role: "lecturer" | "editor" | "reviewer";
  name: string;
  email: string;
}
