let name= "Sravani";
let char =name.indexOf("a");
console.log("Result after searching for a particular character:"+char);


//Program to convert minutes to seconds:
function convertMinutestoSeconds(minutes) 
{
  return Math.floor(minutes * 60);
}
var minutestoSeconds = convertMinutestoSeconds(2);
    console.log("After conversion:"+minutestoSeconds)
  //Alternate way to convert minutes to seconds:
   let min=2;
   console.log("Before Conversion-Minute="+min+"After conversion-Second="+min*60)


//Program to search for an element in an array of strings:
 let array=["Variables","Constants","Strings","Numbers"];
 let search = array.indexOf("Strings");
 console.log("Index of search element:"+search);


 //Program to display only elements containing 'a' in them from an array:
 let fruits = ["Watermelon","Orange","Banana","Kiwi","Leechi"];
 let slice = fruits.slice(0,3)
 console.log("Elements containing 'a' are:"+ slice)
 



 //Program to print an array in reverse order:
 let maths = ["Matrix","Sets"," Calculus"];
 console.log(maths.reverse());