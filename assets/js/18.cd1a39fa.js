(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{204:function(t,e,i){"use strict";i.r(e);var n=i(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),i("p",[t._v("The interface for building an alternative window manager is in "),i("a",{attrs:{href:"https://github.com/gizafoundation/zlux-platform/blob/master/interface/src/mvd-window-management.d.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("zlux-platform"),i("OutboundLink")],1),t._v(".")]),i("p",[t._v('Window Management acts upon Windows, which are visualizations of an instance of an application plug-in. Application plug-ins are plug-ins of the type "application", and therefore the MVD operates around a collection of plug-ins.')]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),i("p",[t._v("The following are the functions you can use on the Plugin Manager:")]),t._m(9),t._m(10),i("p",[t._v("Application plug-ins within a Window Manager are created and acted upon in part by an Application Manager. The Application Manager can facilitate communication between application plug-ins, but formal application-to-application communication should be performed by calls to the Dispatcher. The Application Manager is not normally directly accessible by application plug-ins, instead used by the Window Manager.")]),i("p",[t._v("The following are functions of an Application Manager:")]),t._m(11),t._m(12),i("p",[t._v("When a user clicks an application plug-in's icon on the taskbar, an instance of the application plug-in is started and presented within a Viewport, which is encapsulated in a Window within the Desktop.\nEvery instance of an application plug-in's web content within Zowe is given context and can listen on events about the Viewport and Window it exists within, regardless of if the Window Manager implementation utilizes these constructs visually. It is possible to create a Window Manager that only displays one application plug-in at a time, or to have a drawer-and-panel UI rather than a true windowed UI.")]),i("p",[t._v("When the Window is created, the application plug-in's web content is encapsulated dependent upon its framework type. The following are valid framework types:")]),t._m(13),i("p",[t._v("In the case of the MVD, this framework-specific wrapping is handled by the Plugin Manager.")]),t._m(14),i("p",[t._v("Viewports encapsulate an instance of an application plug-in's web content, but otherwise do not add to the UI (they do not present Chrome as a Window does).\nEach instance of an application plug-in is associated with a viewport, and operations to act upon a particular application plug-in instance should be done by specifying a viewport for an application plug-in, to differentiate which instance is the target of an action. Actions performed against viewports should be done through the Viewport Manager.")]),i("p",[t._v("The following are functions of the Viewport Manager:")]),t._m(15),t._m(16),i("p",[t._v("When you create Angular application plug-ins, they can use injectables to be informed of when an action occurs. iframe application plug-ins indirectly benefit from some of these hooks due to the wrapper acting upon them, but Angular application plug-ins have direct access to these.")]),i("p",[t._v("The following topics describe injectables that application plug-ins can use.")]),t._m(17),t._m(18),i("p",[t._v("Provides the plug-in definition that is associated with this application plug-in. This injectable can be used to gain context about the application plug-in. It can also be used by the application plug-in with other application plug-in framework objects to perform a contextual action.")]),t._m(19),t._m(20),i("p",[t._v("Provides a logger that is named after the application plug-in's plugin definition ID.")]),t._m(21),t._m(22),i("p",[t._v("If present, this variable requests the application plug-in instance to initialize with some context, rather than the default view.")]),t._m(23),t._m(24),i("p",[t._v("Presents hooks that can be subscribed to for event listening. Events include:")]),t._m(25),i("p",[t._v("Fires when the viewport's size has changed.")]),t._m(26),t._m(27),i("p",[t._v("Presents hooks that can be subscribed to for event listening. The events include:")]),t._m(28),t._m(29),t._m(30),i("p",[t._v("An application plug-in can request actions to be performed on the Window through the following:")]),t._m(31)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"virtual-desktop-and-window-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-desktop-and-window-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Virtual desktop and window management")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The Virtual Desktop is a web component of Zowe, which is an implementation of "),e("code",[this._v("MVDWindowManagement")]),this._v(", the interface that is used to create a window manager.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The code for this software is in the "),e("code",[this._v("zlux-app-manager")]),this._v(" repository.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" Other objects and frameworks that can be utilized by application plug-ins, but not related to Window Management, such as application-to-application communication, Logging, URI lookup, and Auth are not described here.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"loading-and-presenting-application-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loading-and-presenting-application-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Loading and presenting application plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Upon loading the MVD, a GET call is made to "),e("code",[this._v("/plugins?type=application")]),this._v(".\nThis returns a JSON list of all application plug-ins that are on the server, which can be accessed by the user. Application plug-ins can be composed of dataservices, web content, or both. Application plug-ins that have web content are presented in the MVD UI.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The MVD has a taskbar at the bottom of the page, where it displays each application plug-in as an icon with a description. The icon that is used, and description presented are based on the application plug-in's "),e("code",[this._v("PluginDefinition")]),this._v("'s "),e("code",[this._v("webContent")]),this._v(" attributes.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"plug-in-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Plug-in management")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Application plug-ins can gain insight into the environment they were spawned in through the Plugin Manager. Use the Plugin Manager to determine whether a plug-in is present before you act upon the existence of that plug-in. When the MVD is running, you can access the Plugin Manager  through "),e("code",[this._v("RocketMVD.PluginManager")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("getPlugin(pluginID: string)\n"),e("ul",[e("li",[this._v("Accepts a string of a unique plug-in ID, and returns the Plugin Definition Object (DesktopPluginDefinition) that is associated with it, if found.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"application-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Application management")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Function")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[i("code",[t._v("spawnApplication(plugin: DesktopPluginDefinition, launchMetadata: any): Promise<MVDHosting.InstanceId>;")])]),i("td",[t._v("Opens an application instance into the Window Manager, with or without context on what actions it should perform after creation.")])]),i("tr",[i("td",[i("code",[t._v("killApplication(plugin:ZLUX.Plugin, appId:MVDHosting.InstanceId): void;")])]),i("td",[t._v("Removes an application instance from the Window Manager.")])]),i("tr",[i("td",[i("code",[t._v("showApplicationWindow(plugin: DesktopPluginDefinitionImpl): void;")])]),i("td",[t._v("Makes an open application instance visible within the Window Manager.")])]),i("tr",[i("td",[i("code",[t._v("isApplicationRunning(plugin: DesktopPluginDefinitionImpl): boolean;")])]),i("td",[t._v("Determines if any instances of the application are open in the Window Manager.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"windows-and-viewports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-and-viewports","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows and Viewports")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("em",[this._v('"angular2"')]),this._v(": The web content is written in Angular, and packaged with Webpack. Application plug-in framework objects are given through @injectables and imports.")]),e("li",[e("em",[this._v('"iframe"')]),this._v(": The web content can be written using any framework, but is included through an iframe tag. Application plug-ins within an iframe can access framework objects through "),e("em",[this._v("parent.RocketMVD")]),this._v(" and callbacks.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"viewport-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#viewport-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Viewport Manager")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Function")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[i("code",[t._v("createViewport(providers: ResolvedReflectiveProvider[]): MVDHosting.ViewportId;")])]),i("td",[t._v("Creates a viewport into which an application plug-in's webcontent can be embedded.")])]),i("tr",[i("td",[i("code",[t._v("registerViewport(viewportId: MVDHosting.ViewportId, instanceId: MVDHosting.InstanceId): void;")])]),i("td",[t._v("Registers a previously created viewport to an application plug-in instance.")])]),i("tr",[i("td",[i("code",[t._v("destroyViewport(viewportId: MVDHosting.ViewportId): void;")])]),i("td",[t._v("Removes a viewport from the Window Manager.")])]),i("tr",[i("td",[i("code",[t._v("getApplicationInstanceId(viewportId: MVDHosting.ViewportId): MVDHosting.InstanceId | null;")])]),i("td",[t._v("Returns the ID of an application plug-in's instance from within a viewport within the Window Manager.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"injection-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#injection-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Injection Manager")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"plug-in-definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-definition","aria-hidden":"true"}},[this._v("#")]),this._v(" Plug-in definition")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("@Inject(Angular2InjectionTokens.PLUGIN_DEFINITION) private pluginDefinition: ZLUX.ContainerPluginDefinition\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logger","aria-hidden":"true"}},[this._v("#")]),this._v(" Logger")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("@Inject(Angular2InjectionTokens.LOGGER) private logger: ZLUX.ComponentLogger\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"launch-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launch-metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" Launch Metadata")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("@Inject(Angular2InjectionTokens.LAUNCH_METADATA) private launchMetadata: any\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"viewport-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#viewport-events","aria-hidden":"true"}},[this._v("#")]),this._v(" Viewport Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("@Inject(Angular2InjectionTokens.VIEWPORT_EVENTS) private viewportEvents: Angular2PluginViewportEvents\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("resized: Subject<{width: number, height: number}>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"window-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-events","aria-hidden":"true"}},[this._v("#")]),this._v(" Window Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("@Inject(Angular2InjectionTokens.WINDOW_ACTIONS) private windowActions: Angular2PluginWindowActions\n")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Event")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[i("code",[t._v("maximized: Subject<void>")])]),i("td",[t._v("Fires when the Window is maximized.")])]),i("tr",[i("td",[i("code",[t._v("minimized: Subject<void>")])]),i("td",[t._v("Fires when the Window is minimized.")])]),i("tr",[i("td",[i("code",[t._v("restored: Subject<void>")])]),i("td",[t._v("Fires when the Window is restored from a minimized state.")])]),i("tr",[i("td",[i("code",[t._v("moved: Subject<{top: number, left: number}>")])]),i("td",[t._v("Fires when the Window is moved.")])]),i("tr",[i("td",[i("code",[t._v("resized: Subject<{width: number, height: number}>")])]),i("td",[t._v("Fires when the Window is resized.")])]),i("tr",[i("td",[i("code",[t._v("titleChanged: Subject<string>")])]),i("td",[t._v("Fires when the Window's title changes.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"window-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Window Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("@Inject(Angular2InjectionTokens.WINDOW_ACTIONS) private windowActions: Angular2PluginWindowActions\n")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Item")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[i("code",[t._v("close(): void")])]),i("td",[t._v("Closes the Window of the application plug-in instance.")])]),i("tr",[i("td",[i("code",[t._v("maximize(): void")])]),i("td",[t._v("Maximizes the Window of the application plug-in instance.")])]),i("tr",[i("td",[i("code",[t._v("minimize(): void")])]),i("td",[t._v("Minimizes the Window of the application plug-in instance.")])]),i("tr",[i("td",[i("code",[t._v("restore(): void")])]),i("td",[t._v("Restores the Window of the application plug-in instance from a minimized state.")])]),i("tr",[i("td",[i("code",[t._v("setTitle(title: string):void")])]),i("td",[t._v("Sets the title of the Window.")])]),i("tr",[i("td",[i("code",[t._v("setPosition(pos: {top: number, left: number, width: number, height: number}): void")])]),i("td",[t._v("Sets the position of the Window on the page and the size of the window.")])]),i("tr",[i("td",[i("code",[t._v("spawnContextMenu(xPos: number, yPos: number, items: ContextMenuItem[]): void")])]),i("td",[t._v("Opens a context menu on the application plug-in instance, which uses the Context Menu framework.")])]),i("tr",[i("td",[i("code",[t._v("registerCloseHandler(handler: () => Promise<void>): void")])]),i("td",[t._v("Registers a handler, which is called when the Window and application plug-in instance are closed.")])])])])}],!1,null,null,null);e.default=a.exports}}]);