 var lottery = "" + Math.floor(Math.random() * 100); //Generating a random #
 var lottery1 = lottery.charAt(0); 
 var lottery2 = lottery.charAt(1);
 
 console.log(lottery);
 //
const draw = () => {
    var num = document.getElementById("pick").value;
    var digit1 = num.charAt(0);
    var digit2 = num.charAt(1);
    //Comparison of value inputed to determine best case scenario to follow
  if(digit1 == lottery1 && digit2 == lottery2){
    alert(("The lottery number is " + lottery + " .Exact match!! congrats, you've won the grand prize: ***$10,000***"));
  } else if (digit1 == lottery2 && digit2 == lottery1){
    alert("The lottery number is " + lottery + " .Matched digits, you are second place: For that you get **$5000**") ;
  }else if(digit1 == lottery1 || digit1 == lottery2 || digit2 == lottery1 || digit2 == lottery2 ){
    alert("The lottery number is " + lottery + " .At least you got one number right...: You're prize is *$1000*");
  }else{
    alert(("The lottery number is " + lottery + " .Sorry, no match :("));
    return null;
  }
}
//document.getElementById("regButton").addEventListener("click", remove());
display = () => {
    document.getElementById("overlay").style.display = "block";
}
remove = () => {
    document.getElementById("overlay").style.display = "none";
    console.log(info.fname);   
}



