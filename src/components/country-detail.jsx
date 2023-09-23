function CountryDetail({ myCountry, isLoading }) {
  myCountry = 'USA'
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div>{myCountry}</div>
    </div>
  )
}

export default CountryDetail
