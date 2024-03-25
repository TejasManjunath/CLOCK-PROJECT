function showSidebar(){
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display='none'
}
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    setTimeout(function() {
        sidebar.classList.toggle('active'); // Toggle the 'active' class on sidebar after 2 seconds
    }, 300); // Delay of 2000 milliseconds (2 seconds)
}




let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');
let tabContainer = document.querySelector('.tab-filter-item-container');

function setActiveTab(select_tab) {
  for (let t = 0; t < tab_items.length; t++) {
    tabContainer.style.height = tab_items[t].scrollHeight + 'px';
    if (tab_items[t].classList.contains(select_tab)) {
      tab_items[t].classList.add('select_tab');
    } else {
      tab_items[t].classList.remove('select_tab');
    }
  }
}

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    setActiveTab(select_tab);
  });
}

for (let th = 0; th < tab_items.length; th++) {
  tabContainer.style.height = tab_items[th].scrollHeight + 'px';
}


/*world clock*/

function startDigitalClock() {
function updateClock() {
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;
document.getElementById('digital-clock').innerText = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
}

// Call the function to start the digital clock
startDigitalClock();
        


//world clock

async function getUser(place) {
  const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=7c521e63abd14f03af3040ccfe24da13&location=${place}`
  
  const response = await fetch(api_url);
  
  const data = await response.json();
  
  time = await data.datetime
  // arr = Array.from(time)
  // arr.splice(0, 11)
  // arr.toString()
  // timezone = (arr.splice(0, 5)).join("");
  document.getElementById("time2").innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`

}

document.querySelectorAll(".allPaths").forEach(e => {
e.setAttribute('class', `allPaths ${e.id}`);
e.addEventListener("mouseover", function () {
  window.onmousemove=function (j) {
      x = j.clientX
      y = j.clientY
      document.getElementById('name').style.top = y-60  + 'px'
      document.getElementById('name').style.left = x +10 + 'px'
  }
  const classes=e.className.baseVal.replace(/ /g, '.')         
  document.querySelectorAll(`.${classes}`).forEach(country =>{
      country.style.fill = "cyan"
  })
  document.getElementById("name").style.opacity = 1
  
  document.getElementById("namep").innerText = e.id
})
e.addEventListener("mouseleave", function () {
  const classes=e.className.baseVal.replace(/ /g, '.')
  document.querySelectorAll(`.${classes}`).forEach(country =>{
      country.style.fill = "#ececec"
  })
  document.getElementById("name").style.opacity = 0
})

e.addEventListener("click",function(){
  getUser(e.id)
})

})