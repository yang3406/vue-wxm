
/**
 * 数组是否包含某个值 有this不能用箭头函数
 * */
Array.prototype.contain = function(value){
   for(var i in this){
     if(this[i] == value){
        return true
     }
   }
   return false;
}
