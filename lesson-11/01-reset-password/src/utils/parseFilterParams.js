function parseYear(value) {
  if (typeof value === 'undefined') {
    return undefined;
  }

  const parsedValue = parseInt(value);

  if (Number.isNaN(parsedValue) === true) {
    return undefined;
  }

  return parsedValue;
}

// export function parseFilterParams(query) {
//   const { minYear, maxYear } = query;

//   const parsedMinYear = parseYear(minYear);
//   const parsedMaxYear = parseYear(maxYear);

//   return {
//     minYear: parsedMinYear,
//     maxYear: parsedMaxYear,
//   };
// }
export function parseFilterParams(query) {
  return {
    minYear: query.minYear ? Number(query.minYear) : undefined,
    maxYear: query.maxYear ? Number(query.maxYear) : undefined,
  };
}
