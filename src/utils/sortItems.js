const sortItems = (array, byValue, direction) => {
  if (direction === "asc") {
    return array.sort((a, b) => {
      if (a[byValue] > b[byValue]) {
        return 1;
      } else if (a[byValue] < b[byValue]) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return array.sort((a, b) => {
      if (a[byValue] < b[byValue]) {
        return 1;
      } else if (a[byValue] > b[byValue]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
};

export default sortItems;
