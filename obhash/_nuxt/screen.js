if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw2.js').then(() => {
      console.log('Service Worker Registered 不要盗版我网站')
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
      console.log('安装程序已注册,可以添加到桌面')
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
  