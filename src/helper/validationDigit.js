function validationDigit(array, item) {

  if (array.length === 1 && item.type === "operating") {
    return false;
  }

  if (array.length === 1 && item.value === ")") {
    return false;
  }

  if (array.length > 1) {
    const lastDigit = array.at(-1);
    const penultimateDigit = array.at(-2);

    if (
      penultimateDigit.type === "operating" &&
      lastDigit.type === "operating"
    ) {
      return false;
    }

    if (penultimateDigit.value === "." && lastDigit.value === ".") {
      return false;
    }

    if (lastDigit.type === "operating" && penultimateDigit.value === ".") {
      return false;
    }
  }

  return true;
}

export default validationDigit;
