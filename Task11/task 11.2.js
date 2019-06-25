/*Создайте объект для хранения своего любимого кулинарного рецепта. 
Он должен содержать название, ингредиенты и их необходимое количество 
(в виде вложенного объекта), а также количество порций (больше 1). 
Напишите функцию, которая получает "рецепт", подсчитывает, 
сколько каждого ингредиента нужно на одну порцию, и выводит 
информацию об этом в консоль.*/
let favouriteRecipe = {
    name: 'potato cake',
    ingredients: {
        cookie: 300,
        condensedMilk: 20,
        butter: 100,
        cocoa: 30
    },
    portions: 4
}

function calculatePortions(recipe) {
    let recipeOnePortions = {};
    for(let key in recipe.ingredients) {
    recipeOnePortions[key] = recipe.ingredients[key] / recipe.portions;
    } 
   return recipeOnePortions;
}
calculatePortions(favouriteRecipe);

// хорошо
