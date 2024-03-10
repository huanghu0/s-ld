function deepCopy(object){
    if (!object || typeof object !== "object") return;

    let newObject = Array.isArray(object) ? [] : {};
  
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        newObject[key] =
          typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
      }
    }
  
    return newObject;    
}

const a = {
    a:1,
    b:2,
    num:[1,2,3,4,5,6],
    obj:{
        age:18,
        name:'hh'
    }
}

const b = deepCopy(a)
console.log(b)