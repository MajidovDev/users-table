window.addEventListener('DOMContentLoaded', ()=>{
    const name = document.querySelector('#name'),
        surname = document.querySelector('#surname'),
        contact = document.querySelector('#contact'),
        tableRow = document.querySelector('#tbody'),
        btn = document.querySelector('#draw'),
        addUser = document.querySelector('.add-user-btn'),
        table = document.querySelector('.table'),
        modal = document.querySelector('.myModal'),
        close = document.querySelector('#close-modal')


    let id=1
    addUser.addEventListener('click', ()=>{
        table.classList.remove('d-none') 
        modal.classList.remove('d-none')
    })
    close.addEventListener('click', ()=>{
        modal.classList.add('d-none')
    })
    btn.addEventListener('click', (event)=>{
        event.preventDefault()
        if(name.value == '' && surname.value == '' && contact.value == ''){
            alert('Please, fill inputs!')
        }else{
            tableRow.innerHTML += `
            <tr>
                <th scope="row">${id}</th>
                <td>${name.value}</td>
                <td>${surname.value}</td>
                <td>${contact.value}</td>
            </tr>
            `
            id++
        }
        name.value =''
        surname.value =''
        contact.value =''
    })
})