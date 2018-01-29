const iagVals = [1.42, 1.32, 1.45, 1.20, 1.34, 1.74, 1.10, 1.89, 1.42, 1.90];

for (let i = 0; i < iagVals.length; i++) {
    if(iagVals[i] > iagVals[i+1]) iagVals.splice(i+1,1,iagVals[i]); 
};
console.log(iagVals[iagVals.length-1]);
console.log(`The array is ${iagVals}`);