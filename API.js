document.getElementById("show").addEventListener("click",async ()=>{
    let res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    let data = await res.json()
        console.log(data)
        let ans = data.data
        console.log(ans)
        for(i of ans){
            for(j in i){
                let title = document.createElement('div')
                title.setAttribute("class","title")
                title.innerHTML = j
                title.setAttribute("style","display:inline-block;color:blue;margin:10px; ")
                let answer = document.createElement('span')
                answer.innerHTML = i[j]
                answer.setAttribute("style","margin:10px;margin-left:3px;color:green" )
                // answer.setAttribute("style","width:20%;")
                let screen = document.getElementById("screen")
                let section = document.createElement("section")
                section.append(title,answer)
                screen.append(section)
                section.setAttribute("style","width:15% " )
                screen.setAttribute("style","display:flex;flex-wrap:wrap;justify-content:space-around;background-image:url(vangogh.jpeg);background-size:cover;background-position:center")
                // console.log(j)
                console.log(j,":",i[j])
            }
        }
        // let face = document.createElement("div")
        // face.innerHTML = data.fact
        // let screen = document.getElementById("screen")
        // screen.append(face)

    //  .then((res)=> res.json)
    //  .then((data)=> {
        // let face = document.createElement("div")
        // face.innerHTML = Data.
        // show.append(face)
    //  })

})
