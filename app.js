// Start jQuery Area

$(document).ready(function(){
    
    // Start Room Section

    $('.roompopup').magnificPopup({type:'image'});

    // End Room Section

});

// End jQuery Area


// Start javaScript

// Start Header

// start nav bar

function dropbtn(e){
    // document.getElementById('mydropdown').classList.toggle('show');

    // undefined 
    // console.log(this);
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.nextElementSibling);

    e.target.nextElementSibling.classList.toggle('show');
}

function dropfilter(){
    var getsearch,filter,getdropdiv,getlinks,linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();

    // html ka id dropdown ko phyt lite top getlinks ll alok ma lote top bu 
    // getdropdiv = document.getElementById('mydropdown');
    // getlinks = getdropdiv.getElementsByTagName('a');
    // dr ll ma ya bu search lote tet chin ko search lote tet kg bl kyan p all pyot ml 
    // getlinks = document.getElementsByTagName('a');

    getlinks = document.querySelectorAll('.mydropdowns a');

    for(var x = 0 ; x < getlinks.length; x++){
        // linkvalue = getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = "block";
        }else{
            getlinks[x].style.display = "none";
        }
    }
}

// end nav bar

// start auto background

function* genfun(){
    var index = 8;

    while(true){
        yield index++;

        if(index > 13){
            index = 8;
        }
    }
}

var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);

var getheader = document.querySelector('header');
getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
    // console.log(getgen.next().value);

    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}

setInterval(autoload,2500);

// end auto background

// End Header

// Start Testimonial Section

const getcompanyname = document.quertSelector('.companyname');
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');

const testimonials = [
    {
        name:"Rich Start Restaurant",
        position:"Our Outlet",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unkown printer took galley of type and scrambled to make a type specimen book."
    },
    {
        name:"48 Sky Bar Cafe",
        position:"Our Partner",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unkown printer took galley of type and scrambled to make a type specimen book."
    },
    {
        name:"52 Beach Hotel",
        position:"Our Branch",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unkown printer took galley of type and scrambled to make a type specimen book."
    },
    {
        name:"Cool Land Swimming Pool",
        position:"Our Client",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unkown printer took galley of type and scrambled to make a type specimen book."
    },
    {
        name:"Chaung Thar SPA",
        position:"Our Business",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unkown printer took galley of type and scrambled to make a type specimen book."
    },
];

let idx = 0;

function update

// End Testimonial Section

// End javaScript
