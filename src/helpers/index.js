function createPhoneNumber(numbers){
  //pull out all non-digit chars
  let formattedNumber = String(numbers).replace(/\D/g,'');
  // then we build our 3 pieces based off of specific indices in forLoops.
  let first3 = "(";
  let secondChunk = "";
  let thirdPiece = "";

  for(let i = 0; i<3; i++) {
    first3+= String(formattedNumber[i])
  }
  first3 +=") ";

  for(let i = 3; i<6; i++) {
    secondChunk += String(formattedNumber[i])
  }
  secondChunk += "-";

  for(let y = 6; y<10; y++) {
    thirdPiece += String(formattedNumber[y])
  }

  return first3 + secondChunk + thirdPiece;
}

export default createPhoneNumber;
