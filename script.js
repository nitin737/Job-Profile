window.addEventListener('load', function () {
    const list='.profile,.resume,.contact';
    const fic=document.querySelector('.inner-container-1');
    const revealResume=document.querySelector('.hide-resume');
    window.addEventListener('click',(e)=>{
        let text=e.path[3].innerText.toString();
        
        if(text == 'Profile' || text == 'Resume' || text == 'Contact') 
        {
            const link=document.querySelector('.' + text.toLowerCase());
            const links=document.querySelectorAll(list);
            
            links.forEach((l=>{
                l.classList.remove('link')
            }))
            
            if(text == 'Profile'){
                link.classList.add('link');  
                fic.classList.remove('hide-inner-container');
                fic.classList.add('inner-container-1');
                revealResume.classList.remove('reveal-resume');
                revealResume.classList.add('hide-resume');
            }
            else if(text == 'Resume'){
                link.classList.add('link');
                fic.classList.add('hide-inner-container');
                fic.classList.remove('inner-container-1');
                
                revealResume.classList.remove('hide-resume');
                revealResume.classList.add('reveal-resume');
            }
            
        }
    })
  })

