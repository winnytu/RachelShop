webpackJsonp([1],{"7jLF":function(t,e){},"9CAc":function(t,e){},H0iY:function(t,e){},MIdE:function(t,e){},MPzD:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});r("MPzD"),r("9CAc");var c=r("7+uW"),i=r("Dd8w"),n=r.n(i),a=r("NYxO"),s={computed:n()({},Object(a.d)(n()({CartItems:function(t){return t.cart.CartItems}},Object(a.c)("cart",["CartItemSum"]))))},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Navbar"},[r("router-link",{staticClass:"Navbar_logo",attrs:{to:"/"}}),t._v(" "),r("div",{staticClass:"Navbar_item"},[r("ul",[r("li",[r("router-link",{attrs:{to:"/"}},[t._v("全部")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/product/calendar"}},[t._v("年曆")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/product/postcard"}},[t._v("明信片")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/product/zine"}},[t._v("Zine")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/product/sticker"}},[t._v("貼紙")])],1),t._v(" "),r("li",{staticClass:"cart"},[r("router-link",{attrs:{to:"/cart"}},[r("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v(" "+t._s(t.CartItemSum))],1)],1)])])],1)},staticRenderFns:[]};var u=r("VU/8")(s,o,!1,function(t){r("XSCh")},null,null).exports,d={name:"App",components:{navbar:u}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var m=r("VU/8")(d,l,!1,function(t){r("MIdE")},null,null).exports,_=r("/ocq"),p={props:["products"],methods:n()({},Object(a.b)("cart",["PushtoCart"]))},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.products,function(e){return r("div",{staticClass:"ProductCard_outline col-lg-3 col-md-4 col-sm-6 col-xs-12"},[r("div",{staticClass:"ProductCard "},[r("div",{staticClass:"ProduCard_tag"},[t._v(t._s(e.tag))]),t._v(" "),r("div",{staticClass:"ProductCard_img"},[r("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),r("div",{staticClass:"ProductCard_describe"},[r("div",{staticClass:"ProductCard_describe_title"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"ProductCard_describe_intro"},[t._v(t._s(e.describe))]),t._v(" "),r("div",{staticClass:"ProductCard_describe_price"},[t._v("NT "+t._s(e.price))]),t._v(" "),r("div",{staticClass:"ProductCard_describe_purchase"},[r("button",{staticClass:"purchase",on:{click:function(r){return t.PushtoCart(e)}}},[t._v("加入購物車")])])])])])}),0)])},staticRenderFns:[]};var g=r("VU/8")(p,v,!1,function(t){r("WCcg")},null,null).exports,C={data:function(){return{}},computed:n()({},Object(a.d)({products:function(t){return t.products.all}}),{searchproducts:function(){var t=this;return this.products.filter(function(e){return e.engtag==t.$route.params.name})}}),components:{navbar:u,ProductCard:g}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ProductCard",{key:this.$route.path,attrs:{products:this.searchproducts}})],1)},staticRenderFns:[]};var h=r("VU/8")(C,f,!1,function(t){r("v/D1")},"data-v-6c5b1713",null).exports,b={computed:n()({},Object(a.d)({CartItems:function(t){return t.cart.CartItems}}),Object(a.c)("cart",["PriceSum"])),methods:n()({},Object(a.b)("cart",["DeleteItem"]),Object(a.b)("cart",["AddNum"]),Object(a.b)("cart",["MinusNum"]),Object(a.b)("cart",["Checkout"]),{BacktoShop:function(){this.$router.push({path:"./CheckoutPage"})}})},k={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Cart"},[r("h3",[t._v("購物清單")]),t._v(" "),r("table",[t._m(0),t._v(" "),t._l(t.CartItems,function(e){return r("tr",{staticClass:"CartList"},[r("td",{staticClass:"CartItem_img"},[r("img",{attrs:{src:e.product.img,alt:""}})]),t._v(" "),r("td",{staticClass:"CartItem_describe"},[t._v("\n            "+t._s(e.product.title)+"\n            "),r("br"),t._v("\n            "+t._s(e.product.tag)+"\n        ")]),t._v(" "),r("td",{staticClass:"CartItem_price"},[t._v(t._s(e.product.price))]),t._v(" "),r("td",{staticClass:"CartItem_num"},[r("button",{on:{click:function(r){return t.AddNum(e)}}},[t._v("+")]),t._v("\n            "+t._s(e.num)+"\n            "),r("button",{on:{click:function(r){return t.MinusNum(e)}}},[t._v("-")])]),t._v(" "),r("td",{staticClass:"CartItem_total"},[t._v(t._s(e.product.price*e.num))]),t._v(" "),r("td",[r("button",{on:{click:function(r){return t.DeleteItem(e)}}},[t._v("刪除")])])])})],2),t._v(" "),r("div",{staticClass:"Cart_sum"},[t._v("總計  "+t._s(t.PriceSum))]),t._v(" "),r("div",{staticClass:"CartButton"},[r("button",[r("router-link",{attrs:{to:"/"}},[t._v("繼續購物")])],1),t._v(" "),r("button",{on:{click:function(e){t.Checkout(),t.BacktoShop()}}},[t._v("確認購買")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"Carttitle"},[r("th",[t._v("項目")]),t._v(" "),r("th",[t._v("名稱")]),t._v(" "),r("th",[t._v("單價")]),t._v(" "),r("th",[t._v("數量")]),t._v(" "),r("th",[t._v("小計")]),t._v(" "),r("th",[t._v("刪除")])])}]};var I=r("VU/8")(b,k,!1,function(t){r("H0iY")},null,null).exports,P={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkout"},[e("h1",[this._v("恭喜你購買完成！")])])}]};var j=r("VU/8")({},P,!1,function(t){r("7jLF")},null,null).exports,N={data:function(){return{}},computed:n()({},Object(a.d)({products:function(t){return t.products.all}})),components:{navbar:u,ProductCard:g}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ProductCard",{attrs:{products:this.products}})],1)},staticRenderFns:[]};var O=r("VU/8")(N,A,!1,function(t){r("mecJ")},"data-v-364368a3",null).exports;c.a.use(_.a);var E=new _.a({routes:[{path:"/",name:"ProductPageAll",component:O},{path:"/product/:name",name:"ProductPage",component:h},{path:"/cart",name:"cart",component:I},{path:"/checkoutpage",name:"checkoutpage",component:j}]}),$={namespaced:!0,state:{all:[{id:"1",tag:"貼紙",title:"慵懶的貓咪 - 野餐",describe:"人生志向是成為一隻貓咪",price:"60",img:"/static/img/sticker_picnic.jpg",engtag:"sticker"},{id:"2",tag:"貼紙",title:"慵懶的貓咪 - 躺椅",describe:"人生志向是成為一隻貓咪",price:"60",img:"/static/img/sticker_beach.jpg",engtag:"sticker"},{id:"3",tag:"貼紙",title:"慵懶的貓咪 - 游泳",describe:"人生志向是成為一隻貓咪",price:"60",img:"/static/img/sticker_swimming.jpg",engtag:"sticker"},{id:"4",tag:"貼紙",title:"慵懶的貓咪 - 抓屁屁",describe:"人生志向是成為一隻貓咪",price:"60",img:"/static/img/sticker_ass.jpg",engtag:"sticker"},{id:"5",tag:"年曆",title:"貓咪的一年",describe:"人生志向是成為一隻貓咪",price:"200",img:"/static/img/calendar_cat.jpg",engtag:"calendar"},{id:"6",tag:"年曆",title:"簡單是最難的",describe:"不是隨便 是簡約",price:"200",img:"/static/img/calendar_simple.jpg",engtag:"calendar"},{id:"7",tag:"明信片",title:"希望你一切都好",describe:"是我的願望",price:"60",img:"/static/img/postcard_loveyourself.jpg",engtag:"postcard"},{id:"8",tag:"明信片",title:"先好好愛自己",describe:"才有愛人的力氣",price:"60",img:"/static/img/postcard_hopeyouarewell.jpg",engtag:"postcard"},{id:"9",tag:"ZINE",title:"simple book",describe:"瑞秋的人生小誌",price:"60",img:"/static/img/zine_simplebook.jpg",engtag:"zine"},{id:"10",tag:"ZINE",title:"The ladys in me",describe:"瑞秋的人生小誌2",price:"60",img:"/static/img/zine_lady.jpg",engtag:"zine"}]}},w={CartItems:[]},D={namespaced:!0,state:w,getters:{CartItemSum:function(t){return t.CartItems.reduce(function(t,e){return t+e.num},0)},PriceSum:function(t){return t.CartItems.map(function(t){return t.product.price*t.num}).reduce(function(t,e){return t+e},0)}},mutations:{AddtoCart:function(t,e){return t.CartItems.push(e)},DeleteItem:function(t,e){t.CartItems.splice(t.CartItems.indexOf(e),1)},AddNum:function(t,e){e.num++},MinusNum:function(t,e){e.num--},Checkout:function(t,e){alert("購買完成！"),t.CartItems=[]}},actions:{PushtoCart:function(t,e,r){var c=e.id,i=w.CartItems.find(function(t){return t.product.id===c});i?(t.commit("AddNum",i),alert("成功加入「"+e.title+" "+e.tag+"」至購物車")):(t.commit("AddtoCart",{product:e,num:1}),alert("成功加入「"+e.title+" "+e.tag+"」至購物車"))},DeleteItem:function(t,e){t.commit("DeleteItem",e)},AddNum:function(t,e){t.commit("AddNum",e)},MinusNum:function(t,e){e.num>0?t.commit("MinusNum",e):(e.num=0,t.commit("DeleteItem",e))},Checkout:function(t,e){t.commit("Checkout",e)}}};c.a.use(a.a);var S=new a.a.Store({modules:{products:$,cart:D}}),x=r("C/JF"),F=r("fhbW"),M=r("1e6/");x.c.add(F.a),c.a.component("font-awesome-icon",M.a),c.a.config.productionTip=!1,new c.a({el:"#app",router:E,store:S,components:{App:m},template:"<App/>"})},WCcg:function(t,e){},XSCh:function(t,e){},mecJ:function(t,e){},"v/D1":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d04cf612fd13966c48cd.js.map