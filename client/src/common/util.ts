import { AuthDto } from "../models/auth.dto";

// NOT PRODUCTION GRADE. TO BE REFACTORED
export function isAuthenticated(): boolean {
  const authDtoString = localStorage.getItem("authDto");
  if (!authDtoString) return false;
  const authDto = JSON.parse(authDtoString);
  if (typeof authDto !== "object") return false;
  if (!Object.values(authDto).every(value => !value)) return false;
}

// Only use within a protected component / page
export function getLocalStorageParams() {
  return JSON.parse(localStorage.getItem("authDto")) as AuthDto;
}
