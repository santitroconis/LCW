const body = document.getElementById('body');
let container = document.createElement('div'); 
let tab_box = document.createElement('div');
let content_box = document.createElement('div');
let line = document.createElement('div');

container.classList.add('container');
// container.innerHTML = `<h2></h2>`;
all.appendChild(container);

tab_box.classList.add('tab_box');
container.appendChild(tab_box);

content_box.classList.add('content_box');
container.appendChild(content_box);

line.classList.add('line', 'active');
tab_box.appendChild(line);

class Tab{
    constructor(buttonName, pageTitle, contentText, active = false) {
        this.buttonName = buttonName;
        this.pageTitle = pageTitle;
        this.contentText = contentText;
        this.active = active;
    }

    createTab() {

        //Creando el 'button' (tab_btn) dandole las propiedades CSS, asignando texto e insertando
        const tab_btn = document.createElement("button");
        tab_btn.classList.add('tab_btn');
        tab_btn.innerText = this.buttonName;
        tab_box.appendChild(tab_btn);

        //Creando el 'div' (content) dandole las propiedades CSS, asignando texto e insertando
        const content = document.createElement("div");
        content.classList.add('content');
        content.innerHTML = `<h2>${this.pageTitle}</h2><p>${this.contentText}</p>`;
        content_box.appendChild(content);
    
        if (this.active) {
            content.style.display = "block"; 
            tab_btn.classList.add("active");
            line.classList.add("active");
        }
    }
}
//Creando una nueva pestaña
const tab1 = new Tab("Pestaña 1", "Título de la Pestaña 1", "Contenido de la Pestaña 1", true);
tab1.createTab();

const tab2 = new Tab("Pestaña 2", "Título de la Pestaña 2", "Contenido de la Pestaña 2");
tab2.createTab();



const tabs=document.querySelectorAll('.tab_btn');

        const all_content = document.querySelectorAll('.content');
    
        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', (e)=>{
                tabs.forEach(tab=>{tab.classList.remove('active')});
                tab.classList.add('active');

                var line = document.querySelector('.line');
                line.style.width = e.target.offsetWidth + "px";
                line.style.left = e.target.offsetLeft + "px";
                line.classList.add('active');

                all_content.forEach(content=>{content.classList.remove('active')});
                all_content[index].classList.add('active');
            });
        });


