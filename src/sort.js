const NewArr = [];
const sorter = (myArray) => {
  const  Integers = myArray.filter(checkIntegers);

    function checkIntegers(ints) {
        return typeof ints === 'number';
    }
   const Charaters = myArray.filter(checkCha);
    function checkCha(Cha) {
        return typeof Cha === 'string';
    }
    NewArr.push(Integers, Charaters);

    return NewArr
}

console.log(sorter([2, 0, 3, "s", 5, "b"]));