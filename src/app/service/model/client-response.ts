import { AnimalResponse } from './animal-response';

export class PageResponse {
  constructor(
    public content: ClientResponse[],
    public first: boolean,
    public last: boolean,
    public totalElements: number,
    public totalPages: number,
    public size: number,
    public number: number
  ) {}
}
export class ClientResponse {
  constructor(
    public id: number,
    public name: string,
    public cpf: string,
    public telephone: string,
    public email: string,
    public animal: AnimalResponse,
    public sex: string
  ) {}
}
