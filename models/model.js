const uuid = require('uuid')
const fs = require('fs')
const path = require('path')


class Model {
    constructor(title, price, img) {
        this.title = title
        this.price = price
        this.img = img
        this.id = uuid.v4()
    }

    toJSON() {
        return {
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        }
    }

    async save() {
        const models = await Model.getAll()
        models.push(this.toJSON())
        console.log('Courses', models)

        return new Promise((res, rej) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'models.json'),
                JSON.stringify(models),
                (e) => {
                    if (e) {
                        rej(e)
                    } else {
                        res()
                    }
                })
        })


    }

    static getAll() {
        return new Promise((res, rej) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'models.json'),
                'utf-8',
                (err, content) => {
                    if (err) rej(err)
                    else {
                        res(JSON.parse(content))
                    }
                }
            )
        })
    }
}

module.exports = Model