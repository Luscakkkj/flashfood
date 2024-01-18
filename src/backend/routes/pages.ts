import { Router } from "express";
const Route = Router()

/* =============================================================== */
Route.get('/', (request, response) => { response.render("index") })

Route.get('/sign', (request, response) => {
  response.render("sign", {
    message: request.flash('sucess'),
    error:  request.flash('error')
  })
})

Route.get('/home', (_, response) => { response.render('home') },)
/* =============================================================== */

export default Route