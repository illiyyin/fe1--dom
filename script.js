const divDemo = document.getElementById("demo");
const paragraph = document.createElement("p");
paragraph.innerHTML = "Hello World!123";
divDemo.append(paragraph);

const paragraph2 = document.getElementById("paragraph");
paragraph2.remove();
// document.getElementById("my-image").src = "https://prog-8.com/shared/images/document/115/1665117074918.gif";
const name = document.getElementById("name").value;
console.log(name);

// cara 1
// document.getElementById("greeting").style.color = "blue";
// document.getElementById("greeting").style.backgroundColor = "red";

// cara 2
const g = document.getElementById("greeting")
g.style.color = "blue"
g.style.backgroundColor = 'red'

function teksBerubah(input) {
  console.log(input.value)
  input.style.padding = "20px"
}


let x = 0
function overF() {
  x += 1
  //x=x+1
  const count = document.getElementById("count-span")
  count.innerHTML = x
}

const over = document.getElementById("over")
over.addEventListener("mouseover", overF)

function changeButton1(abc) {
  console.log(abc)
  abc.innerHTML = "Ooops!";
  abc.style.color = "red";
}

const button = document.getElementById("button-2")
button.addEventListener("click", changeButton2)

function changeButton2(abc) {
  console.log(abc)
  console.log(abc.target)
  abc.target.innerHTML = "Ooops!";
  abc.target.style.color = "red";
}
