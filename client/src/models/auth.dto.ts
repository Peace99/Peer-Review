export class AuthDto {
  role: "lecturer" | "editor" | "reviewer";
  name: string;
  email: string;
  fieldOfResearch: string;
  accessToken: string;
  id: string;
}
