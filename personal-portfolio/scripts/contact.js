const media=document.querySelector(".contact-media");
const contactList = [
  {
    id: 1,
    icon: "ph ph-phone-call",
    name: "Phone",
    value: "+92 300 1234567",
    href: "tel:+923001234567",
  },
  {
    id: 2,
    icon: "ph ph-envelope",
    name: "Email",
    value: "talha@example.com",
    href: "mailto:talha@example.com",
  },
  {
    id: 3,
    icon: "ph ph-map-pin-area",
    name: "Location",
    value: "Lahore, Pakistan",
    href: "#",
  },
];

const contactContent=contactList.map((ele)=>{
    return`
     <div class="media" key=${ele?.id}>
            <span>
              <i class="${ele?.icon}"></i>
            </span>
            <div class="contact-value">
              <p>${ele?.name}</p>
              <a href="${ele?.href}">${ele?.value}</a>
            </div>
          </div>
    
    `;
}).join("");

if(media){
    media.innerHTML=contactContent;
}
