'use strict'

const reviews = [
    {
        id: 1,
        name: "jessica elvan",
        desc: "adipisicing elit. Adipisci accusamus ratione exercitationem tempore Libero ratione culpa commodi impedit enim, molestias, odio harum, iusto omnis adipisci fugiat. Distinctio, enim",
        image: "img/prof4.jpg"
    },
    {
        id: 1,
        name: "matt jackson",
        desc: "adipisicing elit. Adipisci accusamus ratione exercitationem tempore Libero ratione culpa commodi impedit enim, molestias, odio harum, iusto omnis adipisci fugiat. Distinctio, enim",
        image: "img/prof8.jpg"
    },
    {
        id: 1,
        name: "jack william",
        desc: "adipisicing elit. Adipisci accusamus ratione exercitationem tempore Libero ratione culpa commodi impedit enim, molestias, odio harum, iusto omnis adipisci fugiat. Distinctio, enim",
        image: "img/prof6.jpg"
    },
    {
        id: 1,
        name: "sara issaq",
        desc: "adipisicing elit. Adipisci accusamus ratione exercitationem tempore Libero ratione culpa commodi impedit enim, molestias, odio harum, iusto omnis adipisci fugiat. Distinctio, enim",
        image: "img/prof7.jpg"
    },
    {
        id: 1,
        name: "chris will",
        desc: "adipisicing elit. Adipisci accusamus ratione exercitationem tempore Libero ratione culpa commodi impedit enim, molestias, odio harum, iusto omnis adipisci fugiat. Distinctio, enim",
        image: "img/profille4.jpg"
    },  
]
const nameReview = document.querySelector(".namereview")
const imgreview = document.querySelector(".imgreview")
const reviewpara = document.querySelector(".parareview")
const nextbtn = document.querySelector(".nextt")
const prevbtn = document.querySelector(".prevv")
let currentitem = 0
const showitem = function(){
    const reviewitem = reviews[currentitem]
    imgreview.src = reviewitem.image
    nameReview.textContent = reviewitem.name
    reviewpara.textContent = reviewitem.desc
}



const navToggle = document.querySelector(".ham");
const nav = document.querySelector('.list');

navToggle.addEventListener('click', function() {
    nav.classList.toggle('collapsed');
});
const modal = document.querySelector('.modal')
const closemoda = document.querySelector('.modal__closemod')
const openmodal = document.querySelector(".open-modal")
const overlay = document.querySelector(".modal__overlay")

const showmodal = function(){
modal.classList.remove("hide")
overlay.classList.remove("hide")
}

const closemodal = function(){
    modal.classList.add("hide")
    overlay.classList.add("hide")
}
openmodal.addEventListener("click", showmodal)
closemoda.addEventListener("click", closemodal)



const navv = document.querySelector(".nav");
const header = document.querySelector(".header")
const navheight = navv.getBoundingClientRect().height;

const stickynav = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        navv.classList.add('fixednav');
    } else {
        navv.classList.remove('fixednav');
    }
};

const headerobser = new IntersectionObserver(stickynav, {
    root: null,
    threshold: 0,
    rootMargin: `${navheight}px 0px 0px 0px`
});

headerobser.observe(header);

document.querySelectorAll(".drop__lists__dropbtn").forEach(btn => {
    btn.addEventListener("click", function(e){
        const list = e.target.nextElementSibling;
        if(list.style.display === "none" || list.style.display === ''){
            list.style.display = "block";
        } else {
            list.style.display = 'none';
        }
    });
});

const sections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hideen");
    observer.unobserve(entry.target);
};

const sectionsObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

sections.forEach(sec => {
    sectionsObserver.observe(sec);
    sec.classList.add('section-hideen');
});





const imgTargets = document.querySelectorAll('.lazy-img[data-src]');

const loadImg = function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        // Replace src with data-src
        entry.target.src = entry.target.dataset.src;

        entry.target.addEventListener('load', function () {
            entry.target.classList.remove('lazy-img');
            entry.target.classList.add('loaded');
        });

        observer.unobserve(entry.target);
    });
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0.60, 
    rootMargin: '0px'
});

imgTargets.forEach(img => imgObserver.observe(img));






document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and tab content
    const tabButtons = document.querySelectorAll('.tabbtncontainer__btn');
    const tabContents = document.querySelectorAll('.content');
  
    // Add click event listener to each tab button
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove the "active" class from all tab buttons and tab content
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
  
        this.classList.add('active');
  
        
        const tabName = this.getAttribute('data-tabs');
  
        
        const tabContent = document.querySelector(`.tab-${tabName}`);
        tabContent.classList.add('active');
      });
    });
  });
 const revealbtns = document.querySelectorAll(".revleal")
const questions = document.querySelectorAll(".faq-container__question")
revealbtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const answer = this.parentElement.nextElementSibling;
      answer.classList.toggle("questionReveal");
    });
  });



 nextbtn.addEventListener("click", function(){
    currentitem++
    if(currentitem > reviews.length - 1)
    currentitem = 0
    showitem()
}) 
 prevbtn.addEventListener("click", function(){
    currentitem--
    if(currentitem < 0)

    currentitem = reviews.length -1
    showitem()
})  
