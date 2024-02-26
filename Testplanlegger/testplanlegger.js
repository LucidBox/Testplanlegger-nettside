const tableDataArray = document.querySelectorAll(".tableData");
const tableHeaderArray = document.querySelectorAll(".tableHeader");
const selectDivArray = document.querySelectorAll(".select");
const optionArray = document.querySelectorAll(".option");
const optionSummaryButton = document.getElementById("optionSummaryButton");

const modeOptionArray = document.querySelectorAll(".modeOption");
const manualOptionArray = document.querySelectorAll(".manualOption");

const modeButton = document.getElementById("modeButton");
const manualButton = document.getElementById("manualButton");

let chosenOptionArray = [];
let manualChoice = "";
let mode = "";

let descriptionHeader = document.getElementById("descriptionHeader");
let descriptionText = document.getElementById("descriptionText");

let phraseButton = document.getElementById("phraseButton");
let recommendationButton = document.getElementById("recommendationButton");
let referenceButton = document.getElementById("referenceButton");

let globalPhraseItem = "";
let globalRecommendationItem = "";
let globalReferenceItem = "";

let optionList = document.getElementById("optionList");

optionArray.forEach((option) => {
  option.addEventListener("click", () => {
    if (!chosenOptionArray.includes(option.text)) {
      chosenOptionArray.push(option.text);

      updateOptionList();
      console.log(chosenOptionArray);
    } else {
      let optionToRemove = chosenOptionArray.find((e) => option.text == e);
      let index = chosenOptionArray.indexOf(optionToRemove);

      chosenOptionArray.splice(index, 1);

      updateOptionList();
      console.log(chosenOptionArray);
    }
  });
});

modeOptionArray.forEach((modeOption) => {
  modeOption.addEventListener("click", () => {
    mode = modeOption.text;

    if (mode == "Ingen / tøm liste") {
      tableDataArray.forEach((tableData) => {
        tableData.style.fontWeight = "Normal";
        tableData.style.fontStyle = "Normal";
        tableData.style.backgroundColor = "rgb(207, 205, 205)";
      });
    } else if ((mode = "Psykisk utviklingshemming")) {
      tableDataArray.forEach((tableData) => {
        tableData.style.fontWeight = "Normal";
        tableData.style.fontStyle = "Normal";
        tableData.style.backgroundColor = "rgb(207, 205, 205)";
      });

      for (let index = 0; index < puMode.pri1domains.length; index++) {
        let tempDomain = puMode.pri1domains[index];

        dataArray.forEach((data) => {
          if (data.header == tempDomain) {
            let tableDataElement = document.getElementById(data.id);

            tableDataElement.style.fontWeight = "bold";
            tableDataElement.style.backgroundColor = "rgb(110, 144, 137)";
          }
        });
      }

      for (let index = 0; index < puMode.pri2domains.length; index++) {
        let tempDomain = puMode.pri2domains[index];

        dataArray.forEach((data) => {
          if (data.header == tempDomain) {
            let tableDataElement = document.getElementById(data.id);
            tableDataElement.style.fontStyle = "italic";
            tableDataElement.style.backgroundColor = "rgb(110, 144, 137)";
          }
        });
      }
    }
  });
});

manualOptionArray.forEach((manualOption) => {
  manualOption.addEventListener("click", () => {
    manualChoice = manualOption.text;
  });
});

function updateOptionList() {
  while (optionList.firstChild) {
    optionList.removeChild(optionList.firstChild);
  }
  for (let i = 0; i < chosenOptionArray.length; i++) {
    let optionText = chosenOptionArray[i];

    let li = document.createElement("li");
    let div = document.createElement("div");
    div.innerText = "X";
    div.style.float = "right";
    div.style.fontWeight = "bold";
    div.addEventListener("click", () => {
      let optionToRemove = chosenOptionArray.find((e) => optionText == e);
      let index = chosenOptionArray.indexOf(optionToRemove);

      chosenOptionArray.splice(index, 1);

      updateOptionList();
      console.log(chosenOptionArray);
    });

    li.innerText = optionText;
    li.appendChild(div);

    optionList.appendChild(li);
  }
}

