import AboutPic from '../Assets/About-Restaurant.jpg'
function aboutPage(){
   const outerBox = document.createElement('div');
   outerBox.classList.add('outer-box-about');
   document.getElementById('content').appendChild(outerBox);

   const picBoxAbout = document.createElement('div');
   picBoxAbout.classList.add('pic-box-about');
   outerBox.appendChild(picBoxAbout);
   
   const picAbout = document.createElement('img');
   picAbout.classList.add('pic-about');
   picAbout.setAttribute('src', AboutPic);
   picBoxAbout.appendChild(picAbout);

   const textDiv = document.createElement('div');
   textDiv.classList.add('text-div-about');
   outerBox.appendChild(textDiv);
   
   textDiv.innerHTML =`
   <h2 class="feedback-title">FEEDBACK & OTHER INQUIRIES</h2>
   <p class="feedback-text">If you would like to share your experience with us or have other inquiries, Please fill out the form below. We'll get back to you as soon as possible</p>
   `;
   
}

export  default aboutPage;