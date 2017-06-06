export default {
  drawer: {
    isOpen: false
  },
  toolbar: {
    buttons: [
      {
        label: 'test',
        perform: () => console.log('Clicked', this.label)
      }
    ]
  }
}
