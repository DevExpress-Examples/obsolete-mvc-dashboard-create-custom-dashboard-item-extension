var viewer = (function (_base) {
    __extends(viewer, _base);
    function viewer(model, $container, options) {
        _base.call(this, model, $container, options);
    }

    viewer.prototype.renderContent = function ($element, changeExisting) {
        var dataSource = [];
        this.iterateData(function (dataRow) {
            dataSource.push(dataRow.getDisplayText('customBinding'));
        });

        $element.empty();
        if (this.getPropertyValue('customProperty') == 'Include') {
            $element.append($('<div/>', { style: "margin-left: 10px; font-weight: bold" }).html(this.getBindingValue('customBinding')[0].displayName()));
        }
        $element.append($('<div/>', { style: "margin-left: 10px;" }).html(dataSource.join("<br />")));
    };
    return viewer;
}(DevExpress.Dashboard.customViewerItem));
