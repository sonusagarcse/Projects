// initial popup Box - sonu sagar
let mname = document.getElementById('m-name');

function hidepopup(){
    
    let name = document.getElementById('name');
    let mname = document.getElementById('m-name').value;

    if ( name.value == "" || mname == "" ) {
        let alert = document.getElementById('alert');
        alert.style.color = 'red';
        alert.innerHTML = "Fill Correct Information";
    }
    else {
        let popup = document.getElementById('popup');
        popup.style.display = "none";
        let content = document.getElementById('content').style.display = "block";
        let mother = document.getElementById('m_name');
        mother.innerHTML = mname;
    }
}

// content Place

