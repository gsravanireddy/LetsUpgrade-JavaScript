window.onload = function () {
  let initialbuses = [
    {
      name: "DTC BG-24",
      source: "Botanical Garden Metro Station",
      destination: "GIMS",
      number: "DL22K7514",
      capacity: 40,
    },
    {
      name: "DTC GL90",
      source: "Kendriya Terminal",
      destination: "Rohini Sector 16",
      number: "DL42K4426",
      capacity: 50,
    },
    {
      name: "DTC RL75",
      source: "New Delhi Railway Station Gate 2",
      destination: "Dwarka Sector 14 Metro Station",
      number: "DL09X1073",
      capacity: 55,
    },
    {
      name: "DTC GL91",
      source: "Shivaji Stadium",
      destination: "Mundka",
      number: "DL33X1993",
      capacity: 55,
    },
  ];

  if (localStorage.getItem("buses") == null) {
    localStorage.setItem("buses", JSON.stringify(initialbuses));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let buses;
  if (superarray == undefined) {
    buses = JSON.parse(localStorage.getItem("buses"));
  } else {
    buses = superarray;
  }

  buses.forEach(function (bus, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.capacity}</td>
      <td>
      <button onclick='deleteBus(${index})'>Delete</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display();

function addBus(e) {
  e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let capacity = document.getElementById("capacity").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = number;
  bus.capacity = Number(capacity);

  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
  localStorage.setItem("buses", JSON.stringify(buses));

  display();

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("number").value = "";
  document.getElementById("capacity").value = "";
}

function searchBySource() {
  let searchValue = document.getElementById("searchSource").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  display(newdata);
}

function searchByDestination() {
  let searchValue = document.getElementById("searchDestination").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return (
      bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}

function deleteBus(index) {
  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.splice(index, 1);
  localStorage.setItem("buses", JSON.stringify(buses));
  display();
}
