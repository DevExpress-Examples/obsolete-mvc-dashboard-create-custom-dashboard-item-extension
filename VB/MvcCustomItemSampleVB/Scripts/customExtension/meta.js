var EXTENSION_NAME = "customExtension";

var customItemExtensionMeta = {
    bindings: [{
        propertyName: 'customBinding',
        dataItemType: 'Dimension',
        array: false,
        displayName: 'Custom Binding',
        emptyPlaceholder: 'Add Dimension',
        selectedPlaceholder: 'Configure Dimension'
    }],
    properties: [{
        propertyName: 'customProperty',
        editor: DevExpress.Dashboard.Metadata.editorTemplates.buttonGroup,
        displayName: 'Include Field Header',
        sectionName: 'Custom Properties',
        values: {
            Include: 'CustomItemStringId.CustomPropertyValueInclude',
            Exclude: 'CustomItemStringId.CustomPropertyValueExclude'
        },
        defaultVal: 'Exclude'
    }],

    icon: 'customItemIcon',
    title: 'Simple Custom Item',
    index: 0
};

DevExpress.Localization.addCultureInfo({ 
    messages: {
        // Custom Property
        'CustomItemStringId.CustomPropertyValueInclude': "Include",
        'CustomItemStringId.CustomPropertyValueExclude': "Exclude"
    }
});