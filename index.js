const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('mouseover', () =>{
        panel.classList.add('active')
    })
    hoverOffEffect();
})
function hoverOffEffect(){
    panels.forEach(panel => {
        panel.addEventListener('mouseout', () =>{
            panel.classList.remove('active')
        })
    
}) }