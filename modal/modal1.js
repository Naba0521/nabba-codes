const form = document.querySelector("form");
const titleInput = document.querySelector("input");
const descriptionInput = document.querySelector("textarea");

const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal-container");
const rankSelect = document.querySelector("#rank");
const chooseInput = document.querySelector("#choose");
const checkboxInput = document.querySelector(".checkbox");
const numberInprogressInput = document.querySelector(".number-inprogress");
const numberTodoInput = document.querySelector(".number-todo");
const numberDoneInput = document.querySelector(".number-done");
const numberBlockInput = document.querySelector(".number-block");



let index = 0;

openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});
//cardTemplate card dotorh utguudiig orj ogj baigaaa. zaaj ogson utguud newdata-aas utguudiig 
//shinechlej awch bga utguud gej bodjiinaa
const cardTemplate = (title, description, id, rank, choose) => {
    return `
    <div class="card">
      <input class="checkbox" ${choose === "Done" ? "checked" : ""} type="checkbox" id="${id}" onchange="switchItem(${id})">
      <div>
        <h1 style="">${title}</h1>
        <p>${description}</p>
        <div>Rank: ${rank}</div>
      </div>
      <div onclick="deleteItem(${id})">
        <i class="fa-solid fa-trash" style="color: #ce1c1c; cursor: pointer;"></i>
      </div>
    </div>
  `;
};

// const cards = document.querySelector(".cards");
const todocard = document.querySelector("#todo");
const inprogresscard = document.querySelector("#inprogress");
const donecard = document.querySelector("#done");
const blockcard = document.querySelector("#block");

// State
let data = [];


// Set State
const setData = (arr) => {
    data = arr;
    sortData();
    render();

};

const sortData = () => {
    data.sort((a, b) => {
        const rankOrder = { "High": 3, "Medium": 2, "Low": 1 };
        return rankOrder[b.rank] - rankOrder[a.rank];
    });
}
// Render
const render = () => {
    todocard.innerHTML = "";
    inprogresscard.innerHTML = "";
    donecard.innerHTML = "";
    blockcard.innerHTML = "";

    numberTodoInput.innerHTML = "0";
    numberInprogressInput.innerHTML = "0";
    numberDoneInput.innerHTML = "0";
    numberBlockInput.innerHTML = "0";

    data.forEach((item) => {
        if (item.choose === "To do") {
            numberTodoInput.innerHTML++;
            console.log(numberTodoInput.innerHTML)
            todocard.innerHTML += cardTemplate(item.title, item.description, item.id, item.rank, item.choose);
        } else if (item.choose === "In Progress") {
            numberInprogressInput.innerHTML++;
            inprogresscard.innerHTML += cardTemplate(item.title, item.description, item.id, item.rank, item.choose);
        } else if (item.choose === "Done") {
            numberDoneInput.innerHTML++;
            console.log("numbesasd", numberDoneInput.innerHTML)
            donecard.innerHTML += cardTemplate(item.title, item.description, item.id, item.rank, item.choose);
        } else if (item.choose === "Block") {
            numberBlockInput.innerHTML++;
            blockcard.innerHTML += cardTemplate(item.title, item.description, item.id, item.rank, item.choose);
        }

    });
};



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const description = descriptionInput.value;
    const rank = rankSelect.value;
    const choose = chooseInput.value;


    const newData = [
        ...data,
        {
            id: index,
            title: title,
            description: description,
            rank: rank,
            choose: choose,
        },
    ];

    index++;

    setData(newData);

    modal.classList.remove("open");
});


const deleteItem = (id) => {
    const newData = [...data].filter((item) => item.id !== id);
    setData(newData);
};

const switchItem = (id) => {
    const newData = data.map((item) => {

        if (item.id === id) {
            return { ...item, choose: "Done", }
        }
        return item;
    })
    setData(newData)
};

render();
