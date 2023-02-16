function validate(){
  var name,email,phone,message,s1,s2,s3,s4,z;

  name=document.getElementById("name");
  email=document.getElementById("email");
  phone=document.getElementById("phone");
  message=document.getElementById("message");

  s1=document.getElementById("s1");
  s2=document.getElementById("s2");
  s3=document.getElementById("s3");
  s4=document.getElementById("s4");
 
  if(name.value==""){

   s1.innerHTML="Must be filled";
  }
 else{
   s1.innerHTML="";
 }

 if(email.value==""){

   s2.innerHTML="Enter email id";
  }
 else{
   s2.innerHTML="";
 }

 if(phone.value==""){

   s3.innerHTML="Enter phone no.";
  }
 else{
   s3.innerHTML="";
 }

 if(message.value==""){

   s4.innerHTML="write message";
  }
 else{
   s4.innerHTML="";
 }

 if(name.value==""||email.value==""||phone.value==""||message.value=="") 
  {
   z=false;
  }
else{
   z=true;
 }
 return z;



}