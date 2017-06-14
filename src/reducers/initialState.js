export default {
  drawer: {
    isOpen: false
  },
  moreOptions: {
    isOpen: false,
    lists: [
      {
        label: 'test',
        onClick: () => {
          console.log('Option List Clicked')
        }
      }
    ]
  },
  toolbar: {
    buttons: [
      {
        label: 'test',
        onClick: () => {
          console.log('Toolbar Button Clicked')
        }
      }
    ]
  }
}
