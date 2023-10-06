import { ICountry } from "../types/country";

const apiUrl = "http://localhost:3000/countries";

//CRUD
//R -> Read

export async function getCountries() {
  const response = await fetch(apiUrl);
  const data: ICountry[] = await response.json();

  return data;
}

//C- Create
export async function postCountries() {
  const response = await fetch(apiUrl);
  const data: ICountry[] = await response.json();

  return data;
}
