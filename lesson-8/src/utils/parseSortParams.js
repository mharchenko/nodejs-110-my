function parseSortBy(value) {
  if (typeof value === 'undefined') {
    return '_id';
  }
  const keys = ['_id', 'name', 'gender', 'year', 'createdAt'];

  if (keys.includes(value) === true) {
    return '_id';
  }

  return value;
}

export function parseSortOrder(value) {
  if (typeof value === 'undefined') {
    return 'asc';
  }
  if (value !== 'asc' && value !== 'desc') {
    return 'asc';
  }

  return value;
}

export function parseSortParams(query) {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
}
