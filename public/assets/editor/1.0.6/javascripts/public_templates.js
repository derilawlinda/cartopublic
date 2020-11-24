this["JST"] = this["JST"] || {};

this["JST"]["cartodb/public/views/public_footer"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<footer id="Footer" class="CDB-Text CDB-FontSize-medium Footer ';
 if (light) { 'Footer--light' } ;
__p += ' Footer--public u-pr">\n  <div class="Footer-inner Footer-inner--public">\n\n    <div class="u-inner">\n      <p class="PublicTitle PublicTitle--feature">Subscribe</p>\n      <h3 class="Title Title--sectionMedium u-vspace--20">Keep up with CARTO announcements</h3>\n\n      <div class="Grid u-vspace-l">\n        <ul class="Grid-inner">\n          <li class="Grid-cell Grid-cell--col5 Grid-cell--col6--tablet Grid-cell--col12--mobile">\n            <div class="Newsletter js-Hubspot--newsletter"></div>\n          </li>\n\n          <li class="Grid-cell Grid-cell--col7 Grid-cell--col6--tablet Grid-cell--col12--mobile">\n            <p class="Footer-social">Or follow us on <a href="https://twitter.com/cartodb" target="_blank" class="Footer-link u-lspace--20">\n                <i class="FooterIcon FooterIcon--twitter FooterIcon--s14 u-iblock u-malign">\n                  <svg width="18px" height="14px" viewBox="0 0 500 408" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n                      <g id="icons" sketch:type="MSArtboardGroup" transform="translate(-2000.000000, -500.000000)">\n                        <path d="M2157.24789,907.407407 C2099.31782,907.407407 2045.39669,890.381519 2000,861.200045 C2008.02517,862.149901 2016.19116,862.635831 2024.47054,862.635831 C2072.53009,862.635831 2116.76177,846.193059 2151.86912,818.608736 C2106.98087,817.778071 2069.09726,788.042821 2056.04448,747.180689 C2062.30659,748.381761 2068.73331,749.025389 2075.34292,749.025389 C2084.69951,749.025389 2093.76166,747.769306 2102.37024,745.418505 C2055.44095,735.971292 2020.08303,694.401353 2020.08303,644.568769 C2020.08303,644.136016 2020.08303,643.705097 2020.09035,643.276012 C2033.92224,650.979378 2049.73847,655.605799 2066.5551,656.139405 C2039.03032,637.696068 2020.91883,606.215137 2020.91883,570.533203 C2020.91883,551.684619 2025.97754,534.016936 2034.80742,518.82658 C2085.40181,581.051296 2160.98797,621.997778 2246.24346,626.286798 C2244.49504,618.759466 2243.58609,610.909404 2243.58609,602.848467 C2243.58609,546.049664 2289.51681,500 2346.17031,500 C2375.67395,500 2402.33366,512.491152 2421.04686,532.480297 C2444.41274,527.866712 2466.36673,519.307009 2486.1864,507.52183 C2478.52701,531.537776 2462.2627,551.693787 2441.08234,564.42332 C2461.83291,561.936825 2481.6032,556.408225 2500,548.228097 C2486.24675,568.853535 2468.85402,586.96864 2448.81305,601.469526 C2449.01057,605.87957 2449.10933,610.315286 2449.10933,614.77484 C2449.10933,750.68672 2345.93072,907.407407 2157.24789,907.407407" id="icon_14_twitter" sketch:type="MSShapeGroup"></path>\n                      </g>\n                    </g>\n                  </svg>\n                </i>\n                </a> <a href="https://www.facebook.com/CartoDB" target="_blank" class="Footer-link u-lspace--20">\n                  <i class="FooterIcon FooterIcon--twitter FooterIcon--s14 u-iblock u-malign">\n                    <svg width="14px" height="14px" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n                        <g id="icons" sketch:type="MSArtboardGroup" transform="translate(-2500.000000, -500.000000)">\n                          <path d="M2972.40477,500 L2527.59523,500 C2512.35135,500 2500,512.351345 2500,527.595225 L2500,972.404775 C2500,987.644908 2512.35135,1000 2527.59523,1000 L2767.06483,1000 L2767.06483,806.374441 L2701.906,806.374441 L2701.906,730.913771 L2767.06483,730.913771 L2767.06483,675.264337 C2767.06483,610.682518 2806.50933,575.516872 2864.12021,575.516872 C2891.71544,575.516872 2915.43459,577.571995 2922.34558,578.489962 L2922.34558,645.981176 L2882.38964,645.99991 C2851.05697,645.99991 2844.9909,660.887843 2844.9909,682.735468 L2844.9909,730.913771 L2919.71532,730.913771 L2909.98486,806.374441 L2844.9909,806.374441 L2844.9909,1000 L2972.40477,1000 C2987.64491,1000 3000,987.644908 3000,972.404775 L3000,527.595225 C3000,512.351345 2987.64491,500 2972.40477,500" id="icon_15_facebook" sketch:type="MSShapeGroup"></path>\n                        </g>\n                      </g>\n                    </svg>\n                  </i>\n                </a> <a href="https://www.linkedin.com/company/cartodb" target="_blank" class="Footer-link u-lspace--20">\n                  <i class="FooterIcon FooterIcon--twitter FooterIcon--s14 u-iblock u-malign">\n                    <svg width="14px" height="14px" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n                        <g id="icons" sketch:type="MSArtboardGroup" transform="translate(-3000.000000, -500.000000)">\n                          <path d="M3000,535.816886 C3000,516.041104 3016.54224,500 3036.94908,500 L3463.05091,500 C3483.45709,500 3500,516.041104 3500,535.816886 L3500,964.183113 C3500,983.965579 3483.45709,1000 3463.05091,1000 L3036.94908,1000 C3016.54224,1000 3000,983.965579 3000,964.183113 L3000,535.816886 L3000,535.816886 L3000,535.816886 Z M3141.32261,907.438908 L3141.32261,681.660906 L3065.80209,681.660906 L3065.80209,907.438908 L3141.32261,907.438908 L3141.32261,907.438908 Z M3103.56202,650.834731 C3129.89755,650.834731 3146.28918,633.497514 3146.28918,611.831003 C3145.79838,589.676778 3129.89755,572.820595 3104.06156,572.820595 C3078.22827,572.820595 3061.33775,589.676778 3061.33775,611.831003 C3061.33775,633.497514 3077.72603,650.834731 3103.06986,650.834731 L3103.56067,650.834731 L3103.56202,650.834731 L3103.56202,650.834731 Z M3183.11053,907.438908 L3258.63038,907.438908 L3258.63038,781.354914 C3258.63038,774.607096 3259.12119,767.865958 3261.11534,763.04227 C3266.57474,749.559994 3279.00092,735.596687 3299.86361,735.596687 C3327.19085,735.596687 3338.12241,756.301132 3338.12241,786.652954 L3338.12241,907.438908 L3413.63621,907.438908 L3413.63621,777.981005 C3413.63621,708.632137 3376.37852,676.362864 3326.69197,676.362864 C3285.95089,676.362864 3268.06532,698.991442 3258.12814,714.404528 L3258.6324,714.404528 L3258.6324,681.660906 L3183.11254,681.660906 C3184.10357,702.846383 3183.11254,907.438908 3183.11254,907.438908 L3183.11053,907.438908 L3183.11053,907.438908 Z" id="icon_16_linkedin" sketch:type="MSShapeGroup"></path>\n                        </g>\n                      </g>\n                    </svg>\n                  </i>\n                </a></p>\n          </li>\n        </ul>\n      </div>\n\n      <hr class="Sep u-vspace-l u-mobile-hide"></hr>\n\n      <div class="u-block--mobile">\n        <dl class="Footer-column Footer-column--mobile">\n          <dd class="Footer-item Footer-item--mobile"><i class="FooterIcon FooterIcon--mobile Footer-arrow">\n                <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                <svg width="6px" height="10px" viewBox="0 0 272 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->\n                  <title>icon_03_caretRight</title>\n                  <desc>Created with Sketch.</desc>\n                  <defs></defs>\n                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="icons" transform="translate(-1500.000000, 0.000000)" fill="#ddd">\n                      <path d="M1748.23301,281.69014 L1772,249.999999 L1748.23301,218.309858 L1616.19418,42.2535212 L1584.50485,0 L1500,63.380282 L1531.68932,105.633803 L1639.61495,250.461632 L1531.68932,394.366197 L1500,436.619718 L1584.50485,500 L1616.19418,457.746479 L1748.23301,281.69014 L1748.23301,281.69014 Z" id="icon_03_caretRight"></path>\n                    </g>\n                  </g>\n                </svg>\n              </i><a class="Footer-link" href="https://carto.com/builder/">Builder</a></dd>\n          <dd class="Footer-item Footer-item--mobile"><i class="FooterIcon FooterIcon--mobile Footer-arrow">\n                <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                <svg width="6px" height="10px" viewBox="0 0 272 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->\n                  <title>icon_03_caretRight</title>\n                  <desc>Created with Sketch.</desc>\n                  <defs></defs>\n                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="icons" transform="translate(-1500.000000, 0.000000)" fill="#ddd">\n                      <path d="M1748.23301,281.69014 L1772,249.999999 L1748.23301,218.309858 L1616.19418,42.2535212 L1584.50485,0 L1500,63.380282 L1531.68932,105.633803 L1639.61495,250.461632 L1531.68932,394.366197 L1500,436.619718 L1584.50485,500 L1616.19418,457.746479 L1748.23301,281.69014 L1748.23301,281.69014 Z" id="icon_03_caretRight"></path>\n                    </g>\n                  </g>\n                </svg>\n              </i><a class="Footer-link" href="https://carto.com/engine/">Engine</a></dd>\n          <dd class="Footer-item Footer-item--mobile"><i class="FooterIcon FooterIcon--mobile Footer-arrow">\n                <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                <svg width="6px" height="10px" viewBox="0 0 272 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->\n                  <title>icon_03_caretRight</title>\n                  <desc>Created with Sketch.</desc>\n                  <defs></defs>\n                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="icons" transform="translate(-1500.000000, 0.000000)" fill="#ddd">\n                      <path d="M1748.23301,281.69014 L1772,249.999999 L1748.23301,218.309858 L1616.19418,42.2535212 L1584.50485,0 L1500,63.380282 L1531.68932,105.633803 L1639.61495,250.461632 L1531.68932,394.366197 L1500,436.619718 L1584.50485,500 L1616.19418,457.746479 L1748.23301,281.69014 L1748.23301,281.69014 Z" id="icon_03_caretRight"></path>\n                    </g>\n                  </g>\n                </svg>\n              </i><a class="Footer-link" href="https://carto.com/mobile/">Mobile</a></dd>\n          <dd class="Footer-item Footer-item--mobile"><i class="FooterIcon FooterIcon--mobile Footer-arrow">\n                <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                <svg width="6px" height="10px" viewBox="0 0 272 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->\n                  <title>icon_03_caretRight</title>\n                  <desc>Created with Sketch.</desc>\n                  <defs></defs>\n                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="icons" transform="translate(-1500.000000, 0.000000)" fill="#ddd">\n                      <path d="M1748.23301,281.69014 L1772,249.999999 L1748.23301,218.309858 L1616.19418,42.2535212 L1584.50485,0 L1500,63.380282 L1531.68932,105.633803 L1639.61495,250.461632 L1531.68932,394.366197 L1500,436.619718 L1584.50485,500 L1616.19418,457.746479 L1748.23301,281.69014 L1748.23301,281.69014 Z" id="icon_03_caretRight"></path>\n                    </g>\n                  </g>\n                </svg>\n              </i><a class="Footer-link" href="https://carto.com/location-data-services/">Location Data Services</a></dd>\n          <dd class="Footer-item Footer-item--mobile"><i class="FooterIcon FooterIcon--mobile Footer-arrow">\n                <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                <svg width="6px" height="10px" viewBox="0 0 272 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->\n                  <title>icon_03_caretRight</title>\n                  <desc>Created with Sketch.</desc>\n                  <defs></defs>\n                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="icons" transform="translate(-1500.000000, 0.000000)" fill="#ddd">\n                      <path d="M1748.23301,281.69014 L1772,249.999999 L1748.23301,218.309858 L1616.19418,42.2535212 L1584.50485,0 L1500,63.380282 L1531.68932,105.633803 L1639.61495,250.461632 L1531.68932,394.366197 L1500,436.619718 L1584.50485,500 L1616.19418,457.746479 L1748.23301,281.69014 L1748.23301,281.69014 Z" id="icon_03_caretRight"></path>\n                    </g>\n                  </g>\n                </svg>\n              </i><a class="Footer-link" href="https://carto.com/data-observatory/">Data Observatory</a></dd>\n          <dd class="Footer-item Footer-item--mobile"><i class="FooterIcon FooterIcon--mobile Footer-arrow">\n                <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                <svg width="6px" height="10px" viewBox="0 0 272 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->\n                  <title>icon_03_caretRight</title>\n                  <desc>Created with Sketch.</desc>\n                  <defs></defs>\n                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="icons" transform="translate(-1500.000000, 0.000000)" fill="#ddd">\n                      <path d="M1748.23301,281.69014 L1772,249.999999 L1748.23301,218.309858 L1616.19418,42.2535212 L1584.50485,0 L1500,63.380282 L1531.68932,105.633803 L1639.61495,250.461632 L1531.68932,394.366197 L1500,436.619718 L1584.50485,500 L1616.19418,457.746479 L1748.23301,281.69014 L1748.23301,281.69014 Z" id="icon_03_caretRight"></path>\n                    </g>\n                  </g>\n                </svg>\n              </i><a class="Footer-link" href="https://github.com/CartoDB/cartodb">Source Code</a></dd>\n          <dd class="Footer-item Footer-item--mobile"><i class="FooterIcon FooterIcon--mobile Footer-arrow">\n                <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                <svg width="6px" height="10px" viewBox="0 0 272 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->\n                  <title>icon_03_caretRight</title>\n                  <desc>Created with Sketch.</desc>\n                  <defs></defs>\n                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="icons" transform="translate(-1500.000000, 0.000000)" fill="#ddd">\n                      <path d="M1748.23301,281.69014 L1772,249.999999 L1748.23301,218.309858 L1616.19418,42.2535212 L1584.50485,0 L1500,63.380282 L1531.68932,105.633803 L1639.61495,250.461632 L1531.68932,394.366197 L1500,436.619718 L1584.50485,500 L1616.19418,457.746479 L1748.23301,281.69014 L1748.23301,281.69014 Z" id="icon_03_caretRight"></path>\n                    </g>\n                  </g>\n                </svg>\n              </i><a href="https://carto.com/pricing/" class="Footer-link">Pricing</a></dd>\n        </dl>\n      </div>\n\n      <div class="Grid Footer-columns Footer-columns--noBorder u-mobile-hide">\n        <ul class="Grid-inner Grid-inner--shortpadding">\n          <li class="Grid-cell Grid-cell--col2 Grid-cell--col4--tablet Grid-cell--col6--mobile Footer-column">\n            <dl>\n              <dt class="Footer-title u-vspace-xs">Product</dt>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/builder/">Builder</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/engine/">Engine</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/mobile/">Mobile</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/location-data-services/">Location Data Services</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/data-observatory/">Data Observatory</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://github.com/CartoDB/cartodb">Source Code</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/pricing/" class="Footer-link">Pricing</a></dd>\n            </dl>\n          </li>\n\n          <li class="Grid-cell Grid-cell--col2 Grid-cell--col4--tablet Grid-cell--col6--mobile Footer-column">\n            <dl>\n              <dt class="Footer-title u-vspace-xs">Solutions</dt>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/banking-and-finance/">Banking & Finance</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/business-intelligence-and-analytics/">BI & Analytics</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/government/">Government</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/real-estate/">Real Estate</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/web-mobile/">Web Development</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/journalism/">Journalism</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/natural-resources/">Natural Resources</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/earth-observation-and-space/">Earth Observation</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/non-profits/">Non-profits</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/solutions/education-and-research/">Education</a></dd>\n            </dl>\n          </li>\n\n          <li class="Grid-cell Grid-cell--col2 Grid-cell--col4--tablet Grid-cell--col6--mobile Footer-column">\n            <dl>\n              <dt class="Footer-title u-vspace-xs">Connectors</dt>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/dropbox/">Dropbox</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/google-drive/">Google Drive</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/twitter-maps/">Twitter Maps</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/mailchimp/">MailChimp</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/excel-data/">Excel Data</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/arcgis/">ArcGIS™</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/satellite-imagery/">Satellite Imagery</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/qlik/">Qlik</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/splunk/">Splunk</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/connectors/alteryx/">Alteryx</a></dd>\n            </dl>\n          </li>\n\n          <li class="Grid-cell Grid-cell--col2 Grid-cell--col4--tablet Grid-cell--col6--mobile Footer-column">\n            <dl>\n              <dt class="Footer-title u-vspace-xs">Discover</dt>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/gallery/">Map Gallery</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/explore">Explore</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/ambassadors/">Ambassadors</a></dd>\n            </dl>\n          </li>\n\n          <li class="Grid-cell Grid-cell--col2 Grid-cell--col4--tablet Grid-cell--col6--mobile Footer-column">\n            <dl>\n              <dt class="Footer-title u-vspace-xs">Learn</dt>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/learn/guides">Guides</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/developers">Developers</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/academy">The Map Academy</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/resources/">Resources Center</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/webinars/">Webinars</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/blog">Blog</a></dd>\n            </dl>\n          </li>\n\n          <li class="Grid-cell Grid-cell--col2 Grid-cell--col4--tablet Grid-cell--col6--mobile Footer-column">\n            <dl>\n              <dt class="Footer-title u-vspace-xs">About us</dt>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/team/">Team</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/jobs/">Jobs</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/press/">Press</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/partners/">Partners</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/attributions">Attributions</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/contributing/">Contributions</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="mailto:sales@carto.com">Contact us</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/request-live-demo/">Request a Live Demo</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/terms/">Terms of Service</a></dd>\n              <dd class="Footer-item"><a class="Footer-link" href="https://carto.com/legal/">Legal</a></dd>\n            </dl>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n';

}
return __p
};

