document.addEventListener("DOMContentLoaded", function () {
    var button1 = document.getElementById("b1");
    var button2 = document.getElementById("b2");
    var button3 = document.getElementById("b3");
    var button4 = document.getElementById("b4");
    var generateButton = document.getElementById("generate-btn");
    var downloadPdfButton = document.getElementById('download-pdf');
    var shareableLinkContainer = document.getElementById("shareable-link-container");
    var shareableLinkElement = document.getElementById('shareable-link');
    var resumeDiv = document.getElementById("resume-output");
    var isText1Visible = false;
    var isText2Visible = false;
    var isText3Visible = false;
    var isText4Visible = false;
    button1.addEventListener("click", function () {
        var text1 = document.getElementById("work1");
        if (isText1Visible) {
            text1.innerHTML = "";
        }
        else {
            text1.innerHTML = '<h5>Objective</h5><input type="text" id="fill-obj" name="objective content" placeholder="Your Objective">';
        }
        isText1Visible = !isText1Visible;
    });
    button2.addEventListener("click", function () {
        var text2 = document.getElementById("work2");
        if (isText2Visible) {
            text2.innerHTML = "";
        }
        else {
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
    button3.addEventListener("click", function () {
        var text3 = document.getElementById("work3");
        if (isText3Visible) {
            text3.innerHTML = "";
        }
        else {
            text3.innerHTML =
                '<h5>Education</h5><input id="fill-education" type="text" name="education content" placeholder="Your Education">';
        }
        isText3Visible = !isText3Visible;
    });
    button4.addEventListener("click", function () {
        var text4 = document.getElementById("work4");
        if (isText4Visible) {
            text4.innerHTML = "";
        }
        else {
            text4.innerHTML =
                '<h5>Skills</h5><input id="fill-skills" type="text" name="skills content" placeholder="Your Skills">';
        }
        isText4Visible = !isText4Visible;
    });
    generateButton.addEventListener("click", function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var obj = ((_a = document.getElementById("fill-obj")) === null || _a === void 0 ? void 0 : _a.value) || '';
        var userName = ((_b = document.getElementById("fill-user-name")) === null || _b === void 0 ? void 0 : _b.value) || '';
        var name = ((_c = document.getElementById("fill-name")) === null || _c === void 0 ? void 0 : _c.value) || '';
        var nationality = ((_d = document.getElementById("fill-nat")) === null || _d === void 0 ? void 0 : _d.value) || '';
        var gmail = ((_e = document.getElementById("fill-gmail")) === null || _e === void 0 ? void 0 : _e.value) || '';
        var contact = ((_f = document.getElementById("fill-contact")) === null || _f === void 0 ? void 0 : _f.value) || '';
        var linkedin = ((_g = document.getElementById("fill-linkedin")) === null || _g === void 0 ? void 0 : _g.value) || '';
        var education = ((_h = document.getElementById("fill-education")) === null || _h === void 0 ? void 0 : _h.value) || '';
        var skills = ((_j = document.getElementById("fill-skills")) === null || _j === void 0 ? void 0 : _j.value) || '';
        if (!obj || !userName || !name || !nationality || !gmail || !contact || !linkedin || !education || !skills) {
            alert("Please fill in all fields before generating the resume.");
            return;
        }
        resumeDiv.innerHTML = "\n          <h2>Editable Resume</h2>\n          <h3>Objective</h3><p contenteditable=\"true\">".concat(obj, "</p>\n          <h3>Personal Information</h3>\n          <p>Name: <span contenteditable=\"true\">").concat(userName, "</span></p>\n          <p>Name: <span contenteditable=\"true\">").concat(name, "</span></p>\n          <p>Nationality: <span contenteditable=\"true\">").concat(nationality, "</span></p>\n          <p>Gmail: <span contenteditable=\"true\">").concat(gmail, "</span></p>\n          <p>Contact No: <span contenteditable=\"true\">").concat(contact, "</span></p>\n          <p>LinkedIn Profile: <span contenteditable=\"true\"><a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></span></p>\n          <h3>Education</h3><p contenteditable=\"true\">").concat(education, "</p>\n          <h3>Skills</h3><p contenteditable=\"true\">").concat(skills, "</p>\n      ");
        // Show the shareable link
        var shareableURL = "".concat(window.location.origin, "?userName=").concat(encodeURIComponent(userName));
        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
    });
    // downloadPdfButton.addEventListener('click', () => {
    //     import('jspdf').then(({ jsPDF }) => {
    //         const pdf = new jsPDF();
    //         pdf.text(resumeDiv.innerText, 10, 10);
    //         pdf.save('resume.pdf');
    //     }).catch(err => console.error('Error loading jsPDF:', err));
    // });
    downloadPdfButton.addEventListener('click', function () {
        Promise.resolve().then(function () { return require('jspdf'); }).then(function (_a) {
            var jsPDF = _a.jsPDF;
            var pdf = new jsPDF();
            var resumeContent = resumeDiv.innerHTML;
            pdf.html(resumeDiv, {
                callback: function (pdf) {
                    pdf.save('resume.pdf');
                },
                x: 10,
                y: 10,
                width: 190, // A4 page width - some margin
                windowWidth: 650, // this ensures rendering happens with a width similar to that of the page
            });
        }).catch(function (err) { return console.error('Error loading jsPDF:', err); });
    });
});
