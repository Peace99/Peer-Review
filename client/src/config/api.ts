import Axios from "axios";
import { Role } from "../common/types";


export class Api {
  private readonly axios = Axios.create({
    baseURL: "http://localhost:8080",
  });
  authenticate(body: {
    role: Role;
    email: string;
    password: string;
  }) {
    return this.axios.post("/auth", body);
  }

  signUp(body: {
    role: Role;
    title: string;
    name: string;
    email: string;
    password: string;
    fieldOfResearch: string;
  }) {
    return this.axios.post("/auth/sign-up", body);
  }

  uploadFile({
    file,
    title,
    abstract,
    fieldOfResearch,
    accompanyingLetter,
  }: {
    file: File;
    title: string;
    abstract: string;
    fieldOfResearch: string,
    accompanyingLetter: string;
  }) {
    const formData = generateFileUploadRequestBody({
      file,
    });
    return axios.post("/file", formData, {
      headers: {
        ...generateAuthHeader(),
      },
    });
  }
}
