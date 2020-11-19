$(".loginForm").on("click",function(){
	$(".all").fadeOut();
	$(".signup").fadeOut(function(){
		$(".login").fadeIn();
	})
})

$(".signupForm").on("click",function(){
	$(".all").fadeOut();
	$(".login").fadeOut(function(){
		$(".signup").fadeIn()
	})
})


	function validatelogForm(){
		var x=document.forms["logform"]["email"].value;
		var y=document.forms["logform"]["pass"].value;
		if(x==""){
			alert("U forgot to enter your E-mail")
			return false;
		}
		if(y.length<8 & y==""){
			alert("Password field cannot be left empty");
			return false;

		}
		if(y.length<8){
			alert("Password should contain a min of 8 characters");
			return false;
		}
	}

	function validatesignForm(){
		var fname=document.forms["signform"]["fname"].value;
		var lname=document.forms["signform"]["lname"].value;
		var email=document.forms["signform"]["email"].value;
		var pass=document.forms["signform"]["pass"].value;
        if(fname==""){
        	alert("Enter First name")
             return false;
        }

        if(lname==""){
        	alert("Enter last name")
             return false;
        }
        if(email==""){
        	alert("E-mail??");
        	return false;
        }

        if(pass.length<8 & pass==""){
        	alert("Forgot to enter password")
        	return false;
        }

        if(pass.length<8){
        	alert("Create a password longer than 8 characters");
        	return false;
        }


	}