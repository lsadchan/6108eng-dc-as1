/****S**** Global Functions ****S****/

function header(){
	$(".include-header").append(
		'<div class="header">'+
			'<a href="#" id="a-mode" class="float-left">Accessibility Mode</a>'+
			'<a href="#" data-toggle="modal" data-target="#login-modal" >Login</a>'+
			'<a href="#" data-toggle="modal" data-target="#register-modal">Register</a>'+
		'</div>'
	);
}

function login_register_modal(){
	$(".include-header").append(
		/*<!--S-Login Modal-S-->*/
		'<div id="login-modal" class="modal hide fade">'+
			'<div class="modal-header">'+
		    	'<ul class="nav nav-tabs">'+
				  '<li class="active"><a href="#" onclick="$(\'#register-modal\').modal(\'hide\');" data-toggle="modal" data-target="#login-modal">Login</a></li>'+
				  '<li><a href="#" onclick="$(\'#login-modal\').modal(\'hide\');" data-toggle="modal" data-target="#register-modal">Register</a></li>'+
				'</ul>'+
		  	'</div>'+
			'<form id="login-form">'+
				'<div id="login-error" class="alert alert-error hide"></div>'+
				'<input class="span4" type="text" name="username" required="required" value="" placeholder="Username" />'+
				'<input class="span4" type="password" name="password" required="required" value="" placeholder="Password" />'+
				'<button class="btn btn-info" name="submit">Login</button>'+
			'</form>'+
			'<div class="modal-footer">'+
		    	'<a href="#" class="btn btn-link">Forgotten Username?</a>'+
		    	'<a href="#" class="btn btn-link">Forgotten Password?</a>'+
		 	'</div>'+
		'</div>'+
		/*<!--E-Login Modal-E-->*/
		
		/*<!--S-Register Modal-S-->*/
		'<div id="register-modal" class="modal hide fade">'+
			'<div class="modal-header">'+
		    	'<ul class="nav nav-tabs">'+
				  '<li><a href="#" onclick="$(\'#register-modal\').modal(\'hide\');" data-toggle="modal" data-target="#login-modal">Login</a></li>'+
				  '<li class="active"><a href="#" onclick="$(\'#login-modal\').modal(\'hide\');" data-toggle="modal" data-target="#register-modal">Register</a></li>'+
				'</ul>'+
		  	'</div>'+
			'<form id="register-form">'+
				'<input type="text" class="span5" required="required" id="forename" name="forename" value="" placeholder="First Name" />'+
				'<input type="text" class="span5" required="required" id="lastname" name="lastname" value="" placeholder="Last Name" />'+
				'<input type="text" class="span5" required="required" id="addr_1" name="addr_1" value="" placeholder="Address Line 1" />'+
				'<input type="text" class="span5" id="addr_2" name="addr_2" value="" placeholder="Address Line 2"/>'+
				'<input type="text" class="span5" required="required" id="postcode" name="postcode" value="" placeholder="Post Code"/>'+
				'<input type="text" class="span5" required="required" id="city" name="city" value="" placeholder="City"/>'+
				'<input type="text" class="span5" required="required" id="mobile" name="mobile" value="" placeholder="Mobile"/>'+
				'<input type="text" class="span5" required="required" id="username_reg" name="username_reg" value="" placeholder="Username"/>'+
				'<input type="password" class="span5" required="required" id="password_reg" name="password_reg" value="" placeholder="Password" />'+
				'<input type="password" class="span5" required="required" id="password_confirm" name="password_confirm" value="" placeholder="Confirm Password" />'+
				'<input type="text" class="span5" required="required" id="email" name="email" value="" placeholder="Email" />'+
				'<label class="checkbox inline">'+
				  '<input type="checkbox" id="agree_terms" name="agree_terms" required="required" value="" />'+
				  '<span class="label label-info">I have read and agree with the terms and conditions.</span>'+
				'</label>'+
				'<a class="btn btn-link" href="<? echo $URL; ?>/terms_conditions.php" target="_blank">Read Terms &amp; Conditions</a>'+
				'<br/>'+
				'<button class="btn btn-info" onclick="javascript:register();">Register</button>'+
			'</form>'+
			'<div class="modal-footer">'+
		 	'</div>'+
		'</div>'
		/*<!--E-Register Modal-E-->*/
	);
}

function footer(){
	$(".include-footer").append(
		'<div class="footer">'+
			'<hr/>'+
			'<p>© Oval Ski Club 2012</p>'+
			'<a accesskey="c" href="contact_us.html">Contact Us</a>'+
			'<a accesskey="f" href="faq.html">FAQ</a>'+
		'</div>'
	);
}

function main_nav(page){
	var li_home = null;
	var li_club_sessions = null;
	var li_lessons = null;
	var li_about_us =null;
	
	if(page =="home"){li_home = "active"};
	if(page =="club_sessions"){li_club_sessions = "active"};
	if(page =="ski_lessons"){li_lessons = "active"};
	if(page =="about_us"){li_about_us = "active"};
	
	$(".include-navigation").append(
		'<div class="nav_holder">'+
			'<div class="navbar">'+
				'<div class="navbar-inner">'+
					'<a class="brand" href="index.html">Oval Ski Club</a>'+
					'<ul class="nav">'+
					  '<li class="'+li_home+'" ><a accessKey="h" href="index.html">Home</a></li>'+
					  '<li class="'+li_lessons+'"><a accessKey="l" href="ski_lessons.html">Learn To Ski</a></li>'+
					  '<li class="'+li_club_sessions+'"><a accessKey="s" href="club_sessions.html">Club Sessions</a></li>'+
					  '<li><a accessKey="r" href="#">Racing Team</a></li>'+
					  '<li class="'+li_about_us+'"><a accessKey="a" href="about_us.html">About Us</a></li>'+
					'</ul>'+
				'</div>'+
			'</div>'+
		'</div>'
	)
}

/****E**** Global Functions ****E****/