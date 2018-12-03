function leapYearCheaker(year) {
    for(let key of year){
        if(key % 4 === 0){
            if(key % 100 === 0){
                if(key % 400 === 0){
                    console.log(key + `: it's a leap year`);


                } else{
                    console.log(key + `: it's not a leap year`);

                }
            }else {
                console.log(key + `: it's a leap year`);
                
            }

        }
        else{

            console.log(key + `: it's not a leap year`);

        }
        
    }
}

leapYearCheaker([1996,1998,2000,2003,2004,2006,2008,2010,2012,2014,2016])