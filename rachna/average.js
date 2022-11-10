function avrgOfArray(array) {
    var sum = 0;
    for (var i=0; i<array.length; i++) {
      sum += array[i];
    }
    if(array.length==0){
        console.log("0");
    }else{
        var avrg = sum/array.length;
        console.log(avrg);
    }
}
avrgOfArray([1, 2, 3, 4, 5]);