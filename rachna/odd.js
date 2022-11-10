function checkOdd(n){
    var f= 0;
    if(n%2!==0){
        f =1;
    }
    if(f==1){
        console.log("Yes");
        for(var i=0;i<n;i++){
            console.log(i);
        }
    }else{
        console.log("No");
    }
}
checkOdd(11);