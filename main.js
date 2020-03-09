function getRepos() {
  const myRequest = new XMLHttpRequest();

  myRequest.open('GET', 'https://api.myjson.com/bins/11izea');
  myRequest.send();
  
  myRequest.onload = function() {
    const resData = JSON.parse(myRequest.response); 
    const elList = document.getElementById('list');
    if(this.readyState === 4 && this.status === 200) {
     
      for(var i = 0; i < resData.rows[0].elements.length; i++) {

        let obj = resData.rows[0].elements[i];
        elList.innerHTML += obj.distance.text + "<br>";
        console.log(obj.distance.text);
     
      }

    } else {
      elList.innerHTML = "You Have Error";
    }
  }
 
}


// AJAX with $ sign 

// $.ajax({
//   url: "https://api.myjson.com/bins/11izea",
//   dataType: "json",
//   cache: false,
//   success: function(data, status) {
//     let content = "";
//     for (let x in data) {
//       console.log(data[x])
//     }

//   }
// })

