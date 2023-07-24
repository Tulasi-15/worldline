function sendMail(){
    var vals = {
        Name:document.getElementById('Name').value,
        Email:document.getElementById('Email').value,
        Message:document.getElementById('content').value
    };
    const serviceId="service_9nmv9aq";
    const templateId ="template_vpx9yqx";
    
    emailjs.send(serviceId,templateId,vals).then((res)=>{
        document.getElementById('Name').value="";
        document.getElementById('Email').value="";
        document.getElementById('content').value="";
        alert('Sent Successfully');
    }).catch((err)=>console.log(err));
}



function changeActive(){
    document.getElementsByClassName('active')[0].classList.toggle('active')
    document.activeElement.classList.toggle('active')
    console.log(document.activeElement)
}
function changeWay(n){
    var e = document.getElementsByClassName('ways')
    var social = document.getElementsByClassName('contact_social')
    if(!e[n].classList.contains('active')){
        Array.from(e).forEach(element => {
            element.classList.toggle('active')
        });
        for(let i=0;i<social.length;i++){
            social[i].classList.remove('show')
            social[i].classList.remove('hide')
            if(i==n){
                social[i].classList.add('show')
            }
            else{
                social[i].classList.add('hide')
            }
        }
    }
}