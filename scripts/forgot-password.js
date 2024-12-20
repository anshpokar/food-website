function otp_Input(){
    const inputelement=document.querySelector(".js-otpInput");
    const html ='<input type="text" id="otp" placeholder="OTP" />';
    inputelement.innerHTML=html;
    document.querySelector('.send_otp').innerHTML="verify";
}