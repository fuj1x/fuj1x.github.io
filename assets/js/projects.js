$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/projects/fyp.png',
            link: 'http://eprints.utar.edu.my/4154/1/17ACB01924_FYP2.pdf',
            title: 'Final Year Project - A Pervasive Wi-Fi Authentication using Ethereum Blockchain',
            technologies: ['Blockchain', 'Ethereum', 'Raspberry Pi'],
            description: "A set of trusted access points using Raspberry Pi are connected using Ethereum blockchain to form a private chain. Theoritically, the authentication process is fully passive and only requires first-time logon. <br><br>★ Obtained 3rd prize in Jabil FICT UTAR FYP Competition. <br><br>★ The paper is refined by supervisor and planning to be published in IEEE and Springer using LaTeX.",
            categories: ['featured', 'project', 'networking', 'security']
        },
        {
            image: 'assets/images/projects/miniproject.png',
            title: 'Mini Project - IoT Smart Cities',
            technologies: ['WampServer', 'Raspberry Pi', 'MQTT'],
            description: "Mini Project assignment to develop an IoT system related to Smart Cities. Developed a Smart Drone monitoring system to monitor the condition of the drone and also track the parcel that the drone is going to deliver. WampServer is used to host the web app, retrieving the data from virtual Raspberry Pi and external API. MQTT protocol is used to send data to mobile phone, and also external application to send notification to the mobile phone and desktop.",
            categories: ['featured', 'project', 'networking']
        },
        {
            image: 'assets/images/projects/aws.jpg',
            title: 'IoT-Cloud solution',
            technologies: ['AWS'],
            description: "A distributed computing systems assignment to apply AWS cloud solutions on selected problem domain.<br> - AWS Amplify to host a web app for the problem domain which is Seamless Visitor Management System (SVMS). <br> - Amazon Cognito to authenticate the user using the web app. <br> - AWS AppSync integrated with Amazon DynamoDB to store the user input into the database.<br> - AWS Rekognition was also used to process the image of user using image recognition process to check whether the user is legit or not and store the infomation in Amazon S3 bucket.<br> - AWS IoT Core was also used to visualise the IoT tools connecting to the IoT Core and also retrieving data from the Amazon S3 bucket.",
            categories: ['featured','networking']
        },
        {
            image: 'assets/images/projects/mobile.png',
            link: 'https://drive.google.com/file/d/11E0-bKL3ACCLmLS0ygJyqIJjM7rFxIfO/view?usp=share_link',
            title: 'Healthcare Mobile Application',
            technologies: ['Android', 'Firebase'],
            description: "An android mobile game application related to healthcare. The game features four scenarios, whereby the user can click on anything in the room and it will lead to different outputs. If user click on certain objects multiple times, it might end the user's round or even unlock an achievement. If user performs good action throughout the rounds, he will be able to complete the game successfully. The feedback and news page is hosted using Firebase Database. <br><br>If you're brave you can try to download the apk on your android device, link below.",
            categories: ['featured', 'programming']
        },
        {
            image: 'assets/images/projects/airline.png',
            title: 'Airline Reservation System',
            technologies: ['C++'],
            description: "C++ language in command prompt view to allow user to make their flight ticket booking, search for the available flight slot and check for the membership details.",
            categories: ['programming']
        },
        {
            image: 'assets/images/projects/javacard.png',
            title: 'Java Card Game',
            technologies: ['Java'],
            description: "Card game with strict rules and allow user to interact using command line.",
            categories: ['programming']
        },
        {
            image: 'assets/images/projects/backtrack.png',
            title: 'Penetration Testing & Countermeasures',
            technologies: ['Kali Linux', 'BackTrack', 'Wireshark'],
            description: "Computer system and network security assignment to study more on penetration tools and platform for different types of attacks, mainly using Kali Linux.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/projects/datastruct.png',
            title: 'Linked Lists',
            technologies: ['C++'],
            description: "C++ language for data structures and algorithm problem solving assignment.",
            categories: ['programming']
        },
        {
            image: 'assets/images/projects/ipp.png',
            title: 'Internetworking Principles and Practices',
            technologies: ['Cisco Packet Tracer', 'GNS3'],
            description: "Using Cisco Packet Tracer and GNS3 to create a network to investigate the links that occur fragmentation.",
            categories: ['networking']
        },
        {
            image: 'assets/images/projects/interleaver.png',
            title: 'Channel Coding - Interleaver',
            technologies: ['C++', 'gnuplot'],
            description: "C++ language to implement encoder, decoder and interleaver, and using gnuplot to plot the results.",
            categories: ['programming']
        },
        {
            image: 'assets/images/projects/linuxos.png',
            title: 'Linux Administration',
            technologies: ['Linux', 'Shell Script'],
            description: "Operating systems assignment to test about basic bash, compile a kernel manually, and create a Linux shell script.",
            categories: ['programming']
        },
        {
            image: 'assets/images/projects/ai.png',
            title: 'A global reachable web services for web traffic recognition',
            technologies: ['AI', 'Wireshark', 'Python', 'AWS', 'Docker'],
            description: "Using machine learning, web traffic classification is done by capturing Wireshark packets and processing it using Python script, at last uploading it to the cloud (AWS EC2) with Docker.",
            categories: ['featured', 'programming', 'networking', 'ai']
        },
        {
            image: 'assets/images/projects/tourism.png',
            title: 'Tourism Website',
            technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
            description: "A tourism website using HTML, CSS, JS with Bootstrap 4.0.",
            categories: ['programming']
        },
        {
            image: 'assets/images/projects/simulation.png',
            title: 'Network Simulation',
            technologies: ['OMNET++'],
            description: "Writing a conference paper on an OMNET++ model while implementing different scenarios based on simulation model.",
            categories: ['networking']
        },
        {
            image: 'assets/images/projects/serverside.jpg',
            title: 'Server-side Web Applications Development',
            technologies: ['Java EE', 'PostgreSQL', 'JPA'],
            description: "Work on different modules for the server-side web applications development using Java EE. We use PostgreSQL for the database, and use JPA approach for the database connection.",
            categories: ['programming']
        },
        {
            image: 'assets/images/projects/network.png',
            title: 'Network Programming',
            technologies: ['Java'],
            description: "Develop Java programming language client/server programs using UDP and TCP, read and write raw network packets, develop programs that perform unicast, multicast, and broadcast and creating sockets using network programming.",
            categories: ['programming', 'networking']
        },
        {
            image: 'assets/images/projects/discordbot.jpg',
            title: 'Hosting Discord Bot',
            technologies: ['Discord', 'Heroku'],
            description: "Hosting a discord bot on Heroku for experimental purposes",
            categories: ['programming', 'networking']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
                    <article class="card__article">
                        <h2>${project.title}</a></h2>
                        <p class="paragraph-text-normal justify-text">${project.description} ${project.link ? `<br><br><a href="${project.link}">Link to Source</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}