tableHeaderArray.forEach((tableHeader) => {
  tableHeader.addEventListener("mouseover", () => {
    let dataHeader = headerArray.find((header) => header.id == tableHeader.id);
    descriptionHeader.innerHTML = dataHeader.header;
    descriptionText.innerHTML = dataHeader.description;

    globalPhraseItem = dataHeader.phrases;
    globalRecommendationItem = dataHeader.recommendations;
    globalReferenceItem = dataHeader.references;
  });
});

tableDataArray.forEach((tableData) => {
  let hide = true;

  tableData.addEventListener("mouseover", () => {
    let data = dataArray.find((data) => data.id == tableData.id);
    descriptionHeader.innerHTML = data.header;
    descriptionText.innerHTML = data.description;

    globalPhraseItem = data.phrases;
    globalRecommendationItem = data.recommendations;
    globalReferenceItem = data.references;
  });

  tableData.addEventListener("click", () => {
    let tempSelect = "select-" + tableData.id;

    if (hide) {
      document.getElementById(tempSelect).classList.remove("hide");
      hide = false;
    } else {
      document.getElementById(tempSelect).classList.add("hide");
      hide = true;
    }
  });
});

optionSummaryButton.addEventListener("click", () => {
  localStorage.clear();
  for (let index = 0; index < chosenOptionArray.length; index++) {
    localStorage.setItem(index, chosenOptionArray[index]);
  }
});

modeButton.addEventListener("click", () => {
  if (mode == "Ingen / tøm liste") {
    for (let index = 0; index <= chosenOptionArray.length; index++) {
      chosenOptionArray.pop();
      console.log(chosenOptionArray);
    }
    updateOptionList();
    console.log("Testliste tømt.");
  } else if (mode == "Psykisk utviklingshemming") {
    for (let index = 0; index < puMode.tests.length; index++) {
      if (!chosenOptionArray.includes(puMode.tests[index])) {
        chosenOptionArray.push(puMode.tests[index]);
      }
    }

    updateOptionList();
  }
});

manualButton.addEventListener("click", () => {
  if (manualChoice == "Ingen / tøm liste") {
    for (let index = 0; index <= chosenOptionArray.length; index++) {
      chosenOptionArray.pop();
    }
    updateOptionList();
    console.log("Testliste tømt.");
  } else {
    chosenOptionArray.push(manualChoice);
    updateOptionList();
  }
});

manualOptionArray.forEach((manualOption) => {
  manualOption.addEventListener("click", () => {
    if (manualOption.text == "Ingen") {
      tableDataArray.forEach((tableData) => {
        tableData.style.fontWeight = "Normal";
        tableData.style.fontStyle = "Normal";
        tableData.style.backgroundColor = "rgb(207, 205, 205)";
      });
    }
    tableDataArray.forEach((tableData) => {
      tableData.style.fontWeight = "Normal";
      tableData.style.fontStyle = "Normal";
      tableData.style.backgroundColor = "rgb(207, 205, 205)";
    });

    dataArray.forEach((data) => {
      if (data.tests.includes(manualOption.text)) {
        let tempId = data.id;
        let tableDataElement = document.getElementById(tempId);

        tableDataElement.style.fontWeight = "bold";
        tableDataElement.style.backgroundColor = "rgb(225, 199, 152)";
      }
    });
  });
});

phraseButton.addEventListener("click", () => {
  descriptionText.innerHTML = globalPhraseItem;
});

recommendationButton.addEventListener("click", () => {
  descriptionText.innerHTML = globalRecommendationItem;
});

referenceButton.addEventListener("click", () => {
  descriptionText.innerHTML = globalReferenceItem;
});
