//change nav links to red on hover and change back to default
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link =>
{
    link.addEventListener('mouseover', () =>
    {
        link.style.color = 'red';
    });

    link.addEventListener('mouseout', () =>
    {
        link.style.color = '#212529';
    });

})

//blur the first image in the content-section on click and default on double click
const image = document.querySelector('.content-section .img-content');
image.addEventListener('click', () =>
{
    image.style.filter = "blur(10px)";
})

image.addEventListener('dblclick', () =>
{
    image.style.filter = "blur(0px)";
})

//draws a border around each div and border goes away when not hovering
const destinationBorder = document.querySelectorAll('.destination');
destinationBorder.forEach(destination =>
{
    destination.addEventListener('mouseenter', () =>
    {
        destination.style.border = "5px dotted red";
    })

    destination.addEventListener('mouseleave', () =>
    {
        destination.style.border = "0";
    })
})

//counts how many times user has scrolled and displays a popup message
let count = 0;
window.addEventListener('scroll', () =>
{
   if(window.innerHeight + window.scrollY >= document.body.offsetHeight)
   {
       count++;
       if(count >= 5)
       {
           count = 0;
           alert('Stop scrolling to the bottom of the page!');
       }
   }
})

//changes the footer background color on hover and default when not hovering
const footer = document.querySelector('footer');
footer.addEventListener('mouseenter', () =>
{
    footer.style.background = "#96D2FF";
})

footer.addEventListener('mouseleave', () =>
{
    footer.style.background = "#FFEBCD";
})

//changes the hero image to something else when shift is pressed and clicked
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('click', (event) =>
{
    if(event.shiftKey)
    {
        funBusImg.src = "https://images.unsplash.com/photo-1546083321-8cb9c17ccde3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
    }
})

//restores hero image to default when double clicked
funBusImg.addEventListener('dblclick', () =>
{
    funBusImg.src = "../img/fun-bus.jpg";
})