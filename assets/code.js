var age_ ,height_,weight_, smoker_,gender_,region_,children_;

$(document).ready(function(){
  // fetch all DOM elements for the input
  age_ = document.getElementById("age");
  height_ = document.getElementById("height");
  weight_ = document.getElementById("weight");
  smoker_= document.getElementById("smoker");
  region_= document.getElementById("region");
  children_=document.getElementById("children");
  
})

$(document).on('click','#submit',function(){
    // on clicking submit fetch values from DOM elements and use them to make request to our flask API
    var age = age_.value;
    var height = height_.value;
    var weight = weight_.value;
    if(age == "" || height == "" || weight == ""|| smoker == "" || region == "" || children == ""){
      // you may allow it as per your model needs
      // you may mark some fields with * (star) and make sure they aren't empty here
      alert("empty fields not allowed");
    }
    else{
      // replace <username> with your pythonanywhere username
      // also make sure to make changes in the url as per your flask API argument names
      var requestURL = "https://deepesh12.pythonanywhere.com/?age="+age+"&height="+height+"&weight="+weight+"&smoker="+smoker+"&region="+region+"&children"+children;
      console.log(requestURL); // log the requestURL for troubleshooting
      $.getJSON(requestURL, function(data) {
        console.log(data); // log the data for troubleshooting
        prediction = data['json_key_for_the_prediction'];
      });
      // following lines consist of action that would be taken after the request has been read
      // for now i am just changing a <h2> tag's inner html using jquery
      // you may simple do: alert(prediction);
      $(".result").html("Prediction is:" + prediction);
    }
  });
