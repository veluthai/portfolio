fetch("http://localhost:5000/projects")
.then(res => res.json())
.then(data => {

const container =
document.getElementById("projectContainer");

data.forEach(project => {

container.innerHTML += `
<div class="project">
<h3>${project.title}</h3>
<p>${project.description}</p>
</div>
`;

});

});

document
.getElementById("contactForm")
.addEventListener("submit", async(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const message =
document.getElementById("message").value;

await fetch(
"http://localhost:5000/contact",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
message
})
}
);

alert("Message Sent");

});