let staRS = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river5 = document.getElementById("river5")
let boat6 = document.getElementById("boat6")
let moo_rext = document.getElementById("moo_rext")


window.onscroll = function(){
    let value = scrollY;
    staRS.style.left = value + "px";
    moon.style.top = value *4 + "px";
    mountains3.style.top = value *1.5 + "px"
    mountains4.style.top = value * 2 + "px"
    river5.style.top = value + "px"
    moo_rext.style.fontSize = value + "px"
    if(scrollY >= 70){
            moo_rext.style.fontSize = 70 + "px"
               moo_rext.style.position = "fixed"
               if(scrollY >= 343.3){
                     moo_rext.style.display = "none"
               }else{
                  moo_rext.style.display = "block"
               }

               if(scrollY>=130){
                document.querySelector(".main").style.background ="linear-gradient(#376281,#10001f)"
               }else{
                document.querySelector(".main").style.background = " linear-gradient(    #200016, transparent)" ;
            }
               
    }


    let value2 = scrollY;
    boat6.style.left = value2 * 2  + "px"




}