this["JST"]["cartodb/public/views/public_header_shared"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Header CDB-Text" id="header">\n  <div class="u-inner Header-inner">\n    <div class="Header-navigation">\n      <ul class="Header-navigationList">\n\n        <!--  CARTO logo -->\n        <li class="js-logo"></li>\n\n        ';
 if (!isHosted) { ;
__p += '\n          <li class="Header-navigationItem js-user-tour u-hideOnTablet">\n            <a href="https://carto.com/builder/" class="Header-navigationLink">Builder</a>\n          </li>\n\n          <li class="Header-navigationItem js-user-tour u-hideOnTablet">\n            <a href="https://carto.com/engine/" class="Header-navigationLink">Engine</a>\n          </li>\n\n          <li class="Header-navigationItem js-user-industries u-hideOnTablet">\n            <a href="#/industries" class="Header-navigationLink js-dropdown-target">Solutions <i class="Header-darrow CDB-IconFont CDB-IconFont-caretDown"></i></a>\n          </li>\n\n          <li class="Header-navigationItem u-hideOnTablet">\n            <a href="https://carto.com/pricing/" class="Header-navigationLink">Pricing</a>\n          </li>\n\n          <li class="Header-navigationItem u-hideOnTablet">\n            <a href="https://carto.com/blog/" class="Header-navigationLink">Blog</a>\n          </li>\n        ';
 } ;
__p += '\n      </ul>\n    </div>\n\n    <div class="Header-settings">\n      <ul class="Header-settingsList js-user-settings">\n        <li class="Header-settingsItem js-login">\n          <a href="' +
__e( loginUrl ) +
'" class="Header-settingsLink Header-settingsLink Header-settingsLink--public">Login</a>\n        </li>\n\n          ';
 if (!isHosted) { ;
__p += '\n          <li class="Header-settingsItem">\n            <a href="https://carto.com/signup" class="PublicButton PublicButton--sMedium PublicButton--cWhite is-hover PublicButton--public">\n              <span>Sign up</span>\n            </a>\n          </li>\n          ';
 } ;
__p += '\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["cartodb/public/views/public_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'inner\'>\n  <h1><a href=\'https://carto.com\' class=\'logo\' id=\'the_logo\'>CARTO</a></h1>\n  <ul class=\'options\'>\n    ';
 if (!username && !isMobileDevice) { ;
__p += '\n      <li><a href=\'https://carto.com/learn/guides\' class=\'guides\'>Guides</a></li>\n    ';
 } ;
__p += '\n\n    ';
 if (!username) { ;
__p += '\n      ';
 if ( !cdb.config.get('cartodb_com_hosted') ) { ;
__p += '\n        <li><a class=\'signup\' href=\'https://carto.com/signup\'>Sign up</a><li>\n      ';
 } ;
__p += '\n      <li><a href=\'https://carto.com/login\' class=\'border login\'>Login</a></li>\n    ';
 } else { ;
__p += '\n      <li>\n        <a class=\'editor dropdown account\' href=\'' +
__e( urls[0] ) +
'\'>\n          ';
 if (avatar_url) { ;
__p += '<img src=\'' +
__e( avatar_url ) +
'\' width=\'18\' title=\'' +
__e( username ) +
'\' alt=\'' +
__e( username ) +
'\' />';
 } ;
__p +=
__e( username ) +
'<span class=\'separator\'></span>\n        </a>\n      </li>\n    ';
 } ;
__p += '\n  </ul>\n</div>\n';

}
return __p
};

