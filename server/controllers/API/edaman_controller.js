const axios = require('axios')

class APIController {
    static edaman() {

    }
    static searchRecipe(req, res, next) {
        let meal = req.query.s
        let edamanKey = process.env.EDAMAN_API_KEY
        let foodRecipe = `https://api.edamam.com/search?q=${meal}&app_id=23daa481&app_key=${edamanKey}`

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

                res.status(200).json(arr)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = APIController