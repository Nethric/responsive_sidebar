function active(){
    document.getElementById("sidebar").classList.toggle("active")
    
    
    if(document.getElementById("sidebar").classList.contains("active")===true){
        setTimeout(() => {
            document.getElementById("sidebar").classList.toggle("cent-cont")
            document.querySelector(".main_tittle").classList.toggle("x")
            var span_text = document.querySelectorAll(".span-text")
            span_text.forEach(function(text){
                text.classList.toggle("x")
            })
            console.log("1")
        }, 130)
    }else{
        document.getElementById("sidebar").classList.toggle("cent-cont")
        setTimeout(() => {
            document.querySelector(".main_tittle").classList.toggle("x")
            var span_text = document.querySelectorAll(".span-text")
            span_text.forEach(function(text){
                text.classList.toggle("x")
            })
            console.log("1")
        }, 100)
    }
}
function test(){
    if(document.getElementById("sidebar").classList.contains("active")===true){
        setTimeout(() => {
            document.querySelector(".main_tittle").classList.toggle("x")
            var spans = document.querySelectorAll(".span-text")
            spans.forEach(function(span){
                span.classList.toggle("x")
            })
            console.log("2")    
        }, 130)
    }else{
        document.querySelector(".main_tittle").classList.toggle("x")
        var spans = document.querySelectorAll(".span-text")
            spans.forEach(function(span){
                span.classList.toggle("x")
            })
        setTimeout(() => {
            console.log("1")    
        }, 100)
    }
    document.getElementById("sidebar").classList.toggle("active")
    document.querySelector(".content").classList.toggle("alt")
}