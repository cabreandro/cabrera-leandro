$('document').ready( ()=> {
    type('Cabrera Leandro', 'title').then((r) => {
        type('Curriculum Vitae.', 'subtitle');
    });
    
    timeline($('.timeline'), {
        verticalStartPosition: 'left',
    });
    
    $('circle').hover(
        (r)=>{
            $(r.target).attr("stroke-width","10");
        }, 
        (r)=>{ 
            $(r.target).attr("stroke-width","5");
        } 
    );
});

async function type(title, domId) {
    let titleDom = $('#'+domId);
    for (let i = 0; i <= title.length; i++) {
        if (i == title.length) {
            console.log(title, ' TERMINA SECUENCIA TYPE');
            return 'finish';
        }
        titleDom.text(titleDom.html() + title[i]);
        await delay(50);
    }
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}