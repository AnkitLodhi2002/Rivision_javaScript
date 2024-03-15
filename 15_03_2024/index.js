
let btn = document.getElementById("Btn")

btn.addEventListener("click", function(){
    let value = btn.value
    getData(value)
})

function getData(){
    fetch(`https://reqres.in/api/users`)
        .then(function(response){
            return response.json()
        }).then(function(res){
            showData(res.data)
        }).catch(function(err){
            console.log(err)
        })
}

function showData(data){
    main.innerHTML = ""
    data.forEach(function(ele,i){
        
        let div = document.createElement("div")

        let id = document.createElement("p")
        id.innerHTML = `<b>ID :</b> ${ele.id}` 
        
        let email = document.createElement("p")
        email.innerHTML = `<b>Email :</b> ${ele.email}` 

        let img = document.createElement('img')
        img.src = ele.avatar

        let FirstName = document.createElement("p")
        FirstName.innerHTML = `<b>First Name :</b> ${ele.first_name}`

        let LastName = document.createElement("p")
        LastName.innerHTML = `<b>Last Name :</b> ${ele.last_name}`

        div.append( id, FirstName, LastName, email, img )
        main.append(div)
    });
}



