import React, { useEffect, useState } from "react";
import { ICountry } from "../../types/country";
import { getCountries } from "../../api/api";

function Home() {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);
  return countries.map((country) => (
    <h1 key={country.id}>{country.name.common}</h1>
  ));
}

export default Home;
