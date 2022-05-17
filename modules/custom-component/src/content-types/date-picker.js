
function render(data) {
  return [
    {
      type: 'custom',
      module: 'custom-component',
      component: 'CustomDatePicker',
      text: data.text
    }
  ]
}

function renderElement(data, channel) {
  
  if (channel === 'web' || channel === 'api') {
    return render(data)
  }

  return []
}

module.exports = {
  id: 'custom_date-picker',
  group: 'Custom Component',
  title: 'Date Picker',
  jsonSchema: {
    description: 'User can pick a date',
    type: 'object',
    required: ['text'],
    properties: {
      text: {
        type: 'string',
        title: 'Message'
      },
      displayInKeyboard: {
        type: 'boolean',
        title: 'module.builtin.types.dropdown.asKeyboardTitle',
        description: 'module.builtin.types.dropdown.asKeyboardDesc',
        default: true
      },
    }
  },
  uiSchema: {},
  computePreviewText: formData => 'Date: ' + formData.text,
  renderElement: renderElement
}
