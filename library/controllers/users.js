import {User} from '../models/user.js'

let users=[] //this will act as a user table(database)..later will replace this with DB call.

export const getUsers= (req,res)=>{
    console.log("In function call getUser()..I think this '/users' endpoint got hit.")
    // res.send(users)
    User.find()
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
}
export const getUserByID= (req,res)=>{
    console.log("In function call getUserByIs()..I think this '/users' endpoint got hit.")
    // res.send(users)
    User.findById(req.params.id)
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
}
export const createUser = (req,res)=>{
    console.log("In function call createUser()..I think this '/users' endpoint got hit with post request.")
    // users.push(req.body)
    const user = new User({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        city: req.body.city, 
    })
    user.save()
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
}