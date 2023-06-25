import { AuthDto } from "../models/auth.dto";
// import {FormData}  from "fo"

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

export const generateAuthHeader = () => ({
  Authorization: `Bearer ${getLocalStorageParams().accessToken}`,
});

export function generateFileUploadRequestBody({
  file,
  title,
  abstract,
  fieldOfResearch,
  accompanyingLetter,
}: {
  file: File;
  title: string;
  abstract: string;
  fieldOfResearch: string;
  accompanyingLetter: string;
}): FormData {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("title", title);
  formData.append("abstract", abstract);
  formData.append("fieldOfResearch", fieldOfResearch);
  formData.append("accompanyingLetter", accompanyingLetter);
  return formData;
}
