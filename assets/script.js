function toggleSection(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'path_to_your_resume.pdf'; // Add the correct PDF file path here.
    link.download = 'Shubham_Soni_Resume.pdf';
    link.click();
}
