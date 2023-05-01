const container = document.getElementById("container");
const spinner = document.getElementById("spinner");

fetch("https://jsonplaceholder.typicode.com/users").then(result  => {
	spinner.classList.add("d-none");
	return result.json()
}).then(data =>{
	data.forEach(user => {
		container.appendChild(cardUser(user.id, user.name, user.username, user.email, user.address, user.phone, user.website, user.company))
	});
});


function cardUser(id = "0", name = "Christhian Gutierrez", username = "cjgutierrez44", email = "cjgutierrez44@ucatolica.edu.co", address = {"street" : "calle"}, phone = "3161225", website = "https://cjgutierrez44.github.io", company = {}){
	const card = document.createElement("div");
	card.classList.add("card", "border-secondary", "mb-4", "col-md-3", "mx-2");
	card.innerHTML = 
    `<div class="card-header fs-4">
		${id}. ${name}
	</div>
	<div class="card-body">
		<p class="card-text"><strong>Username:</strong> ${username}</p>
		<p class="card-text"><strong>Email:</strong> ${email}</p>
		<p class="card-text">
		<strong>Address:</strong>
			<ul>
				<li><strong>Street: </strong>${address.street}</li>
				<li><strong>Suite: </strong>${address.suite}</li>
				<li><strong>City: </strong>${address.city}</li>
				<li><strong>Zipcode: </strong>${address.zipcode}</li>
			</ul>
		</p>
		<p class="card-text"><strong>Phone:</strong> ${phone}</p>
		<p class="card-text"><strong>Website:</strong> ${website}</p>
		<p class="card-text">
		<strong>Company:</strong>
			<ul>
				<li><strong>Name: </strong>${company.name}</li>
				<li><strong>CatchPhrase: </strong>${company.catchPhrase}</li>
				<li><strong>Bs: </strong>${company.bs}</li>
			</ul>
		</p>
  	</div>
  	<div class="card-footer">
  		<p class="card-text text-center">Action</p>
  		<div class="d-flex justify-content-center">
  		  	<button class="btn btn-info mx-2">Editar</button>
  			<button class="btn btn-danger mx-2">Borrar</button>
  		</div>

  	</div>
	`
	return card;
}