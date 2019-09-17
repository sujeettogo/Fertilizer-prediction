var attempt = 3; 
	function validate()
	{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username=="" || password=="")
	{
		alert ("Username and Password must be filled !!!");
	}
	else
	{
		if ( username == "ssn.edu.in" && password == "csessn")
		{
			alert ("Login successful");
			window.location.href="/main.html"; // Redirecting to other page.
			return false;
		}
		else
		{
			attempt --;
			alert("You have "+attempt+" attempts left");
			if( attempt == 0)
			{
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
				return false;
			}
		}
	}
	}