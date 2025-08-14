/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

/* Navigation */
header {
    background: linear-gradient(to right, #6a11cb, #2575fc);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    color: white;
}
nav h1 {
    margin: 0;
}
nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
}
nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: 0.3s;
}
nav ul li a:hover {
    color: #ffda79;
}

/* Hero */
.hero {
    text-align: center;
    padding: 20px;
}
.hero-img {
    max-width: 80%;
    height: auto;
    border-radius: 10px;
}

/* Typing Animation */
.typing-text {
    font-size: 2rem;
    text-align: center;
    margin-top: 20px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid #333;
    width: 0;
    animation: typing 3s steps(20) forwards, blink 0.6s infinite step-end alternate;
}
.typing-text span {
    color: #2575fc;
    font-weight: bold;
}
@keyframes typing {
    from { width: 0 }
    to { width: 14ch }
}
@keyframes blink {
    50% { border-color: transparent }
}
.intro p {
    text-align: center;
}

/* About */
.about {
    background: white;
    padding: 40px;
    text-align: center;
}

/* Projects */
.projects {
    padding: 40px;
    background: #eef1f7;
    text-align: center;
}
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}
.project-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}
.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
.card-content {
    padding: 15px;
}
.card-footer {
    background: #2575fc;
    color: white;
    padding: 10px;
}

/* Contact */
.contact {
    padding: 40px;
    background: white;
    text-align: center;
}
.social-links a {
    margin: 0 10px;
    font-size: 1.5rem;
    color: #2575fc;
    transition: 0.3s;
}
.social-links a:hover {
    color: #6a11cb;
}

/* Footer */
footer {
    background: #2575fc;
    color: white;
    text-align: center;
    padding: 15px;
}
.footer-links a {
    color: #ffda79;
    text-decoration: none;
    margin: 0 5px;
}
.footer-links a:hover {
    text-decoration: underline;
}
