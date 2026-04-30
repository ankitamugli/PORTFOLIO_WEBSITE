    
      let navbar = document.getElementById("navbar");
      navbar.style.display = "flex";
      navbar.style.justifyContent = "space-around";
      navbar.style.fontSize = "30px";
      navbar.style.height = "60px";
      navbar.style.border = "1px solid black";
      navbar.style.alignItems = "center";
      navbar.style.backgroundColor = "lightblue";
      let links = document.querySelectorAll("#anchor a");
      links.forEach((link) => {
        link.style.textDecoration = "none";
      });

      let text = document.getElementById("text");
      // text.style.textAlign="center"
      text.style.marginLeft = "240px";
      //
      let logos = document.getElementById("logos");
      // logos.style.display = "flex";
      logos.style.marginLeft = "235px";
      logos.style.gap = "10px";
      logos.style.fontSize = "25px";
      //
      let button = document.getElementById("button");
      // button.style.display = "flex";
      button.style.gap = "30px";
      button.style.marginLeft = "234px";
      button.style.fontSize = "30px";
      button.style.padding = "20px";
      button.style.color = "green";
      //

      let image = document.getElementById("image");
      image.style.display = "flex";
      image.style.height = "300px";
      image.style.width = "200px";
      image.style.padding= "50px";
      //
      let anchor=document.getElementById("anchor")
anchor.style.display="flex"
