(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={item:"OneContact_item__2e4JU",text:"OneContact_text__1txqC",btn:"OneContact_btn__1DZn3"}},19:function(t,e,n){t.exports={filterInput:"Filter_filterInput__32WPQ",filterLabel:"Filter_filterLabel__3juMV"}},29:function(t,e,n){t.exports={container:"Container_container__2yKoL"}},31:function(t,e,n){t.exports={list:"ContactList_list__WkhP4"}},37:function(t,e,n){},38:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),s=(n(37),n(38),n(29)),u=n.n(s),i=n(1);var b=function(t){var e=t.children;return Object(i.jsx)("div",{className:u.a.container,children:e})},l=n(20),d=n(7),j=n.n(d),f=n(10),O=n.n(f),h=n(2),C={fetchContactsRequest:Object(h.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(h.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(h.b)("contacts/fetchContactsError"),addContactRequest:Object(h.b)("contacts/addContactRequest"),addContactSuccess:Object(h.b)("contacts/addContactSuccess"),addContactError:Object(h.b)("contacts/addContactError"),deleteContactRequest:Object(h.b)("deleteContactRequest"),deleteContactSuccess:Object(h.b)("contacts/deleteContactSuccess"),deleteContactError:Object(h.b)("contacts/deleteContactError"),changeFilter:Object(h.b)("contacts/changeFilter")};O.a.defaults.baseURL="https://61a3fba8d5e8330017292211.mockapi.io/api/goit-react-hw-07-phonebook/";var m=function(){return function(t){t(C.fetchContactsRequest()),O.a.get("/contacts").then((function(e){var n=e.data;return t(C.fetchContactsSuccess(n))})).catch((function(e){return t(C.fetchContactsError(e))}))}},p=function(t){return function(e){e(C.deleteContactRequest()),O.a.delete("/contacts/".concat(t)).then((function(){return e(C.deleteContactSuccess(t))})).catch((function(t){return e(C.deleteContactError(t))}))}},x=function(t,e){return function(n){var c={name:t,number:e};n(C.addContactRequest()),O.a.post("/contacts",c).then((function(t){var e=t.data;return n(C.addContactSuccess(e))})).catch((function(t){return n(C.addContactError(t))}))}},_=n(6),v=n(14),g=function(t){return t.contacts.items},q=function(t){return t.contacts.filter},S=Object(v.a)([g,q],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}));function N(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],b=Object(_.c)(g),d=Object(_.b)(),f=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":u(c);break;default:return}};return Object(i.jsxs)("form",{className:j.a.form,onSubmit:function(t){if(t.preventDefault(),b.find((function(t){return t.name.toLowerCase()===n.toLocaleLowerCase()})))return alert("".concat(n," is already exist"));d(x(n,s)),a(""),u("")},children:[Object(i.jsxs)("label",{className:j.a.label,children:["Name",Object(i.jsx)("input",{className:j.a.input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:f,required:!0})]}),Object(i.jsxs)("label",{className:j.a.label,children:["Number",Object(i.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:f,required:!0})]}),Object(i.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})}var E=n(31),y=n.n(E),R=n(16),k=n.n(R),w=function(t){var e=t.name,n=t.number,c=t.onDelete;return Object(i.jsxs)("div",{className:k.a.item,children:[Object(i.jsxs)("p",{className:k.a.text,children:[e,":",n]}),Object(i.jsx)("button",{className:k.a.btn,type:"button",onClick:c,children:"Delete"})]})};function L(){var t=Object(_.b)();Object(c.useEffect)((function(){t(m())}),[t]);var e=Object(_.c)(S);return Object(i.jsx)("ul",{className:y.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(i.jsx)("li",{children:Object(i.jsx)(w,{name:c,number:a,onDelete:function(){return function(e){return t(p(e))}(n)}})},n)}))})}var F=n(19),A=n.n(F),z=function(){var t=Object(_.c)(q),e=Object(_.b)();return Object(i.jsxs)("label",{className:A.a.filterLabel,children:["Find contacts by name",Object(i.jsx)("input",{className:A.a.filterInput,type:"text",value:t,onChange:function(t){return e(C.changeFilter(t.target.value))}})]})};function D(){return Object(i.jsxs)(b,{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(N,{}),Object(i.jsx)("h2",{children:"Contacts"}),Object(i.jsx)(z,{}),Object(i.jsx)(L,{})]})}var I,J,Z=n(4),M=n(32),P=n(3),U=C.addContactRequest,B=C.addContactSuccess,T=C.addContactError,W=C.deleteContactRequest,K=C.deleteContactSuccess,Q=C.deleteContactError,V=C.fetchContactsRequest,$=C.fetchContactsSuccess,G=C.fetchContactsError,H=C.changeFilter,X=Object(h.c)([],(I={},Object(Z.a)(I,$,(function(t,e){return e.payload})),Object(Z.a)(I,B,(function(t,e){var n=e.payload;return[].concat(Object(M.a)(t),[n])})),Object(Z.a)(I,K,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),I)),Y=Object(h.c)(!1,(J={},Object(Z.a)(J,V,(function(){return!0})),Object(Z.a)(J,$,(function(){return!1})),Object(Z.a)(J,G,(function(){return!1})),Object(Z.a)(J,U,(function(){return!0})),Object(Z.a)(J,B,(function(){return!1})),Object(Z.a)(J,T,(function(){return!1})),Object(Z.a)(J,W,(function(){return!0})),Object(Z.a)(J,K,(function(){return!1})),Object(Z.a)(J,Q,(function(){return!1})),J)),tt=Object(h.c)("",Object(Z.a)({},H,(function(t,e){return e.payload}))),et=Object(P.b)({items:X,filter:tt,loading:Y}),nt=n(8),ct=Object(h.a)({reducer:{contacts:et},middleware:function(t){return t({serializableCheck:{ignoredActions:[nt.a,nt.f,nt.b,nt.c,nt.d,nt.e]}})}});o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(_.a,{store:ct,children:Object(i.jsx)(D,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={input:"ContactForm_input__3zCqx",label:"ContactForm_label__2UT_9",btn:"ContactForm_btn__Tcw2L"}}},[[64,1,2]]]);
//# sourceMappingURL=main.9061f138.chunk.js.map