function fbInit(){
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '123928321374983',
      xfbml      : true,
      version    : 'v2.7'
    });
    this.fbLogin();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
}

function fbLogin(){
    var self = this;
    var accessToken;
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in.');
        accessToken = response.authResponse.accessToken;
        self.getActivity(accessToken);
      }
      else {
        FB.login(function(response) {
            if (response.authResponse) {
                accessToken = response.authResponse.accessToken;
                self.getActivity(accessToken);
            } 
            else {
                console.log('User cancelled login or did not fully authorize.');
            }
        },
        {scope: 'public_profile,email,user_birthday,user_events,user_events,user_likes,user_location,user_photos,user_posts,user_videos'});
      }
    });

}

function getActivity(access_token){
    var start_date = new Date();
    start_date.setFullYear(start_date.getFullYear()-1);
    var end_date = new Date();
    $.ajax({
    	type: 'GET',
    	url: 'http://api.mad-art-generator.com:3000/activity',
    	dataType: 'json',
    	data: {
    	    "start_date": start_date,
    	    "end_date": end_date,
    	    "connections": null,
    	    "providers": [{"provider": "facebook", "access_token": access_token}]
    	},
    	success: function(data)
    	{
    	    console.log("success ---- data = " + JSON.stringify(data));
    	},
    	error: function(data)
    	{
    	    console.log("error ----- data = " + JSON.stringify(data));
    	}
    });
}

fbInit();