this["JST"]["cartodb/public/views/public_navigation"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Text CDB-Size-medium Navmenu js-Navmenu">\n  <div class="u-inner">\n    <div class="PublicMap-block">\n      <div class="PublicMap-gradient"></div>\n\n      <div class="PublicMap-leftBlock PublicMap-leftBlock--owner">\n        <ul class="Navmenu-list Navmenu-list--owner Navmenu-list--avatar">\n          <li class="Navmenu-item">\n            <a href="' +
((__t = ( baseUrl )) == null ? '' : __t) +
'/me" target="_blank" class="UserAvatar">\n              <img class="UserAvatar-img--medium" src="' +
((__t = ( userAvatar )) == null ? '' : __t) +
'" alt="' +
((__t = ( userName )) == null ? '' : __t) +
'" title="' +
((__t = ( userName )) == null ? '' : __t) +
'" />\n            </a>\n          </li>\n        </ul>\n\n        <ul class="Navmenu-list Navmenu-list--owner">\n          <li class="Navmenu-item u-hideOnTablet last-child">\n            <a href="' +
((__t = ( baseUrl )) == null ? '' : __t) +
'/me" class="Navmenu-link Navmenu-link--owner" title="">' +
((__t = ( userName )) == null ? '' : __t) +
'</a>\n          </li>\n\n          <li class="Navmenu-item">\n            <i class="Navmenu-rarrow CDB-IconFont CDB-IconFont-rArrowLight"></i>\n            <a href="' +
((__t = ( baseUrl )) == null ? '' : __t) +
'/maps" class="Navmenu-link">Maps</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="PublicMap-rightBlock PublicMap-rightBlock--owner u-txt-right">\n        <ul class="Navmenu-list">\n          <li class="Navmenu-item Navmenu-item--buttons">\n            <ul class="u-valign">\n              <li class="Navmenu-subItem">\n                <a href="' +
((__t = ( embedMapUrl )) == null ? '' : __t) +
'" target="_blank" class="Navmenu-link">\n                  <i class="CDB-IconFont CDB-IconFont-fullscreen Navmenu-icon"></i>\n                </a>\n              </li>\n\n              <li class="Navmenu-subItem">\n                <a href="#" class="Navmenu-link js-Navmenu-link--download-map">\n                  <i class="CDB-IconFont CDB-IconFont-downloadCircle Navmenu-icon"></i>\n                </a>\n              </li>\n            </ul>\n          </li>\n\n          <li class="Navmenu-item Navmenu-item--buttons js-Navmenu-share u-showOnTablet">\n            <div class="Navmenu-sep u-showOnTablet"></div>\n\n            <a href="#" class="Navmenu-link Navmenu-shareLink js-Navmenu-shareLink">\n              <i class="CDB-IconFont CDB-IconFont-share Navmenu-icon"></i>\n            </a>\n          </li>\n        </ul>\n\n        <ul class="Navmenu-list Navmenu-shareList js-Navmenu-shareList u-valign">\n          <li class="Navmenu-item Navmenu-item--buttons">\n            <div class="Navmenu-sep u-hideOnTablet"></div>\n\n            <ul class="u-valign">\n              <li class="Navmenu-subItem">\n                <a href="https://twitter.com/intent/tweet?text=' +
((__t = ( shareTwitter )) == null ? '' : __t) +
'">\n                  <i class="CDB-IconFont CDB-IconFont-twitter Navmenu-icon Navmenu-icon--twitter"></i>\n                </a>\n              </li>\n\n              <li class="Navmenu-subItem">\n                <a href="http://www.facebook.com/sharer.php?u=' +
((__t = ( shareFacebook )) == null ? '' : __t) +
'" target="_blank" class="Navmenu-link js-Navmenu-link--facebook">\n                  <i class="CDB-IconFont CDB-IconFont-facebookSquare Navmenu-icon"></i>\n                </a>\n              </li>\n\n              <li class="Navmenu-subItem">\n                <a href="https://www.linkedin.com/shareArticle?mini=true&url=' +
((__t = ( shareLinkedIn )) == null ? '' : __t) +
'" target="_blank" class="Navmenu-link js-Navmenu-link--linkedin">\n                  <i class="CDB-IconFont CDB-IconFont-linkedin Navmenu-icon"></i>\n                </a>\n              </li>\n\n              <li class="Navmenu-subItem u-showOnTablet">\n                <button class="ImportItem-closeButton Navmenu-link js-Navmenu-closeLink Navmenu-closeLink">\n                  <i class="CDB-IconFont CDB-IconFont-close ImportItem-closeButtonIcon"></i>\n                </button>\n              </li>\n            </ul>\n          </li>\n        </ul>\n\n        <ul class="Navmenu-list u-hideOnTablet">\n          <li class="Navmenu-item">\n            <a class="Button Button--main Navmenu-editLink Navmenu-editLink--edit js-Navmenu-editLink" href="' +
((__t = ( editUrl )) == null ? '' : __t) +
'">Edit in CARTO</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
};