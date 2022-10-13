const navMenu = document.querySelector('.navMenu');
const navLink = document.querySelectorAll('.navLink');
const hamburger = document.querySelector('.hamburger');
const closedIcon = document.querySelector('.closedIcon');
const hamburgerIcon = document.querySelector('.hamburgerIcon');

function toggleMenu() {
  if (navMenu.classList.contains('showMenu')) {
    navMenu.classList.remove('showMenu');
    closedIcon.style.display = 'none';
    hamburgerIcon.style.display = 'block';
  } else {
    navMenu.classList.add('showMenu');
    closedIcon.style.display = 'block';
    hamburgerIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

navLink.forEach((navLink) => {
  navLink.addEventListener('click', toggleMenu);
});

/* POP UP CSS */

const projects = [];

const projectOne = {
  id: 'projectOne',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: 'https://waseemqureshi2020.github.io/portfolio.github.io',
  source: 'https://github.com/waseemqureshi2020/portfolio.github.io',
};

projects.push(projectOne);

const projectTwo = {
  id: 'projectTwo',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: 'https://waseemqureshi2020.github.io/portfolio.github.io',
  source: 'https://github.com/waseemqureshi2020/portfolio.github.io',
};

projects.push(projectTwo);

const projectThree = {
  id: 'projectThree',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: 'https://waseemqureshi2020.github.io/portfolio.github.io',
  source: 'https://github.com/waseemqureshi2020/portfolio.github.io',
};

projects.push(projectThree);

const projectFour = {
  id: 'projectFour',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: 'https://waseemqureshi2020.github.io/portfolio.github.io',
  source: 'https://github.com/waseemqureshi2020/portfolio.github.io',
};

projects.push(projectFour);

const projectFive = {
  id: 'projectFive',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: 'https://waseemqureshi2020.github.io/portfolio.github.io',
  source: 'https://github.com/waseemqureshi2020/portfolio.github.io',
};

projects.push(projectFive);

const projectSix = {
  id: 'projectSix',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: 'https://waseemqureshi2020.github.io/portfolio.github.io',
  source: 'https://github.com/waseemqureshi2020/portfolio.github.io',
};

projects.push(projectSix);

const projectSeven = {
  id: 'projectSeven',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/project7.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: 'https://waseemqureshi2020.github.io/portfolio.github.io',
  source: 'https://github.com/waseemqureshi2020/portfolio.github.io',
};

projects.push(projectSeven);

const projectEight = {
  id: 'projectEight',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: 'https://waseemqureshi2020.github.io/portfolio.github.io',
  source: 'https://github.com/waseemqureshi2020/portfolio.github.io',
};

projects.push(projectEight);

function projectClick(event) {
  const clickedId = event.target.id;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === clickedId) {
      const body = document.querySelector('body');
      const popupSection = document.createElement('section');
      popupSection.className = 'popupSection';
      body.appendChild(popupSection);

      const insideContainer = document.createElement('div');
      insideContainer.className = 'insideDiv';
      popupSection.appendChild(insideContainer);
      
      const h3 = document.createElement('h3');
      h3.className = 'popupTitle'
      h3.innerHTML = projects[i].name;
      insideContainer.appendChild(h3);
      
      const closeIcon = document.createElement('button');
      closeIcon.className = 'closeButton';
      closeIcon.innerHTML = '<button onclick="closeWindow()" id="closeButton" ><img src="images/Closed-Icon.png" alt="CloseIcon"/></button>';
      insideContainer.appendChild(closeIcon);

      const techList = document.createElement('ul');
      insideContainer.appendChild(techList);
      
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < projects[i].tech.length; j++) {
        const list = document.createElement('li');
        list.innerHTML = projects[i].tech[j];
        techList.appendChild(list);
      }
      
      const imageContainer = document.createElement('div');
      imageContainer.className = 'popupImage';
      insideContainer.appendChild(imageContainer);
      
      const img = document.createElement('img');
      img.setAttribute('src', projects[i].img);
      img.className = 'popupImg';
      img.setAttribute('alt','Project image');
      imageContainer.appendChild(img);

      const p = document.createElement('p');
      p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.';
      insideContainer.appendChild(p);

      const Link = document.createElement('div');
      Link.className = 'Link';
      insideContainer.appendChild(Link);

      const seeLive = document.createElement('button');
      seeLive.className = 'seeLive';
      seeLive.innerHTML = '<button type="button" class="btnLive"><a href="https://waseemqureshi2020.github.io/portfolio.github.io/">See Live</a><img id="go" src="./images/go.png"></button ';
      Link.appendChild(seeLive);

      const seeSource = document.createElement('button');
      seeSource.className = 'seeSource';
      seeSource.innerHTML = '<button type="button" class="btnSource"><a href="https://github.com/waseemqureshi2020/portfolio.github.io">See Source</a><img id="gh" src="./images/github.png"></button ';
      Link.appendChild(seeSource);
    }
  }
}

function closeWindow() { 
  const iconClose = document.getElementsByClassName('popupSection');
  iconClose[0].style.display = 'none';
  iconClose[0].remove();
}