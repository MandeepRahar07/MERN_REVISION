import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/style.css';
import './assets/css/dashboard.css';
import './assets/css/responsive.css';
import $ from 'jquery';
$(function() {
  var body = $('body');
  var contentWrapper = $('.content-wrapper');
  var scroller = $('.container-scroller');
  var sidebar = $('.sidebar');

  $('[data-toggle="minimize"]').on("click", function() {
    if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
    body.toggleClass('sidebar-hidden');
    } else {
    body.toggleClass('sidebar-icon-only');
    }
  });

  });

  
      
$('body').on('click', '.menu_toggle a', function(){
if($(this).next('.nk-menu-sub').is(":visible")){
    $(this).parent('li').removeClass('menu_open nav-active');
    $(this).next('.nk-menu-sub').slideUp();
   }
   else{
    $(this).parent('li').addClass('menu_open nav-active');
   $(this).next('.nk-menu-sub').slideDown();
   $(this).parent('li').siblings('li').removeClass('menu_open nav-active');
   $(this).parent('li').siblings('li').children('.nk-menu-sub').slideUp();
   }
})
$('.menu_open').children('.nk-menu-sub').slideDown();
  
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
  <App />
</BrowserRouter>
</React.StrictMode>
);

reportWebVitals();
