var numbers = [];

let i = 1;
while (i <= 5) {
  numbers.push(i);
  i++;
}

let konten_el = document.getElementById("konten-holder");

numbers.forEach(num => {
  konten_el.innerHTML += `
    <div class="card col-md-4" style="margin: 10px; width:31%;">
      <div class="card-body" >
        <img src="./images/mini1.jpg" style="width: 100%;">
      </div>
    </div>
  `
})

function show_ganjil() {
  // filter index yg ganil
  let filtered_nums = numbers.filter(num => num % 2 !== 0);
  // kosongin dulu display
  konten_el.innerHTML = "";
  // looping display index yang udah difilter
  filtered_nums.forEach(num => {
    konten_el.innerHTML += `
      <div class="card col-md-4" style="margin: 10px; width:31%;">
        <div class="card-body">
          <img src="./images/mini1.jpg" style="width: 100%;">
        </div>
      </div>
    `
  })
}

function show_all() {
  konten_el.innerHTML = "";

  numbers.forEach(num => {
    konten_el.innerHTML += `
      <div class="card col-md-4" style="margin: 10px; width:31%;">
        <div class="card-body">
          <img src="./images/mini1.jpg" style="width: 100%;">
        </div>
      </div>
    `
  })
}

function show_genap() {
  let filtered_nums = numbers.filter(num => num % 2 == 0);
  konten_el.innerHTML = "";

  filtered_nums.forEach(num => {
    konten_el.innerHTML += `
      <div class="card col-md-4" style="margin: 10px; width:31%;">
        <div class="card-body">
          <img src="./images/mini1.jpg" style="width: 100%;">
        </div>
      </div>
    `
  })
}