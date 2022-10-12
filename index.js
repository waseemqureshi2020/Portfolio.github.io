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
  demo: '',
  source: '',
};

projects.push(projectOne);

const projectTwo = {
  id: 'projectTwo',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: '',
  source: '',
};

projects.push(projectTwo);

const projectThree = {
  id: 'projectThree',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  source: '',
};

projects.push(projectThree);

const projectFour = {
  id: 'projectFour',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: '',
  source: '',
};

projects.push(projectFour);

const projectFive = {
  id: 'projectFive',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: '',
  source: '',
};

projects.push(projectFive);

const projectSix = {
  id: 'projectSix',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: '',
  source: '',
};

projects.push(projectSix);

const projectSeven = {
  id: 'projectSeven',
  name: 'Multi Post Stories',
  tech: ['Html', 'Bootstrap', 'Ruby on rails'],
  img: './images/popup-image.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  demo: '',
  source: '',
};

projects.push(projectSeven);

function projectClick(event) {
  const clickedId = event.target.id;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === clickedId) {
      const body = document.querySelector('body');
      const popupSection = document.createElement('section');
      popupSection.className = 'popupSection';
      body.appendChild(popupSection);

      const closeIcon = document.createElement('button');
      closeIcon.className = 'popupClose';
      closeIcon.innerHTML = '<button onclick="closeWindow()" id="closeIcon" ><img src="images/Closed-Icon.png" alt="CloseIcon"/></button>';
      popupSection.appendChild(closeIcon);
      
      const titleContainer = document.createElement('div');
      popupSection.appendChild(titleContainer);

      const h3 = document.createElement('h3');
      h3.className = 'popupTitle';
      h3.innerHTML = projects[i].name;
      titleContainer.appendChild(h3);

      const techContainer = document.createElement('div');
      popupSection.appendChild(techContainer);

      const techList = document.createElement('ul');
      techList.className = 'popupList';
      techContainer.appendChild(techList);
      
      const imageContainer = document.createElement('div');
      imageContainer.className = 'popupImage';
      popupSection.appendChild(imageContainer);
      
      const img = document.createElement('img');
      img.setAttribute('src', projects[i].img);
      img.setAttribute('alt','Project image');
      imageContainer.appendChild(img);

      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < projects[i].tech.length; j++) {
        const list = document.createElement('li');
        list.innerHTML = projects[i].tech[j];
        techList.appendChild(list);
      }

      const popupText = document.createElement('div');
      popupSection.appendChild(popupText);

      const p = document.createElement('p');
      p.className = 'popupDescription';
      p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.';
      popupText.appendChild(p);

      const link = document.createElement('div');
      link.className = 'popupLink';
      popupSection.appendChild(link);

      const seeLive = document.createElement('button');
      seeLive.className = 'popupLive';
      seeLive.innerHTML = '<button type="button" class="btnLive"><a href="https://waseemqureshi2020.github.io/portfolio.github.io/">See Live</a></button ';
      link.appendChild(seeLive);

      const seeSource = document.createElement('button');
      seeSource.className = 'popupSource';
      seeSource.innerHTML = '<button type="button" class="btnSource"><a href="https://github.com/waseemqureshi2020/portfolio.github.io">See Source</a></button ';
      link.appendChild(seeSource);
    }
  }
}

function closeWindow() { 
  const iconClose = document.getElementsByClassName('popupSection');
  iconClose[0].style.display = 'none';
  iconClose[0].remove();
}