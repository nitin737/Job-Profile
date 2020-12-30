window.addEventListener('load', function () {
    const list='.profile,.resume,.contact';
    window.addEventListener('click',(e)=>{
        let text=e.path[3].innerText.toString();
        
        if(text == 'Profile' || text == 'Resume' || text == 'Contact') 
        {
            const link=document.querySelector('.' + text.toLowerCase());
            const links=document.querySelectorAll(list);
            links.forEach((l=>{
                l.classList.remove('link')
            }))
            link.classList.add('link');
            const fic=document.querySelector('.inner-container-1');
            fic.classList.add('hide-inner-container');
            fic.classList.remove('inner-container-1');
        }
    })
  })

