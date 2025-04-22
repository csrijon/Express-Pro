document.addEventListener("DOMContentLoaded", () => {
    const fabicon = document.querySelector(".fab");
    console.log(fabicon);
  
    if (fabicon) {
      fabicon.addEventListener("click", () => {
        window.location.href = "/habit";  
      });
    } else {
      console.log("fabicon element not found!");
    }
  });
  