const firebaseConfig = {
    apiKey: "AIzaSyA3yK3V5040e1yASMHGKG2Qch-Z_i9Hi7o",
    authDomain: "environmentalday-8198f.firebaseapp.com",
    databaseURL: "https://environmentalday-8198f-default-rtdb.firebaseio.com",
    projectId: "environmentalday-8198f",
    storageBucket: "environmentalday-8198f.appspot.com",
    messagingSenderId: "556400940725",
    appId: "1:556400940725:web:ba5c9bf641c500432b50fc"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your detabase
  var formDB = firebase.database().ref('form');

  document.getElementById("form").addEventListener("submit",submitForm);


  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var treeno = getElementVal("treeno");

    saveMessages(name, treeno);

    user_name = document.getElementById("name").value;
    firebase.database().ref("name").child(user_name).update({
        name : name,
        treeno : treeno
    });
  }

  const saveMessages = (name, treeno) => {
    var newForm = formDB.push();

    // newForm.set({
    //     name : name,
    //     treeno : treeno,
    // });
  };



  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }


  // Function for get the data

  var TotalPerson = 0;
  var TotalTree = 0;
//   var TotalValue = 0;

  function getData() {
    user_name = document.getElementById("name").value;
    firebase.database().ref("name/" + user_name).on('value', function(snapshot){
        document.getElementById("detail").innerHTML = "";
        snapshot.forEach(function(get_name_and_treeno){
            treeno_data = get_name_and_treeno.val();
            name = get_name_and_treeno.key;

            var treeno = treeno_data["treeno"];

            console.log("name: " + name, + "treeno: " + treeno);

            

            value = "<span>"+ name+"</span>" + " ,"  +"Total tree Planted : " + "<span>" +treeno+ "</span>" + "</br>";
            var detail = document.getElementById('detail');
            detail.innerHTML += value;

                TotalPerson += 1;
                TotalTree += Number(treeno);

            
        });
        document.getElementById('info').innerHTML = "Total People : " + TotalPerson;
        document.getElementById('Ttree').innerHTML = "Total Tree : " + TotalTree;
    });
}

getData();