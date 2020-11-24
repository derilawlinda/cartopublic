/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"maintenance": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([15,"common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/assets/javascripts/locale/en.json":
/*!***********************************************!*\
  !*** ./lib/assets/javascripts/locale/en.json ***!
  \***********************************************/
/*! exports provided: common, show, protected_map, forbidden_map, helpers, public_map, account, profile, feedback, back, back-to-dashboard, edit-map, map-settings, more-options, change-privacy, sql-applied, data-source, edit-analysis, add-analysis, back-layers, user, months, assets, operators, builder-activated-notification, builder-onboarding, data-onboarding, analysis-onboarding, style-onboarding, analyses-onboarding, timezones, analyses, analysis-category, form-components, data, components, dataset, editor, notifications, default */
/***/ (function(module) {

module.exports = {"common":{"trial_notification":{"views":{"trial_notification":{"message":"%{trial_days} days left in your trial.","add_payment":"Subscribe now to keep using our platform."}}}},"show":{"title":"Editor","header":{"data_view":"Data View","map_view":"Map View","back":"Back","edit_metadata":"Edit metadata...","edit":"Edit","visualize":"VISUALIZE"}},"protected_map":{"title":"Protected map","content":{"header":"This map is protected with password","placeholder":"Insert your password here","tip":"Contact with the owner in case you want access to it.","error":"Invalid password"}},"forbidden_map":{"title":"Embed error"},"helpers":{"static_header_meta_tags":{"map_created_by":"Map created by %{author} - CARTO"}},"public_map":{"info":{"more":"more","more_from":"More from","more_info":"More info","updated":"Updated","views_pluralize":"1 view |||| %{smart_count} views"},"datasets":{"title":"Datasets in use","dataset_pluralize":"1 dataset |||| %{smart_count} datasets"}},"account":{"title":"Your account | CARTO","flash_messages":{"save_changes":{"success":"Your changes have been saved correctly.","error":"Error updating your account details."}},"views":{"content":{"form_title":"Edit your plan information"},"form":{"username":"Username","subdomain_info":"Subdomain cannot be changed","old_password":"Old password","new_password":"New password","confirm_password":"Confirm password","account_type":"Account type","billing_plan":"Your billing plan","view_details":"View details","multifactor_authentication":"Multi-factor authentication","mfa_enabled":"Enabled","mfa_disabled":"Disabled","mfa_description":"Add an additional layer of security to your account to protect all data you store in CARTO. If you change the actual status you will be logged out and redirected to the login page","connect_external_datasources":"Connect to external data sources","save_changes":"Save changes","delete_account":"Delete account","confirm":"Are you sure?","delete_all":"Delete my account and all my data","email_google":"Your account is linked to your Google account.","errors":{"change_email":"You can change the email if you set a password."}}}},"profile":{"views":{"content":{"title":"Your profile information"},"form":{"first_name":"First name","last_name":"Last name","email":"Email","company_name":"Company Name","role":"Your Role","industry":"Industry","company_employees":"Number of employees","use_case":"Use case","phone":"Phone Number","user_type":"User type","viewer":"VIEWER","read_only":"Read-only access for datasets and maps","builder":"BUILDER","become_builder":"Become a Builder","write_access":"Write access for editing and building datasets and maps","name":"Name","info_public_name":"Other users would reach you by your public name","website":"Website","location":"Location","description":"Your description","twitter":"Twitter username","disqus":"Disqus shortname","disqus_placeholder":"If empty, it will not appear","disqus_notified":"Be notified by new comments in your pages","jobs":"Jobs profile","available_for_hire":"Available for hire","show_banner":"Show a banner in your public profile linked to your email","your_url":"Your URL","save":"Save changes","errors":{"email_not_valid":"Email not valid"}}}},"feedback":"Give us feedback!","back":"Back","back-to-dashboard":"Back to the dashboard","edit-map":"Edit map","map-settings":"Map options","more-options":"More options","change-privacy":"Change map privacy","sql-applied":"SQL query applied","data-source":"Data source","edit-analysis":"Edit analysis","add-analysis":"Add new analysis node","back-layers":"Back to the Layers list","user":{"you":"You"},"months":{"january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December"},"assets":{"maki-icons":{"disclaimer":"<a href='https://github.com/mapbox/maki' target='_blank'>Maki Icons</a>, an open source project by <a href='http://mapbox.com' target='_blank'>Mapbox</a>"}},"operators":{"count":"COUNT","sum":"SUM","avg":"AVG","min":"MIN","max":"MAX"},"builder-activated-notification":{"message":"CARTO Builder has been activated in your account. <a href='https://carto.com/learn/guides' class='onboardingNotification-link'>Learn more</a> about it and let us know what you think or <a href='mailto:builder-support@carto.com' class='onboardingNotification-link'>contact us</a>. Happy mapping!"},"builder-onboarding":{"title":"Welcome to Builder,","description":"Discover the new and exciting analyses you can perform with location intelligence.","take-tour":"Take a tour","edit-map":"Edit your map","toolbar":{"title":"Toolbar","description":"The toolbar provides options to access your dashboard, edit your map, and configure its settings."},"configurator":{"title":"Edit mode","description":"Manage all the components of your map: add layers and widgets, import datasets, customize analyses, and change styles."},"map":{"title":"Map","description":"Your map reflects changes instantly."},"widgets":{"title":"Widgets list","description":"The widgets you add to your map appear directly on your visualization."},"skip":"skip","next":"next"},"data-onboarding":{"title":"Welcome to the Layers list","description":"Analyze, style, and enhance your data with pop-ups and&nbsp;legends.","take-tour":"Take the tour","edit-layer":"Edit layer","layer-options":{"title":"Layer options","description":"Layers can be renamed by double-clicking on the layer name, centered by clicking in the crosshair, and exported through their contextual menu."},"data-tab":{"title":"Data tab","description":"Style, add analysis, pop-ups, and legends to layers. To further explore your data, add widgets."},"sql-editor":{"title":"SQL View","description":"Data layers can be edited and processed by using the SQL view at the bottom of the screen."},"add-geometry":{"title":"Add geometries and switch to dataset view","description":"You can switch between map or data view. In map view, you can add points, lines, and polygons.","edit-layer":"Edit layer"},"exit":"Exit tour","next":"Next"},"analysis-onboarding":{"title":"The Art of Analysis","description":"Build reproducible workflows for analyzing and explaining your data. Analyses turn your maps into Location Intelligence apps.","description-list":{"item1":"Different analyses can be chained","item2":"Analyses are dynamic. When the data changes, the analysis is&nbsp;refreshed.","item3":"The original data is not modified by the analysis workflow.","item4":"Some analysis queries add calculated results to columns in your dataset."},"done":"Done","add-analysis":"Add analysis"},"style-onboarding":{"title":"Style this map!","description":"Apply aggregation styling to maps and define options by geometry attributes or by a column value.","aggregation":{"title":"How would you like to aggregate your data?","description":"Map types are called \"Aggregation\". Add Torque, Heatmap, and other aggregation styles to data."},"style":{"title":"Make it beautiful!","description":"Use these options to style your data in beautiful ways. For example, you can create thematic maps by altering the FILL option by value.","short-description":"Use these options to style your data in beautiful ways."},"cartocss":{"title":"Dress it up with CartoCSS","description":"Further style data by using the CartoCSS view at the bottom of the screen."},"take-tour":"Take the tour","style-layer":"Style layer","exit":"Exit tour","next":"Next"},"analyses-onboarding":{"placeholders":{"layer-name":"NAME OF THE LAYER","clusters":"CLUSTERS","method":"METHOD","percentage":"PERCENTAGE"},"done":"Done","finished":"has finished","style-analysis":"Style this analysis","read-more":"Read more in documentation","learn-more":"Learn more","no-new-columns":"No new columns were created.","geometries-updated":"The geometries in your table were updated","new-column-added":"A new column has been added to your dataset.","new-columns-created":"New columns have been created as a new dataset.","new-column-included":"A new column has been included with your original data.","new-columns-included":"New columns has been included with your original data.","new-columns-included-based-on-input":"New columns have been included with your original data based on the columns chosen for the input.","sampling":{"title":"Subsample Percent of Rows","description":"A sample of your original table was randomly selected to give approximately a percentage of the rows from your base dataset."},"merge":{"title":"Add Columns from Second Dataset","description":"This analysis performed a columnar JOIN in order to get columns from two different tables."},"intersection":{"title":"Select Points in Polygons","description":"This analysis performs a spatial intersection, returning only the rows from the target layer which intersect with geometries in the base layer.","source-cartodb-id":"This number represents the cartodb_id of the base geometry."},"area-of-influence":{"title":"Create Travel or Distance Buffers","description":"Create Travel or Distance Buffers creates polygons according to the parameters set by the user.","the-geom":"This column was updated to show the travel or distance buffers requested."},"aggregate-intersection":{"title":"Intersect and Aggregate","description":"This operation performs a spatial intersection and aggregates the geometry values from the target layer that intersect with the geometry of the base layer.","count-vals-density":"This column is added if COUNT was chosen as the aggregation operation.","extra-column":"This column is added if {operation_type} is chosen with column {column_name}."},"filter":{"title":"Filter by Column Value","description":"Filter by Column Value allows you to quickly narrow down the total data you display on a map or input into an analysis node."},"filter-by-node-column":{"title":"Link Second Layer","description":"Link Second Layer allows you to filter the data in your layer by propagating the filters in the target layer. Now if you filter on widgets added to the first node, the results in the second node would be also filtered."},"spatial-markov-trend":{"title":"Predict Trends and Volatility","trend":"The normalized trend for each geometry.","trend_up":"The probability that a geometry's value will move to a higher class.","trend_down":"The probability that a geometry's value will move to a lower class.","volatility":"A measure of the potential for a geometry to possess values in other classes.","description":"Trends and volatility are calculated based on the time series data input. Trends calculated from inputs with a longer history are more precise. Inputs for the time column should equally spaced (e.g., all one week/month/year apart)."},"moran":{"title":"Detect Outliers and Clusters","description":"Detect Outliers and Clusters finds areas in your data where clusters of high values or low values exist, as well as areas which are dissimilar from their neighbors.","quads":"Classification of the geometry from the analysis.","significance":"The statistical significance of the geometry's classification of one of four quadrant types.","moran":"The local statistic calculated from the Moran's I analysis for each geometry/value in the dataset.","vals":"Value used in analysis. If a denominator is entered, this is the 'standardized' rate (centered on mean, normalized by standard deviation)."},"kmeans":{"title":"Calculate Clusters of Points","cluster-no":"A numeric identifier for each cluster in your dataset. Values start at 1 and go up to the %{clusters} clusters you requested (or max rows if less).","description":"Point clustering uses k-means to calculate a predefined number of clusters from your data."},"data-observatory-measure":{"title":"Enrich from Data Observatory","custom-column":"This column contains the data requested from the Data Observatory.","description":"The Data Observatory enrichment is the result of the geometry location and the measure requested."},"data-observatory-multiple-measures":{"title":"Enrich from the Data Observatory","custom-columns":"These columns contain the data requested from the Data Observatory.","description":"The Data Observatory enrichment is the result of the geometry location and the measures requested."},"connect-with-lines":{"title":"Create Lines from Points","description":"Create Lines from Points using a single point, column values, or a second layer.","the-geom":"This column was updated to be lines according to the method chosen.","line-sequential":"This analysis creates a line by connecting all points in the dataset in a specified order.","line-source-to-target":"Link a source point to a target point based on a shared attribute.","line-to-single-point":"Connect the coordinate from latitude and longitude columns to the point geometry (`the_geom`) in your dataset."},"group-points":{"title":"Create Polygons from Points","the-geom":"This column was updated to polygons encompassing the base points.","category":"This will be the category over which the polygons were calculated.","description":"Group points into polygons to create new polygons."},"georeference":{"title":"Geocode","the-geom":"This column, which stores the geographic information in your dataset, has been updated to reflect the boundaries or locations from the inputs specified.","description":"Geocoding data is a service that uses information from many sources to get the geographical information associated with latitude/longitude columns, city names, postal codes, administrative boundaries, IP addresses, or street addresses."},"centroid":{"title":"Create Centroids of Geometries","description":"Centroids are calculated from all, groups, or singular geometries. Using the optional parameters of Categorize, Weight, and Operation, you can change how they are calculated and what information the result will contain.","the-geom":"Point geometries representing the centroid(s) of your base layer.","aggregated-value":"Stores the aggregate value for each centroid.","non-aggregated-value":"Contains the count of features considered for each centroid.","category":"Stores the category value for each centroid from the base layer."},"closest":{"title":"Find Nearest","description":"Select points from second dataset nearest to the geometries in current layer.","source_cdb_id":"This column has been created with the related points id from the base layer.","the-geom":"This column has been updated with the target table geometries."}},"timezones":{"international-date-line-west":"International Date Line West","midway-island-samoa":"Midway Island, Samoa","hawaii":"Hawaii","alaska":"Alaska","pacific-time-us-and-canada-tijuana":"Pacific Time (US and Canada); Tijuana","mountain-time-us-and-canada":"Mountain Time (US and Canada)","chihuahua-la-paz-mazatlan":"Chihuahua, La Paz, Mazatlan","arizona":"Arizona","central-time-us-and-canada":"Central Time (US and Canada)","saskatchewan":"Saskatchewan","guadalajara-mexico-city-monterrey":"Guadalajara, Mexico City, Monterrey","central-america":"Central America","eastern-time-us-and-canada":"Eastern Time (US and Canada)","indiana-east":"Indiana (East)","bogota-lima-quito":"Bogota, Lima, Quito","atlantic-time-canada":"Atlantic Time (Canada)","caracas-la-paz":"Caracas, La Paz","santiago":"Santiago","newfoundland-and-labrador":"Newfoundland and Labrador","brasilia":"Brasilia","buenos-aires-georgetown":"Buenos Aires, Georgetown","greenland":"Greenland","mid-atlantic":"Mid-Atlantic","azores":"Azores","cape-verde-islands":"Cape Verde Islands","gmt-dublin-edinburgh-lisbon-london":"Dublin, Edinburgh, Lisbon, London","casablanca-monrovia":"Casablanca, Monrovia","canary-islands":"Canary Islands","belgrade-bratislava-budapest-ljubljana-prague":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","sarajevo-skopje-warsaw-zagreb":"Sarajevo, Skopje, Warsaw, Zagreb","brussels-copenhagen-madrid-paris":"Brussels, Copenhagen, Madrid, Paris","amsterdam-berlin-bern-rome-stockholm-vienna":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","west-central-africa":"West Central Africa","bucharest":"Bucharest","cairo":"Cairo","helsinki-kiev-riga-sofia-tallinn-vilnius":"Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius","athens-istanbul-minsk":"Athens, Istanbul, Minsk","jerusalem":"Jerusalem","harare-pretoria":"Harare, Pretoria","moscow-st-petersburg-volgograd":"Moscow, St. Petersburg, Volgograd","kuwait-riyadh":"Kuwait, Riyadh","nairobi":"Nairobi","baghdad":"Baghdad","tehran":"Tehran","abu-dhabi-muscat":"Abu Dhabi, Muscat","baku-tbilisi-yerevan":"Baku, Tbilisi, Yerevan","kabul":"Kabul","ekaterinburg":"Ekaterinburg","islamabad-karachi-tashkent":"Islamabad, Karachi, Tashkent","chennai-kolkata-mumbai-new-delhi":"Chennai, Kolkata, Mumbai, New Delhi","kathmandu":"Kathmandu","astana-dhaka":"Astana, Dhaka","sri-jayawardenepura":"Sri Jayawardenepura","almaty-novosibirsk":"Almaty, Novosibirsk","yangon-rangoon":"Yangon Rangoon","bangkok-hanoi-jakarta":"Bangkok, Hanoi, Jakarta","krasnoyarsk":"Krasnoyarsk","beijing-chongqing-hong-kong-sar-urumqi":"Beijing, Chongqing, Hong Kong SAR, Urumqi","kuala-lumpur-singapore":"Kuala Lumpur, Singapore","taipei":"Taipei","perth":"Perth","irkutsk-ulaanbaatar":"Irkutsk, Ulaanbaatar","seoul":"Seoul","osaka-sapporo-tokyo":"Osaka, Sapporo, Tokyo","yakutsk":"Yakutsk","darwin":"Darwin","adelaide":"Adelaide","canberra-melbourne-sydney":"Canberra, Melbourne, Sydney","brisbane":"Brisbane","hobart":"Hobart","vladivostok":"Vladivostok","guam-port-moresby":"Guam, Port Moresby","magadan-solomon-islands-new-caledonia":"Magadan, Solomon Islands, New Caledonia","fiji-islands-kamchatka-marshall-islands":"Fiji Islands, Kamchatka, Marshall Islands","auckland-wellington":"Auckland, Wellington","nuku-alofa":"Nuku'alofa"},"analyses":{"data-observatory-multiple-measures":{"title":"Enrich from Data Observatory","short-title":"Data Observatory"},"connect-with-lines":{"title":"Create Lines from Points","short-title":"Create Lines"},"georeference":{"title":"Geocode","short-title":"Geocode"},"data-observatory-measure":{"title":"Enrich from Data Observatory","short-title":"Data Observatory","age-and-gender":"Age and Gender","boundaries":"Boundaries","education":"Education","employment":"Employment","families":"Families","housing":"Housing","income":"Income","language":"Language","migration":"Migration","nationality":"Nationality","population-segments":"Population segments","race-and-ethnicity":"Race and Ethnicity","religion":"Religion","transportation":"Transportation","filters":{"label":"Filters","applied":{"single":"1 filter applied","multiple":"%{filters} filters applied"}},"area":"Per sq km","count":{"suggested":"Suggested measurements","search":"%{items} results"},"search-by-name":"Search by name...","errors":{"max-items":"Max items reached","measurement-required":"Measurement is required","measurement-twice":"Two or more measurements are equal","column-name-mismatch":"Segment names and column names don't match","invalid-selection":"Invalid DO selection","mandatory-region":"Region is mandatory"}},"merge":{"title":"Add Columns from Second Dataset","short-title":"Add Columns"},"filter-by-node-column":{"title":"Link Second Layer","short-title":"Link Layer"},"centroid":{"title":"Create Centroids of Geometries","short-title":"Centroid"},"group-points":{"title":"Create Polygons from Points","short-title":"Create Polygons"},"convex-hull":{"title":"Create Polygons from Points","short-title":"Create Polygons"},"concave-hull":{"title":"Concave Hull","short-title":"Create Polygons"},"bounding-box":{"title":"Bounding Box","short-title":"Bounding Box"},"bounding-circle":{"title":"Bounding Circle","short-title":"Bounding Circle"},"area-of-influence":{"title":"Create Travel or Distance Buffers","short-title":"Buffer"},"filter-intersection":{"title":"Select Points in Polygons","short-title":"Select Points"},"aggregate-intersection":{"title":"Intersect and Aggregate","short-title":"Intersect"},"filter":{"title":"Filter by Column Value","short-title":"Filter Value"},"sampling":{"title":"Subsample Percent of Rows","short-title":"Subsample"},"kmeans":{"title":"Calculate Clusters of Points","short-title":"Clusters"},"moran-cluster":{"title":"Detect Outliers and Clusters","short-title":"Outliers"},"spatial-markov-trend":{"title":"Predict Trends and Volatility","short-title":"Trends"},"find-nearest":{"title":"Find Nearest","short-title":"Nearest"},"source":"Source","routing":{"short-title":"Routing"},"deprecated-sql-function":{"title":"SQL Function","short-title":"SQL Function"}},"analysis-category":{"all":"All","analyze-predict":"Analyze and predict","create-clean":"Create and clean","data-transformation":"Transform"},"form-components":{"editors":{"radio":{"true":"True","false":"False","null":"Null"},"style":{"select-by-column":"Select by column"},"fill":{"customize":"Custom color set","quantification":{"title":"Quantification","methods":{"jenks":"Jenks","equal":"Equal Interval","headtails":"Heads/Tails","quantiles":"Quantiles","category":"Category"}},"bins":"Buckets","input-color":{"solid":"Solid","value":"By value","img":"Img","select-color":"Select color"},"input-number":{"fixed":"Fixed","solid":"Solid","by-value":"By value"},"input-ramp":{"buckets":"bucket |||| buckets"},"input-qualitative-ramps":{"null":"null","others":"Others"},"image":{"recently-title":"Most used","none":"None","show-all":"Show full collections"},"error":"There was an error"},"slide":{"no-values":"No values"}}},"data":{"import-model":{"error-title":"There was an error","error-starting-import":"Unfortunately, there was an error starting the import"},"upload-model":{"invalid-import":"Invalid import","one-file":"Unfortunately, only one file is allowed per upload","file-defined":"File name should be defined","file-extension":"Unfortunately, this file extension is not allowed","file-size":"Unfortunately, the size of the file is bigger than your remaining quota","visualization-id":"The remote visualization id was not specified","remote-file-size":"Unfortunately, the size of the remote dataset is bigger than your remaining quota","url-invalid":"Unfortunately, the URL provided is not valid","error-happened":"There was an error","connection-error":"Unfortunately, there was a connection error","twitter-dates-invalid":"Twitter dates are not valid","twitter-dates-empty":"Twitter dates are empty","twitter-categories-invalid":"Twitter categories are not valid","twitter-data":"Twitter data is empty","dataset-copy-undefined":"Dataset copy is not defined","query-undefined":"Query is not provided"},"analysis-definition-node-model":{"validation":{"missing-required":"Required","invalid-source":"Invalid source","invalid-value":"Invalid value","invalid-enum":"Invalid value, must be any of %{expectedValues}"}}},"components":{"geocoding":{"geocoding-error-details":{"close":"close","description":"There was a problem geocoding your data","title":"Geocoding Error","try-again":"Please try again and if the problem persists, <a href='mailto:support@carto.com?subject=Geocoding error with id:%{id}'>contact us</a> with your username and the following code:","view-dataset":"view dataset"},"geocoding-success-detail":{"amount-charged":"<strong>$%{price}</strong> will be charged to your account","credits-consumed":"You have consumed all your credits during this billing cycle, price is $%{price} / 1,000 extra credits.","description":"We've successfully geocoded <%- realRowsFormatted %> <%- geometryType %> of <%- processableRowsFormatted %>. |||| We've successfully geocoded <%- realRowsFormatted %> <%- geometryType %>s of <%- processableRowsFormatted %>.","explanation":"Rows that are not geocoded could have errors in their column values, or don’t exist in our data. Try geocoding again and check the 'override all values' to try again.","no-extra-charge":"No extra charges have been done","remainingQuotaFormatted":"You still have %{remainingQuotaFormatted} credits left for this month.","title":"Data geocoded","try-again":"Unsuccessful rows don't count against your quota, so we encourage you to take a look and try again.","view-dataset":"view dataset"},"geocoding-no-result-details":{"close":"close","description":"These rows contained empty values or perhaps we just didn't know what the values meant. We encourage you to take a look and try again.","title":"No rows were geocoded","view-dataset":"view dataset"}},"background-importer":{"background-importer-item":{"completed":"completed","error-connecting":"<span class='u-errorTextColor'>Error connecting</span> %{name}","from":"from","show":"show"},"warnings-details":{"continue-btn":"Continue","find-connected-datasets":"You can find all the connected datasets under the datasets section.","no-more-datasets":"No more than %{maxTablesPerImport} datasets can be imported from a single file.","unable-to-import-datasets":"Unable to import all datasets in file"},"partial-import-details":{"find-connected-datasets":"You can find all the connected datasets under the datasets section.","continue-btn":"Continue","too-many-datasets":"NOTE: The file you uploaded contained too many datasets. No more than %{maxTablesPerImport} datasets can be imported from a single file.","unable-to-import-as-layers":"Unable to add all imported datasets as layers","upgrade-your-account":"<a href='https://carto.com/pricing/'>Upgrade your account</a> to add more than %{userMaxLayers} layers to your maps."},"connector-warning-details":{"continue-btn":"Continue","too-many-rows":"You may have reached the maximum limit.","unable-to-import-all-rows":"For a database connector import, the number of rows allowed is %{maxRowsPerConnectorImport}. Some of your data may not be imported."},"error-details":{"check-errors":"Check errors","check-url":"Check that the URL you provided is OK","close":"close","dont-panic":"Don’t panic, here's some info that might help","remote-server-code":"The remote server returned a <span class='ErrorDetails-itemTextStrong'>%{httpResponseCode}</span> code.","send-us-the-error-code":"Persisting error? Please <a href='mailto:support@carto.com'>send us</a> your username and the following code","unknown-error":"An unknown error has happened"},"upgrade-errors":{"8001":{"description":"Remove some of your datasets to gain available space or upgrade your account","info":"Keep your data and get a larger quota by upgrading your plan","title":"Your quota has run out"},"8002":{"description":"You have reached the limit of datasets for your plan","info":"Remove some of your datasets or upgrade your account to get unlimited datasets","title":"Your dataset couldn't be created"},"8005":{"description":"Remove any layer or upgrade your account","info":"Keep your maps and get more layer count quota by upgrading your plan","title":"You have reached your layer count limit"},"8007":{"description":"You have reached the limit of public maps for your plan","info":"Make some of your maps private or upgrade your account to get unlimited public maps","title":"Your map couldn't be created or updated"},"upgrade":"upgrade"},"twitter-import-details":{"new-type-created":"We've created a new dataset containing a total of %{datasetTotalRowsFormatted}<br/>tweet%{tweetPlural} with your search terms","credit-left":"You still have %{availableTweetsFormatted} credit left for this billing cycle.","credits-left":"You still have %{availableTweetsFormatted} credits left for this billing cycle.","no-more-credits":"You have consumed all your credits during this billing cycle (price is $%{blockPriceFormatted}/%{blockSizeFormatted} extra credits).","twitter-import-title":"Your Twitter dataset is created","tweet-cost":{"free":"No extra charges have been applied","paid":"$%{tweetsCostFormatted} will be charged to your account"},"errors":{"no-results":"Your search query was correct but returned no results, \n please try with a different set of parameters before running it again"}},"background-geocoding-item":{"geocoded":"%{realRowsFormatted}/%{processableRowsFormatted} row geocoded… |||| %{realRowsFormatted}/%{processableRowsFormatted} rows geocoded…","geocoded-by-lat-lng":"Geocoded by latitude and longitude","geocoding":"Geocoding %{tableName} dataset…","show":"show","rows-geocoded":{"without-dataset":"%{realRowsFormatted} row geocoded |||| %{realRowsFormatted} rows geocoded","in-dataset":"%{realRowsFormatted} row geocoded in %{tableName} dataset|||| %{realRowsFormatted} rows geocoded in %{tableName} dataset"},"errors":{"no-rows-geocoded":{"without-dataset":"No rows geocoded","in-dataset":"No rows geocoded in %{tableName} dataset"},"geocoding-layer":"Ouch! There was an error geocoding %{tableName} layer"}},"background-import-limit":{"hurry":"In a hurry? <a href='%{upgradeUrl}'>Upgrade your account</a> to import several files at a time","one-file":"Unfortunately, you can only import up to %{importQuota} files at the same time"},"free-trial":"Get a %{days} day free trial","connecting":"Connecting","dataset":"dataset…","geocoding":"Geocoding","working":"Working…"},"likes-pluralize":"like |||| likes","custom-list":{"placeholder":"Search by %{typeLabel}","no-items":"There are no %{typeLabel} items","no-results":"No %{typeLabel} results found with '%{query}'","add-custom-result":"Add custom value"},"datepicker":{"dates-placeholder":"Choose your dates","get-last":"Get last","hour":"hour","min":"min","from":"from","to":"to","or":"or","days-pluralize":"1 day |||| %{smart_count} days","weeks-pluralize":"1 week |||| %{smart_count} weeks","hours-pluralize":"hour week |||| %{smart_count} hours","gmt-convertion":"Date will be converted to GMT +0","invalid-date":"Invalid date"},"taglist":{"none":"No tags","placeholder":"Add tags"},"pagination-search":{"filter":{"search":"Search","placeholder":"Search by username or email"},"loading":{"title":"Loading..."},"error":{"title":"Error","desc":"Oops there was an error."},"no-results":{"title":"Oh! No results","desc":"Unfortunately we could not find anything with these parameters"}},"modals":{"editor-vis-warning":{"title":"You are about to open an Editor map with the new Builder","explanation":"Builder offers an easy-to-use and intuitive drag and drop functionality to analyze and visualize your data. However, some of the old Editor features, such as overlays, are not currently available in Builder.","question":"Opening your map in Builder may cause the loss of any feature not supported yet. Are you sure you want to continue?","go-back":"No, go back to dashboard","open":"Yes, open with Builder","duplicate":"duplicate and open with Builder","opening-title":"Opening %{name} with Builder"},"add-basemap":{"modal-title":"Add a custom basemap","modal-desc":"Select from these great resources","adding-basemap":"Adding new basemap…","add-basemap-error":"Could not add basemap","add-btn":"Add basemap","cancel-btn":"Cancel","validating":"Validating…","saving":"Saving layer…","fetching":"Fetching layers…","get-layers":"Get layers","xyz":{"insert":"Insert your XYZ URL","enter":"Enter a URL","not-valid":"Insert a valid XYZ URL","eg":"E.g.","tms":"TMS","couldnt-validate":"We couldn't validate this. If you're sure it contains data click \"add basemap\""},"mapbox":{"insert":"Add Mapbox Style basemap","enter":"Mapbox Style URL","error":"Error retrieving your basemap. Please check your Mapbox URL.","invalid":"This URL is not valid."},"wms":{"insert":"Insert your WMS/WMTS URL","invalid":"The URL is either invalid or contains unsupported projections","see-docs":"see docs","oh-no":"Oh! No results","unfortunately":"Unfortunately, we couldn't find a layer that matched your search term","tables-pluralize":"table |||| tables","placeholder":"%{layersFoundCount} %{layersFoundCountPluralize} found, %{layersAvailableCount} %{layersAvailableCountPluralize} available"},"tilejson":{"insert":"Insert your TileJSON URL","invalid":"Invalid URL, please make sure it is correct"},"nasa":{"select":"Select a date from which you want a NASA Worldview basemap","day":"Day","night":"Night","cant-select":"You can't select a date in night mode"}},"create-dialog":{"creating-map":"Creating map"},"export-data":{"title":"Export data","desc":"Select the preferred file format","no-geometry":"To download any geospatial format like SHP, KML or GeoJSON don't forget to select the_geom on your query.","loading":{"geometry":"Checking geometries...","preparing":"Preparing content..."},"errors":{"title":"There was an error","geometry-error":"We can't read data geometries","unknown":"An error occurred"},"cancel":"Cancel","download":"Download"},"maps-metadata":{"modal-title":"Map metadata","modal-desc":"Edit the attributes of your map","back-btn":"GO BACK","save-btn":"Save","cancel-btn":"Cancel","form":{"name":"Map Name","name-placeholder":"Type your name here","description":"Description","description-placeholder":"Type your description here","tags":"Tags","markdown":"Markdown supported"},"validation":{"error":{"name":"Name can't be blank"}},"error":{"title":"We couldn't save your data","subtitle":"We had an error trying to save your data: <span class='CDB-Text is-semibold'>%{error}</span>"},"loading":"Saving your data...","success":"<span class='CDB-Text is-semibold'>Metadata</span> for %{name} map <span class='CDB-Text is-semibold'>was saved</span>."},"dataset-metadata":{"modal-title":"Dataset metadata","modal-desc":"Edit the attributes of your dataset","back-btn":"GO BACK","save-btn":"Save","cancel-btn":"Cancel","form":{"name":"Dataset Name","name-placeholder":"Type your name here","description":"Description","description-placeholder":"Type your description here","attributions":"Attributions","attributions-placeholder":"Type your attributions here","tags":"Tags","source":"Source","source-placeholder":"Enter the source of the data","license":"License","markdown":"Markdown supported"},"validation":{"error":{"name":"Name can't be blank"}},"error":{"title":"We couldn't save your data","subtitle":"We had an error trying to save your data: <span class='CDB-Text is-semibold'>%{error}</span>"},"loading":"Saving your data...","success":"<span class='CDB-Text is-semibold'>Metadata</span> for %{name} dataset <span class='CDB-Text is-semibold'>was saved</span>."},"publish":{"done-btn":"Done","update-btn":"Update","publish-btn":"Publish","publishing-btn":"Publishing","updating-btn":"Updating","menu":{"share":"Share with colleagues","publish":"publish"},"privacy":{"privacy":"privacy","cta":{"title":"Want some privacy?","desc-trial":"Check our plans with 14 days trial","desc-notrial":"Upgrade your account!"},"public":{"type":"PUBLIC","title":"Public","body":"Everyone can view your table and download it"},"link":{"type":"LINK","title":"Public—with link","body":"Only the people with a shared link can view the data"},"password":{"type":"PASSWORD","title":"Public—with password","body":"Set a password and share only with specific people","placeholder":"Type your password"},"private":{"type":"PRIVATE","title":"Private","body":"Nobody can access this dataset"},"error":{"title":"We couldn't save your data","subtitle":"We had an internal error trying to save your data. We recommend you try again."},"upgrade":{"title":"Interested in sharing within your organization?","desc":"%{contact} to try one of our Enterprise plans","contact":"Contact us","mail":"sales@carto.com"},"loading":"Saving your data..."},"share":{"published":"Published %{when}","unpublished":"Never published.","last-published":"Last updated %{date}","unpublished-header":"Click on Publish to start sharing your map on the web","unpublished-subheader":"From the moment you click on publish, you will need to use this window to update your changes on the public version.","upgradeLabel":"Upgrade","upgradeLink":"https://carto.com/pricing/#pricing-standard","upgrade":"%{upgradeLink} to share with your colleagues?","private":"PRIVATE","get-link":{"title":"Get the link","body":"Send to your friends, coworkers, or post it in your social networks.","link":"","copy":"COPY","select":"SELECT","private":{"body":"Your map is %{private} Change privacy to get the link"}},"embed":{"title":"Embed it","body":"Insert your map into your blog, website, or simple application.","link":"Get a simple URL.","copy":"COPY","select":"SELECT","private":{"body":"Your map is %{private} Change privacy to embed map"}},"cartodbjs":{"title":"CARTO.js","body":"Add your map to your applications using this URL.","link":"Read more.","copy":"COPY","select":"SELECT"},"mobile-sdk":{"title":"CARTO Mobile SDK","body":"Add your map to your native mobile applications using this line of code.","link":"Read more.","copy":"COPY","select":"SELECT"},"error":{"title":"We couldn't save your data","subtitle":"We had an internal error trying to save your data. We recommend you try again."},"loading":"Saving your data...","organization":{"title":"Default settings for your Organization","desc":"New users will have this permission"},"role":{"viewer":"Viewer","builder":"Builder"},"tooltip":{"group":"Access is inherited from group %{name}","org":"Access is inherited from organization"},"toggle":{"read":"Read","write":"Write"},"add-people":"Add people"}},"assets-picker":{"browse":"Browse","delete-image":"Delete image","delete-images":"Delete images","deselect-all":"Deselect all","drag-and-drop":"Drag & drop your file","error-desc":"Please, go back and try again. If the problem persists contact us at <a href='mailto:support@carto.com'>support@carto.com</a>","go-back":"Go back","incorrect-url":"Error. Your URL doesn’t look correct.","loading":"Loading…","or":"or","select-all":"Select all","submit":"submit","upload-desc":"Paste a URL or select a file like JPG, GIF, PNG, SVG","upload-file-url":"Upload a file or a URL"},"add-asset":{"icons":"Icons","modal-desc":"or just use our nice selection","modal-title":"Select marker image","set-image":"Set image","upload-file":"Upload file","upload-asset":"Upload asset","upload-image":"Upload your image","your-uploads":"Your uploads","organization-uploads":"Organization uploads"},"add-analysis":{"modal-title":"Add a new analysis","modal-desc":"Select the analysis you want to add","loading-title":"Loading options","add-btn":"Add analysis","disabled-option-desc":"Your layer's geometries are %{simpleGeometryType} and this analysis needs %{requiredInputGeometries}.","geometry-types":{"point":"points","point,polygon":"points or polygons","polygon,point":"points or polygons"},"unknown-geometry-type":"unknown","more-info":"More info","option-types":{"connect-with-lines":{"title":"Create Lines from Points","desc":"Create lines from points using a single point, column values, or a second layer."},"group-points":{"title":"Create Polygons from Points","desc":"Create polygons from points using convex hulls, concave hulls, bounding circles or bounding boxes."},"aggregate-intersection":{"title":"Intersect and Aggregate","desc":"Find overlapping geometries from a second layer and aggregate its values in the current layer."},"area-of-influence":{"title":"Create Travel/Distance Buffers","desc":"Use travel time or distance to create buffers around a point or polygon."},"georeference":{"title":"Geocode","desc":"Use street addresses, city names, or other location text to create point geometries."},"filter-intersection":{"title":"Select Points in Polygons","desc":"Select points from a second dataset that intersect the current polygon layer."},"filter":{"title":"Filter by Column Value","desc":"Keep or discard rows with a selected column value."},"merge":{"title":"Add Columns from 2nd Dataset","desc":"Join a second dataset to current layer using a shared column value."},"moran-cluster":{"title":"Detect Outliers and Clusters","desc":"Use Moran's I to select geometries where values are spatially clustered and adjacent outliers.","high-low":"High-Low (HL)","high-high":"High-High (HH)","low-high":"Low-High (LH)","low-low":"Low-Low (LL)"},"kmeans":{"title":"Calculate Clusters of Points","desc":"Augment with cluster_no column to spatially separate points into a specified number of groups."},"centroid":{"title":"Create Centroids of Geometries","desc":"Create a direct or weighted centroid grouped by all rows or by categories from current layer."},"filter-by-node-column":{"title":"Link Second Layer","desc":"Use a shared column to link layers so second layer's widgets filter both."},"sampling":{"title":"Subsample Percent of Rows","desc":"Subsample the rows in a dataset based on a specified percent."},"spatial-markov-trend":{"title":"Predict Trends and Volatility","desc":"Predict probability of trends from a sequence of data across columns, using spatial Markov chains."},"data-observatory-measure":{"title":"Enrich from Data Observatory","desc":"Add new columns with contextual data such as demographic and economic measures."},"deprecated-sql-function":{"title":"SQL Function","desc":"Run your custom SQL function"}}},"add-widgets":{"modal-title":"Add new widgets","modal-desc":"Select the widgets you want to add","continue-btn":"Continue","loading-title":"Loading columns","tab-pane":{"histogram-label":"Histogram","category-label":"Category","formula-label":"Formula","time-series-label":"Time-series"},"percentage-in-top-cats":"% in top 10 cat","time-series-no-option-title":"None","time-series-no-option-desc":"This option won't show your time-series widget"},"add-layer":{"modal-title":"Add a new layer","modal-desc":"Select an existing dataset or connect a new one","navigation":{"search":"Search","search-placeholder":"by name, description, or :tag","connect-dataset":"Connect dataset","shared-with-you":"Shared with you","data-library":"Data library","create-empty-map":"Create empty map","create-empty-dataset":"Create empty dataset","create-empty-addLayer":"Add an empty layer","your-datasets":"Your datasets"},"create-loading-title":"Creating an empty dataset…","adding-new-layer":"Adding new layer…","add-layer-error":"Could not add layer","imports":{"ask-for-demo":"ask for demo","contact-us":"Contact us","connector":"connector","demo-email-title":"I am interested in the %{name} connector","demo-email-desc":"Hi, I am interested in testing the %{name} connector. Please contact me to schedule a demo of this feature.","tab-options-error":{"no-key":"%{name} key is not specified and the panel can't be enabled","not-allowed":"%{name} data source is not available for your plan. Please upgrade.","limits-reached":"You've reached the limits for your account. Please upgrade.","no-credits":"You've reached the available %{name} credits for your account this month."},"member-pluralize":"member |||| members","item-pluralize":"item |||| items","form-import":{"browse":"Browse","drag-and-drop":"Drag & drop your file","error-desc":"Error. Your URL doesn’t look correct.","format":"Format","or":"or","title":"Enter a URL","desc":"Paste a URL and start the import","submit":"submit"},"header-import":{"import-url":"Import your data from a %{brand} URL","file-selected":"File selected","paste-url":"Paste a URL %{fileEnabled} ","select-a-file":"or select a file such as CSV, XLS, ZIP, KML, GPX, GPKG, FGDB,","see-all-formats":"see all formats","sync-enabled":"Keep it synchronized with the source","sync-disabled":"Sync options are not available","type-selected":"%{brand} selected","type-import":"%{brand} import","upload-file-url":"Upload a file or a URL |||| Upload a URL"},"service-import":{"and":"and","account-connected":"Account connected","connect-with":"Connect with %{title}","choose":"Choose","connect":"Connect","found-in":"%{size} %{pluralize} found in %{title}","item-selected":"Item selected","many-more-formats":"many more formats","no-results-title":"Oouch! There are no results","no-results-desc":"We haven't found any valid file from your account","state-idle-login":"Login to your account and select any item.","state-error":"We are sorry that you can’t connect to your %{title} account. Be sure you have any pop-up blockers deactivated for this website.","state-token":"Checking Token.","state-oauth":"Requesting oAuth.","state-retrieving":"A list of your %{title} files will be displayed in a moment.","state-selected-sync":"You can choose when to sync the file.","state-selected-instagram":"A map containing all your geocoded photos will be created","state-selected-no-sync":"Sync options are not available.","supported":"supported","try-again":"Try again"},"selected-state":{"sync-my-data":"Sync my data","never":"Never","every-hour":"Every hour","every-day":"Every day","every-week":"Every week","every-month":"Every month","free-trial":"%{days} day free trial","more-features":"more features","upgrade-desc":"Upgrade your account to get sync options and %{features}","upgrade":"upgrade"},"twitter":{"category":"Category","credits-consumed":"Twitter credits for this period consumed - %{extraTweets} will be charged","credits-left":"%{per}% of your %{remainingFormatted} Twitter credits left","credits-no-limit":"No limits - %{extraTweets} will be charged","extra-tweets":"extra tweets","fallback-title":"Enable the %{brand} connector","fallback-desc":"The %{brand} connector allows you to map %{brand} data activity related to your brand, event, or any term you may be interested in.","from-to":"From / to","terms-desc":"Enter up to four search terms using the category fields.","terms-placeholder":"Insert your terms separated by commas","title":"Twitter trends","twitter-gmt":"Time is in GMT+0","use":"Use","your-gmt":"You are in GMT"},"arcgis":{"fallback-desc":"Enable the %{brand} connector in your account to connect your %{brand} data to CARTO and mantain it in sync with the source.","input-placeholder":"Paste your %{brand} table URL here","url-desc":"To retrieve a particular layer, add the layer index at the end of the URL","import-data":"Import your data from a %{brand} instance","sync-options":"Sync options only available for a layer"},"instagram":{"fallback-desc":"Enable the %{brand} connector to map your photos or videos from your account in CARTO."},"box":{"fallback-desc":"Enable the %{brand} connector in your account to map your %{brand} files in CARTO or mantain your CARTO maps in sync with your Box data."},"mailchimp":{"campaign-selected":"%{brand} campaign selected","fallback-desc":"Enable the %{brand} connector in your account to map your user lists from %{brand} in CARTO or mantain your CARTO maps in sync with your %{brand} data.","map-campaign":"Map your %{brand} campaigns","state-idle":"Connect your %{brand} account to select any of your campaigns.","state-error":"We are sorry, there has been an error while connecting to your %{brand} account. Just in case it helps, be sure you have the pop-up blocker deactivated for this website.","state-token":"Checking %{brand} token.","state-oauth":"Requesting oAuth.","state-retrieving":"A list of your %{brand} campaigns will be displayed in a moment.","state-selected":"Campaign selected."},"salesforce":{"fallback-desc":"Contact us to learn more about %{brand} integration","input-placeholder":"Paste your %{brand} URL here"},"feedback":{"text":"Is your data somewhere else? Please let us know!","button":"Request data source","url":"https://docs.google.com/forms/d/e/1FAIpQLSeSP4idHpOLdGlUkCCve1BfCsakZdmeAO_5yrHH4FSIJt5cdw/viewform"}},"datasets":{"item":{"sync-failed":"Sync failed, the last attempt was","syncing":"Syncing","synced":"Synced","read":"read","from":"from","by":"by","no-description":"No description","rows-pluralize":"row |||| rows","tags-more":"and %{tagsCount} more","no-tags":"No tags"},"loading":"Loading","searching":"Searching","error":{"title":"Ouch! There has been an error loading your datasets","desc":"If the problem persists contact us at"},"no-datasets":{"title":"You have not connected any datasets yet","desc":"You can %{connectDataset} or %{search} our data library","connect-datasets":"connect datasets","search":"search"},"no-results":{"desc":"There are no results in this page","found":"found","there-are-no":"There are no","no-fun":"No %{type}, no fun"}},"footer":{"guessing-desc":"Let CARTO automatically guess data types and content on import.","deprecated-connector":"Deprecated connector.","twitter-contact-support":"Please <a href='mailto:support@carto.com'>contact support</a> for more information.","twitter-how-to-historical":"To get access to historical data (older than 30 days) you need to","contact-team":"contact our team","privacy-upgrade":"You cannot change the privacy of your new datasets. Click here to upgrade your account.","privacy-change":"Your new dataset will be %{privacy}","privacy-click":"Click to change it to %{nextPrivacy}","privacy-change-banned":"You cannot change the privacy of your new datasets.","add-layer":"Add layer"}},"edit-feature":{"confirmation":{"title":"This geometry is too big to edit from the web","desc":"Editing this geometry could freeze or crash your browser, and you could lose your work. We encourage you to edit this feature through the API.","cancel":"Cancel","continue":"Ok, continue"},"delete":{"title":"You are about to delete a feature","desc":"Are you sure you want to delete it?","cancel":"Cancel","confirm":"Ok, delete it"}},"privacy-warning":{"title":{"visualization":{"PUBLIC":"You are about to publish this visualization for public view","LINK":"You are about to make this visualization available to anyone with the link","PASSWORD":"You are about to make this visualization available to anyone with the password"},"dataset":{"PUBLIC":"You are about to make this dataset public, making it visible in your public profile","LINK":"You are about to make this dataset available to anyone with the link"}},"description":{"PUBLIC":"Any personal data that you have used to create it will also be publicly available","LINK":"Any personal data that you have used to create it will also be publicly available with the link","PASSWORD":"Any personal data that you have used to create it will also be publicly available with the password"},"cancel":"Cancel","confirm":"Ok, Change privacy"},"password-confirmation":{"modal-title":"Please confirm your password.","modal-description":"\"Hey, ho! Let’s Go!\"","form":{"password-label":"Password"},"actions":{"confirm":"Confirm","cancel":"Cancel"}},"change-lock":{"description":{"locked":"Unlocking %{thisOrTheseStr} %{contentTypePluralized} will show %{itOrThemStr} on the dashboard again.","unlocked":"Locking %{thisOrTheseStr} %{contentTypePluralized} will hide %{itOrThemStr} from the dashboard. Reveal %{itOrThemStr} using the header menu or the bottom link."}}},"error":{"default-title":"Oops, there was a problem","default-desc":"Reload the page again. If the problem persists contact us at <a href='mailto:support@carto.com'>support@carto.com</a>"},"backbone-forms":{"select":{"placeholder":"Select a %{keyAttr}","disabled-placeholder":"Enable %{keyAttr}","loading":"loading…","empty":"No values","selected":"%{count} selected","all":"All","none":"None","error":"Error fetching %{type}"},"operators":{"count-message":"If you select 'COUNT' all columns are selected"},"column-type-error":"Column type must be a %{columnType}","interval-error":"Value must be between %{minValue} and %{maxValue}","copy-button":"COPY","lazy-select":{"search":"Search...","error":"Error fetching %{type}","type":"items","empty":"No results for %{type} column."},"data-observatory":{"dropdown":{"measurement":{"search":"Search...","type":"measurements"},"filter":{"header":"Filter measurements by","type":"filters","item-label":"filter","filters":{"label":"Filters","applied":{"single":"1 filter applied","multiple":"%{filters} filters applied"}}},"error":"Error fetching %{type}"}}},"codemirror":{"no-errors":"No errors","docs":"DOCS","syntax-error":"Syntax error","line":"Line"},"undo-redo":{"clear":"CLEAR","apply":"APPLY","undo":"Undo","redo":"Redo"},"table":{"columns":{"change-type":{"confirm":"ok, change it","cancel":"Cancel","desc":"Maps using this column will be affected and unconvertible data will be lost. Are you sure?","error":"There was an error changing %{columnName} column: %{error}","loading":"Changing %{columnName} column...","title":"%{columnName} column will change to %{newType}","success":"Column %{columnName} changed to %{newType}"},"create":{"loading":"Adding new column...","error":"Error adding new column: %{error}","success":"%{columnName} column added"},"destroy":{"cancel":"Cancel","confirm":"Ok, delete it","desc":"Maps using this column will be affected, are you sure you want to delete it?","error":"Error deleting %{columnName} column: %{error}","loading":"Removing your column %{columnName}...","success":"%{columnName} column deleted","title":"You are about to delete %{columnName} column "},"rename":{"cancel":"Cancel","confirm":"ok, rename it","desc":"Maps using this column will be affected, are you sure you want to rename it?","error":"Error renaming column %{columnName} to %{newName}: %{error}","loading":"Renaming your column %{columnName} to %{newName}...","success":"Column %{columnName} renamed to %{newName}","title":"You are about to rename column %{columnName} to %{newName}"},"options":{"order":"Order","rename":"Rename column","change":"Change data type","create":"Add new column","delete":"Delete this column..."},"types":{"boolean":"Boolean","date":"Date","number":"Number","string":"String"}},"rows":{"loading":{"title":"Loading rows..."},"error":{"title":"There was an error...","desc":"It was not possible to obtain any results, check the query applied"},"result":{"no-page-title":"Ouch! Sorry","no-page-desc":"This page %{page} doesn't contain any results...","no-results-title":"There is no data","no-results-desc":"","no-results-button":""},"options":{"copy":"Copy cell value","create":"Add new row","edit":"Edit this cell","delete":"Delete this row..."},"create":{"loading":"Adding new row...","error":"Error adding new row: %{error}","success":"New row added"},"edit":{"loading":"Editing %{attribute} with cartodb_id %{cartodbId}...","error":"Error editing %{attribute} with cartodb_id %{cartodbId}: %{error}","success":"Edited %{attribute} with cartodb_id %{cartodbId}"},"destroy":{"cancel":"Cancel","confirm":"ok, delete","desc":"Are you sure you want to delete it?","error":"Error deleting row with cartodb_id %{cartodb_id}: %{error}","loading":"Removing your row with cartodb_id %{cartodb_id}...","success":"Row with cartodb_id %{cartodb_id} deleted","title":"You are about to delete row with cartodb_id %{cartodb_id}"},"paginator":{"error":"There was an error with pagination: %{error}","to":"to"}}}},"dataset":{"sql":"SQL","data":"Metadata","updated":"Updated %{ago}","read":"Read","options":{"add-row":"Add row","add-column":"Add column","export":"Export"},"preview-map":{"preview":"preview","back":"back"},"create-map":{"title":"Create map","loading":"Creating a map from %{tableName}","error":"There was an error creating the map"},"delete":{"option":"Delete dataset...","cancel":"Cancel","confirm":"Ok, delete it","desc":"The deleted dataset cannot be recovered, be sure before proceeding. We recommend you to export your dataset before deleting it.","error":"Error deleting %{tableName}: %{error}","loading":"Deleting your dataset %{tableName}...","title":"You are about to delete the %{tableName} dataset","affected-vis-count":"%{smart_count} map affected |||| %{smart_count} maps affected","affected-vis-count-extended":"%{affectedVisCount} maps affected, some of them are","affected-entities-count":"%{smart_count} user will lose access |||| %{smart_count} users will lose access","affected-entities-count-extended":"%{affectedEntitiesCount} users will lose access, some of them are","whole-organization-affected":"All users from your organization will be affected"},"metadata":{"option":"Edit metadata","error":"There was an error edititng metadata of your dataset %{name}","loading":"Editing metadata of your dataset %{name}..."},"duplicate":{"option":"Duplicate dataset","query":"applied query","customOption":"Create Dataset from query","error":"Your dataset couldn't be created","loading":"Duplicating your dataset %{name}..."},"lock":{"option":"Lock dataset","error":"There was an error locking %{tableName}","loading":"Locking your dataset %{tableName}..."},"rename":{"option":"Rename dataset","cancel":"Cancel","confirm":"ok, rename it","desc":"If you are accessing this dataset via API, don't forget to use the new name in your API calls afterwards.","error":"Error renaming %{tableName}: %{error}","loading":"Renaming your dataset %{tableName}...","success":"Dataset %{tableName} renamed","title":"Renaming %{tableName} will affect your API calls, maps, analyses, ..."},"sync":{"in-a-moment":"in a few moments","synced":"Synced %{ranAt}","syncing":"Syncing","loading":"Syncing dataset %{tableName}","sync-failed":"Sync failed","next":"Next will be %{runAt}","error-code":"Error code %{errorCode}","sync-now":"Sync now","view-options":"View options","disabled":"You will be able to sync manually %{gap} minutes after your last synchronization","title":"Sync dataset options","desc":"Your dataset is in sync with a %{service} file: <br/>%{url}","label":"Sync my data","error":"There was an error setting the interval","confirm":"Save","cancel":"Cancel"},"unlock":{"cancel":"back to dashboard","confirm":"ok, unlock it","desc":"That means you need to unlock it before doing anything. Are you sure?","error":"Error unlocking %{tableName}: %{error}","loading":"Unlocking your dataset %{tableName}...","success":"Dataset %{tableName} unlocked","title":"Your dataset %{tableName} is locked."},"privacy":{"info":"You're not able to change the privacy of this dataset. Contact the owner <b>%{name}</b>"}},"editor":{"map":"map","map_name":"%{name} map","published":"Published %{when}","unpublished":"Unpublished map","map_pluralize":"%{smart_count} map |||| %{smart_count} maps","button_publish":"Publish","unpublished-changes":"Unpublished changes","error-query":{"body":"Errors found in your SQL query. %{action} before continuing.","label":"Fix them"},"messages":{"common":{"cancel":"Cancel"},"deleting-analysis":{"title":"Delete nested analysis","body":"The selected analysis has one or more nested analysis that would be removed once this analysis is deleted. Proceed?","delete":"Delete","cancel":"Cancel"},"layer-hidden":{"title":"Layer hidden","body":"This layer is hidden. Changes won't be shown until you make it visible.","show":"Show"},"generic-error":{"title":"Some tiles were not displayed","body":"If the problem persists check our docs or contact us."},"interactivity":{"title":"Interactivity error","body":"Looks like you are over your account limits and the interactivity of your map could be affected.","try_to":" Try to:","cta":{"label":"Upgrade account","url":"https://carto.com/pricing/"}},"limit":{"title":"Some tiles might not be working correctly","body":"Looks like you are over your account limits when trying to render some of your tiles.","try_to":" Try to:","cta":{"label":"Upgrade account","url":"https://carto.com/pricing/"}}},"settings":{"menu-tab-pane-labels":{"preview":"Preview","snapshots":"Snapshots"},"preview":{"mode":{"title":"Mode"},"options":{"title":"Map Options","subtitle":"Components that are shown in the map","description":{"title":"Components","subtitle":"Change map elements"},"elements":{"search":"Search box","zoom":"Zoom controls","fullscreen":"Fullscreen","scrollwheel":"Scroll wheel zoom","layer_selector":"Layer selector","logo":"CARTO Logo","widgets":"Widgets column","legends":"Legends","dashboard_menu":"Show toolbar"}}}},"maps":{"options":{"duplicate":"Duplicate","edit-metadata":"Edit metadata…","export-image":"Export image…","export-map":"Download map…","remove":"Delete map…","rename":"Rename"},"duplicate":{"error":"There was an error duplicating %{name}","loading":"Duplicating your map %{name}..."},"delete":{"confirm":"Ok, delete it","cancel":"Cancel","desc":"The deleted map cannot be recovered, be sure before proceeding.","title":"You are about to delete map %{name}","error":"Error deleting map %{name}: %{error}","loading":"Removing the map %{name}...","success":"Map %{name} deleted"},"export-image":{"title":"Export as image","export":"Export","generating":"Generating","disclaimer":{"title":"Disclaimer","body":"Legends and widgets won't be exported as part of the image"},"download":"Download","errors":{"try-again":"Please, try again. If the problem persists, contact support","error-attribution":"Error generating attribution.","error-basemap":"Error loading basemap.","error-image":"Error generating image."}},"export":{"confirmation":{"confirm":"Download","cancel":"Cancel","desc":"This map, and the connected data, will be downloaded as a .carto file","title":"Download \"%{name}\""},"download":{"confirm":"Download","tip":"Tip: Allow pop-ups from CARTO in your web browser.","desc":"Click Download to begin the .carto file download.","title":"Ready to Download"},"error":{"title":"An error occurred while exporting your map","desc":"Please try again. If the problem persists, please contact support"}},"rename":{"loading":"Renaming map...","success":"Map renamed to %{name}","error":"Error renaming map %{name}: %{error}"}},"tab-pane":{"layers":{"title-label":"Layers (%{count}/%{maxCount})"},"elements":{"title-label":"Elements"},"widgets":{"title-label":"Widgets"}},"elements":{"message":"Unfortunately, map overlays are not available yet, but they will be very soon. Stay tuned!"},"layers":{"add-layer":{"label":"Add new layer","tooltip":"Add new layer to your map"},"breadcrumb":{"layer-options":"Layer options","basemap-options":"Basemap options"},"warnings":{"no-data":{"message":"No data available.","action-message":"There are no results for the combination of analyses applied to your data. Try tweaking them."},"geocode":{"message":"There is no geometry in your data.","action-message":"Apply a Geocode analysis or manually add geometry data to visualize on the map."}},"errors":{"broken-node":"Broken node","non-existent-node":"Layer is pointing to a non existent node %{nodeId}"},"options":{"rename":"Rename","delete":"Delete layer…","delete-and-reload":"Delete layer and reload map","collapse":"Collapse","expand":"Expand","export":"Export data","hide":"Hide layer","show":"Show layer","edit":"Edit layer","center-map":"Center map on layer"},"drag-n-drop-analysis":{"upgrade-max-layers-err":"%{a_start}Upgrade your account%{a_end} to add more than %{userMaxLayers} layers to your maps."},"rename":{"loading":"Renaming layer…","success":"Layer renamed to %{name}","error":"<span class='u-errorTextColor'>Error renaming layer</span> %{name}: %{error}"},"moveTorqueLayer":{"loading":"Moving torque layer to first position...","success":"Layer moved","error":"Error moving the layer..."},"delete":{"confirm":"Ok, delete it","cancel":"Cancel","desc":"<span class='CDB-Text u-mainTextColor is-semibold'>%{layerVisName}</span> will be affected, are you sure you want to delete it?","title":"You are about to delete the layer %{layerName}","error":"<span class='u-errorTextColor'>Error deleting layer</span>: %{error}","loading":"Removing layer…","success":"Layer deleted correctly.","widgets":"one widget |||| %{smart_count} widgets","analyses":"one analysis |||| %{smart_count} analyses","layers":"one layer |||| %{smart_count} layers","affected-items":"Deleting this layer affects","and":"and","link-to-export":"Before deleting the layer, you can <a href='#' data-event='exportMapAction'>export as .CARTO file</a>"},"layer":{"animated":"Animated","heatmap":"Heatmap","analysis":"Analysis","add-analysis":"Add analysis","analyses-count":"%{smart_count} Analysis |||| %{smart_count} Analyses","widgets-count":"%{smart_count} Widget |||| %{smart_count} Widgets","add-layer":"Add layer","empty-layer":"Empty layer","geocode-text":"To show data on this map, geocode your layer.","geocode":"Geocode","geocode-tooltip":"To show data on this map, geocode your layer."},"basemap":{"remove-baselayer":"Remove baselayer","custom-basemap":"Custom basemap","title-label":"Basemap","by":"by","category":{"title-label":"Source","select-category":"Select source"},"style":{"title-label":"Style","select-style":"Select style","color":"Color"},"saving":{"loading":"Saving new basemap...","error":"Error saving new basemap.","success":"Basemap saved successfully."}},"labels":{"title-label":"Labels"},"color":{"title-label":"Color"},"image":{"title-label":"Image"},"gmaps":{"title-label":"Google Maps"},"menu-tab-pane-labels":{"data":"Data","analyses":"Analysis","style":"Style","popups":"Pop-up","legends":"Legend"},"infowindow-menu-tab-pane-labels":{"click":"Click","hover":"Hover"},"analysis-form":{"admin-region":"Administrative Regions","aggregate":"Aggregate","aggregate-by-help":"Will calculate aggregate values for each centroid","aggregate-column":"Aggregate column","all-to-all":"All to all","allow-holes":"Allow holes","append":"Append","append-help":"Keep your source data and append matching rows from your target. (Left Join).","apply-btn":"Apply","asc":"ASC","base-data":"Base data","bicycle":"Bicycle","boundaries":"Boundaries","bounding-box":"Bounding Box","bounding-circle":"Bounding Circle","by":"By","by-bike":"bike","by-car":"car","by-walk":"walk","cancel-btn":"Cancel","car":"Car","categorize-by":"Categorize","categorize-by-help":"If selected a centroid will be found for each category","category-column":"Category column","choose-similar-columns":"Choose similar columns to relate them","centroid-desc":"Group or weight your centroids","city":"City","clusters-num":"Clusters","closeness":"Closeness","column":"Column","concave-hull":"Concave Hull","confirm-analysis":"Confirm","convex-hull":"Convex Hull","country":"Country","data-observatory-measurement-area":"Country","data-observatory-measurement-column":"New col. name","data-observatory-measurement-column-help":"Adds a new column to your layer to store result","data-observatory-measurement-desc":"enrich your data","data-observatory-measurement-measurement":"Measurement","data-observatory-measurement-refine":"Choose a measure","data-observatory-measurement-segments":"Segments","data-observatory":{"list":{"add":"Add new measurement"},"header":{"title":"Select a region","description":"Region must match your geometry location"},"parameters":{"title":"Select measurements","description":"Contextual data to augment your layer"},"source":{"label":"Base layer"},"region":{"label":"Region","error":"Error getting regions.","placeholder":"Select a region","search-placeholder":"Search by region"},"measurements":{"label":"Measurement","placeholder":"Select a measurement"},"normalize":{"label":"Normalize","placeholder":"Select a metric","disabled-placeholder":"Enable Normalization"},"timespan":{"label":"Timespan","placeholder":"Select a timespan"},"boundaries":{"label":"Boundaries"}},"data-type":"Data type","define-columns":"Define column to find similarities with","define-how-connect-points":"Define how to connect your points","define-two-layers":"Define two layers","delete-btn":"Delete","deprecated-sql-function":{"choose-function":"Choose the function to run on this node","choose-function-small":"Choose function","define-params":"define your parameters below","function":"function","input":"input","params":"Your Function's Parameters","target":"target node","title":"SQL Function"},"desc":"DESC","direction":"Direction","disabled-by-config":"This analysis type is disabled","dissolved":"Dissolved","dissolved-help":"Combine polygons tracts which have equal ranges","distance":"Distance","enter-latitude":"Enter latitude","enter-longitude":"Enter longitude","enable-normalize":"Enable Normalize","filter":"Filter","filter-aggregate":"Aggregate your results","filter-column":"Target column","geometry-from":"Geometry from","georeference":{"description":"Geocode to get location coordinates","postal-code-help":"Select a column with postal codes","admin-region-help":"Select a column with region names","admin-region-extended-help":"Specify an administrative region or select a column with region names","admin-region":"Administrative Regions","city-help":"Select a column with city names","city-extended-help":"Specify a city or select a column with city names","city":"Cities","country-help":"Select a column with country names","country-extended-help":"Specify a country or select a column with country names","country":"Countries","enter-city-name":"Or enter city name","enter-country-name":"Or enter country name","enter-region-name":"Or enter region name","enter-state-name":"Or enter state name","ip-address-column":"IP Address","ip-address-help":"Select a column with IP addresses","ip-address":"IP Addresses","long-lat":"Latitude and Longitude","postal-code":"Postal Codes","select-a-country":"Select a country column","select-admin":"Select a region column","select-city":"Select a city column","select-country":"Select country column","select-ip":"Select an IP column","select-latitude":"Select a latitude column","select-longitude":"Select a longitude column","select-postal-code":"Select a postal code column","select-state":"Select state column","select-street-address":"Select an address column","state-help":"Specify a state or select a column with state names","street-address-column":"Street Address","street-address-column-help":"Select a column with street addresses","street-address-help":"Use columns or free text to compose your address schema. <a href='https://carto.com/learn/guides/analysis/geocode-street-addresses-into-point-geometries' target='_blank'>More info.</a>","street-address":"Street Addresses","advance":"Advanced mode","normal":"Normal mode"},"group-by":"Group by","hide":"Hide","input-layer":"Define your input layer","intact":"Intact","intact-help":"Keep all polygon tracts as individual polygons","intersect":"Intersect","select-your-points":"Select your points","intersect-help":"Only keep the rows matching your target data (Inner Join).","intersect-step-one-desc":"To find overlapping geometries","join-type":"Join Type","keep-data":"Select the data you want to keep from each","key-columns":"Choose a shared column","key-columns-desc":"Columns must have the same type of data","kilometers":"km","latitude":"Latitude","line-sequential":"Sequential","line-source-to-target":"To Source","line-to-single-point":"To Single Point","link-layer":"Link to col.","link-layer-desc":"This layer's widgets will link both","linked-layer":"Target layer","loading":"loading…","longitude":"Longitude","markov-desc":"One for each time period","max-or-equal":"Max or equal","max":"Max","measure-by":"Measure by","merge-step-one-title":"Select a target to join","meters":"m","method":"Method","miles":"mi","min-or-equal":"Min or equal","min":"Min","mode":"Mode","moran-desc":"Find spatially clustered values and outliers","more-info":"Info","find-nearest":{"categorized":"Per group","categorized-help":"Calculate results per each category of the chosen column","max-results":"max results","modal-desc":"Select points from second dataset nearest to the geometries in current layer.","modal-title":"Find Nearest","workflow-title":"Find Nearest"},"neighbors":"Neighbors","neighbors-help":"Define the local neighborhood as this many nearest-neighbors","no":"No","normalize":"Normalize","normalize-help":"A column to normalize the target column","should-match":"Column types should match","numerator":"Target column","numerator-help":"Measure spatial autocorrelation of this column","operation":"Operation","order":"Order","order-by":"Order by","order-results":"Order your results","output-data":"Define output data","parameters":"Define your parameters","parameters-description":"Tune your analysis","permutations":"Permutations","placeholder-text":"Analysis allow you to build reproducible workflows for analyzing and explaining your data.","add-analysis":{"label":"Add new analysis","tooltip":"Add a new node to your analysis workflow"},"edit-analysis-tooltip":"Edit Analysis","points_source":"Point source","polygons_source":"Polygon source","postal-code":"Postal Code","quota":{"title":"confirm your analysis","loading":"Obtaining your quotas...","credits-left-body":"This might incur into an extra cost. Extra credits will be charged at $%{blockPrice}/%{blockSize}.","credits-left-message":"%{smart_count} credit left |||| %{smart_count} credits left","enough-quota":"You need to use approximately %{credits} of your credits.","hard-limit-not-enough-quota":"We're sorry the current quota is insufficient to enrich your data. Rows will be set to null and analysis may not complete. Please %{contact} us to extend your quota for this function.","soft-limit-enough-quota":"We're sorry the current quota is insufficient to enrich your data. This might need about %{credits} extra credits. Extra credits will be charged at $%{blockPrice}/%{blockSize}.","no-quota-assigned-body":"To get access to the %{analysis} function, %{contact}.","no-credits-body":"You have consumed all your credits during this billing cycle. %{contact} to get some more.","no-credits-message":"No credits available","contact-message":{"no-credits":{"regular":"Contact us","organization":"Contact your organization admin"},"no-quota-assigned":{"regular":"contact our team","organization":"contact your organization admin"}},"emails":{"support":"support@carto.com","saas":"sales@carto.com"},"quota-error-title":"Error","quota-fetch-error":"There was an error obtaining your quota: %{error}.","quota-dataservice-down":"Dataservices API unreacheable.","cancel":"Cancel","confirm":"confirm","analysis-type":{"routing":"Routing","trade-area":"Trade area","georeference-street-address":"Geocode street address","georeference-cities":"Geocode cities","data-observatory-measure":"Enrich from Data Observatory"}},"public_transport":"Public transport","radius":"Distance","reference-layer-pluralize":"Define your reference layer |||| Define your reference layers","results":"Results","right":"Right","sampling":"Sampling","sampling-desc":"Select a sample of the data","sampling-rate":"Percent of data ","search-by-column-name":"Search by column name","second-geom-required":"This analysis requires a second geometry column","select-column":"Select a column","select-type-placeholder":"Select a type","select-columns":"Select columns","select-data-source":"Select a data source","select-layer":"Select a layer","select-second-source":"Select a second data source to join","select-type":"Select data type","select-value":"Select a value","setup-analysis":"Setup analysis","show":"Show","significance":"Significance","significance-help":"Filter outliers and clusters to this significance. Smaller numbers are more significant.","source-col":"Base col.","source-column":"Base column","spatial-markov-trend-desc":"One for each time period","spatial-markov-trend-time-columns":"Base columns","spatial-markov-trend-time-columns-help":"Each column should contain values for a time period","sampling-form-model":{"help":"% of data to show"},"state":"State","target":"Target","target-layer":"Target layer","base-layer":"Base layer","target-col":"Target col.","target-column":"Target column","target-data":"Target data","target-percent":"Target percent","target-percent-help":"Convex hull lookalike","target-layer-dataset":"Target can be a layer or a dataset","time":"Time","time-seconds":"Time (Seconds)","to-closest":"To closest","top-range":"Top range","to-filter-by":"To filter by","tracts":"Tracks","tracts-help":"Number of AOIs evenly spaced between 0 and RADIUS","tune-analysis":"Tune your analysis","tune-centroid":"Tune your centroid","tune-clusters":"Tune your clusters","units":"Units","type":"Type","value":"Value","value-aggregation":"Value aggregation","value-aggregation-desc":"Aggregate the desired value in your polygon(s)","value-aggregation-centroids":"Aggregate the desired value in your centroid(s)","valid-type":"This kind of data is not valid for this type","walk":"Walk","weight":"Weight","weight-column":"Weight column","weight-type":"Weight type","weighted-by":"Weighted by","weighted-by-help":"Weights contribution by a value for each point","workflow":"Your workflow","write-min-or-equal-value":"Write min or equal value","write-max-or-equal-value":"Write max or equal value","write-min-value":"Write min value","write-max-value":"Write max value","yes":"Yes"},"infowindow":{"select-fields":"Select fields","no-fields":"You haven’t selected any fields to be shown in the popup.","placeholder-interactivity-text":"Popups are disabled because interactivity is not available for this layer.","placeholder-columns-text":"Popups are disabled because there are no columns available for this layer.","style":{"title-label":"Style","select-style":"Select style","size":{"label":"Window size","help":"Change Pop-Up width"},"header-color":"Header color","none":"None","custom":"Custom","infowindow_light":"Light","infowindow_dark":"Dark","infowindow_color":"Color","infowindow_header_with_image":"Image"},"tooltips":{"none":"No Pop-Up applied","infowindow_light":"Pop-Up Light","infowindow_dark":"Pop-Up Dark","infowindow_color":"Pop-Up with header color","infowindow_header_with_image":"Pop-Up with header image"},"items":{"title-label":"Show items","description":"Add items","help":"Change text field"}},"tooltip":{"style":{"none":"None","custom":"Custom","tooltip_light":"Light","tooltip_dark":"Dark"},"items":{"title-label":"Show items","description":"Add items"}},"filter-options":{"top":"Top","bottom":"Bottom","between":"Between","is-equal-to":"Is equal to","is-greater-than":"Is greater than","is-greater-or-equal-than":"Is greater than or equal to","is-less-than":"Is less than","is-less-or-equal-than":"Is less than or equal to"},"notifier":{"center-map":{"loading":"Calculating coordinates...","success":"Map centered","error":"Error centering map"}},"georeference":{"georeference-button":"Geocode","visualize":"Layer doesn't have geometry"},"max-layers-infowindow":{"title":"You have reached your maximum layer limit.","pricing":"https://carto.com/pricing/","custom":{"body":"Your account does not support more than %{maxLayers} layers.","contact":"Contact us","contact-url":"https://carto.com/contact/"},"regular":{"body":"Upgrade your account to add more than %{maxLayers} layers to your map.","upgrade":"Upgrade your account"},"org":{"body":"Increase your layer limit by contacting the account's administrator.","upgrade":"Contact admin"},"org-admin":{"body":"Increase the layer limit for your organization by contacting CARTO support.","upgrade":"Contact support"}}},"data":{"no-geometry-data":{"message":"This layer is empty. Add data to start working.","action-message":"Click the blue button on the bottom right to add points (%{pointIcon}), lines (%{lineIcon}) or polygon (%{polygonIcon})."},"stats":{"add-widget":"Add as a widget","edit":"EDIT","top-cat":"% in top 10 cat.","trues":"% true","null":"% null","feature-count":"feature count","geometry-fallback":"features","help":"Edit widget"},"data-toggle":{"values":"VALUES","cartocss":"SQL","tooltip":"Switch to SQL view"},"code-mirror":{"tip":"CMD + S to apply your query. CTRL + Space to autocomplete.","quota-data-services-warning":"You're about to execute a function that will consume several Data Services credits, so we advise you to be mindful of your quota consumption when using this function here.","quota-data-services-warning-link":"You can read more about our Data Services API in our <a href='https://carto.com/developers/data-services-api/reference/#geocoding-functions' target='_blank'>guides</a>."},"notifier":{"sql-alter-loading":"Modifying table…","sql-alter-error":"Error in SQL query.","sql-alter-success":"Modification applied.","sql-applying":"Applying query…","sql-error":"Error in SQL query.","sql-success":"SQL query applied."},"messages":{"sql-readonly":{"title":"SQL READ-ONLY","body":"You just applied an analysis to this layer. The SQL is now read- only.","accept":"CLOSE"},"empty-data":{"title":"NO DATA AVAILABLE","body":"There is no data available to be displayed."}}},"infowindow":{"apply":"APPLY","html-toggle":{"values":"VALUES","html":"HTML","tooltip":"Switch to HTML view"},"code-mirror":{"save":"CMD + S to apply your html.","sanitize":"Use {{{column}}} to sanitize values.","errors":{"empty":"Template can't be empty."}},"messages":{"custom-html-applied":{"title":"CUSTOM HTML APPLIED","body":"You just applied custom html with HTML editor. You can continue or clear all custom HTML.","accept":"Clear custom html"}}},"export-image":{"invalid-dimension":"Invalid dimension, max %{limit}x%{limit}px","properties":{"width":"width","height":"height","size":"Size","size-subtitle":"Manually enter the image size","format":"Format","format-subtitle":"Choose a lossless (PNG) or lossy (JPG) format","options":"Options","options-subtitle":"Configure display options"}},"legend":{"no-geometry-data":"There's no geometry in your data to add a legend.","data-toggle":{"values":"VALUES","html":"HTML","tooltip":"Switch to HTML view"},"code-mirror":{"save":"CMD + S to apply your html.","errors":{"empty":"Template can't be empty."},"pre-html":"<!-- insert your custom html code below this line -->","post-html":"<!-- insert your custom html code above this line -->"},"menu-tab-pane-labels":{"color":"color","size":"size","size-disabled":"Style your layer by value to enable this type of legend"},"messages":{"custom-legend":{"title":"CUSTOM LEGEND APPLIED","body":"You just applied custom html with HTML editor. You can continue or clear all custom HTML.","accept":"Clear custom html"},"legends-disabled":{"title":"LEGENDS DISABLED","body":"The legends setting is disabled. Changes made will not be shown until you enable legends.","show":"ENABLE"}},"tooltips":{"style":{"none":"No Legend applied","bubble":"Bubble Legend","category":"Category Legend","torque":"Torque Legend","choropleth":"Choropleth Legend","custom_choropleth":"Custom Choropleth Legend","custom":"Custom Legend"},"item":{"fill":"Change item color","title":"Change text item","remove":"Remove item"}},"types":{"none":"none","category":"category","gradient":"gradient","bubble":"bubble","custom":"custom"},"legend-form":{"type":{"title":"Select Style"},"properties":{"title":"Creating your legend","subtitle":"Add items"},"add":"Add item","title":{"label":"Title","help":"Change legend title"},"fill":"Fill","by-size":"By Size","by-color":"By Color","untitled":"Untitled","others":"Others","prefix":"Prefix","suffix":"Suffix","left-label":"Left Label","right-label":"Right Label","top-label":"Top Label","bottom-label":"Bottom Label","custom-label-placeholder":"Override dynamic value"},"pixel-title":"Amount"},"style":{"types":{"none":"-","simple":"points","hexabins":"hexbins","squares":"squares","regions":"Administrative Regions","heatmap":"heatmap","animation":"animated"},"style-form":{"type":{"title-label":"Aggregation"},"aggregation":{"title-label":"Aggregation Options","desc":"Configure how the aggregation works","tooltips":{"none":"-","simple":"By Points","hexabins":"By Hexbins","squares":"By Squares","regions":"By Administrative Regions","heatmap":"Heatmap","animation":"Animated"}},"properties":{"title-label-point":"Style","title-label-line":"Lines style","title-label-polygon":"Polygons style","georeference":"Geocode","desc":"Change the visualization"},"unanimatable":{"desc":"Not any numeric or date column found in your data.","body":"You can change your column's type in the %{link}.","label":"table view"}},"code-mirror":{"save":"CMD + S to apply your styles."},"style-toggle":{"values":"VALUES","cartocss":"CARTOCSS","tooltip":"Switch to CartoCSS view"},"messages":{"fetched":"Schema fetched, select a style","fetching":"Schema is being fetched, when it is done, different styles will be avaiable","unavailable":"There was a problem getting schema, try to reload","none":"Your styles were reset, choose new styles for your layer, or go back to your previous style.","cartocss-applied":{"title":"CARTOCSS APPLIED","body":"You just applied styles with CartoCSS. You can continue or clear all styles.","clear":"CLEAR"},"torque-exists":{"title":"TORQUE LAYER","body":"There is already a torque layer in the layers collection. If you continue, this layer will use the default style.","continue":"CONTINUE"}},"tooltips":{"blending":"Layer Color and Alpha Blending Modes","line":"line","polygon":"polygon","simple":"point","squares":"square","hexabins":"hexbin","regions":"region","animation":"point","heatmap":"heatmap","fill":{"size":"Change the %{type} size","color":"Change the %{type} color","color-heatmap":"Change the heatmap's color scheme","image":"Change the %{type} image","fixed-tab":"A fixed color for every %{type}","by-value-tab":"Vary each %{type}'s color by an attribute to create a category or classed %{type} map"},"size":{"fixed-tab":"A fixed size for every %{type}","by-value-tab":"Vary each %{type}'s size by a numeric attribute to create a classed %{type} map"},"stroke":{"size":"Change the %{type} stroke size","color":"Change the %{type} stroke color"}},"components":{"size":"Size","color":"Color","fillColor":{"label":"Color","point":"Point","line":"Line","polygon":"Polygon"},"stroke":{"label":"Stroke","fetching":"Loading node schema...","unavailable":"Error getting node schema","error":"There was an error fetching node schema..."},"stroke-color":{"label":"Stroke Color"},"stroke-size":{"label":"Stroke Size"},"point-size":{"label":"Point Size"},"blending":{"label":"Blending","options":{"none":"none","darken":"darken","lighten":"lighten","lighter":"lighter","color-dodge":"color-dodge","color-burn":"color-burn","multiply":"multiply","screen":"screen","overlay":"overlay","src-over":"src-over","source-over":"source-over","xor":"xor"}},"type":{"label":"Type","options":{"heatmap":"Heatmap","points":"Points"}},"aggregation-fill":"Color","aggregation-value":{"label":"Operation","help":"Change the operation"},"aggregation-size":{"label":"Size","label-help":"In pixels","help":"Change the %{type} size"},"aggregation-dataset":{"label":"Adm. level","help":"Groups points by polygon boundaries based on world admininstrative levels"},"labels-enabled":{"label":"labels","not-with-animated":"Not available with animations"},"labels-attribute":{"label":"column","placeholder":"Select a column","fetching":"Loading node schema...","unavailable":"Error getting node schema","error":"There was an error fetching node schema...","help":"The column from your dataset to be used for labels"},"labels-font":"font","labels-offset":"offset","labels-fill-size":"font size","labels-fill-color":"font color","labels-overlap":{"label":"overlap","options":{"true":"True","false":"False"}},"labels-halo-size":"halo size","labels-halo-color":"halo color","labels-placement":{"label":"placement","options":{"point":"point","line":"line","vertex":"vertex","interior":"interior"}},"animated-enabled":{"label":"animated","already-one-torque":"There is already a torque layer in your map","not-with-labels":"Not available with labels"},"animated-attribute":{"label":"column","placeholder":"Select a column","fetching":"Loading node schema...","unavailable":"Error getting node schema","error":"There was an error fetching node schema...","help":"The column from your dataset that drives the animation"},"animated-overlap":{"label":"overlap","options":{"true":"Accum.","false":"None"}},"animated-trails":{"label":"trails","help":"Specifies how a pixel is rendered in the frames"},"animated-resolution":{"label":"resolution","help":"Defines the width and height of each Torque cell, in pixels"},"animated-steps":{"label":"steps","help":"The number of animation steps/frames in your animation"},"animated-duration":{"label":"duration","help":"The length of time for your animation, in seconds."}}},"widgets":{"add-widget":{"label":"Add new widget","tooltip":"Add new widget to your map"},"breadcrumb":{"widget-options":"Widget options"},"no-geometry-data":"Your dataset lacks geometry data, it is not possible to add a widget.","options":{"remove":"Delete...","rename":"Rename","edit":"Edit"},"delete":{"confirm":"Ok, delete it","cancel":"Cancel","desc":"The widget cannot be recovered, be sure before proceeding.","title":"You are about to delete the widget %{name}","error":"Error deleting widget %{name}: %{error}","loading":"Removing the widget %{name}...","success":"Widget %{name} deleted"},"widgets-view":{"add_widget":"Add widget"},"widgets-types":{"histogram":"Histogram","category":"Category","formula":"Formula","time-series":"Time series"},"widgets-form":{"placeholder-text":"You have not added any widgets yet. Add widgets to discover new things.","type":{"title-label":"Type","description":"Choose the widget type","category":"Category","formula":"Formula","histogram":"Histogram","time_series":"Time Series"},"data":{"columns-unavailable":"No columns available","aggregation":"Aggregation","aggregation_column":"Aggregation Column","bins":"Buckets","column":"Column","timezone":"Time Zone","description":"Configure your values","end":"End","loading":"loading…","operation":"Operation","prefix":"Prefix","start":"Start","suffix":"Suffix","title":"Title","title-label":"Data","value":"Value","aggregate-by":"aggregate by","operation-column":"operation column","search-by-bucket":"Search by bucket","select-bucket":"Select a bucket"},"style":{"custom-disabled":"If an aggregated style is applied, auto style is disabled","custom-colors":"Custom colors","custom-help":"Custom colors: colors used when Autostyle (drop icon) is applied","define":"Define how your widget interacts with the data","description":"Description","fill":"Color","no":"No","sync_on_bbox_change":"Dynamic","sync_on_data_change":"Unfiltered","title-label":"Behavior","yes":"Yes"}}},"context-switcher":{"map":"Map","data":"Data"},"edit-feature":{"features":{"point":"point","line":"line","polygon":"polygon"},"loading-state":"Requesting feature data...","error-state":"There was an error requesting feature data","overlay-text":"Start clicking on the map to draw your %{featureType}","add":"Add","save":"Save","attributes":"Attributes","attributes-columns":"Change column names and type in table mode","cancel":"Cancel","geometry":"Geometry","geometry-edit":"You can also edit it on the map","geometry-disabled":"Not available for hidden or read only layers","out-of-bounds-lng":"Longitude is out of bounds [-180, 180]","out-of-bounds-lat":"Latitude is out of bounds [-90, 90]","valid-lng":"Must be a valid longitude","valid-lat":"Must be a valid latitude","valid":"Only numbers allowed","delete":"Delete %{featureType}","edit":"Edit %{featureType}","analysis":"layers with analysis nodes","custom-sql":"layers with custom SQL applied","aggregated":"layers with aggregated styles","sync":"read only layers","disabled":"Feature editing is disabled for %{disabledLayerType}. To edit data, export this layer and import it as a new layer.","add-point":"Add point","add-line":"Add line","add-polygon":"Add polygon"}},"notifications":{"vis":{"failed":{"title":"This map couldn't be rendered","body":"Please refresh the page and contact us if the error persists"}},"analysis":{"waiting":"Analysis %{nodeId} enqueued...","running":"Analysis %{nodeId} running...","completed":"Analysis %{nodeId} completed","failed":"Analysis %{nodeId} failed","removed":"Analysis %{nodeId} deleted","contact":{"label":"contact us","mail":"support@carto.com"},"sample":"sample","errors":{"timeout":"Your analysis has taken too long. Try to %{sample} your data or %{contact} for further assistance","without-geom-webmercator":"The column \"the_geom_webmercator\" does not exist","without-cartodb-id":"The column \"cartodb_id\" does not exist"}},"widgets":{"add_pluralize":"Widget successfully added |||| Widgets successfully added","replace":"Widget successfully replaced","replace_pluralize":"Widget successfully replaced |||| Widgets successfully replaced","delete_pluralize":"Widget deleted correctly |||| Widgets deleted correctly","error":{"title":"Error adding widget:","body":"%{body} %{error}"},"loading":"Adding widget…","loading_pluralize":"Adding widget… |||| Adding widgets...","updating":"Updating widget…","updating_pluralize":"Updating widget… |||| Updating widgets...","restoring":"Restoring widgets…","restored":"Widgets restored"},"layer":{"error":"Layer error: %{error}","added":"Layer added successfully"},"cartocss":{"error":{"body":"%{body} %{error}","title":"Error in CartoCSS styles:"},"success":"CartoCSS applied"},"sql":{"429":{"body":"You are over platform's limits. Please %{link} to know more details","link":"contact us","href":"mailto:support@carto.com"},"alter-loading":"Modifying table…","alter-success":"Modification applied","applying":"Applying query…","unknown":{"body":"There was an error in the SQL query"},"error":{"body":"%{body} %{error}","title":"Error in SQL query:"},"success":"SQL query applied"},"edit-feature":{"edit":{"loading":"Requesting geometry data...","error":"There was an error requesting geometry data"},"error":{"body":"%{body} %{error}"},"destroy":{"loading":"Deleting geometry…","error":"Error deleting geometry","success":"Geometry deleted correctly"},"save":{"loading":"Saving geometry…","error":"Error saving geometry","success":"Geometry successfully saved"},"adding":"Adding geometry…"}}};

/***/ }),

/***/ "./lib/assets/javascripts/locale/es.json":
/*!***********************************************!*\
  !*** ./lib/assets/javascripts/locale/es.json ***!
  \***********************************************/
/*! exports provided: editor, default */
/***/ (function(module) {

module.exports = {"editor":{"map":"mapa","map_name":"%{name} mapa","map_pluralize":"%{smart_count} mapa |||| %{smart_count} mapas"}};

/***/ }),

/***/ "./lib/assets/javascripts/locale/sw.json":
/*!***********************************************!*\
  !*** ./lib/assets/javascripts/locale/sw.json ***!
  \***********************************************/
/*! exports provided: editor, default */
/***/ (function(module) {

module.exports = {"editor":{"map":"karta","map_name":"%{name} karta","map_pluralize":"%{smart_count} karta |||| %{smart_count} kartor"}};

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/assets/icons/common/cartoLogo.svg":
/*!********************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/assets/icons/common/cartoLogo.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/1.0.0-assets.136/images/cartoLogo.svg";

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/assets/icons/common/wrench.svg":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/assets/icons/common/wrench.svg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/1.0.0-assets.136/images/wrench.svg";

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MaintenanceApp_vue_vue_type_template_id_4681e846___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaintenanceApp.vue?vue&type=template&id=4681e846& */ "./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=template&id=4681e846&");
/* harmony import */ var _MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaintenanceApp.vue?vue&type=script&lang=js& */ "./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MaintenanceApp_vue_vue_type_template_id_4681e846___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MaintenanceApp_vue_vue_type_template_id_4681e846___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./MaintenanceApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=template&id=4681e846&":
/*!********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=template&id=4681e846& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_template_id_4681e846___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./MaintenanceApp.vue?vue&type=template&id=4681e846& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=template&id=4681e846&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_template_id_4681e846___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_MaintenanceApp_vue_vue_type_template_id_4681e846___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/bundles/maintenance/maintenance.js":
/*!*********************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/bundles/maintenance/maintenance.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _i18n = __webpack_require__(/*! new-dashboard/i18n */ "./lib/assets/javascripts/new-dashboard/i18n/index.js");

var _i18n2 = _interopRequireDefault(_i18n);

var _MaintenanceApp = __webpack_require__(/*! ./MaintenanceApp */ "./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue");

var _MaintenanceApp2 = _interopRequireDefault(_MaintenanceApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
  el: '#root',
  i18n: _i18n2.default,
  components: { MaintenanceApp: _MaintenanceApp2.default },
  template: '<MaintenanceApp />'
});

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue":
/*!*************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DummyFooter_vue_vue_type_template_id_61530bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DummyFooter.vue?vue&type=template&id=61530bdf&scoped=true& */ "./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=template&id=61530bdf&scoped=true&");
/* harmony import */ var _DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DummyFooter.vue?vue&type=script&lang=js& */ "./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _DummyFooter_vue_vue_type_style_index_0_id_61530bdf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DummyFooter.vue?vue&type=style&index=0&id=61530bdf&scoped=true&lang=scss& */ "./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=style&index=0&id=61530bdf&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DummyFooter_vue_vue_type_template_id_61530bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DummyFooter_vue_vue_type_template_id_61530bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61530bdf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "lib/assets/javascripts/new-dashboard/components/DummyFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--3!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./DummyFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=style&index=0&id=61530bdf&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=style&index=0&id=61530bdf&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_style_index_0_id_61530bdf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--4-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/lib/loader.js??ref--4-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./DummyFooter.vue?vue&type=style&index=0&id=61530bdf&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=style&index=0&id=61530bdf&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_style_index_0_id_61530bdf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_style_index_0_id_61530bdf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_style_index_0_id_61530bdf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_style_index_0_id_61530bdf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_style_index_0_id_61530bdf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=template&id=61530bdf&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=template&id=61530bdf&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_template_id_61530bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./DummyFooter.vue?vue&type=template&id=61530bdf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=template&id=61530bdf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_template_id_61530bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyFooter_vue_vue_type_template_id_61530bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue":
/*!*************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DummyHeader_vue_vue_type_template_id_faf5205e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DummyHeader.vue?vue&type=template&id=faf5205e&scoped=true& */ "./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=template&id=faf5205e&scoped=true&");
/* harmony import */ var _DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DummyHeader.vue?vue&type=script&lang=js& */ "./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _DummyHeader_vue_vue_type_style_index_0_id_faf5205e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DummyHeader.vue?vue&type=style&index=0&id=faf5205e&scoped=true&lang=scss& */ "./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=style&index=0&id=faf5205e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DummyHeader_vue_vue_type_template_id_faf5205e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DummyHeader_vue_vue_type_template_id_faf5205e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "faf5205e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "lib/assets/javascripts/new-dashboard/components/DummyHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--3!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./DummyHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=style&index=0&id=faf5205e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=style&index=0&id=faf5205e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_style_index_0_id_faf5205e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--4-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/lib/loader.js??ref--4-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./DummyHeader.vue?vue&type=style&index=0&id=faf5205e&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=style&index=0&id=faf5205e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_style_index_0_id_faf5205e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_style_index_0_id_faf5205e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_style_index_0_id_faf5205e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_style_index_0_id_faf5205e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_style_index_0_id_faf5205e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=template&id=faf5205e&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=template&id=faf5205e&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_template_id_faf5205e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./DummyHeader.vue?vue&type=template&id=faf5205e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=template&id=faf5205e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_template_id_faf5205e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_DummyHeader_vue_vue_type_template_id_faf5205e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/Page.vue":
/*!******************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/Page.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page_vue_vue_type_template_id_c936b87a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.vue?vue&type=template&id=c936b87a&scoped=true& */ "./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=template&id=c936b87a&scoped=true&");
/* harmony import */ var _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.vue?vue&type=script&lang=js& */ "./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Page_vue_vue_type_style_index_0_id_c936b87a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.vue?vue&type=style&index=0&id=c936b87a&scoped=true&lang=scss& */ "./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=style&index=0&id=c936b87a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page_vue_vue_type_template_id_c936b87a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Page_vue_vue_type_template_id_c936b87a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c936b87a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "lib/assets/javascripts/new-dashboard/components/Page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--3!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./Page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=style&index=0&id=c936b87a&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=style&index=0&id=c936b87a&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_style_index_0_id_c936b87a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--4-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/lib/loader.js??ref--4-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./Page.vue?vue&type=style&index=0&id=c936b87a&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=style&index=0&id=c936b87a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_style_index_0_id_c936b87a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_style_index_0_id_c936b87a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_style_index_0_id_c936b87a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_style_index_0_id_c936b87a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_style_index_0_id_c936b87a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=template&id=c936b87a&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=template&id=c936b87a&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_template_id_c936b87a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./Page.vue?vue&type=template&id=c936b87a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=template&id=c936b87a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_template_id_c936b87a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Page_vue_vue_type_template_id_c936b87a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/i18n/locales/en.json":
/*!*******************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/i18n/locales/en.json ***!
  \*******************************************************************/
