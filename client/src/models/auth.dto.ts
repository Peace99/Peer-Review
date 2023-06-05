export class AuthDto {
  role: "Lecturer" | "Editor" | "Reviewer";
  name: string;
  email: string;
}
