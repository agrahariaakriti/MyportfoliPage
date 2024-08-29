let name2="  AAKRITI AGRAHARI";
let old_string=document.querySelector("#dynamic-span");
let index=1;
let typing=()=>
{
let new_string=name2.slice(0,index);
old_string.innerText=new_string;
if(index==name2.length)
  index=1;
else
index++;  
setTimeout(handle=()=>typing(),250);
}
typing();


let skills=['Java','C','HTML','CSS','JavaScript','SQL','reactJs','DSA'];
let img=['java.png','c.png','html.png','css.png','js.png','sql.jpeg','react.png','dsa.png']
let i=0;
function mySkill()
{
    console.log("hello");
  if(i!=skills.length)
{    let skillBlock=document.querySelector(".Skill-block");
    skillBlock.innerHTML+=`<div id="skill-border"><div id="skill-img"><div class="skill-image"><img src="${img[i]}" height='100px' width="100px" class="skill-image"></div><div id="skill-item">${skills[i]}</div ></div></div>`
    i++;
}
}

function btech()
{
  let content=document.querySelector("#content");
  content.innerText="Hello im pursuing my Bachelor of technology in Information Technology from United College Of Engineering And Reasearch (UCER) which is affiliated to AKTU. ";
}
function HighSchool()
{
  let content=document.querySelector("#content");
  content.innerText= "I am pleased to announce that I have completed my schooling from Ewing christein Public School, achieving a score of 77.6% in my 10th board exams. This milestone represents the effort and perseverance I've invested in my studies.";
}
function Intermidiate()
{
  let content=document.querySelector("#content");
  content.innerText="I am proud to share that I have successfully completed my schooling from Ewing christein Public School, achieving a commendable score of 85.3%. This accomplishment reflects my dedication, hard work, and the strong support system provided by my teachers and family. "}

function myContact()
{console.log("click");
  let display=document.querySelector("#phone-case");
  display.innerHTML=`<span id="camera"></span>
<div id="image-about"><div id="image-contact"> </div><div id="about-contact"><p id="para" class ="paragraph"><h3 id="heading">Hello  , im aakriti agrahari .If you want to contact with me then double click on the button... Feel free to get in touch.</p></div></div>`
}
function myContact2()
{
console.log("hello");


  let display1=document.querySelector("#phone-case");
   display1.innerHTML=`<span id="camera"></span><div id="heading-contact"><h1>Contact Me...</h1>
  </div>
    <div id="phone-contact">
      <a href="#" id="call-id" >
        <span id="call-icon"><i class="fa-sharp fa-solid fa-square-phone"></i>
        </span>
        <span>9792705423</span>
      </a>
    </div>
 
    <div  id="online-contact">
    <!-- Intagram -->
    <a href="www.instagram.com" class="contact" id="Inta">
      <i class="fa-brands fa-instagram"></i>
    </a>

    <!-- linkedIn -->
    <a href="#" class="contact" id="linkedin"><i class="fa-brands fa-linkedin"></i></a>
   
    <!-- email -->
   
    <a href="aakritiagrahari1@gmail.com" class="contact" id="email">
      <i class="fa-regular fa-envelope"></i></a>

   <!--gitHub -->
    <a href="github.com" class="contact" id="github"><i class="fa-brands fa-github"></i></a>
  </div>
</div>`;
}

// let phoneButton=document.querySelector("#phone-button");
// let old_string2=document.querySelector(".paragraph");
// console.log(old_string2.innerText);
// let new_String2="byeee aaakriti ";
// let i2=1;

// const typing2=()=>
// {
// let s2=new_String2.slice(0,i2);
// old_string2.innerText=s2;
// i2++;
// setTimeout(handle=()=>typing2(),3000);
// }
// phoneButton.addEventListener('click',()=>{typing2();});

