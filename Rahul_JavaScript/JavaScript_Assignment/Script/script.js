
          function validate(){
             var name = document.getElementById("name");
             var fatherName = document.getElementById("fathername");
             var email = document.getElementById("email");
             
             var dob = document.getElementById("dob").value;
                          
             var address1 = document.getElementById("address1");
             var city = document.getElementById("city");
             var zipCode = document.getElementById("zipcode");
             var zipCode = document.getElementById("zipcode");
             if(name.value.trim()=="")
             {
                 name.style.border="solid 1px red";
                 document.getElementById("check1").style.visibility="visible";
                 
                 return false;
             }
              else if(fatherName.value.trim()=="")
             {
                fatherName.style.border="solid 1px red";
                 document.getElementById("check2").style.visibility="visible";
                
                  return false;
              }
             else if(email.value.trim()=="")
             {
                // email.style.border="solid 1px red";
                // document.getElementById("check3").style.visibility="visible";
                 var regex = /^([a-z 0-9\.-]+)@([a-z 0-9\-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
                 if(!regex.test(email))
                {
                 email.style.border="solid 1px red";
                 document.getElementById("check3").innerHTML="Please Enter a Valid Email Address";
                  document.getElementById("check3").style.color="red";
                  document.getElementById("check3").style.visibility="visible";
                 
                 }       
                  
                return false;
             }
             
             else if(dob.value.trim()=="")
             {
                // dob.style.border="solid 1px red";
                // document.getElementById("check4").style.visibility="visible";
                 var regex = /^[0-9]{2}.[0-9]{2}.[0-9]{4}$/;
                 if(!regex.test(dob))
                 {
                  dob.style.border="solid 1px red";
                  document.getElementById("check").innerHTML="Required";
                  document.getElementById("check3").style.color="red";
                  document.getElementById("check3").style.visibility="visible";
                 }
                 
             }
             else if(number.value.trim()=="")
             {
                number.style.border="solid 1px red";
                 document.getElementById("check5").style.visibility="visible";
                
                 
             }
             else if(address1.value.trim()=="")
             {
                address1.style.border="solid 1px red";
                 document.getElementById("check6").style.visibility="visible";
                
                 
             }           
             else if(city.value.trim()=="")
             {
                city.style.border="solid 1px red";
                 document.getElementById("check7").style.visibility="visible";
                
                 
             }
             else if(zipCode.value.trim()=="")
             {
                zipCode.style.border="solid 1px red";
                 document.getElementById("check8").style.visibility="visible";
                
                 return false;
             }
             
             else
             {
                  true;
            }
        }

    
  