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

   const formDiv = document.createElement('div');
   formDiv.classList.add('form-div-about');
   outerBox.appendChild(formDiv);
   formDiv.innerHTML = `
   <div class="form">
      <form action="">
         <label for="name">Name</label>
         <input type="text" id="name" class="name-form" required placeholder="Name">

         <label for="email">Email</label>
         <input type="email" id="email" class="email-form" name="email" required placeholder="Email">

         <label for="name">Phone number</label>
         <input type="number" id="name" maxlength="10" class="phone-form" name="name" required placeholder="Phone Number">

         <label for="subject">What are you getting in touch about?</label>
         <input type="text" id="subject" class="subject-form" name="subject" placeholder="Subject of your message">

         <label for="message">Your Message</label>
         <textarea id="message" class="message-form" name="message" placeholder="Your message"></textarea>

         <div class="button-container">
            <button type="submit">Send</button>
         </div>
      </form>
   </div>`;
   
}

export  default aboutPage;