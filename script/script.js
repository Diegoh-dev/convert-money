const button = document.querySelector('button')
const select = document.querySelector('#select-value')

const dolar = 5.01
const euro = 5.65 
const bitcoin = 0.0000053



const convertValues = () =>{
    const valueInput = document.querySelector('input').value
    const real = document.getElementById('value-real')
    const currencyFormat = document.querySelector('#currency-format')

    real.innerHTML = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(valueInput);

   

    if(select.value === 'US$ Dólar americano'){
        currencyFormat.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInput / dolar);
    }
    
    if(select.value === '€ Euro'){

        currencyFormat.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInput / euro);

    }

    if(select.value === '₿ Bitcoin'){
        currencyFormat.innerHTML = valueInput * bitcoin
    }

   
}


const changeSelect = () =>{
   const bandeiras = document.getElementById('image-pais')
   const nameCurrency = document.querySelector('#name-currency')

   if(select.value === '€ Euro'){
       bandeiras.src = './assets/euro.png'
       nameCurrency.innerHTML = 'Euro'
       
   }
    
   if(select.value === 'US$ Dólar americano'){
       bandeiras.src = './assets/estados-unidos.png'
       nameCurrency.innerHTML = 'Dólar americano'
   }

   if(select.value === '₿ Bitcoin'){
       bandeiras.src = './assets/bitcoin.png'
       nameCurrency.innerHTML = 'Bitcoin'
   }

   convertValues()
}

button.addEventListener('click',convertValues)
select.addEventListener('change',changeSelect)