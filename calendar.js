const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

window.onload = function() {
    const d = new Date()
    let month = d.getMonth()
    console.log(monthArr[month])
}