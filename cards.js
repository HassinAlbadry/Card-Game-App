  
   let imgsArray=["./bunny.jpg","./elephent.jpg","./lion.png"];           //array that holds our imgs
	 let random1 = imgsArray[Math.floor(Math.random() * imgsArray.length)]; //using js functions to choose a random image from our array
	 let random2 = imgsArray[Math.floor(Math.random() * imgsArray.length)]; //same for image2 
	 let random3 = imgsArray[Math.floor(Math.random() * imgsArray.length)]; //same for image3
   let random4 = imgsArray[Math.floor(Math.random() * imgsArray.length)]; //same for image4 
   let random5 = imgsArray[Math.floor(Math.random() * imgsArray.length)]; //same for image5 
   let random6 = imgsArray[Math.floor(Math.random() * imgsArray.length)]; //same for image6 
   let score = 0;           //var to store our winning scores
   let failedAttempts=0;    //var to store our losses 
   let selectedImgsSrc=[];  //an array to store our image source to use later to determine result  
   let selectedImgsId=[];   // an array to store image ids to use later to remove images from screen after win or loss alerted 
     
// Main function to get id element, assign images to ids from random, and save into our arrays.
	function flip(imgNumber){

		if(imgNumber=='image1'){
	        let image1=document.getElementById("image1");        //get element by id
	        image1.src= random1;                                 //assign random to our image source
	        image1.style.display="block";
          selectedImgsSrc.push(image1.src);                    //push image source to our array to use later in comparison
          selectedImgsId.push("image1");                       //push image id to array to use later to disable images from screen after win or loss

    }
        if(imgNumber=='image2'){                                
	        let image2=document.getElementById("image2");       // same process for second image
	       	image2.src= random2;
	        image2.style.display="block";
	        selectedImgsSrc.push(image2.src);
          selectedImgsId.push("image2");
        }


        if(imgNumber=='image3'){
	        let image3=document.getElementById("image3");      //same process for third image
	       	image3.src= random3;
	        image3.style.display="block";
          selectedImgsSrc.push(image3.src);
          selectedImgsId.push("image3");
        }

        if(imgNumber=='image4'){ 
          let image4=document.getElementById("image4");     //same process for fourth image
          image4.src= random4;
          image4.style.display="block";
          selectedImgsSrc.push(image4.src);
          selectedImgsId.push("image4");
        }


        if(imgNumber=='image5'){
          let image5=document.getElementById("image5");     //same process for fifth image
          image5.src= random5;
          image5.style.display="block";
          selectedImgsSrc.push(image5.src);
          selectedImgsId.push("image5");
        }



        if(imgNumber=='image6'){
          let image6=document.getElementById("image6");     //same process for sixth image
          image6.src= random6;
          image6.style.display="block";
          selectedImgsSrc.push(image6.src);
          selectedImgsId.push("image6");
        }

 
  if(selectedImgsSrc.length==2 ){                           // checking our array length if it has 2 items then our generate function will be called
  	generateResult();
  }


	}

// our function to determine result 
	function generateResult(){
        
       // compared our array element which has image source if true then alert "won!" 
        if(selectedImgsSrc[0]==selectedImgsSrc[1] && selectedImgsId[0]!=selectedImgsId[1]){         

        	setTimeout(function(){ alert("won!"); }, 500);
        	score++; // add score by one                              

        	setTimeout(function(){ document.getElementById("score").innerHTML="Score:"+" "+score;  // update score on screen

          document.getElementById(selectedImgsId[0]).style.display="none";      //set first image to dissappear after alerting won 
          document.getElementById(selectedImgsId[1]).style.display="none";      //set second image to dissappear after alerting won
          selectedImgsId=[]     //reset our image id array for next use           
   			  selectedImgsSrc=[];   // reset our images source array for next use
		      }, 1000);
            

        }

 		

    // if lost
        else if(selectedImgsId[0]!=selectedImgsId[1]){
        	setTimeout(function(){ alert("lost!"); }, 500);
        	failedAttempts++; // increase failed attempts by one

        	setTimeout(function(){document.getElementById("failedAttempts").innerHTML="Failed Attempts"+" "+failedAttempts; // update failed attempts on screen
        	document.getElementById(selectedImgsId[0]).style.display="none";   //set div id to none after finishing for first image
          document.getElementById(selectedImgsId[1]).style.display="none";    //set div id to none after finishing for second image
          selectedImgsId=[]; //reset array ids 
	 		    selectedImgsSrc=[]; // reset img source array
	 		  }, 1000);
        	 

      }

      //reassign randoms to generate different images

      random1 = imgsArray[Math.floor(Math.random() * imgsArray.length)];
	    random2 = imgsArray[Math.floor(Math.random() * imgsArray.length)];
      random3 = imgsArray[Math.floor(Math.random() * imgsArray.length)];
      random4 = imgsArray[Math.floor(Math.random() * imgsArray.length)];
      random5 = imgsArray[Math.floor(Math.random() * imgsArray.length)];
      random6 = imgsArray[Math.floor(Math.random() * imgsArray.length)];

	
}
	