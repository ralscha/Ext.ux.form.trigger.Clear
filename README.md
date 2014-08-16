Ext.ux.form.trigger.Clear
=====================================

Ext JS 5 trigger implementation that adds a clear icon to textfields and comboboxes. 
A click on this icon clears the value of the field.

See an online demo: http://ralscha.github.io/Ext.ux.form.trigger.Clear


**Examples**:

- Add a clear trigger to a textfield that is only visible when the field has a value/text
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


- Add a clear trigger to a combobox that is always visible
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


- Add a clear trigger to a textfield that is only visible when the field has a value 
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
  

- Clear the value of the field with ESC
  ```
  {
    xtype: 'textfield',
    name: 'aSimpleTextField',
    fieldLabel: 'A textfield',
    triggers: {
      clear: {
        type: 'clear',
        clearOnEscape: true
      }
    }
  }  
  ```  
