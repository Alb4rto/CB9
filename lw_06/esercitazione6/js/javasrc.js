//esercizio1

//const allNumb= [3,9,22,73,128];

//const getAverageNumb= (numArr) => {
  //let totalSum= 0;
    //for (let i= 0; i < numArr.length; i++) 
    //{
      //  totalSum += numArr[i];
    //}
    //const average= totalSum + numArr.length;

  //  return average;

//}

//const averageNumb= getAverageNumb(allNumb);

//console.log(averageNumb);

//esercizio2

const PlantsImgGen = (src, alt) => {
    const imgItemEl = document.createElement("img");

    imgItemEl.src = src;
    imgItemEl.alt = alt;
    imgItemEl.className = "plants";

    return imgItemEl;
};

const imgDivEl = document.querySelector(".img-div");
