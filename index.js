let servicesRequested=[]
let services=[
    {
        name:"Wash Car",
        price:10},
    {
        name:"Mow Lawn",
        price:20},
    {
        name:"Pull Weeds",
        price:30}]

const washEl=document.getElementById("wash")
const mowEl=document.getElementById("mow")
const pullEl=document.getElementById("pull")
const removeEl=document.getElementsByClassName("remove")
washEl.addEventListener("click",add(services[0]))
mowEl.addEventListener("click",add(services[1]))
pullEl.addEventListener("click",add())