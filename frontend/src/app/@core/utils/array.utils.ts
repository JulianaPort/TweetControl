
export const removeItemArray = (array: Array<any>, arrayItemToCompare: any, valueToCompare: any) => {
  var indice = array.findIndex(obj => obj[arrayItemToCompare] == valueToCompare);
  array.splice(indice, 1);
  return array;
}
