const facultyprojects = document.querySelectorAll(".card");
filterObjects("all");

function filterObjects(c){
    var x,i;
    x = document.getElementsByClassName("card");
    if (c == "all") c = "";
    for(i = 0; i < x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element, name){
    var i,arr1,arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

const search = document.getElementById("search");
const projectName = document.querySelectorAll(".card h4");
    
search.addEventListener("keyup", filterprojects);

    function filterprojects(e){
     const text = e.target.value.toLowerCase();
     projectName.forEach(function(project){
        const item = project.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1){
            project.parentElement.parentElement.style.display = "block"
        }else{
            project.parentElement.parentElement.style.display = "none"
        }
    })   
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
