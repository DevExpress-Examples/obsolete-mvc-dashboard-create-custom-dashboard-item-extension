@Code
    ViewData("Title") = "DevExpress Web Dashboard Application"
End Code



@Html.DevExpress().Dashboard(Sub(settings)
                                      settings.Name = "Dashboard"
                                      settings.ClientSideEvents.BeforeRender = "onBeforeRender"
                                      settings.Width = Unit.Percentage(100)
                                      settings.Height = Unit.Percentage(100)
                                  End Sub).GetHtml()
