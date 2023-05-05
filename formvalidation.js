function validation(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var confirmpass = document.getElementById('conpass').value;
    var MobileNumber = document.getElementById('MobileNumber').value;
    var emails = document.getElementById('emails').value;
    
    if(user == ""){
        document.getElementById('username').innerHTML ="**Please fill the username field**";
        return false;
    }
    if((user.length <= 2)||(user.length >= 20)) {
        document.getElementById('username').innerHTML ="**Username length should be valid**";
        return false;
    }   
    if(!isNaN(user)){
        document.getElementById('username').innerHTML ="**Only Characters are allowed.**";
        return false;
    }


    if(pass == ""){
        document.getElementById('passwords').innerHTML ="**Please fill the password field**";
        return false;
    }
    if((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('passwords').innerHTML ="**Password length should be valid**";
        return false;
    }   
    if(pass!=confirmpass){
        document.getElementById('confirmpass').innerHTML ="**Passwords not matching**";
        return false;
    }


    if(confirmpass == ""){
        document.getElementById('confirmpass').innerHTML ="**Please fill the confirm password field**";
        return false;
    }


    if(MobileNumber == ""){
        document.getElementById('mobileno').innerHTML ="**Please fill the Mobile no. field**";
        return false;
    }
    if(isNaN(MobileNumber)){
        document.getElementById('mobileno').innerHTML ="**User must fill the mobile number not character**";
        return false;
    }
    if(MobileNumber.length!=10){
        document.getElementById('mobileno').innerHTML ="**Mobile number must contain 10 digits only**";
        return false;
    }


    if(emails == ""){
        document.getElementById('emailids').innerHTML ="**Please fill the Email Id field**";
        return false;
    }
    if(emails.indexOf('@')<=0){
        document.getElementById('emailids').innerHTML ="**@ is at invalid position**";
        return false;
    }
    if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('emailids').innerHTML ="**. is at invalid position**";
        return false;
    }
}