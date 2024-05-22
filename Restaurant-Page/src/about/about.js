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

   const textBoxAbout = document.createElement('div');
   textBoxAbout.classList.add('text-box-about');
   outerBox.appendChild(textBoxAbout);
   textBoxAbout.innerHTML = `
   <div class="text">
      <h2 class="title-text">2014, LOWER MAINLAND</h2>
      <p class="text-p">Proin lacinia purus id faucibus iaculis. Nullam ultricies, eros eget cursus porttitor, sem neque blandit tellus, eu consectetur orci ipsum vel libero. Duis consequat libero purus, sit amet facilisis purus hendrerit et. Fusce id arcu suscipit, aliquet mauris ac, interdum elit. Morbi lacus nulla, volutpat ut metus lacinia</p>
      <h2 class="title-text">2017, VANCOUVER</h2>
      <p class="text-p">. Quisque aliquam quam sed libero dignissim volutpat. Pellentesque hendrerit ex vel posuere faucibus. Aenean vitae magna faucibus metus auctor rutrum. Phasellus elementum in libero at congue. Fusce lectus arcu, lacinia et velit in, ornare ullamcorper purus. Suspendisse id aliquam neque.</p>
      <h2 class="title-text">2019, DAVIE VILLAGE</h2>
      <p class="text-p">Nulla consequat elit eu sagittis consectetur. Duis sit amet elit non orci vehicula euismod eget a risus. Cras arcu nisl, convallis ut gravida et, lacinia non erat. Etiam nulla magna, gravida in scelerisque a, congue at purus. Aliquam facilisis eros sed mi eleifend, eu varius turpis tincidunt. </p>
   </div>`;

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
         <h1 class="form-title">Contact Us</h3>
         <div class="form-group-one">
            <input type="text" id="name" class="name-form" required placeholder="Your Name">
            <input type="email" id="email" class="email-form" name="Your email" required placeholder="Email">
         </div>

         <div class="form-group-two">
            <input type="number" id="name" maxlength="10" class="phone-form" name="name" required placeholder="Phone Number">
            <input type="text" id="subject" class="subject-form" name="subject" placeholder="Subject of your message">
         </div>

         <textarea id="message" class="message-form" name="message" placeholder="Your message"></textarea>

         <div class="button-container">
            <button type="submit">Submit</button>
         </div>
      </form>
   </div>`;
   
}

export  default aboutPage;