let tabHome = document.querySelector("#tabHome");
let tabResume = document.querySelector("#tabResume");
let tabPortfolio = document.querySelector("#tabPortfolio");
let tabBlog = document.querySelector("#tabBlog");
let tabContact = document.querySelector("#tabContact");
let homeContent = document.querySelector(".homeContent");
let resumeContent = document.querySelector(".resumeContent");
let portfolioContent = document.querySelector(".portfolioContent");
let blogContent = document.querySelector(".blogContent");
let contactContent = document.querySelector(".contactContent");
let resumelink = document.querySelector(".resumelink");
let porfoliolink = document.querySelector(".porfoliolink");
let bloglink = document.querySelector(".bloglink");
let contactlink = document.querySelector(".contactlink");

tabHome.addEventListener('click', () => {
    homeContent.classList.add('active'),
    portfolioContent.classList.remove('active'),
    resumeContent.classList.remove('active'),
    blogContent.classList.remove('active'),
    contactContent.classList.remove('active'),
    resumelink.classList.remove('activeLink'),
    porfoliolink.classList.remove('activeLink'),
    bloglink.classList.remove('activeLink'),
    contactlink.classList.remove('activeLink')
})

tabResume.addEventListener('click', () => {
    resumeContent.classList.add('active'),
    homeContent.classList.remove('active'),
    portfolioContent.classList.remove('active'),
    blogContent.classList.remove('active'),
    contactContent.classList.remove('active'),
    resumelink.classList.add('activeLink'),
    porfoliolink.classList.remove('activeLink'),
    bloglink.classList.remove('activeLink'),
    contactlink.classList.remove('activeLink')
})

tabPortfolio.addEventListener('click', () => {
    portfolioContent.classList.add('active'),
    homeContent.classList.remove('active'),
    resumeContent.classList.remove('active'),
    blogContent.classList.remove('active'),
    contactContent.classList.remove('active'),
    resumelink.classList.remove('activeLink'),
    porfoliolink.classList.add('activeLink'),
    bloglink.classList.remove('activeLink'),
    contactlink.classList.remove('activeLink')
})

tabBlog.addEventListener('click', () => {
    blogContent.classList.add('active'),
    homeContent.classList.remove('active'),
    resumeContent.classList.remove('active'),
    portfolioContent.classList.remove('active'),
    contactContent.classList.remove('active'),
    resumelink.classList.remove('activeLink'),
    porfoliolink.classList.remove('activeLink'),
    bloglink.classList.add('activeLink'),
    contactlink.classList.remove('activeLink')
})

tabContact.addEventListener('click', () => {
    contactContent.classList.add('active'),
    homeContent.classList.remove('active'),
    resumeContent.classList.remove('active'),
    portfolioContent.classList.remove('active'),
    blogContent.classList.remove('active'),
    resumelink.classList.remove('activeLink'),
    porfoliolink.classList.remove('activeLink'),
    bloglink.classList.remove('activeLink'),
    contactlink.classList.add('activeLink')
})


