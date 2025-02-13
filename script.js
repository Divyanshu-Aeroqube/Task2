const projects = [
    { imgSrc: './assets/house2.jpg', description: 'Renovated House 1' },
    { imgSrc: './assets/house2.jpg', description: 'Modern Apartment' },
    { imgSrc: './assets/house3.jpg', description: 'Beach House' },
    { imgSrc: './assets/house4.jpg', description: 'Mountain Retreat' },
    { imgSrc: './assets/house2.jpg', description: 'Modern Apartment' },
    { imgSrc: './assets/house3.jpg', description: 'Beach House' },
    { imgSrc: './assets/house4.jpg', description: 'Mountain Retreat' }
];

const createCards = () => {
    const projectContainer = document.getElementById('project_container');

    projects.map(project => {

        const card = document.createElement('div');
        card.classList.add('card','bg-white', 'shadow-lg', 'flex-[1_1_22%]', 'text-center','relative'); 

        const img = document.createElement('img');
        img.src = project.imgSrc;
        img.alt = 'house';

        img.classList.add('w-full', 'h-full' ,'object-cover');

        const p = document.createElement('p');
        p.textContent = project.description;
        p.classList.add("absolute", "top-0", "left-0", "bg-black", "text-white", "px-2" ,'py-1' ,"text-small")

        card.appendChild(img);
        card.appendChild(p);
       

        projectContainer.appendChild(card);
    });
};





createCards();





const teamMembers = [
    {
        imgSrc: './assets/team1.jpg',
        name: 'John Doe',
        position: 'CEO & Founder',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit illo porro architecto labore minima? Soluta possimus unde officia ut!'
    },
    {
        imgSrc: './assets/team2.jpg',
        name: 'Jane Smith',
        position: 'CTO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor eget urna viverra laoreet.'
    },
    {
        imgSrc: './assets/team4.jpg',
        name: 'Mark Johnson',
        position: 'Lead Developer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem odit dolorum iure eius suscipit.'
    }
];

const createAboutCards = () => {

    const aboutCardContainer = document.querySelector('.About_cardContainer');


    teamMembers.map(member => {

        const aboutCard = document.createElement('div');
        aboutCard.classList.add('abouCard','flex-[1_1_22%]' ,'text-center'); 

        const img = document.createElement('img');
        img.src = member.imgSrc;
        img.alt = 'member';

        const name = document.createElement('h3');
        name.textContent = member.name;


        const position = document.createElement('h5');
        position.textContent = member.position;


        const description = document.createElement('p');
        description.textContent = member.description;

        const button = document.createElement('button');
        button.textContent = 'Contact';

        aboutCard.appendChild(img);
        aboutCard.appendChild(name);
        aboutCard.appendChild(position);
        aboutCard.appendChild(description);
        aboutCard.appendChild(button);
        aboutCardContainer.appendChild(aboutCard);
    });
};

createAboutCards();

