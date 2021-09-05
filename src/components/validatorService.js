export function validateParams(initYear,endYear) {
    if(parseInt(initYear)<=parseInt(endYear)){
        console.log(parseInt(initYear),parseInt(endYear));
        return true;
    };
    return false;
}