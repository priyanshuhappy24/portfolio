// /* ============== Typed Animation ==================  */
// var Typed = new Typed(".typing",{
//     Strings:["Front-End Developer" ,"Web Developer","Coding Enthusiast","</>"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// })
// ================== Aside ================================= 
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList;i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            console.log(this)
        })

      }