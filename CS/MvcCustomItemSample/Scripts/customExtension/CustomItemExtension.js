var CustomItemExtension = (function () {
	var Dashboard = DevExpress.Dashboard;
	var Designer = DevExpress.Dashboard.Designer;

	// Defines a custom item icon.
	var svgIcon = '<svg id= "customItemIcon" viewBox="0 0 24 24" ><path stroke="#42f48f" fill="#42f48f" d="M12 2 L2 22 L22 22 Z" /></svg>';

	// Defines a custom item meta description.
	var customItemExtensionMeta = {
		bindings: [{
			propertyName: 'customBinding',
			dataItemType: 'Dimension',
			array: false,
			displayName: 'Custom Binding',
			emptyPlaceholder: 'Add Dimension',
			selectedPlaceholder: 'Configure Dimension'
		}],
		customProperties: [{
			ownerType: 'CustomItem',
			propertyName: 'customProperty',
			valueType: 'string',
			defaultValue: 'Exclude'
		}],
		optionsPanelSections: [{
			title: 'Custom Properties',
			items: [{
				dataField: 'customProperty',
				label: {
					text: 'Include Field Header'
				},
				template: Designer.FormItemTemplates.buttonGroup,
				editorOptions: { 
					items: [{ text: 'Include' }, { text: 'Exclude' }] 
				}
			}]
		}],

		icon: 'customItemIcon',
		title: 'Simple Custom Item',
		index: 0
	};

	// Specifies an item viewer behavior.
	var Viewer = function(model, container, options) {
		Dashboard.CustomItemViewer.call(this, model, container, options)
	}
	Viewer.prototype = Object.create(Dashboard.CustomItemViewer.prototype);
	Viewer.prototype.constructor = Viewer;
	Viewer.prototype.renderContent = function ($element, changeExisting) {
		var dataSource = [];
		this.iterateData(function (dataRow) {
			dataSource.push(dataRow.getDisplayText('customBinding'));
		});

                    var element = $element.jquery ? $element[0] : $element;
		while(element.firstChild)
			element.removeChild(element.firstChild);

		if (this.getPropertyValue('customProperty') == 'Include') {
			var div = document.createElement('div');
			div.style.marginLeft = "10px";
			div.style.fontWeight = "bold";
			div.innerText = this.getBindingValue('customBinding')[0].displayName();
			element.appendChild(div);
		}
		var div = document.createElement('div');
		div.style.marginLeft = "10px";
		div.innerHTML = dataSource.join("<br />");
		element.appendChild(div);
	};

	// Creates function that implements a custom item extension.	
	function CustomItemExtension(dashboardControl) {
		Dashboard.ResourceManager.registerIcon(svgIcon);

		this.name = "CustomItemExtension";
		this.metaData = customItemExtensionMeta;
		this.createViewerItem = function (model, $element, content) {
			return new Viewer(model, $element, content);
		};
	}
	
	return CustomItemExtension;
}());