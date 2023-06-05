let NumberOfTree = document.getElementById('treeno');
       let Name = document.getElementById('name');
       let paragraph = document.getElementById('number');
       let credit = document.getElementById('credit');

    // For random images
        let images = ["https://i.pinimg.com/originals/54/31/3f/54313f603114ee4fdb479268e8f18637.gif","https://upload.wikimedia.org/wikipedia/te/8/8e/Plant-1.gif","https://i.pinimg.com/originals/2e/fb/90/2efb90c0b69884f2a69e67bdf4d6bff7.gif","https://www.animatedimages.org/data/media/595/animated-plant-image-0075.gif"]
        let imagesLenght = images.length;
        let randomNumber = Math.random();
        randomNumber = randomNumber*imagesLenght;
        randomNumber = Math.floor(randomNumber);
        let choosenImage = images[randomNumber];
        

       function plant() {
           InputDiv = document.getElementById('inpNumber');
           if (Name.value == '' || NumberOfTree.value == '') {
               alert('Please enter Name and Number of Tree');
           }else  if(NumberOfTree.value > 50) {
            alert("You are allow for plant only 50 trees")
           }else {
               InputDiv.style.display = "none";
               credit.style.display = "block";
           }
           paragraph.innerHTML = Name.value + ' planted ' + NumberOfTree.value + ' trees';

           //for loop for no of tree a/c to user input
               for (let i = 1; i<=NumberOfTree.value; i++) {
               const MainDiv = document.getElementById('main');
               const plant = document.createElement('div');
       plant.classList.add('plant');

       const img = document.createElement('img');
       img.src = choosenImage;
       plant.appendChild(img);
       MainDiv.appendChild(plant);
      }

       }