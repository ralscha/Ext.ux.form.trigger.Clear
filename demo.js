Ext.onReady(function() {

	var textfields = new Ext.form.Panel({
		flex: 1,
		margin: 5,
		bodyPadding: 5,
		title: 'Textfields',
		defaultType: 'textfield',
		items: [ {
			fieldLabel: 'Hide when empty',
			name: 'tf1',
			triggers: {
				clear: {
					type: 'clear'
				}
			}
		}, {
			fieldLabel: 'Show always',
			name: 'tf2',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenEmpty: false
				}
			}
		}, {
			fieldLabel: 'Hide when mouse out',
			name: 'tf3',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true
				}
			}
		}, {
			fieldLabel: 'Show always when mouse over',
			name: 'tf4',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					hideWhenEmpty: false
				}
			}
		}, {
			fieldLabel: 'Clear with ESC',
			name: 'tf5',
			triggers: {
				clear: {
					type: 'clear',
					clearOnEscape: true
				}
			}
		} ]
	});

	var comboboxes = new Ext.form.Panel({
		flex: 1,
		margin: 5,
		bodyPadding: 5,
		title: 'Comboboxes',
		defaultType: 'combobox',
		defaults: {
			store: [ 'one', 'two', 'three', 'four' ]
		},
		items: [ {
			fieldLabel: 'Hide when empty',
			name: 'cb1',
			triggers: {
				clear: {
					type: 'clear'
				}
			}
		}, {
			fieldLabel: 'Show always',
			name: 'cb2',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenEmpty: false
				}
			}
		}, {
			fieldLabel: 'Hide when mouse out',
			name: 'cb3',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true
				}
			}
		}, {
			fieldLabel: 'Show always when mouse over',
			name: 'cb4',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					hideWhenEmpty: false
				}
			}
		}, {
			fieldLabel: 'Clear with ESC',
			name: 'cb5',
			triggers: {
				clear: {
					type: 'clear',
					clearOnEscape: true
				}
			}
		} ]
	});

	var comboboxesWeight = new Ext.form.Panel({
		flex: 1,
		margin: 5,
		bodyPadding: 5,
		title: 'Comboboxes with weight:-1',
		defaultType: 'combobox',
		defaults: {
			store: [ 'one', 'two', 'three', 'four' ]
		},
		items: [ {
			fieldLabel: 'Hide when empty',
			name: 'cbw1',
			triggers: {
				clear: {
					type: 'clear',
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always',
			name: 'cbw2',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Hide when mouse out',
			name: 'cbw3',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always when mouse over',
			name: 'cbw4',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Clear with ESC',
			name: 'cbw5',
			triggers: {
				clear: {
					type: 'clear',
					clearOnEscape: true,
					weight: -1
				}
			}
		} ]
	});

	var numberfields = new Ext.form.Panel({
		flex: 1,
		margin: 5,
		bodyPadding: 5,
		title: 'Numberfields',
		defaultType: 'numberfield',
		defaults: {
			minValue: 0,
			maxValue: 10
		},
		items: [ {
			fieldLabel: 'Hide when empty',
			name: 'nf1',
			triggers: {
				clear: {
					type: 'clear',
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always',
			name: 'nf2',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Hide when mouse out',
			name: 'nf3',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always when mouse over',
			name: 'nf4',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Clear with ESC',
			name: 'nf5',
			triggers: {
				clear: {
					type: 'clear',
					clearOnEscape: true,
					weight: -1
				}
			}
		} ]
	});

	var datefields = new Ext.form.Panel({
		flex: 1,
		margin: 5,
		bodyPadding: 5,
		title: 'Datefields',
		defaultType: 'datefield',
		items: [ {
			fieldLabel: 'Hide when empty',
			name: 'da1',
			triggers: {
				clear: {
					type: 'clear',
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always',
			name: 'da2',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Hide when mouse out',
			name: 'da3',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always when mouse over',
			name: 'da4',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Clear with ESC',
			name: 'da5',
			triggers: {
				clear: {
					type: 'clear',
					clearOnEscape: true,
					weight: -1
				}
			}
		} ]
	});

	var timefields = new Ext.form.Panel({
		flex: 1,
		margin: 5,
		bodyPadding: 5,
		title: 'Timefields',
		defaultType: 'timefield',
		items: [ {
			fieldLabel: 'Hide when empty',
			name: 'ti1',
			triggers: {
				clear: {
					type: 'clear',
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always',
			name: 'ti2',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Hide when mouse out',
			name: 'ti3',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always when mouse over',
			name: 'ti4',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Clear with ESC',
			name: 'ti5',
			triggers: {
				clear: {
					type: 'clear',
					clearOnEscape: true,
					weight: -1
				}
			}
		} ]
	});

	var tagfields = new Ext.form.Panel({
		flex: 1,
		margin: 5,
		bodyPadding: 5,
		title: 'Tagfields',
		defaultType: 'tagfield',
		defaults: {
			store: [ 'one', 'two', 'three', 'four' ]
		},
		items: [ {
			fieldLabel: 'Hide when empty',
			name: 'tag1',
			triggers: {
				clear: {
					type: 'clear',
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always',
			name: 'tag2',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Hide when mouse out',
			name: 'tag3',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Show always when mouse over',
			name: 'tag4',
			triggers: {
				clear: {
					type: 'clear',
					hideWhenMouseOut: true,
					hideWhenEmpty: false,
					weight: -1
				}
			}
		}, {
			fieldLabel: 'Clear with ESC',
			name: 'tag5',
			triggers: {
				clear: {
					type: 'clear',
					clearOnEscape: true,
					weight: -1
				}
			}
		} ]
	});

	new Ext.panel.Panel({
		plugins: 'viewport',
		padding: 20,
		layout: 'vbox',

		title: 'Ext.ux.form.trigger.Clear Demos',
		items: [ {
			xtype: 'container',
			flex: 1,
			layout: 'hbox',
			items: [ textfields, comboboxes, comboboxesWeight ]
		}, {
			xtype: 'container',
			flex: 1,
			layout: 'hbox',
			items: [ numberfields, datefields, timefields ]
		}, {
			xtype: 'container',
			flex: 1,
			layout: 'hbox',
			items: [ tagfields ]
		} ]

	});

});