// Load shared header and navigation
document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header>
            <h1>Felix M. Simon</h1>
            <h3>Research Fellow in AI, Information, and News | Reuters Institute | University of Oxford</h3>
        </header>
        <nav>
            <a href="index.html">Home</a>
            <a href="research.html">Research</a>
            <a href="publications.html">Publications</a>
            <a href="media.html">Media Coverage</a>
            <a href="biography.html">Biography</a>
            <a href="consulting.html">Consulting</a>
            <a href="contact.html">Contact</a>
        </nav>
    `;

    // Insert header at the beginning of body
    const firstElement = document.body.firstElementChild;
    if (firstElement) {
        firstElement.insertAdjacentHTML('beforebegin', headerHTML);
    }
});
