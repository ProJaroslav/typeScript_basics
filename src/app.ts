//^ Yellow comments extra items not really needed in the final version, just for educational purposes

//imports
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


//variables
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


//list tempalte instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);


//^ If we create a new instance of invoice and store it here we can, because invoice implements HasFormatter interface, same with invoice 
//^ we make sure that whatever objects are stored in these two variable, implement the HasFormatter
let docOne: HasFormatter;
let docTwo: HasFormatter;


//^ we can implement this list with both of these variables because they both implement the HasFormatter interface  
//^ let docs: HasFormatter[] = [];
//^ docs.push(docOne)
//^ docs.push(docTwo)


form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, "end");
});


