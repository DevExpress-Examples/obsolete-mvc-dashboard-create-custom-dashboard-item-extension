function implementCustomExtension(dashboardControl) {
    dashboardControl.registerIcon(MY_EXTENSION_ICON);
    return {
        name: EXTENSION_NAME,
        metaData: customItemExtensionMeta,
        
        createViewerItem: function (model, $element, content) {
            
            return new viewer(model, $element, content);
        }
    }
};