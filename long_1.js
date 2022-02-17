console.log("WELCOME TO LOGIN AND SING UP PAGE")
const a=require("readline-sync")
var fs=require('fs')
var dic={}
d={}
var i=0;
list1=[]
while(i<=0){
    var user_choice=a.question("enter a 1 for singup or enter a 2 for login:")
    // fs exists
    if (user_choice=="1"){
        mobileno=a.question("enter your mobile number ")
        if(mobileno>0){
            console.log("resister ")
        }else{
            console.log("alreday exist mb")
        }
        var username=a.question("enter your username :")
        console.log("In your password at least uppercase or lowercase letter,")
        console.log("In your password have at least one special charcter")
        console.log("In your password have at least one numbers")
        password=a.question("create a passwrod ")
        passd=(/[a-zA-Z0-9!@#$%^&*]{6,16}$/)
            if(password.match(passd) ){
                cofirmpasswrod=a.question("confirmed password")
                if (password==cofirmpasswrod){
                    console.log("confirmed password")
                    console.log("congracts  "+username+"  you are sign up succesfully")
                }else{
                    console.log("incorrect password")
                break;}
            }else{
                console.log("plese add special charcter")
            break;}
            console.log("enter your personal details :")
            let firstname=a.question("enter your first name:")
            let lastname=a.question("enter your lastname :")
            let Dob=a.question("enter a your birth_date in following :")
            let gender=a.question("write your gender :")
            console.log("YOU SUCCESEFULLY SIGN UP ")
            var dic={"username":username,"mobileno": mobileno,"password":password,"persondetails":{"first_name":firstname,"last_name":lastname,"Date_Of_Birth":Dob,"Gender":gender,"mobile_number":mobileno}}
            d[password]=dic
            let mystr=JSON.stringify(d,null,4)
            fs.writeFileSync("login_signup.json",mystr)

        break;
    
    }else if(user_choice=="2"){
        var user_name=a.question("Enter your user name :")
        var pass_word=a.question("enter a password: ")

        var check=fs.readFileSync("login_signup.json");
        var file=JSON.parse(check);
        if (user_name==file["username"]){
            if (pass_word==file["password"]){
                console.log("*your personal details *")
                console.log("  first_name=",file["persondetails"]["first_name"])
                console.log("  last_name=",file["persondetails"]["last_name"])
                console.log("  Date_Of_Birth=",file["persondetails"]["Date_Of_Birth"])
                console.log("  mobile_number=",file["persondetails"]["mobile_number"])
            break;
            }else{
                console.log("Incorrect Password ")
            break;}
        }else{
            console.log("Username is incorrect")
        break;}

    }

}
