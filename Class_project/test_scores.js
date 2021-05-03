function Function() {

    var ch1 = parseInt(document.getElementById("course1").value);
    var ch2 = parseInt(document.getElementById("course2").value);
    var ch3 = parseInt(document.getElementById("course3").value);
    var ch4 = parseInt(document.getElementById("course4").value);
    var lettergrade1 = document.getElementById("lettergrade1").value;
    var lettergrade2 = document.getElementById("lettergrade2").value;
    var lettergrade3 = document.getElementById("lettergrade3").value;
    var lettergrade4 = document.getElementById("lettergrade4").value;
  
var number1=0,number2=0,number3=0,number4=0;
    if(lettergrade1 == 'A'){
    number1=4.0;
    }
    else if (lettergrade1 == 'B'){
    number1=3.0;
    }
    else if (lettergrade1 == 'C'){
    number1=2.0;
    }
    else if (lettergrade1 == 'D'){
    number1=1.0;
    }
    else if (lettergrade1 == 'F'){
    number1=0;
    }
    if(lettergrade2 == 'A'){
    number2=4.0;
    }
    else if (lettergrade2 == 'B'){
    number2=3.0;
    }
    else if (lettergrade2 == 'C'){
    number2=2.0;
    }
    else if (lettergrade2 == 'D'){
    number2=1.0;
    }
    else if (lettergrade2 == 'F'){
    number2=0;
    }
    if(lettergrade3 == 'A'){
    number3=4.0;
    }
    else if (lettergrade3 == 'B'){
    number3=3.0;
    }
    else if (lettergrade3 == 'C'){
    number3=2.0;
    }
    else if (lettergrade3 == 'D'){
    number3=1.0;
    }
    else if (lettergrade3 == 'F'){
    number3=0;
    }
    if(lettergrade4 == 'A'){
    number4=4.0;
    }
    else if (lettergrade4 == 'B'){
    number4=3.0;
    }
    else if (lettergrade4 == 'C'){
    number4=2.0;
    }
    else if (lettergrade4 == 'D'){
    number4=1.0;
    }
    else if (lettergrade4 == 'F'){
    number4=0;
    }

var total = ch1 * number1 + ch2 * number2 + ch3 * number3 + ch4 * number4;
var avg_GPA = total/(ch1+ch2+ch3+ch4);

document.getElementById("GPA").innerHTML = "The average GPA is : "+avg_GPA.toFixed(2);
}


