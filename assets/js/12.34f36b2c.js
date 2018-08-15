(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{210:function(e,t,i){"use strict";i.r(t);var s=i(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),i("p",[e._v("The URI Broker is an object in the application plug-in web framework, which facilitates calls to the zLUX Application Server by constructing URIs that use the context from the calling application plug-in.")]),e._m(1),i("p",[e._v("The URI Broker is accessible independent of other frameworks involved such as Angular, and is also accessible through iframe. This is because it is attached to a global when within the MVD. For more information, see "),i("router-link",{attrs:{to:"./mvd-desktopandwindowmgt.html"}},[e._v("Desktop and window management")]),e._v(".\nAccess the URI Broker through one of two locations:")],1),i("p",[e._v("Natively:")]),e._m(2),i("p",[e._v("In an iframe:")]),e._m(3),e._m(4),i("p",[e._v("The URI Broker builds different categories of URIs depending upon what the application plug-in is designed to call. Each category is listed below.")]),e._m(5),i("p",[e._v("zLUX dataservices can be based on HTTP (REST) or Websocket. For more information, see "),i("router-link",{attrs:{to:"./mvd-zluxdataservices.html"}},[e._v("zLUX dataservices")]),e._v(".")],1),e._m(6),e._m(7),i("p",[e._v("Returns: A URI for making an HTTP service request.")]),e._m(8),e._m(9),i("p",[e._v("Returns: A URI for making a Websocket connection to the service.")]),e._m(10),i("p",[e._v("Defaults and user storage might exist for an application plug-in such that they can be retrieved through the Configuration Dataservice.")]),i("p",[e._v("There are different scopes and actions to take with this service, and therefore there are a few URIs that can be built:")]),e._m(11),e._m(12),i("p",[e._v("Returns: A URI for accessing the requested resource under the user's storage.")]),e._m(13),e._m(14),i("p",[e._v("Returns: A URI for accessing a specific scope for a given resource.")]),e._m(15),e._m(16),e._m(17),i("p",[e._v("Returns: A URI for getting static content.")]),i("p",[e._v("For more information about the "),i("code",[e._v("web")]),e._v(" directory, see "),i("router-link",{attrs:{to:"./mvd-zluxplugindefandstruct.html#zlux-application-plug-in-filesystem-structure"}},[e._v("zLUX application plug-in filesystem structure")]),e._v(".")],1),e._m(18),i("p",[e._v("Static content and services are accessed off of the root URI of an application plug-in. If there are other points that you must access on that application plug-in, you can get the root:")]),e._m(19),i("p",[e._v("Returns: A URI to the root of the application plug-in.")]),e._m(20),i("p",[e._v("A client can find different information about a server's configuration or the configuration as seen by the current user by accessing specific APIs.")]),e._m(21),e._m(22),i("p",[e._v('Returns: A URI, which when accesseds returns the list of existing plug-ins on the server by the type specified, such as "Application" or "all".')])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"uri-broker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uri-broker","aria-hidden":"true"}},[this._v("#")]),this._v(" URI Broker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"accessing-the-uri-broker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-uri-broker","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing the URI Broker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("window.RocketMVD.uriBroker")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("window.parent.RocketMVD.uriBroker")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Functions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"accessing-an-application-plug-in-s-dataservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-an-application-plug-in-s-dataservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing an application plug-in's dataservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"http-dataservice-uri"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-dataservice-uri","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP Dataservice URI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pluginRESTUri(plugin:ZLUX.Plugin, serviceName: string, relativePath:string): string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"websocket-dataservice-uri"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-dataservice-uri","aria-hidden":"true"}},[this._v("#")]),this._v(" Websocket Dataservice URI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pluginWSUri(plugin: ZLUX.Plugin, serviceName:string, relativePath:string): string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"accessing-application-plug-in-s-configuration-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-application-plug-in-s-configuration-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing application plug-in's configuration resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"standard-configuration-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#standard-configuration-access","aria-hidden":"true"}},[this._v("#")]),this._v(" Standard configuration access")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pluginConfigUri(pluginDefinition: ZLUX.Plugin, resourcePath:string, resourceName?:string): string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"scoped-configuration-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoped-configuration-access","aria-hidden":"true"}},[this._v("#")]),this._v(" Scoped configuration access")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pluginConfigForScopeUri(pluginDefinition: ZLUX.Plugin, scope: string, resourcePath:string, resourceName?:string): string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"accessing-static-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-static-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing static content")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Content under an application plug-in's "),t("code",[this._v("web")]),this._v(" directory is static content accessible by a browser.\nThis can be accessed through:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pluginResourceUri(pluginDefinition: ZLUX.Plugin, relativePath: string): string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"accessing-the-application-plug-in-s-root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-application-plug-in-s-root","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing the application plug-in's root")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pluginRootUri(pluginDefinition: ZLUX.Plugin): string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"server-queries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-queries","aria-hidden":"true"}},[this._v("#")]),this._v(" Server queries")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"accessing-a-list-of-plug-ins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-a-list-of-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing a list of plug-ins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pluginListUri(pluginType: ZLUX.PluginType): string")])])}],!1,null,null,null);t.default=r.exports}}]);