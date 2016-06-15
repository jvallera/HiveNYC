

var TWITTER_CONSUMER_KEY = 'YOUR CONSUMER KEY';
var TWITTER_CONSUMER_SECRET = 'YOUR CONSUMER SECRET';

function Twitter(screename) {
  
  // Encode consumer key and secret
  var tokenUrl = "https://api.twitter.com/oauth2/token";
  var tokenCredential = Utilities.base64EncodeWebSafe(
    TWITTER_CONSUMER_KEY + ":" + TWITTER_CONSUMER_SECRET);
  
  //  Obtain a bearer token with HTTP POST request
  var tokenOptions = {
    headers : {
      Authorization: "Basic " + tokenCredential,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" 
    },
    method: "post",
    payload: "grant_type=client_credentials"
  };
  
  var responseToken = UrlFetchApp.fetch(tokenUrl, tokenOptions);
  var parsedToken = JSON.parse(responseToken);
  var token = parsedToken.access_token;
  
  // Authenticate Twitter API requests with the bearer token
  var apiUrl = "https://api.twitter.com/1.1/users/show.json?screen_name=" + screename;
  var apiOptions = {
    headers : {
      Authorization: 'Bearer ' + token
    },
    "method" : "get"
  };
  
  var responseApi = UrlFetchApp.fetch(apiUrl, apiOptions);
  
  var result = "";
  
  if (responseApi.getResponseCode() == 200) {
    
    // Parse the JSON encoded Twitter API response
    var response = JSON.parse(responseApi.getContentText());

  }
  
  return response.description;
  
}