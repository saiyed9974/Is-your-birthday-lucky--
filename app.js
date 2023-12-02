
const Dob = document.querySelector("#dateofBirth");
const Luckynumber = document.querySelector("#luckyNumber");
const msgtext = document.querySelector("#msgText");
let msg = "";
const checkbtn = document.querySelector("#checkBtn");

checkbtn.addEventListener("click",function ClickHandler(){

    const sum = Sum_Of_Dob(Dob);

    const showmsg = check_Luck(Luckynumber,sum);
    
    msgtext.innerText = showmsg;


    
})

function Sum_Of_Dob(Dob){

    const dob_str = Dob.value;
    
    var new_str = dob_str.replaceAll("-","");
    let sum = 0;    
    for(var i in new_str)
    {
     sum =  sum + Number(new_str.charAt(i)); // this is typecast from string to Number
      }
        return sum;
    }

function check_Luck(Luckynumber,sum) {

    const user_lucky_number = Luckynumber.value;
     
    if(sum % user_lucky_number === 0){
       msg = "Yes! Your Birthdate is Lucky 😍"; 
    } else {
        msg = "Opps !🤭 Your Birthdate is not Lucky! 😔 ";
    }

    return msg;

}