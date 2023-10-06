interface IName {
  common: string;
}

interface IFlag {
  png: string;
}

export interface ICountry {
  id: number;
  name: IName;
  flags: IFlag;
}
