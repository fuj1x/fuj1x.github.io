
$(document).ready(function() {
    general_utils();
    animate_section();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.contact-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();
}

function animate_section(){
    let sections = document.querySelectorAll('.section-wrapper');

   
    sections.forEach( (section) => {
    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animated');
          }
        });
      });
      
      observer.observe(section);
    })
}
