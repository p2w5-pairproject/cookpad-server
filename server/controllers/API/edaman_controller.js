const axios = require('axios')

class APIController {
    static edaman() {

    }
    static searchRecipe(req, res, next) {
        let meal = req.query.s
        let foodRecipe = `https://api.edamam.com/search?q=${meal}&app_id=23daa481&app_key=2d7e52cf491550c383b2b56ae595fd54&from=0&to=3&calories=591-722&health=alcohol-free`

        axios.get(foodRecipe)
            .then(response => {
                // console.log(response.data);
                let result = response.data.hits

                let arr = []
                        result.forEach(el => {
                            arr.push({
                                    name: el.recipe.label,
                                    ingredient: el.recipe.ingredientLines,
                                    calories: el.recipe.calories
                            })
                        })

                res.send(arr)
                // console.log(result);
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = APIController