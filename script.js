function getRandomValue() {
        return Math.floor(Math.random() * (90 - 70 + 1)) + 70;
    }

    // HTML progress circular bar 



// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// Optimized scroll handler - combines navbar and back-to-top functionality
let ticking = false;

function updateOnScroll() {
  const scrollY = window.scrollY;
  const navbar = document.getElementById('navbar-top');
  const backToTopBtn = document.getElementById('btn-back-to-top');
  
  // Navbar functionality
  if (scrollY > 50) {
    navbar.classList.add('fixed-top');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbarHeight + 'px';
  } else {
    navbar.classList.remove('fixed-top');
    document.body.style.paddingTop = '0';
  }
  
  // Enhanced navbar styling
  const navbarElement = document.querySelector('.navbar');
  if (navbarElement) {
    if (scrollY > 100) {
      navbarElement.classList.add('scrolled');
    } else {
      navbarElement.classList.remove('scrolled');
    }
  }
  
  // Back to top button functionality
  if (scrollY > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
  
  // Parallax effect for floating icons
  const parallaxElements = document.querySelectorAll('.floating-icon');
  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    element.style.transform = `translateY(${scrollY * speed}px)`;
  });
  
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateOnScroll);
    ticking = true;
  }
}

// Single scroll event listener
window.addEventListener('scroll', requestTick);

// Back to top button click handler
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});





// Enhanced navbar styling is now handled in the main scroll handler

// Typing effect removed as per user request to fix literal tag display.

// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effects are now handled in the main scroll handler

// Enhanced progress animations with intersection observer
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger progress animations when skills section is visible
            startProgressAnimations();
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skill');
if (skillsSection) {
    progressObserver.observe(skillsSection);
}



let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// Python progress animation
let pythonProgress = document.querySelector(".python");
let pythonValue = document.querySelector(".python-progress");
let pythonStartValue = 0;
let pythonEndValue = 85;
let pythonSpeed = 30;
let pythonProgressTimer = setInterval(() => {
  pythonStartValue++;
  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#306998 ${pythonStartValue * 3.6}deg, #ededed 0deg)`;
  if (pythonStartValue == pythonEndValue) {
    clearInterval(pythonProgressTimer);
  }
}, pythonSpeed);

// Next.js progress animation
let nextjsProgress = document.querySelector(".nextjs");
let nextjsValue = document.querySelector(".nextjs-progress");
let nextjsStartValue = 0;
let nextjsEndValue = 80;
let nextjsSpeed = 30;
let nextjsProgressTimer = setInterval(() => {
  nextjsStartValue++;
  nextjsValue.textContent = `${nextjsStartValue}%`;
  nextjsProgress.style.background = `conic-gradient(#000000 ${nextjsStartValue * 3.6}deg, #ededed 0deg)`;
  if (nextjsStartValue == nextjsEndValue) {
    clearInterval(nextjsProgressTimer);
  }
}, nextjsSpeed);

// MongoDB progress animation
let mongodbProgress = document.querySelector(".mongodb");
let mongodbValue = document.querySelector(".mongodb-progress");
let mongodbStartValue = 0;
let mongodbEndValue = 75;
let mongodbSpeed = 30;
let mongodbProgressTimer = setInterval(() => {
  mongodbStartValue++;
  mongodbValue.textContent = `${mongodbStartValue}%`;
  mongodbProgress.style.background = `conic-gradient(#47A248 ${mongodbStartValue * 3.6}deg, #ededed 0deg)`;
  if (mongodbStartValue == mongodbEndValue) {
    clearInterval(mongodbProgressTimer);
  }
}, mongodbSpeed);

// MySQL progress animation
let mysqlProgress = document.querySelector(".mysql");
let mysqlValue = document.querySelector(".mysql-progress");
let mysqlStartValue = 0;
let mysqlEndValue = 80;
let mysqlSpeed = 30;
let mysqlProgressTimer = setInterval(() => {
  mysqlStartValue++;
  mysqlValue.textContent = `${mysqlStartValue}%`;
  mysqlProgress.style.background = `conic-gradient(#4479A1 ${mysqlStartValue * 3.6}deg, #ededed 0deg)`;
  if (mysqlStartValue == mysqlEndValue) {
    clearInterval(mysqlProgressTimer);
  }
}, mysqlSpeed);

// C# progress animation
let csharpProgress = document.querySelector(".csharp");
let csharpValue = document.querySelector(".csharp-progress");
let csharpStartValue = 0;
let csharpEndValue = 70;
let csharpSpeed = 30;
let csharpProgressTimer = setInterval(() => {
  csharpStartValue++;
  csharpValue.textContent = `${csharpStartValue}%`;
  csharpProgress.style.background = `conic-gradient(#239120 ${csharpStartValue * 3.6}deg, #ededed 0deg)`;
  if (csharpStartValue == csharpEndValue) {
    clearInterval(csharpProgressTimer);
  }
}, csharpSpeed);

// C++ progress animation
let cppProgress = document.querySelector(".cpp");
let cppValue = document.querySelector(".cpp-progress");
let cppStartValue = 0;
let cppEndValue = 75;
let cppSpeed = 30;
let cppProgressTimer = setInterval(() => {
  cppStartValue++;
  cppValue.textContent = `${cppStartValue}%`;
  cppProgress.style.background = `conic-gradient(#00599C ${cppStartValue * 3.6}deg, #ededed 0deg)`;
  if (cppStartValue == cppEndValue) {
    clearInterval(cppProgressTimer);
  }
}, cppSpeed);

function startProgressAnimations() {
    // Your existing progress animations here
    // ... existing code ...
}

// Add loading screen
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1500);
});


