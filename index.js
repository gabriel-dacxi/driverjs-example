const driver = window.driver.js.driver

const step = driver({
  onDestroyed: () => document.activeElement.blur()
})

const formEl = document.getElementById('form')

formEl.addEventListener('focus', () => {
  step.highlight({
    element: formEl,
    popover: {
      description: 'Enter your search term (for example, <em>student</em> or <em>homework</em>) and hit <strong>Enter</strong>.',
      side: 'bottom'
    }
  })
})

formEl.addEventListener('blur', () => step.destroy() )

const tour = driver({
  prevBtnText: 'Previous', 
  nextBtnText: 'Next',
  doneBtnText: 'Finish',
  overlayColor: 'maroon',
  showProgress: true,
  progressText: 'Step {{current}} of {{total}}',
  steps: [
    { element: '#categories', popover: { title: 'Sidebar categories', description: 'Navigate to desired category.' } },
    { element: '#settings', popover: { title: 'Settings', description: 'Visit the <em>Settings</em> page.' } },
    { element: '#search', popover: { title: 'Search bar', description: 'Find the topic you need quickly and easily.' } },
    { element: '#profile', popover: { title: 'User profile', description: 'Access your settings.' } },
    { element: '#notifications', popover: { title: 'User notifications', description: 'Read your notifications by clicking the bell button. A <span style="color: red">red</span> circle indicates unread messages.' } },
    { element: '#logout', popover: { title: 'User logout', description: 'Logout from your account.' } },
    { element: '#buttons', popover: { title: 'Action buttons', description: 'Manage the current dashboard or create new one.' } },
    { element: '#statistics', popover: { title: 'Statistics', description: 'Find some useful statistical information.' } },
  ]
})

tour.drive()
