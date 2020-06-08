
export const dataFormat = (type, data, quantity) => {
  let formattedData = null;

  switch (type) {
    case 'uppercaseFirst':
      formattedData = data.charAt(0).toUpperCase() + data.slice(1)

      break;
    case 'priceFormat':
        /**
         * ellenőrízzük hogy a kapott érték szám-e
         * csinálunk a számból egy stringekkel feltöltött tömböt -> pl [1,0,0,0,0] amit megfordítunk
         * végig megyünk a tömbön és ha a olyan elemnél járunk ami maradéktalanul osztható 3-mal
         * beszúrúnk egy ' '-t az adott elemhez
         * megfordítjuk a tömböt és összekötjük a tömb elemeit egy meghatározott elemmel
         *  
         * @param  {Number} data
         * @return {String} 
         */ 

                
        if(isNaN(parseInt(data))){
          return 0;
        }

        let tmpQuantity = quantity === undefined || quantity === null ? 1 : quantity,
            sumData  = tmpQuantity * parseInt(data),
            dataArr  = sumData.toString().split('');
    
        if(dataArr < 4){
          formattedData = data + ' Ft';
        }
        else {
          dataArr.reverse();

          let newArr = dataArr.map((item, index) => {
            if((index+1) % 3 == 0){
              return ' ' + item.toString();
            }

            return item;
          })

          formattedData = newArr.reverse().join('') + ' Ft';
        }
        
      break;
  }
  
  return formattedData;
}

export const isExist = (data) => {
  let returnValue = true;

  switch (data){
    case null:
        returnValue =  false;
      break;
    case undefined:
        returnValue = false;
      break;
    case '':
        returnValue = false;
      break;
    case ' ':
        returnValue = false;
      break;
  }

  if(data === true){
    returnValue = true
  }

  if(typeof data === Array){
    returnValue = data.length === 0 ?? false; 
  }

  if(returnValue && Object.values(data).length == 0){
    returnValue = false;
  }

  return returnValue
}
