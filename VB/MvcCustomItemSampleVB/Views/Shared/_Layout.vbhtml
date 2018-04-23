<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8" />
    <title>@ViewData("Title")</title>

    @Html.DevExpress().GetStyleSheets(
        New StyleSheet With {.ExtensionSuite = ExtensionSuite.NavigationAndLayout},
        New StyleSheet With {.ExtensionSuite = ExtensionSuite.Editors},
        New StyleSheet With {.ExtensionSuite = ExtensionSuite.Dashboard}
    )
    @Html.DevExpress().GetScripts(
        New Script With {.ExtensionSuite = ExtensionSuite.NavigationAndLayout},
        New Script With {.ExtensionSuite = ExtensionSuite.Editors},
        New Script With {.ExtensionSuite = ExtensionSuite.Dashboard}
    )
    <script>
        function onBeforeRender(sender) {
            var dashboardControl = sender.GetDashboardControl();
            dashboardControl.registerExtension(implementCustomExtension(dashboardControl));
        }
  </script>
</head>

<body>
    <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0">
        @RenderBody()
    </div>
    <script src="scripts/customExtension/icon.js"></script>
    <script src="scripts/customExtension/meta.js"></script>
    <script src="scripts/customExtension/viewer.js"></script>
    <script src="scripts/customExtension/customExtension.js"></script>
</body>
</html>