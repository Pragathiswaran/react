const isArrayEmpty = (arr) =>{
    if(arr !== undefined && arr.length > 0 && arr!== null){
        return false;
    }
    return true;
}

const dumplogs = (msg) =>{
    // console.log(msg);
}

export {isArrayEmpty,dumplogs};