// https://github.com/Khan/KaTeX
var katexOptions = {
    displayMode: true,
    trust: (context) => context.command === '\\href'
};
var closeSymbol = '&#128449;';
var openSymbol = '&#128448;';
var gotoTopSymbol = '&uarr;';
var toggleFormulasCssClass = 'toggle-formulas-btn';
var titleRightBtnsCssClass = 'title-right-btns';

var formulasElems = $('.formulas').hide();

var gotoTopBtn = $('<a>')
  .attr('href', '#top')
  .html(gotoTopSymbol + ' Menú')
  .addClass('goto-top-btn');
var gotoTopBtnTmpl = $('<div>')
  .addClass(titleRightBtnsCssClass)
  .append(gotoTopBtn);

var toggleFormulasBtnElems;
var toggleFormulasBtnTmpl = $('<span>')
  .html(openSymbol)
  .addClass(toggleFormulasCssClass);

$(document).ready(bootstrap);

function bootstrap() {
  $('.formula').each(renderFormula);

  toggleFormulasBtnElems = $('h2')
    .each(addGotoTopBtn)
    .map(addToggleBtn);

  $('#menu li')
    .map(getMenuLinks)
    .each(addVideoLink);

  $('#foldAllBtn').click(foldAll);
  $('#unfoldAllBtn').click(unfoldAll);
  if (window.history) {
    window.addEventListener('hashchange', unfoldFromHash);
  }

  $('.spoiler-btn').click(showSpoiler);

  renderFeynmanDiagrams();

  handleInitialSection();
}

function handleInitialSection() {
  var hash = location.hash;
  location.hash = '';
  location.hash = hash;

  if (hash && hash != 'top') {
    $(hash.replace('#', '.')).slideToggle();
    $(hash + ' .' + toggleFormulasCssClass).html(closeSymbol);
  }
}

function renderFormula(i, elem) {
  katex.render(elem.innerText, elem, katexOptions);
}

function renderFeynmanDiagrams() {
  if (typeof MathJax !== 'undefined') {
      MathJax.Hub.Config({
        jax: ['input/TeX','output/HTML-CSS'],
        messageStyle: 'none',
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          processEscapes: true
        }
      });
  }

  for (var id in feynmanDiagrams) {
    $('#' + id).feyn(feynmanDiagrams[id]);
  }
}

function addGotoTopBtn(index, h2Elem) {
  $(h2Elem).prepend(gotoTopBtnTmpl.clone());
}

function addToggleBtn(index, h2Elem) {
   return toggleFormulasBtnTmpl
    .clone()
    .click(toggleFolding)
    .prependTo(h2Elem)[0];
}

function getMenuLinks(index, menuOptElem) {
  var menuLinks = $(menuOptElem).find('a');

  return {
    formulasLink: menuLinks[0],
    videoLink: menuLinks[1]
  };
}

function addVideoLink(index, menuLinks) {
  var formulasId = getIdFromHref(menuLinks.formulasLink);
  var videoLink = $(menuLinks.videoLink).clone().addClass('view-video-btn');
  $('#' + formulasId + ' .' + titleRightBtnsCssClass).append(videoLink);
}

function foldAll() {
  formulasElems.slideUp();
  toggleFormulasBtnElems.html(openSymbol);
}

function unfoldAll() {
  formulasElems.slideDown();
  toggleFormulasBtnElems.html(closeSymbol);
}

function unfoldFromHash() {
    var hash = document.location.hash;
    if (!hash) return;
    var formulasId = hash.substr(1);
    unfoldCapitulo(formulasId);
}

function unfoldCapitulo(formulasId) {
  var formulasElem = $('.' + formulasId);
  if (!formulasElem.is(':visible')) {
    formulasElem.show();
    $('#' + formulasId + ' .' + toggleFormulasCssClass).html(closeSymbol);
  }
}

function toggleFolding(ev) {
  var formulasElem = $('.' + ev.currentTarget.parentElement.id);
  var isHiding = formulasElem.is(':visible');
  formulasElem.slideToggle();
  $(ev.currentTarget).html(isHiding ? openSymbol : closeSymbol);
}

function showSpoiler(ev) {
  $(ev.currentTarget).hide();
  $(ev.currentTarget.parentElement).find('.spoiler').fadeIn();
}

function getIdFromHref(elem) {
  return elem.href.match(/#(.*)/)[1];
}
