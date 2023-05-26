fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        console.log(`Quantidade de itens: ${json.length}`)
        
        json.forEach(element => {
            if (element.userId == 10){
                console.log(`Esses são os Title do UserId 10: ${element.title}`);
            }
        });
    
        
    })