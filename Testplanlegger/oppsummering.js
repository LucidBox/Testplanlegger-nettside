const summaryList = document.getElementById("summaryList");
const showDomainsButton = document.getElementById("showDomainsButton");
const domainsDescriptionButton = document.getElementById(
  "domainsDescriptionButton"
);

const options = { ...localStorage };
let summaryArray = [];

for (let key in options) {
  let value = options[key];
  summaryArray.push(value);
}

let allDomains = [];
let identifiedDomains = [];
let toggleAllDomains = true;

let toggleDomainDescriptions = false;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (toggleAllDomains) {
      updateSummaryList(allDomains);
    } else {
      updateSummaryList(identifiedDomains);
    }
  },
  false
);

function updateSummaryList(domainArray) {
  dataArray.forEach((domain) => {
    allDomains.push(domain.header);

    if (domainArray.includes(domain.header)) {
      let domainElement = document.createElement("div");
      let domainHeader = document.createElement("div");
      domainHeader.innerText = domain.header;
      domainHeader.classList.add("domainHeader");
      domainElement.appendChild(domainHeader);

      if (toggleDomainDescriptions) {
        let domainDescription = document.createElement("div");
        //description kan erstattes med "phrases"
        domainDescription.innerText = domain.description;
        domainDescription.classList.add("domainDescription");
        domainElement.appendChild(domainDescription);
      }

      let domainTests = document.createElement("ul");
      domainTests.classList.add("domainTests");

      domain.tests.forEach((test) => {
        if (summaryArray.includes(test)) {
          let identifiedTest = document.createElement("li");

          let testElement = document.createElement("div");
          let textDiv = document.createElement("div");
          textDiv.innerText = test;
          testElement.appendChild(textDiv);

          let scoreDiv = document.createElement("input");
          testElement.appendChild(scoreDiv);

          testElement.classList.add("testContainer");
          identifiedTest.appendChild(testElement);

          domainTests.appendChild(identifiedTest);

          if (!identifiedDomains.includes(domain.header)) {
            identifiedDomains.push(domain.header);
          }
        }
      });

      domainElement.appendChild(domainTests);
      summaryList.appendChild(domainElement);
    }
  });
}

showDomainsButton.addEventListener("click", toggleDomains);

function toggleDomains() {
  if (toggleAllDomains) {
    toggleAllDomains = false;
    while (summaryList.firstChild) {
      summaryList.removeChild(summaryList.firstChild);
    }
    updateSummaryList(identifiedDomains);
  } else {
    toggleAllDomains = true;
    while (summaryList.firstChild) {
      summaryList.removeChild(summaryList.firstChild);
    }
    updateSummaryList(allDomains);
  }
}

domainsDescriptionButton.addEventListener("click", () => {
  if (toggleDomainDescriptions) {
    toggleDomainDescriptions = false;
    toggleDomains();
  } else {
    toggleDomainDescriptions = true;
    toggleDomains();
  }
});
