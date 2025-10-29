var btn=document.getElementById('btn')
var child=document.getElementById('child')
var output=document.getElementById('output')
btn.addEventListener('click',()=>{
    let messages=[]
    //1.access direct parent element using parentelement
    var parent=child.parentElement;
    messages.push('parent element id:'+(parent ? parent.id:'null'))
    //2.access grandparent by going up twice
    var grandparent=parent? parent.parentElement :null;
    messages.push('Grandparent element id:'+(grandparent ? grandparent.id:'null'))

    //3.access up until no parent (climb all the way up to body/html)
    var current=child;
    let i=0
    while(current.parentElement && i<10){  //limit to 10for safety
    current=current.parentElement;
    messages.push(`ancestor level ${i+1}:${current.tagName}#${current.id || '(no id)'}`)
    i++
    }
    // //4.use closest() to find the nearest ancestor with class'nested'
    // const closeNested=child.child.closest('.nested')
    // messages.push('closest anacestor with  .nested class ID:'+(closestNested ? closestNested.id :'null'))
    // output.textContent=messages.join('\n')
})