/*! exports provided: MapCard, MapListHeader, QuickActions, BulkActions, DataPage, MapsPage, NotificationsPage, SettingsDropdown, DatasetCard, DatasetListHeader, UserDropdown, SolutionsPage, SolutionCard, SearchComponent, SearchPage, HomePage, TrialExpired, QuotaSection, Footer, TagCard, FeedbackMessage, SharedBrief, Wizards, MaintenancePage, OAuthAppsPage, ConnectedAppsPage, SettingsPages, CatalogPage, CatalogListHeader, CatalogDropdown, CatalogDetailPage, default */
/***/ (function(module) {

module.exports = {"MapCard":{"shared":{"LINK":"Link","PUBLIC":"Public","PRIVATE":"Private","PASSWORD":"Password"},"views":"{views} views (30 days)","sharedBy":"Shared by {owner}","noDescription":"No description","noTags":"No tags","lastUpdate":"Updated {date} ago","tags":"tags"},"MapListHeader":{"name":"Name","lastModified":"Last Modified","views":"Views (30d)","usage":"Usage","privacy":"Privacy"},"QuickActions":{"title":"Quick actions","editInfo":"Edit name & description","manageTags":"Manage tags","createMap":"Create map","changePrivacy":"Change privacy","share":"Share with colleagues","duplicate":"Duplicate","lock":"Lock","unlock":"Unlock","delete":"Delete"},"BulkActions":{"selected":"{count} selected","maps":{"selectAll":"Select all","deselectAll":"Deselect all","changePrivacy":"Change privacy","duplicate":"Duplicate","unlock":"Unlock","lock":"Lock","delete":"Delete"},"datasets":{"selectAll":"Select all","deselectAll":"Deselect all","createMap":"Create map","changePrivacy":"Change privacy","duplicate":"Duplicate","unlock":"Unlock","lock":"Lock","delete":"Delete"}},"DataPage":{"header":{"title":{"mine":"Your Datasets","shared":"Shared with you","favorited":"Your Favorited Datasets","locked":"Your Locked Datasets","public":"Your Public Datasets","link":"Your Link-shared Datasets","password":"Your Password-protected Datasets","private":"Your Private Datasets"},"warning":"<span class='is-bold'>{counter} datasets used.</span> <a href='{path}'>Upgrade your account</a> to get unlimited datasets."},"createDataset":"New Dataset","zeroCase":{"title":"Upload, connect, or create your first dataset","description":"Bring your location data to CARTO so that you can visualise it and start predicting key insights. Learn about importing your data <a href='https://carto.com/help/tutorials/import-data/'>here</a>.","createDataset":"Create your first dataset"},"emptyCase":{"default":"There are no datasets here.","onlyShared":"No datasets here. Go to the <a href='{path}'>datasets shared with you</a>."},"tabs":{"yourDatasets":"Your Datasets","catalog":"Catalog"}},"MapsPage":{"header":{"title":{"mine":"Your Maps","shared":"Shared with you","favorited":"Your Favorited Maps","locked":"Your Locked Maps","public":"Your Public Maps","link":"Your Link-shared Maps","password":"Your Password-protected Maps","private":"Your Private Maps"},"warning":"<span class='is-bold'>{counter} public maps used.</span> <a href='{path}'>Upgrade your account</a> to get unlimited public maps."},"createMap":"New Map","zeroCase":{"title":"Create your first map to predict key insights","description":"Build your first Location Intelligence app and start predicting key insights from your location data with our drag and drop tool for analysts and business users. Learn about Builder <a href='https://carto.com/help/tutorials/builder/'>here</a>.","createMap":"Create your first map"},"emptyCase":{"default":"There are no maps here.","onlyShared":"No maps here. Go to the <a href='{path}'>maps shared with you</a>."}},"NotificationsPage":{"header":{"title":"Notifications"},"emptyState":"There are no notifications yet.","loadingState":"Loading your notifications."},"SettingsDropdown":{"filter":"Filter","orderMaps":"Order","types":{"maps":"Your maps","datasets":"Your datasets","shared":"Shared with you ({count})","favorited":"Favorited ({count})","locked":"Locked ({count})","publicPrivacy":"Public","privatePrivacy":"Private","linkPrivacy":"Link","passwordPrivacy":"Password"}},"DatasetCard":{"shared":{"LINK":"Link","PUBLIC":"Public","PRIVATE":"Private","PASSWORD":"Password"},"copy":"Copy name","copySuccess":"Name copied!","lastSynced":"Synced {date} ago","lastUpdated":"Updated {date} ago","numberRows":"0 rows | 1 row | {count} rows","tags":"tags","maps":"0 maps | 1 map | {n} maps"},"DatasetListHeader":{"name":"Name","lastModified":"Last Modified","rows":"Rows","size":"Size","usage":"Usage","privacy":"Privacy"},"UserDropdown":{"settings":"Settings","organizationSettings":"Your organization","apiKeys":"API Keys","publicProfile":"Public Profile","notifications":"Notifications","feedback":"Share feedback","logout":"LOG OUT"},"SolutionsPage":{"solutionsTitle":"Solutions for every business problem","solutionsDescription":"Consolidating your site network? Need to reduce fleet costs? Redesigning your sales territories? Answer your question through the lens of location.","talkUsTitle":"Like what you see?","talkUsDescription":"Our account management team will give you a firsthand view and discuss with you how we can help your organization to do the same.","talkUsButton":"Talk to us!","sitePlanning":{"title":"Site Planning","description":"Drive site selection and investment decisions with always-on data streams, enabling more accurate revenue prediction and reduced risk of failed location decisions."},"territoryManagement":{"title":"Territory Management","description":"Design and align sales and service territories to increase productivity and reduce costs using spatial field operations data."},"logisticsOptimization":{"title":"Logistics Optimization","description":"Harness the power of geospatial to optimize your Supply Chain, enabling a smarter, more efficient operation."}},"SolutionCard":{"moreExamples":"View more examples","usedBy":"Used by:","goDemo":"Go to demo"},"SearchComponent":{"placeholder":{"default":"Search","active":"By name, description or tag"}},"SearchPage":{"title":{"allFetching":"Loading results for \"{query}\"","searchTerm":"0 results for \"{query}\" | {n} result for \"{query}\" | {n} results for \"{query}\"","tag":"0 results for \"{query}\" tag | {n} result for \"{query}\" tag | {n} results for \"{query}\" tag"},"sections":{"maps":"Maps","data":"Data","tags":"Tags"},"emptyText":{"maps":"No maps found.","datasets":"No datasets found.","tags":"No tags found."}},"HomePage":{"WelcomeSection":{"greeting":"Hello, {name}","firstTime":{"message":"Welcome to your new dashboard! We hope you like it. You can learn more about it <a class='welcome-first__link' href='https://carto.com/help/getting-started/new-dashboard' target='_blank'>here</a>.","planMessage":{"free":"Remember that you're currently on the FREE plan.","30day":"Remember that you're currently on the 30-day personal trial.","individual":"Remember that you're currently on the {trialLength}-day Individual trial.","organizationAdmin":"Remember that you're currently the admin of the {organizationName} organization.","organizationUser":"Remember that you're currently a member of the {organizationName} organization.","unknown":""},"contactOrganizationAdmin":"Contact the admin","manageOrganization":"Manage my organization"},"trialMessage":"{date} left in your trial.&nbsp;","notificationsButton":"Go to Notifications","learnMoreButton":"Learn More","actions":{"createMap":"New map","createDataset":"New dataset"},"subscribeNow":" Subscribe now."},"MapsSection":{"title":"Your Maps","viewAll":"VIEW ALL MAPS"},"DatasetsSection":{"title":"Your Datasets","viewAll":"VIEW ALL DATASETS"},"CreateMapCard":{"header":"Create your first map to predict key insights","info":"Build your first Location Intelligence anañysis or take a look to our guides and help.","button":"Create your first Map"},"RecentSection":{"title":"Recent content","viewTagsAction":"View your tags"},"TagsSection":{"title":"Your tags","viewRecentContentAction":"View recent content","emptyState":{"title":"You have no tags.","subtitle":"Add one to your maps or datasets and start organizing your <a href=\"https://carto.com/help/getting-started/new-dashboard/\">dashboard</a>."},"loading":"Asking the server politely for your tags."}},"TrialExpired":{"ExpirationMessage":{"title":"Your trial has expired","description":{"phrase1":{"withDate":"We couldn’t log you in because your trial expired on {expirationDate}.","noDate":"We couldn’t log you in because your trial expired."},"phrase2":"All of your data will be safe for the next {expirationDays} days, but no one will be able to log in until your account is upgraded. If you have any question after your trial, please <a class='is-underline is-txtDarkBlue' href='mailto:sales@carto.com'>contact sales</a>."},"actions":{"addPayments":"Add payment method","deleteAccount":"Delete account"}}},"QuotaSection":{"title":"Your Usage Metrics","header":{"remaining":"Remaining","used":"Used","total":"Total","perMonth":"per month"},"account":"Your Account","dataServices":"Data Services","storage":"Storage","publicMaps":"Public Maps","datasets":"Datasets","apiKeys":"API keys","geocoding":"Geocoding","isolines":"Isolines","routing":"Routing","credits":"Your credits will be renewed in 0 days ({day} of each month). | Your credits will be renewed in {remainingDays} day ({day} of each month). | Your credits will be renewed in {remainingDays} days ({day} of each month)."},"Footer":{"HelpCenter":{"title":"Help Center","description":"Find answers to frequently asked questions, guides and tutorials about working with data, making Builder maps, managing your account, etc."},"DeveloperCenter":{"title":"Developer Center","description":"Learn everything you need to know to build the next generation of Location Intelligence applications with the CARTO platform."},"GISStackExchange":{"title":"GIS StackExchange","description":"Explore and share your CARTO-related questions with the GIS StackExchange Community."},"TechSupport":{"title":"Tech Support","description":"Found a bug or technical issue? Contact our support team and let us know about it."},"DedicatedSupport":{"title":"Dedicated Support","description":"Contact our dedicated support team and let us know how we can help you."},"OrganizationAdmin":{"title":"Your organization's administrator","description":"Contact the administrator of your organization if you have issues regarding your account, quotas, etc."}},"TagCard":{"maps":"0 maps | {maps} map | {maps} maps","datasets":"0 datasets | {datasets} dataset | {datasets} datasets"},"FeedbackMessage":{"title":"Share your feedback with us.","message":"Do you miss something? Should we be doing something differently?"},"SharedBrief":{"sharedWith":"Shared with","org":"all your organization","groups":"{groupname} | {n} groups","users":"{username} | {n} users","and":"and"},"Wizards":{"Distributor":{"cta":"Get started","headerTitle":"Getting started","title":"What do you want to do?","feedback":{"text":"Looking for a different geospatial workflow?","link":"Let us know."},"engineWarning":{"text":"Needs access to API Keys.","link":"https://carto.com/help/getting-started/get-api-key/#why-do-you-need-this","linkText":"Learn more"}},"footer":{"back":"Back","next":"Next: {nextStep}","goToDashboard":"Go to your dashboard"},"cartovl":{"title":"Develop an interactive custom web map","subtitle":"Develop impressive interactive maps and use them on your websites and apps.","tags":["JavaScript","CARTO VL"],"sections":{"summary":"Summary","howto":"How To","extras":"Extras","learnmore":"Learn more"},"step1":{"title":"Develop an interactive web map","text1":"Our platform provides a set of libraries and APIs to develop customizable and interactive maps. CARTO VL is a JavaScript library to develop beautiful interactive web maps.","text2":"In this guide, you will learn how to load the library in your project, create a map with one of CARTO's basemaps, add a data layer, and style it.","text3":"Interested in other libraries or APIs? Visit our <a href='https://carto.com/developers' target='_blank'>Developer Center</a>."},"step2":{"summary":"Create an HTML file using the template below that loads both the CARTO VL and Mapbox GL libraries.","howto":{"instruction1":"Create an HTML file and add the following scripts."},"extras":{"resource1":"CARTO VL is our more advanced rendering library and new features are constantly being added. You can read about the newest capabilities in our <a href='https://carto.com/blog/categories/product-updates/' target='_blank'>Product Updates</a> blog.","resource2":"You can also <a href='https://www.npmjs.com/package/@carto/carto-vl' target='_blank'>install and load CARTO VL using npm</a>."}},"step3":{"summary":"Define the <code>&ltdiv&gt</code> element that will contain your map.","howto":{"instruction1":"Define the <code>&lt;div&gt;</code> element that will contain the map in the <code>&lt;body&gt;</code> of your file. The map, layers and controls will be displayed in this element.","instruction2":"Paste the following CSS code in the bottom of the <code>&lt;head&gt;</code> element to define some basic styles for the map container."}},"step4":{"summary":"Add a CARTO basemap with the Mapbox GL map constructor.","howto":{"instruction1":"Add the following script below your <code>&lt;div&gt;</code> container to load CARTO's Voyager basemap centered on the world at zoom level 2."},"extras":{"resource1":"CARTO VL relies on <a href='https://docs.mapbox.com/mapbox-gl-js/api/' target='_blank'>Mapbox GL</a> render basemaps. Choose between <code>carto.basemaps.voyager</code>, <code>carto.basemaps.positron</code>, and <code>carto.basemaps.darkmatter</code> basemaps."}},"step5":{"summary":"Connect to a CARTO account and add a data layer to your map. In this example, we’re using an account named public and the default public API key.","howto":{"instruction1":"Connect to a CARTO account by specifying the username and API key you want to use. In this case, we're using a test account and a test access key.","instruction2":"Now that CARTO VL has access, you can add any of the datasets in that account as a source layer to display on the map."},"extras":{"resource1":"Want to use your own account? Learn about <a href='https://carto.com/developers/fundamentals/authorization/' target='_blank'>API Authorization</a>."}},"step6":{"summary":"Use styling properties to overwrite default symbology.","howto":{"instruction1":"You can overwrite the default symbology applied to features on the map by adding custom styles inside of the <code>Viz</code> object."},"extras":{"resource1":"Learn more about <a href='https://carto.com/developers/carto-vl/guides/style-with-expressions/' target='_blank'>styling with expressions</a>."}},"step7":{"congrats":{"title":"Congratulations!","message1":"You've just created your first map with CARTO VL!","message2":"<a href='{url}' class='is-bold'>Download</a> the full code example."},"extras":{"resource1":"Learn more with the following examples from our <a href='https://carto.com/developers/carto-vl/' target='_blank'>Developer Center</a>."},"cards":{"card1":{"title":"Style features by category","subtitle":"Learn how to change the style of the features by a given column","button":"Go to example","link":"https://carto.com/developers/carto-vl/examples/#example-style-by-category"},"card2":{"title":"Add hover popups","subtitle":"Learn how to display info about a feature when user mouses over it.","button":"Go to example","link":"https://carto.com/developers/carto-vl/examples/#example-add-pop-ups-on-hover"},"card3":{"title":"Animate the features","subtitle":"Learn how to animate the features of the map by different columns.","button":"Go to example","link":"https://carto.com/developers/carto-vl/examples/#example-animate-and-color-by-date"}}}},"cartoframes":{"title":"Add spatial data to your data science workflow","subtitle":"Bring spatial data into your data science models using our Python library.","tags":["Python","CARTOframes"],"step1":{"title":"Bring spatial analysis to your Python notebooks with CARTOframes","sections":{"summary":"How can CARTOframes help you?","howto":"What does it look like?"},"text1":"No more⁠ context switching—visualize your data straight out of your notebook","text2":"Share your work right away—publicly or privately","text3":"Spend less time in data preparation using Data Observatory, our location data repository","text4":"(Coming soon)","footer":{"returnToDashboard":"Return to your dashboard","learnMore":"Learn more"}}},"builder":{"title":"Create a web map from your browser","subtitle":"Uncover insights from your location data with our online drag and drop tool.","tags":["Online","Builder"],"sections":{"summary":"Summary","howto":"How To","extras":"Extras","learnmore":"Learn more"},"step1":{"title":"Build a map with our drag & drop editor","text1":"Builder is our drag & drop tool to design, build and publish interactive web maps with your location data. Maps can be easily shared or embedded on any website or blog.","text2":"In this guide, you will learn how to upload a .csv file and create your first dataset, create a simple map, and publish it."},"step2":{"summary":{"text":"Download and upload a comma-separated values (CSV) file to create your first dataset."},"howto":{"instruction1":"Download the following dataset:","instruction2":"Visit the Data page and click the “New Dataset” button","instruction3":"In the Connect dataset section click “Browse”, select the file, and click “Connect dataset”"},"extras":{"resource1":"You can also <a href='https://carto.com/help/working-with-data/quick-data-import/' target='_blank'>import your data</a> by dragging and dropping your files into your dashboard."},"cards":{"dataset1":{"title":"World Ports","rows":"3,669 rows","size":"708 kB","button":"Download","link":"https://public.carto.com/api/v2/sql?q=select%20*%20from%20public.world_ports&format=csv&filename=world_ports"}}},"step3":{"summary":{"text":"Explore your new dataset and learn how to manipulate it."},"howto":{"instruction1":"Once the upload has finished and the new dataset has been created, you will be redirected to the Dataset view. Here, you can explore your data.","instruction2":"Double-click on any cell to edit it.","instruction3":"Click on any of the columns to change the order, rename it, change its data type, remove it, or even add new columns.","instruction4":"You can also add new rows and export your data in different formats."},"extras":{"resource1":"Use the little switch on the bottom left of the screen to explore your dataset using SQL."}},"step4":{"summary":{"text":"Create a map using your new dataset."},"howto":{"instruction1":"From the dataset view, click “CREATE MAP” (on the bottom right of your screen).","instruction2":"Your map will be created and you will be redirected to Builder, CARTO’s map editor:","instruction3":"Double click on the name of the map (Untitled Map) and rename it to “My first map”. This will be the name that you will see on your dashboard as well.","instruction4":"Change the style of the features on the map (eg: point size, point color, strike size, strike color) by clicking on the layer name and playing with the styling options."},"extras":{"resource1":"Alternatively, you can also create maps directly from your dashboard. You can select one or more datasets from the Data page to create a map with multiple layers, or you can create a map from your Maps page."}},"step5":{"summary":{"text":"Publish and share your map with the world."},"howto":{"instruction1":"Click “Publish” to publish your map.","instruction2":"Click on the red privacy button to make your map “Public”.","instruction3":"Click “Publish” to publish this version of your map.","instruction4":"Your map has now been published and you can use the link or embed code to share your map."},"extras":{"resource1":"Until you re-publish your map again, you can make as many changes as you need to without affecting the published version."}},"step6":{"congrats":{"title":"Congratulations!","message1":"You've just created your first web map using Builder","message2":"<a href='{url}' class='is-bold'>Download</a> the example."},"extras":{"resource1":"Learn more with the following examples from our <a href='https://carto.com/help/tutorials/' target='_blank'>Help Center</a>."},"cards":{"card1":{"title":"Understanding map layers in Builder","subtitle":"Learn how to add data layers to your maps, style them, and more.","button":"Go to example","link":"https://carto.com/help/building-maps/understanding-map-layers-in-builder/"},"card2":{"title":"Customizing Pop-Ups with HTML","subtitle":"Learn how to setup and customise popups with HTML.","button":"Go to example","link":"https://carto.com/help/building-maps/customizing-pop-ups-with-html/"},"card3":{"title":"Exploring Data with Widgets","subtitle":"Learn how to add interactive widgets to explore your data.","button":"Go to example","link":"https://carto.com/help/building-maps/exploring-widgets/"}}}}},"MaintenancePage":{"title":"We’ll be up and running soon","text":"Your account is under maintenance. Sorry for the inconvenience!"},"OAuthAppsPage":{"title":"Apps","description":"Build your app allowing users to authenticate through CARTO to share specific data with your app. You can read more in our <a href='https://carto.com/developers/fundamentals/oauth-apps/' target='_blank'>developer documentation</a>.","emptyDescription":"Want to build something that integrates with and extends CARTO?","newAppButton":"New OAuth App","editButton":"Edit","deleteModal":{"title":"You are about to delete <span class='is-bold'>{name}</span> app.","subtitle":"The datasets created by the app won't be deleted.</br>The deleted app cannot be recovered, be sure before proceeding.","cancelButton":"Cancel","deleteButton":"OK, delete"},"regenerateModal":{"title":"You are about to reset the client secret of your <span class='is-bold'>{name}</span> app.","subtitle":"The existing secret will be revoked immediately, and the new secret immediately available. This cannot be undone.","cancelButton":"Cancel","regenerateButton":"Regenerate client secret"},"form":{"newTitle":"New OAuth App","optional":"(optional)","appName":"App name","appNameDesc":"The name of your OAuth app","webUrl":"Website URL","webUrlDesc":"The homepage URL of your website","description":"Description","descriptionDesc":"This is displayed to users of your OAuth app.</br>e.g: Find the neighborhood of your dreams","callbackUrls":"Callback URLs","callbackUrlsDesc":"The full URL to redirect to after a user authorizes an installation.</br>More than one can be setup for development purposes.","callbackUrlDelete":"Delete","callbackUrlAddMore":"Add More","callbackUrlPlaceholder":"https://","logo":"Logo","logoUpload":"Upload a logo","logoUploadLink":"Upload a picture from your computer","logoUploadDesc":"Maximum size is 1MB","cancelButton":"Cancel","saveButton":"Save Changes","editTitle":"About your app","ownedby":"Owned by:","clientId":"Client ID:","clientSecret":"Client Secret:","clientSecretWarning":"Client secret must be kept secret","clientSecretButton":"Reset client secret","clientSecretDesc":"OAuth apps can use OAuth credentials to identify users. Learn more about identifying users by reading our <a href='https://carto.com/developers/fundamentals/oauth-apps/#oauth-flow' target='_blank'>integration developer documentation.</a>","appInformationTitle":"App Information","deleteAppButton":"Delete my app"}},"ConnectedAppsPage":{"title":"Apps connected to your account","description":"These are the apps you gave access to some of your CARTO information.","emptyDescription":"You don’t have given permission to any app to access to your CARTO account data.","emptyTipTitle":"Are you looking to create an OAuth application?","emptyTipDescription":"You can do it from your <a href='{url}'>developer settings</a>.","listTitle":"Connected Apps","removeAccessButton":"Remove Access","removeModal":{"title":"You are about to remove access <span class='is-bold'>{name}</span> app to your account data.","subtitle":"The datasets of your account won’t be affected.","cancelButton":"Cancel","removeButton":"OK, remove"}},"SettingsPages":{"sidebar":{"profile":"Profile","account":"Account","connectedApps":"Connected Apps","billing":"Billing","organizationSettings":"Organization Settings","developerSettings":"Developer Settings"},"tabs":{"apiKeys":"API Keys","oAuthApps":"OAuth apps","mobileApps":"Mobile apps"}},"CatalogPage":{"header":"Catalog"},"CatalogListHeader":{"name":"Name","aggregation":"Aggregation","frequency":"Frequency","source":"Source"},"CatalogDropdown":{"placeholder":"Search...","category":{"title":"Select a category","placeholder":"Search...","extra":"Interested in a different data category? <a href='mailto:sdr@carto.com'>Contact Us</a>"},"country":{"title":"Select a country","placeholder":"Select a country","extra":"Interested in data from a non-listed country? <a href='mailto:sdr@carto.com'>Contact Us</a>"}},"CatalogDetailPage":{"back":"Back","requestDataset":"Request Dataset","requestSuccess":"We have received your request correctly, we will contact you shortly.","variableGroups":"Variable Groups","category":"Category","country":"Country"}};

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/i18n/locales/en.overrides.json":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/i18n/locales/en.overrides.json ***!
  \*****************************************************************************/
/*! exports provided: components, default */
/***/ (function(module) {

module.exports = {"components":{"modals":{"change-lock":{"description":{"unlocked":"Locking %{thisOrTheseStr} %{contentTypePluralized} will hide %{itOrThemStr} from this list. You can see %{itOrThemStr} using the “Locked” filter."}}}}};

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue":
/*!********************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maintenance_vue_vue_type_template_id_10c7d3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maintenance.vue?vue&type=template&id=10c7d3ba&scoped=true& */ "./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=template&id=10c7d3ba&scoped=true&");
/* harmony import */ var _Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maintenance.vue?vue&type=script&lang=js& */ "./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Maintenance_vue_vue_type_style_index_0_id_10c7d3ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Maintenance.vue?vue&type=style&index=0&id=10c7d3ba&scoped=true&lang=scss& */ "./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=style&index=0&id=10c7d3ba&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Maintenance_vue_vue_type_template_id_10c7d3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Maintenance_vue_vue_type_template_id_10c7d3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10c7d3ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "lib/assets/javascripts/new-dashboard/pages/Maintenance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--3!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./Maintenance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=style&index=0&id=10c7d3ba&scoped=true&lang=scss&":
/*!******************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=style&index=0&id=10c7d3ba&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_style_index_0_id_10c7d3ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--4-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/lib/loader.js??ref--4-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./Maintenance.vue?vue&type=style&index=0&id=10c7d3ba&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=style&index=0&id=10c7d3ba&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_style_index_0_id_10c7d3ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_style_index_0_id_10c7d3ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_style_index_0_id_10c7d3ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_style_index_0_id_10c7d3ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_style_index_0_id_10c7d3ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=template&id=10c7d3ba&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=template&id=10c7d3ba&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_template_id_10c7d3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./Maintenance.vue?vue&type=template&id=10c7d3ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=template&id=10c7d3ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_template_id_10c7d3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_Maintenance_vue_vue_type_template_id_10c7d3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Maintenance = __webpack_require__(/*! new-dashboard/pages/Maintenance */ "./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue");

var _Maintenance2 = _interopRequireDefault(_Maintenance);

var _DummyHeader = __webpack_require__(/*! new-dashboard/components/DummyHeader */ "./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue");

var _DummyHeader2 = _interopRequireDefault(_DummyHeader);

var _DummyFooter = __webpack_require__(/*! new-dashboard/components/DummyFooter */ "./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue");

var _DummyFooter2 = _interopRequireDefault(_DummyFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MaintenanceApp',
  components: {
    Maintenance: _Maintenance2.default,
    DummyHeader: _DummyHeader2.default,
    DummyFooter: _DummyFooter2.default
  }
}; //
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'DummyFooter'
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'DummyHeader'
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//


exports.default = {
  name: 'Page'
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Page = __webpack_require__(/*! new-dashboard/components/Page */ "./lib/assets/javascripts/new-dashboard/components/Page.vue");

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Maintenance',
  components: {
    Page: _Page2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=style&index=0&id=61530bdf&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=style&index=0&id=61530bdf&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=style&index=0&id=faf5205e&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=style&index=0&id=faf5205e&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=style&index=0&id=c936b87a&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=style&index=0&id=c936b87a&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=style&index=0&id=10c7d3ba&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--4-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=style&index=0&id=10c7d3ba&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=template&id=4681e846&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/bundles/maintenance/MaintenanceApp.vue?vue&type=template&id=4681e846& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [_c("DummyHeader"), _c("Maintenance"), _c("DummyFooter")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=template&id=61530bdf&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyFooter.vue?vue&type=template&id=61530bdf&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container grid footer" }, [
    _vm._m(0),
    _c(
      "div",
      {
        staticClass:
          "grid-cell grid-cell--col8 grid-cell--col9--tablet grid-cell--col12--mobile"
      },
      [
        _c("div", { staticClass: "footer-block" }, [
          _c(
            "a",
            {
              staticClass: "footer-link",
              attrs: { href: "https://carto.com/help", target: "_blank" }
            },
            [
              _c(
                "h4",
                { staticClass: "title-link title is-caption is-txtGrey" },
                [
                  _vm._v(" " + _vm._s(_vm.$t("Footer.HelpCenter.title"))),
                  _c("span", { staticClass: "chevron" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          "svg-inline": "",
                          focusable: "false",
                          role: "presentation",
                          width: "5",
                          height: "9",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c(
                          "g",
                          { attrs: { fill: "none", "fill-rule": "evenodd" } },
                          [
                            _c("path", {
                              attrs: { d: "M-4.996 11.5v-14h14.4v14z" }
                            }),
                            _c("path", {
                              staticClass: "chevron-path",
                              attrs: {
                                d:
                                  "M3.103 4.5L.163 7.525l.785.808L4.674 4.5.948.667l-.785.808z",
                                fill: "#2E3C43"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ]
              ),
              _c(
                "p",
                {
                  staticClass: "description-link text is-small is-txtSoftGrey"
                },
                [_vm._v(_vm._s(_vm.$t("Footer.HelpCenter.description")))]
              )
            ]
          ),
          _c(
            "a",
            {
              staticClass: "footer-link",
              attrs: { href: "https://carto.com/developers", target: "_blank" }
            },
            [
              _c(
                "h4",
                { staticClass: "title-link title is-caption is-txtGrey" },
                [
                  _vm._v(" " + _vm._s(_vm.$t("Footer.DeveloperCenter.title"))),
                  _c("span", { staticClass: "chevron" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          "svg-inline": "",
                          focusable: "false",
                          role: "presentation",
                          width: "5",
                          height: "9",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c(
                          "g",
                          { attrs: { fill: "none", "fill-rule": "evenodd" } },
                          [
                            _c("path", {
                              attrs: { d: "M-4.996 11.5v-14h14.4v14z" }
                            }),
                            _c("path", {
                              staticClass: "chevron-path",
                              attrs: {
                                d:
                                  "M3.103 4.5L.163 7.525l.785.808L4.674 4.5.948.667l-.785.808z",
                                fill: "#2E3C43"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ]
              ),
              _c(
                "p",
                {
                  staticClass: "description-link text is-small is-txtSoftGrey"
                },
                [_vm._v(_vm._s(_vm.$t("Footer.DeveloperCenter.description")))]
              )
            ]
          )
        ]),
        _c("div", { staticClass: "footer-block" }, [
          _c(
            "a",
            {
              staticClass: "footer-link",
              attrs: { href: "mailto:support@carto.com" }
            },
            [
              _c(
                "h4",
                { staticClass: "title-link title is-caption is-txtGrey" },
                [
                  _vm._v(" " + _vm._s(_vm.$t("Footer.TechSupport.title"))),
                  _c("span", { staticClass: "chevron" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          "svg-inline": "",
                          focusable: "false",
                          role: "presentation",
                          width: "5",
                          height: "9",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c(
                          "g",
                          { attrs: { fill: "none", "fill-rule": "evenodd" } },
                          [
                            _c("path", {
                              attrs: { d: "M-4.996 11.5v-14h14.4v14z" }
                            }),
                            _c("path", {
                              staticClass: "chevron-path",
                              attrs: {
                                d:
                                  "M3.103 4.5L.163 7.525l.785.808L4.674 4.5.948.667l-.785.808z",
                                fill: "#2E3C43"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ]
              ),
              _c(
                "p",
                {
                  staticClass: "description-link text is-small is-txtSoftGrey"
                },
                [_vm._v(_vm._s(_vm.$t("Footer.TechSupport.description")))]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "grid-cell grid-cell--col3 grid-cell--col12--mobile footer-logo"
      },
      [
        _c("a", { attrs: { href: "https://carto.com" } }, [
          _c("img", {
            staticClass: "carto-logo",
            attrs: { src: __webpack_require__(/*! ../assets/icons/common/cartoLogo.svg */ "./lib/assets/javascripts/new-dashboard/assets/icons/common/cartoLogo.svg") }
          })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=template&id=faf5205e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/DummyHeader.vue?vue&type=template&id=faf5205e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "dummy-header" }, [
    _c("a", { attrs: { href: "https://carto.com" } }, [
      _c(
        "svg",
        {
          attrs: {
            "svg-inline": "",
            focusable: "false",
            role: "presentation",
            width: "92",
            height: "36",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("g", { attrs: { fill: "#FFF", "fill-rule": "evenodd" } }, [
            _c("path", {
              attrs: {
                d:
                  "M74 36c9.941 0 18-8.059 18-18S83.941 0 74 0 56 8.059 56 18s8.059 18 18 18z",
                "fill-opacity": ".2"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M6.253 23.982c2.514 0 3.968-1.1 5.045-2.592l-2.384-1.705c-.685.836-1.388 1.394-2.58 1.394-1.6 0-2.726-1.345-2.726-3.067v-.033c0-1.673 1.126-3.05 2.726-3.05 1.094 0 1.846.541 2.499 1.345l2.384-1.854c-1.013-1.394-2.515-2.378-4.85-2.378-3.462 0-6.009 2.624-6.009 5.97v.033c0 3.427 2.629 5.937 5.895 5.937zm10.479-.23h3.315l.816-2.066h4.425l.817 2.066H29.5L24.635 12.19h-3.053l-4.85 11.562zm5.062-4.543l1.29-3.247 1.274 3.247h-2.564zm13.876 4.543h3.168v-3.477h1.404l2.302 3.477h3.642l-2.727-4.002c1.42-.606 2.351-1.77 2.351-3.542v-.033c0-1.131-.343-2-1.012-2.673-.768-.77-1.976-1.23-3.723-1.23H35.67v11.48zm3.168-5.97v-2.771h2.09c1.045 0 1.714.459 1.714 1.377v.033c0 .837-.637 1.361-1.698 1.361h-2.106zm16.423 5.97h3.167V15.06h3.43v-2.788h-10.01v2.788h3.413v8.692zM74 24a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              }
            })
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=template&id=c936b87a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/components/Page.vue?vue&type=template&id=c936b87a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "page" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=template&id=10c7d3ba&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./lib/assets/javascripts/new-dashboard/pages/Maintenance.vue?vue&type=template&id=10c7d3ba&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Page", [
    _c("div", { staticClass: "container maintenance-container" }, [
      _c("div", { staticClass: "maintenance-icon" }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! ../assets/icons/common/wrench.svg */ "./lib/assets/javascripts/new-dashboard/assets/icons/common/wrench.svg") }
        })
      ]),
      _c(
        "h2",
        {
          staticClass: "maintenance-title title is-title is-txtDarkBlue is-bold"
        },
        [_vm._v(_vm._s(_vm.$t("MaintenancePage.title")))]
      ),
      _c("p", { staticClass: "text is-body is-txtDarkBlue" }, [
        _vm._v(_vm._s(_vm.$t("MaintenancePage.text")))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 15:
/*!*******************************************************************************************************!*\
  !*** multi @babel/polyfill ./lib/assets/javascripts/new-dashboard/bundles/maintenance/maintenance.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! /cartodb/lib/assets/javascripts/new-dashboard/bundles/maintenance/maintenance.js */"./lib/assets/javascripts/new-dashboard/bundles/maintenance/maintenance.js");


/***/ })

/******/ });
//# sourceMappingURL=maintenance.js.map