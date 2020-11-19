$(".loginForm").on("click",function(){
	$(".all").fadeOut();
	$(".signup").fadeOut(function(){
		$(".login").fadeIn();
		$("body").css("background-image","url(https://www.wallpapertip.com/wmimgs/11-119918_background-for-hospital-website.png)");
	    $("nav").css("background","white");
	})

})

$(".signupForm").on("click",function(){
	$(".all").fadeOut();
	$(".login").fadeOut(function(){
		$(".signup").fadeIn();
		$("body").css("background-image","url(https://www.wallpapertip.com/wmimgs/11-119918_background-for-hospital-website.png)");
	    $("nav").css("background","white");
	})
})


	function validatelogForm(){
		var text;
		var x=document.forms["logform"]["email"].value;
		var y=document.forms["logform"]["pass"].value;
		var error_message = document.getElementById("error_message");
		error_message.style.padding = "10px";
		if(x.length==""){
			text="Please enter valid E-mail.";
			error_message.innerHTML=text;


			
			return false;
		}
		if(y.length<8 & y==""){
			text="Password field cannot be left empty";
			error_message.innerHTML=text;
			return false;

		}
		if(y.length<8){
			alert("Password should contain a min of 8 characters");
			return false;
		}
	}

	function validatesignForm(){
		var text;
		var fname=document.forms["signform"]["fname"].value;
		var lname=document.forms["signform"]["lname"].value;
		var email=document.forms["signform"]["email"].value;
		var pass=document.forms["signform"]["pass"].value;
		var confp=document.forms["signform"]["confp"].value;

		var error_message = document.getElementById("error_message");
        if(fname==""){
        	text="First name cannot be left empty";
        	error_message.innerHTML=text;
             return false;
        }

        if(lname==""){
        text="Enter last name";
        error_message.innerHTML=text;
             return false;
        }
        if(email==""){
        	text="E-mail??";
        	error_message.innerHTML=text;
        	return false;
        }

        if(pass==""){
        	text="Forgot to enter password";
        	error_message.innerHTML=text;
        	return false;
        }

        if(pass.length<8){
        	text="Create a password longer than 8 characters";
        	error_message.innerHTML=text;
        	return false;
        }
        if(confp!=pass){
        	text="Passwords don't match";
        	error_message.innerHTML=text;
        	return false;
        }


	}