Ext.ux.form.trigger.Clear
=====================================

Ext JS 5 trigger that adds a clear icon to textfields and comboboxes. A click on this icon clears the value of the field.

See the online demo: http://ralscha.github.io/Ext.ux.form.trigger.Clear

**Examples**:


- Adds a clear trigger to a textfield that is only visible when the field has a value/text
  ```
  { 
    xtype: 'textfield',
    name: 'aSimpleTextField',
    fieldLabel: 'A textfield',
    triggers: {
      clear: {
        type: 'clear'
      }
    }
  }
  ```


- Adds a clear trigger to a combobox that is always visible
  ```
  {
    xtype: 'combobox',
    displayField: 'label',
    valueField: 'value',
    store: store,
    triggers: {
      clear: {
        type: 'clear',
        hideWhenEmpty: false
      }
    }
  }
  ```


- Adds a clear trigger to a textfield that is only visible when the field has a value 
and the mouse hovers over the field
  ```
  {
    xtype: 'textfield',
    name: 'aSimpleTextField',
    fieldLabel: 'A textfield',
    triggers: {
      clear: {
        type: 'clear',
        hideWhenMouseOut: true
      }
    }
  }
  ```
