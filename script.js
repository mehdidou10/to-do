function creatNote () {
   
    var notes= document.getElementById ('notes')
    
    var card= document.createElement('div');
    card.setAttribute ('class' , 'card')
    notes.appendChild(card)
    
    var cardhead = document.createElement ('div')
    cardhead.setAttribute('class', 'card-head')
    card.appendChild(cardhead)
    
    var titlespan = document.createElement('span');
    titlespan.innerHTML='title'
    cardhead.appendChild(titlespan)
    
    var logo = document.createElement('img');
    logo.setAttribute('src','image/delete.png')
    logo.setAttribute('onclick', 'deleteNote(this)')
    cardhead.appendChild(logo)
   
        var content = document.createElement ('div')
    content.setAttribute('class', 'pitche')
    card.appendChild(content)
    
    
 

 var spancontent = document.createElement('span');
     spancontent.innerHTML='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis'
     
    content.appendChild(spancontent)         
             
    
}

function deleteNote(el) {
    var todelete = el.parentNode.parentNode
    todelete.remove();

}