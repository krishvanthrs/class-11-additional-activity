var marks = [35,38,42,45,43,34,36,41,48,32];
function marks_average()
 {
   var sum = 0;
    for(var i = 0;i<marks.length; i= i+1) 
    { sum = sum + marks[i]; }
     var average_marks =sum/marks.length; 
     console.log(average_marks);
     }

     function setup() {
       createCanvas(400, 400);
        marks_average(); }
       function draw() { 
        background(150); }