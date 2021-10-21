
function display(){

var name = document.getElementById('name').value
var type = document.getElementById('type').value
var phone = document.getElementById('phone').phone
var addrss = document.getElementById('addr').value


var request = new XMLHttpRequest();
var url = "https://api.openbrewerydb.org/breweries?by_type="+type+"&by_name="+name+"&by_phone="+phone+"&by_address2="+addrss;
request.open('GET',url,true)
request.send()

request.onload = function(){
	if(request.readyState == 4 && request.status == 200){
	var data = JSON.parse(this.response);
	for(var dataindex of data){
	//	document.querySelector('#breweryData').innerHTML =dataindex ;
	var div = document.createElement('div');
    div.setAttribute('id', dataindex.id);
     div.innerHTML = "Id:"+dataindex.id + '<br />' +"Name:"+dataindex.name +'<br/>'+"Brewery Type:"+  dataindex.brewery_type +'<br/>'+ "Street:"+  dataindex.street +'<br/>'+ "Address2:"+  dataindex.address_2 +'<br/>'+ "Address3:"+  dataindex.address_3 +'<br/>'+ "City:"+  dataindex.city +'<br/>'+ "State:"+  dataindex.state +'<br/>'+ "Country Province :"+  dataindex.county_province +'<br/>'+"Postal Code :"+  dataindex.postal_code +'<br/>'+ "Country  :"+  dataindex.country +'<br/>'+ "Longitude :"+  dataindex.longitude +'<br/>'+"Latitude :"+  dataindex.latitude +'<br/>'+"Phone number :"+  dataindex.phone +'<br/>'+ "Website URL :"+  dataindex.website_url +'<br/>'+ "Updated BY :"+  dataindex.updated_at +'<br/>'+ "Created BY :"+  dataindex.created_at+'<br/>'+
	 "-------------------------------------------------";
	 // dataindex.id + '<br />' +dataindex.name +  '<br />'+ dataindex.brewery_type+  '<br />'  + dataindex.street +'<br/>'+dataindex.address_2 +'<br/>'+dataindex.address_3;
	 
     document.body.appendChild(div);
	}
	console.log(name,type,phone,addrss);	
	}
	else{
		alert("Status: "+request.status+" Message: "+request.statusText);
		console.log("Status: "+request.status+" Message: "+request.statusText);
	}
}
	
request.onerror = function(){
	console.log("connection failed")
	alert("Connection failed");
}
	

}
