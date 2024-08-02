let devOpsDetails = document.getElementById("devOpsDetails");

function openDevOpsDetails() {
  devOpsDetails.style.visibility = "visible";
}

let closeDevOpsDetails = () => {
  devOpsDetails.style.visibility = "hidden";
};

let array1 = ["item1", "item2", "item3", "item4"];

let arrayOfObjs = [
  { name: "obj1", number: 1, present: false },
  { name: "obj2", number: 2 },
  { name: "obj3", number: 3 },
  { name: "obj4", number: 4 },
];

let array12 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "!",
  "@",
  "#",
  "$",
  "_",
  "-",
  "&",
];

let passwordGenerator = () => {
  let password = "";

  passwordLength = document.getElementById("passwordLength").value;

  if (passwordLength.length == 0 || passwordLength > 16 || passwordLength < 6) {
    alert("Please enter a length value in range of 6 to 16.");
  } else {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.ceil(Math.random() * array12.length);
      password += array12[randomIndex];
    }

    // document.getElementById("myPassword").innerText = password;
    document.getElementById("myPassword").innerHTML = `<b>${password}</b>`;
  }
};

api = "https://api.ipify.org?format=json";

let fetchAPI = async () => {
  const resp = await fetch(api);
  const res = await resp.json();
  console.log(res);
};

fetchAPI();
