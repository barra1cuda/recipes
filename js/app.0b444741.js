(function(e){function t(t){for(var s,a,c=t[0],o=t[1],l=t[2],h=0,p=[];h<c.length;h++)a=c[h],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,c=1;c<i.length;c++){var o=i[c];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var s={},n={app:0},r=[];function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=s,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/recipes/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("input",{staticClass:"my_button",attrs:{type:"submit",value:"Random Recipe"},on:{click:function(t){return e.random_recipe()}}}),i("p",{ref:"recipe_ref",staticClass:"recipe_name"}),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],ref:"dropDownMenu",staticClass:"new_recipe",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?i:i[0]}}},[i("option",{staticClass:"top_options"},[e._v("Vegetarische Gerichte")]),e._l(e.recipeList_veg,(function(t,s,n){return i("option",{key:n},[e._v(" "+e._s(s)+" ")])})),i("option",{staticClass:"top_options"},[e._v("Fleischgerichte")]),e._l(e.recipeList_noveg,(function(t,s,n){return i("option",{key:n},[e._v(" "+e._s(s)+" ")])}))],2),i("div",{staticClass:"all_recipes"},[i("p",{staticClass:"all_heading"},[e._v("Alle der Kategorie "+e._s(e.selected)+" ")]),e._l(e.category(),(function(e,t){return i("recipe",{key:t,attrs:{reci_var:e}})}))],2)])},r=[],a=(i("4160"),i("caad"),i("fb6a"),i("b64b"),i("07ac"),i("ac1f"),i("2532"),i("5319"),i("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"one_recipe"},[i("p",[e._v(e._s(e.reci_var))])])}),c=[],o={name:"recipe",props:["reci_var"]},l=o,u=i("2877"),h=Object(u["a"])(l,a,c,!1,null,"58172193",null),p=h.exports,f={name:"App",components:{recipe:p},data:function(){return{recipeList_veg:{"Aufläufe":["Spinat-Gemüse-Lasagne","Vegetarisches Pastizio","Gnocchi-Kürbis-Lauch-Auflauf","Vegetarisches Moussaka"],Nudelgerichte:["Vegetarische Tortelini-Pfanne","Zucchini-Spaghetti","Gnocchi-Pfanne mit Rosenkohl","Gnocchi mit Pfifferlingen und Salbei"],"Eintöpfe und Suppen":["Weißkohl-Kartoffel-Eintopf","Jamaikanische Kürbissuppe","Kartoffelsuppe mit Champions","Vegetarischer Borschtsch","Elas Minestrone","Gazpacho","Türkische Gemüsesuppe","Maghreb-Eintopf","15 min Gemüse-Nudel-Suppe","Petersiliensuppe","Exotische Partysuppe","Winterliche Maronensuppe","Tomatensuppe","Paprika-Möhrensuppe"],"Indische Gerichte":["Indisches Dal","scharfes Indisches Gemüsecurry mit Blattspinat und Blumenkohl","Indischer Blumenkohl","Indisches Gemüsecurry mit Basmatireis"],"Curries, Chilies und anderer Gemüsepamp":["Asiatische Wok-Pfanne","Spitzkohlcurry","Kartoffelcurry mit Cashewnüssen","Vegetarisches Chili","Cashew-Gemüse-Indisch","Thailändische Wokpfanne mit Kokosmilch","Mualle- Auberginen und Linsen langsam geschmort"],"Couscous-, Quinoa- und Reispfannen":["Couscous-Gemüsepfanne mit leichter Käsesauce","Couscous mit sommerlichem Gemüse","Couscous-Gemüse-Curry","Vegetarische Reispfanne mit Feta-Käse","Quinoa mit Erbsen"],Bratlinge:["Couscous-Bratlinge","Polenta-Schnitten","Vegetarische Frikadellen","Couscous-Bratlinge mit Käse","Möhrenfrikadellen"],"Sonstige leckere Gerichte":["Sommerliche Eierrolle","Parmesan-Auberginen","Vegetarische Kohlrouladen"],Kartoffelgerichte:["Kartoffelgratin","Rösti","Fettarme Kartoffelspalten aus dem Ofen"],"Gefülltes":["Gefüllte vegane Paprika","Mit Couscous gefüllte, Überbackene Zucchini","gefüllte Paprika","Gefüllte Spitzpaprika mit Couscous"],"Süßes":["Pfannkuchen","Milchreis"]},recipeList_noveg:{Suppen:["Einfache Kartoffelsuppe","Feine Linsensuppe","Serbische Bohnensuppe","Partysuppe à la Maike","Sellerie-Schinkensuppe","Graupensuppe von Ingwe","Thai-Suppe","3x Champion-Creme-Suppe","Schneller Linseneintopf","Maistopf Farmer Art","Bunter Hackfleisch-Gemüse-Eintopf","Krümeltigers Sauerkrauteintopf mit Rinderhack","Hühnersuppe indisch"],"Hähnchengerichte":["Quinoa-Hähnchen-Pfanne","Gemüse-Frikassee","Hähnchen in würziger Kokossoße","Hähnchencurry indisch in Kokosmilch","Indisches Butter Chicken aus dem Ofen","Chinesisches Hühnerfleisch mit Cashewnüssen","Chicken Tikka Masala","Hähnchentopf mit Kartoffeln","Brasilianisches Hühnchen mit Kokosmilch und Mango","Kürbis-Hähnchen-Curry","Couscous-Pfanne","Puten-Geschnetzeltes in Salbei-Knoblauch-Sauce"],"Festliche Gerichte":["Entenbrust Orange","Hirschbraten in Sauerrahmsauce"],"Aufläufe mit Fleisch":["Lasagne","Hack-Brokoli-Kartoffelauflauf","Moussaka","Süßkartoffel-Auflauf mit Hackfleisch"],Fischgerichte:["Fisch mit Curry-Kräckerkruste","Schwedischer Heringsauflauf","Forelle in Folie","Lachs-couscous-Päckchen","Seelachsfilet auf Spinat","Garnelen-Laksa","Betreff: Garnelen"],Sonstiges:["Tunesischer Couscous","Koreanische Pfannkuchen mit 9 Köstlichkeiten","Orientalische Auberginen-Hackfleisch-Schiffchen mit Joghurt und Reis","Einfaches Kalbsgulasch","Ungarischer Gulasch/Pörkölt","Mexikanische Burritos","Majas Quiche Lorraine","Qiuche Lorraine","Königsberger Klopse","Fleischbällchen in Paprikasoße","Flammkuchen","Königsberger Klopse westpreußische Art","Geschnetzeltes mit Paprika","Kartoffel-paprika-Pfanne mit Hackfleisch","Herzhafter Zucchini-Strudel","Saltimbocca alla Romana","Gefüllte Paprika nach Carstens Art","Schweinefleisch-süß-sauer","Omas Kohlrouladen","Rösti"]},input_text:"",selected:"",random_list:[],cat:void 0,meal:void 0,returnList:[],returnList2:[]}},methods:{random_recipe:function(){switch(this.selected){case"Vegetarische Gerichte":this.random_list=this.returnList;break;case"Fleischgerichte":this.random_list=this.returnList2;break;case"":this.$refs.dropDownMenu.classList.add("ani"),this.random_list=["wähle eine Kategorie"];break;default:Object.keys(this.recipeList_veg).includes(this.selected)?this.random_list=this.recipeList_veg[this.selected]:this.random_list=this.recipeList_noveg[this.selected]}console.log("Random List ",this.random_list);var e=Math.floor(Math.random()*this.random_list.length);this.random_list[e]!==this.$refs.recipe_ref.innerHTML?this.$refs.recipe_ref.innerHTML=this.random_list[e]:this.$refs.recipe_ref.innerHTML=0!==e?this.random_list[e-1]:this.random_list[e+1],"wähle eine Kategorie"==this.random_list[e]&&(this.$refs.recipe_ref.innerHTML=this.random_list[e])},new_recipe:function(e){"Enter"===e.key&&(this.input_text=this.input_text.replace(/^\s+|\s+$/g,""),this.recipeList.includes(this.input_text)||this.recipeList.includes(this.input_text.slice(0,30))||(this.input_text.length>30?this.recipeList.push(this.input_text.slice(0,30)):this.recipeList.push(this.input_text)),this.input_text="")},category:function(){var e=this;switch(console.log(this.selected),this.selected){case"Vegetarische Gerichte":return console.log(this.returnList),0==this.returnList.length&&Object.values(this.recipeList_veg).forEach((function(t){t.forEach((function(t){e.returnList.push(t)}))})),this.returnList;case"Fleischgerichte":return 0==this.returnList2.length&&Object.values(this.recipeList_noveg).forEach((function(t){t.forEach((function(t){e.returnList2.push(t)}))})),this.returnList2;default:return Object.keys(this.recipeList_veg).includes(this.selected)?this.recipeList_veg[this.selected]:this.recipeList_noveg[this.selected]}}}},d=f,m=(i("034f"),Object(u["a"])(d,n,r,!1,null,null,null)),g=m.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.0b444741.js.map