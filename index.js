const container=document.querySelector(".contain");
const btn=document.querySelectorAll(".btn");
const item=document.querySelectorAll(".item");

function search(){
    const myinput=document.getElementById("myinput").value.toUpperCase();
    const content=document.querySelector(".content");
    const item=document.querySelectorAll(".item");
    const list=content.getElementsByTagName("h1");
    console.log(myinput)
    for(var i=0; i< list.length; i++){
        let match=item[i].getElementsByTagName("h1")[0];
        if(match){
            if(match.innerHTML.toUpperCase().indexOf(myinput)>-1){
                item[i].style.display=""
            }else{
                item[i].style.display="none"
            }
            

        }
    }

}

container.addEventListener("click",()=>{
    btn.forEach((btns)=>{
        btns.addEventListener("click",(e)=>{
            const id=e.target.dataset.id;
            console.log(e.target.dataset.id);
            item.forEach((items)=>{
                if(id=="all"){
                    items.style.display="block";
                }else{
                    if(items.classList.contains(id)){
                        items.style.display="block";
                    }else{
                        items.style.display="none"
                    }
                }
            })
        })
    })

});

const data=[
   
    {
        id:"day",
        photo:"images/item-1.jpeg",
        title:"Day",
        price:"$10"
    },
    {
        id:"lunch",
        photo:"images/item-2.jpeg",
        title:"launch",
        price:"$10"
    },
    { id:"day",
        photo:"images/item-3.jpeg",
        title:"night",
        price:"$10"
    },
    {
        id:"lunch",
        photo:"images/item-4.jpeg",
        title:"biswadeb",
        price:"$10",

    }, 
    {
        id:"dinner",
        photo:"images/item-5.jpeg",
        title:"mohadeb",
        price:"$10"
    }, 
    {
        id:"day",
        photo:"images/item-6.jpeg",
        title:"sagar",
        price:"$10"
    },
     {
        id:"lunch",
        photo:"images/item-7.jpeg",
        title:"shadhan",
        price:"$10"
    } ,
    {
        id:"dinner",
        photo:"images/item-8.jpeg",
        title:"Onion",
        price:"$10"
    }
    
];
const content=document.querySelector(".content");
window.addEventListener("DOMContentLoaded",()=>{


    data.forEach((datas)=>{
        const createshow=document.createElement("div");
        const{id,photo,title,price}=datas;
        createshow.innerHTML=
        `
        <div class="content">
        <div class="item active ${id}" id="day">

                <img src="${photo}" alt="item1">
          
            <div class="title">
                <h1>${title}</h1>
                <span>${price}</span>
                
            </div>
        </div>
        </div>

        `;
       content.appendChild(createshow);
    })

});

const demo=document.querySelector(".demo");
const post=document.querySelector(".post");
var randomdata=[
    {
        data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quidem. Eos, esse. Natus, iure totam! Quia iure officiis similique, ullam ducimus dignissimos fuga nam sunt, optio inventore officia minus debitis."
    },
    {
        data:"hello"
    },
    {
        data:"biswadeb"

    }
]
var test=["hello","biswadeb","color","ritu"]
post.addEventListener("click",()=>{
    randomdata.forEach((ran)=>{
        const random=Math.floor(Math.random()*ran.length);
        demo.innerHTML=random;
    })
    
    
})
const range=document.querySelector("#range")
const value=document.querySelector(".ragtest");

value.textContent=range.value;
range.addEventListener("change",()=>{
    value.textContent=range.value;
})