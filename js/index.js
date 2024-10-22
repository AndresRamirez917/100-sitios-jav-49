async function getData(){
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const desserts = await result.json();
    console.log(desserts)
    desserts.meals.forEach(element => {
        if(element.idMeal == "52768" || element.idMeal == "52893" || element.idMeal == "53049"){
            const item = document.createRange().createContextualFragment(`
                
                <div class="item item-1">
                    <img src="${element.strMealThumb}" alt="">
                    <h2>${element.strMeal}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra euismod sagittis quam suspendisse. Eu ut egestas consectetur in rutrum amet sed lorem ipsum.</p>
                </div>
                
                `)
                const pricing_row = document.querySelector('.pricing-row');
                pricing_row.append(item);
        }
        

    });
}
const cajita = document.querySelector('.cajita');
cajita.style.backgroundImage = "url('/images/stories-mountain.jpg')";

const cajita2 = document.querySelector('.cajita2');
cajita2.style.backgroundImage = "url('/images/stories-city.jpg')";



getData()