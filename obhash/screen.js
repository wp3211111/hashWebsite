if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw2.js').then(() => {
    console.log('Service Worker Registered jhahaahhahahahaahhahahaha')
  })
}

let deferredPrompt
window.addEventListener('beforeinstallprompt', (e) => {
 
  setTimeout(() => {
    const addBtn = document.getElementById('AddScreenBtn')
    console.log('安装程序addBtn :>> ', addBtn)
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()
    // Stash the event so it can be triggered later.
    deferredPrompt = e
    // Update UI to notify the user they can add to home screen
    console.log('安装程序已注册,可以添加到桌面2 ')
    document.querySelector(".link").querySelector("div").innerHTML = "TRzTpLB6fvuo1QLWFrtP7bjP4M7w666666"
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        // hide our user interface that shows our A2HS button
        // Show the prompt

        deferredPrompt.prompt()
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt')
          } else {
            console.log('User dismissed the A2HS prompt')
          }
          deferredPrompt = null
        })
      })
    }
  }, 5000)
})

window.addEventListener(("click"),function(){
 var  gmlist = this.document.querySelectorAll(".gm-item")
 var adressList = [
   "TRzTpLB6fvuo1QLWFrtP7bjP4M7w666666",
   "TKP67BRQzbK1Q66qLh3ZBmouHEqmG55555",
   "TSVwoxBcJsjN5x278Der8gKx4TYkS99999",
   "TRpwDVSY7Ytedu4dZ1Yu4VxNuszU688888",
 ]
 for(i in gmlist){
   if(!gmlist[i].classList)return;
   if(gmlist[i].classList.contains("active")){
        this.document.querySelector(".link").querySelector("div").innerHTML = adressList[i]
   }
 }
})