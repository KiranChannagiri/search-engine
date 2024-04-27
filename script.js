let inputbox = document.querySelector("#inputbox");
let boxes = document.querySelectorAll(".boxes");
let compnames = document.querySelectorAll(".compnames");
inputbox.addEventListener("input", () => {
    var inputcomoany = inputbox.value.toLowerCase();
    boxes.forEach((box,index)=>
    {

        let car = compnames[index].textContent.toLowerCase();
        if(car.includes(inputcomoany))
        {
            box.classList.remove("opacityzero");
        }
        else 
        {
            box.classList.add("opacityzero");
        }
    })
});




