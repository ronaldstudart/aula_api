fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
    .then(json => {
        console.log(`Quantidade de itens: ${json.length}`)
        
        json.forEach(element => {
            
        console.log(`Esse é o ID: ${element.id}, Nome:  ${element.name.toUpperCase()} , ${element.username.toLowerCase()}`);
        });
    
        
    })