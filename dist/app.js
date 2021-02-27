//^ Yellow comments extra items not really needed in the final version, just for educational purposes
//imports
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
//variables
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list tempalte instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
//^ If we create a new instance of invoice and store it here we can, because invoice implements HasFormatter interface, same with invoice 
//^ we make sure that whatever objects are stored in these two variable, implement the HasFormatter
let docOne;
let docTwo;
//^ we can implement this list with both of these variables because they both implement the HasFormatter interface  
//^ let docs: HasFormatter[] = [];
//^ docs.push(docOne)
//^ docs.push(docTwo)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
