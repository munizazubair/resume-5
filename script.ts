document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("b1") as HTMLButtonElement;
  const button2 = document.getElementById("b2") as HTMLButtonElement ;
  const button3 = document.getElementById("b3") as HTMLButtonElement;
  const button4 = document.getElementById("b4") as HTMLButtonElement;
  const generateButton = document.getElementById("generate-btn") as HTMLButtonElement;
  const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLButtonElement;
  const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
  const resumeDiv = document.getElementById("resume-output") as HTMLButtonElement;

  let isText1Visible = false;
  let isText2Visible = false;
  let isText3Visible = false;
  let isText4Visible = false;

  button1.addEventListener("click", () => {
      const text1 = document.getElementById("work1") as HTMLButtonElement;
      if (isText1Visible) {
          text1.innerHTML = "";
      } else {
          text1.innerHTML = '<h5>Objective</h5><input type="text" id="fill-obj" name="objective content" placeholder="Your Objective">';
      }
      isText1Visible = !isText1Visible;
  });

  button2.addEventListener("click", () => {
      const text2 = document.getElementById("work2") as HTMLButtonElement;
      if (isText2Visible) {
          text2.innerHTML = "";
      } else {
          text2.innerHTML =
              '<h5>UserName</h5><input id="fill-user-name" type="text" name="username content" placeholder="Your UserName">' +
              '<h5>Name</h5><input id="fill-name" type="text" name="name content" placeholder="Your Name">' +
              '<h5>Nationality</h5><input id="fill-nat" type="text" name="nationality content" placeholder="Your Nationality">' +
              '<h5>Gmail</h5><input id="fill-gmail" type="text" name="gmail content" placeholder="Your Gmail">' +
              '<h5>Contact No</h5><input id="fill-contact" type="text" name="contact no" placeholder="Your Contact Number">' +
              '<h5>LinkedIn Profile</h5><input id="fill-linkedin" type="url" name="linkedin url" placeholder="Paste Your LinkedIn URL">';
      }
      isText2Visible = !isText2Visible;
  });

  button3.addEventListener("click", () => {
      const text3 = document.getElementById("work3") as HTMLButtonElement;
      if (isText3Visible) {
          text3.innerHTML = "";
      } else {
          text3.innerHTML =
              '<h5>Education</h5><input id="fill-education" type="text" name="education content" placeholder="Your Education">';
      }
      isText3Visible = !isText3Visible;
  });

  button4.addEventListener("click", () => {
      const text4 = document.getElementById("work4") as HTMLButtonElement;
      if (isText4Visible) {
          text4.innerHTML = "";
      } else {
          text4.innerHTML =
              '<h5>Skills</h5><input id="fill-skills" type="text" name="skills content" placeholder="Your Skills">';
      }
      isText4Visible = !isText4Visible;
  });

  generateButton.addEventListener("click", () => {
      const obj = (document.getElementById("fill-obj") as HTMLInputElement)?.value || '';
      const userName = (document.getElementById("fill-user-name") as HTMLInputElement)?.value || '';
      const name = (document.getElementById("fill-name") as HTMLInputElement)?.value || '';
      const nationality = (document.getElementById("fill-nat") as HTMLInputElement)?.value || '';
      const gmail = (document.getElementById("fill-gmail") as HTMLInputElement)?.value || '';
      const contact = (document.getElementById("fill-contact") as HTMLInputElement)?.value || '';
      const linkedin = (document.getElementById("fill-linkedin") as HTMLInputElement)?.value || '';
      const education = (document.getElementById("fill-education") as HTMLInputElement)?.value || '';
      const skills = (document.getElementById("fill-skills") as HTMLInputElement)?.value || '';

      if (!obj || !userName || !name || !nationality || !gmail || !contact || !linkedin || !education || !skills) {
          alert("Please fill in all fields before generating the resume.");
          return;
      }

      resumeDiv.innerHTML = `
          <h2>Editable Resume</h2>
          <h3>Objective</h3><p contenteditable="true">${obj}</p>
          <h3>Personal Information</h3>
          <p>Name: <span contenteditable="true">${userName}</span></p>
          <p>Name: <span contenteditable="true">${name}</span></p>
          <p>Nationality: <span contenteditable="true">${nationality}</span></p>
          <p>Gmail: <span contenteditable="true">${gmail}</span></p>
          <p>Contact No: <span contenteditable="true">${contact}</span></p>
          <p>LinkedIn Profile: <span contenteditable="true"><a href="${linkedin}" target="_blank">${linkedin}</a></span></p>
          <h3>Education</h3><p contenteditable="true">${education}</p>
          <h3>Skills</h3><p contenteditable="true">${skills}</p>
      `;

      // Show the shareable link
      const shareableURL = `${window.location.origin}?userName=${encodeURIComponent(userName)}`;
      shareableLinkContainer.style.display = 'block';
      shareableLinkElement.href = shareableURL;
      shareableLinkElement.textContent = shareableURL;
  });
});
