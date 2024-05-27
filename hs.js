window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Squeeze header based on scroll position
    var squeezeFactor = 1 - (window.pageYOffset / (window.innerHeight + document.getElementById('sec2').offsetHeight));
    header.style.padding = (20 * squeezeFactor) + 'px';
});

function toggleSize() {
    var homeDiv = document.getElementById('sec1');
    homeDiv.classList.toggle('enlarged'); // Toggle the 'enlarged' class
}


document.querySelector('#scroll-down-arrow a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#content').scrollIntoView({
        behavior: 'smooth'
    });
});

function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}


function showDescription(topicId) {
    const descriptions = {
        1: "Participating and being a core member of a club demonstrates leadership skills and a commitment to extracurricular activities, making your higher studies application stand out. It shows that you can balance academics with other responsibilities, a trait highly valued by admissions committees. Active involvement in a club also provides practical experience in teamwork, project management, and problem-solving, which are essential skills for advanced studies. Additionally, it highlights your passion and dedication to specific interests, reflecting a well-rounded and motivated personality.",
        2: "Participating in NGOs and social activities showcases a commitment to community service and social responsibility, which are qualities esteemed by higher education institutions. It highlights your ability to empathize with diverse groups and work towards positive societal change, reflecting strong interpersonal and ethical values. Such involvement provides practical experience in addressing real-world issues, enhancing critical thinking and problem-solving skills. Additionally, it demonstrates your initiative and leadership potential, making your application more compelling and well-rounded.",
        3: "Participating in hackathons and developing high-quality projects highlights your practical skills and ability to apply theoretical knowledge in innovative ways, which is highly appealing to higher education institutions. It demonstrates your problem-solving capabilities, creativity, and technical expertise, showcasing your readiness for advanced academic challenges. Engaging in these activities also reflects your dedication to continuous learning and staying updated with industry trends. Additionally, winning or excelling in hackathons signifies your ability to compete and succeed in high-pressure environments, further strengthening your application.",
        4: "Having research papers and patents adds significant value to your higher studies application by demonstrating your ability to conduct original research and contribute to your field's body of knowledge. It showcases your commitment to academic excellence, critical thinking, and problem-solving skills. Publications and patents indicate your potential for innovation and capacity to produce work that has practical, real-world applications. Moreover, these achievements reflect your dedication, perseverance, and capability to manage complex projects, making you a strong candidate for advanced studies.",
        5: "Having internships adds value to your higher studies application by providing practical experience and a deeper understanding of your field, making your academic background more robust and relevant. It demonstrates your ability to apply theoretical knowledge in real-world settings, showcasing your readiness for advanced studies. Internships also highlight your professional skills, such as teamwork, communication, and problem-solving, which are essential for success in higher education. Additionally, they reflect your initiative, commitment to career development, and ability to balance multiple responsibilities, strengthening your overall application.",
        6: "A strong Statement of Purpose (SOP) adds significant value to your higher studies application by clearly articulating your academic goals, career aspirations, and the motivations behind your chosen field of study. It provides a personal narrative that distinguishes you from other applicants, highlighting your unique experiences, strengths, and qualifications. A well-crafted SOP demonstrates your communication skills, critical thinking, and ability to present a coherent and compelling argument. Additionally, it reflects your understanding of the program and how it aligns with your objectives, showcasing your enthusiasm and preparedness for advanced study.",
    };

    document.getElementById('descriptionText').textContent = descriptions[topicId];
}
    


// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Function to open the modal for graduate exams
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal for graduate exams
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Function to close the modal when clicking outside the modal content
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
