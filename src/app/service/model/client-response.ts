import { AnimalResponse } from "./animal-response";

export class ClientResponse {
  constructor(
    public name: string,
    public cpf: string,
    public telephone: string,
    public email: string,
    public animal: AnimalResponse
  ) {

  }
}
