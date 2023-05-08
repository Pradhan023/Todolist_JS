
var cardindex = 0 
var singlecardindex = 0
// todo  store all task item 

todo = []

function displaytext()
{
    if(todo.value == 0)
{
    nodisplay.style.display = 'block'
}
else
{
    nodisplay.style.display = 'none'
}

}

// additem
const itemtext = document.getElementById('inp-additem')  // input box data access
const addlist = document.getElementById('inp-text') //list input 

let itemclick = document.getElementById('additem')
function togglebtn()
{
    // add item card variable 
    let item_card = document.getElementById('cardpop')
    if(item_card.style.display === 'block')
    {
        item_card.style.display = 'none';
    }
    else
    {
        item_card.style.display = 'block';
    }
    itemtext.focus()
}

// putting click funtion to add button which itemclcik line-1
itemclick.addEventListener('click' , togglebtn)



// list popup
function listbtn()
{
    // add item card variable 
    let list_card = document.getElementById('cardlist-pop')
    if(list_card.style.display === 'block')
    {
        list_card.style.display = 'none';
    }
    else
    {
        list_card.style.display = 'block';
    }
    addlist.focus()
}

const singlehead = document.getElementById('scard')
const maincard = document.getElementById('maincard')
function single()
{
    if(singlehead.style.display === 'block')
    {
        singlehead.style.display = 'none'
    }
    else
    {
        singlehead.style.display = 'block'
    }
    render()
}

function additem()
{   
    // item created 
    const obj = { name: itemtext.value , items:[]}
    // insert the item to an array 
    todo.push(obj)
    itemtext.value = ""
    render()
    togglebtn()
    displaytext()
}

// addlist
const button = document.getElementById('btnlist')
button.addEventListener('click',function al()
{
    console.log(cardindex);
    const listdata = { name:addlist.value , iscom :false }
    todo[cardindex].items.push(listdata);
    addlist.value = ""
    render()
    listbtn()
})


function render()
{
    var index = 0 ;
    const cardcont = document.getElementById("card_container_it")
    cardcont.innerText = ""
    todo.map((value) => {
        let itemblock = document.createElement("div")
        itemblock.classList.add('card')
        itemblock.id = index
        index++;

        const itemTitle = document.createElement('h2')
        itemTitle.style.textTransform = 'capitalize'
        itemTitle.innerText = value.name;
        itemTitle.style.fontSize = '30px'
        itemTitle.style.color = 'red'
        itemTitle.style.fontWeight = 'lighter'
        itemTitle.style.cursor = 'pointer'


        itemTitle.addEventListener('click',() =>
        {
            single()
            singlecardindex = itemTitle.parentElement.id
            document.getElementById('singleheading').innerText = todo[singlecardindex].name
            const maincard = document.getElementById('maincard')
            maincard.append(itemblock)
        })
        
        // img container
        const imgc = document.createElement('div')
        imgc.classList.add("imgcontainer")

        // add btn 
        const addlist = document.createElement("img")
        addlist.src = "./add_circle_FILL1_wght400_GRAD0_opsz48.svg"
        addlist.style.height = "36px"
        imgc.append(addlist)
        additem

        addlist.addEventListener('click',() => {
            listbtn()
            cardindex = addlist.parentElement.parentElement.id; //give araay no.
        })


        const deletecard = document.createElement("img")
        deletecard.src = "./bin.png"
        deletecard.style.height = "33px"
        imgc.append(deletecard)

        deletecard.addEventListener('click', () => 
        {
            itemblock.remove();
        })

        imgc.appendChild(addlist)
        imgc.appendChild(deletecard)

        let item_list = document.createElement("ul")
        item_list.style.flex = "1"
        item_list.type = "none"
        item_list.classList.add("ul")

        value.items.map((item) => 
        {
            const list = document.createElement("li")
            list.style.textTransform = 'capitalize'
            list.innerText = item.name
            list.style.fontSize = '27px' 
            const done = document.createElement("button")
            done.classList.add("markdone")
            done.innerText = "Mark Done"
            done.style.backgroundColor ="#2196f3"
            done.style.border ="none"
            done.style.padding = '6px'
            done.style.color = 'white'
            list.appendChild(done)
            

            done.addEventListener('click', function dm ()
            {
                item.iscom = !item.iscom
                render()
            })
            if(item.iscom)
            {
                list.style.textDecoration = "line-through"
                done.style.display ='none' 
                list.style.color = 'red'
                list.style.fontSize = '35px'
            } 
            item_list.appendChild(list)
        })
        
        cardcont.appendChild(itemblock)
        itemblock.appendChild(itemTitle)
        itemblock.appendChild(item_list)
        itemblock.append(imgc)

    })
    
}


