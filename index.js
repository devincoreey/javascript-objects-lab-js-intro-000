function updateObjectWithKeyAndValue(pbject, key, value){
  const newobj = {prop2:'new value'}
  return Object.assign({prop:1}, {prop2:2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}
function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}
