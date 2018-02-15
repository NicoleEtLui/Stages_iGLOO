#NOtes Stages - 12-02-2018

## Projects
### RCBE
Stack client side:
    * SASS 
    * Webpack

### Flexbox 
```
<div class="c">
  <h1 class="t">Les produits</h1>
  <div class="f">45 produits</div>
  <div class="f">45 produits</div>
  
  <div class="f">45 produits</div>
</div>
...
.c {
  background: tomato;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```


#### Problèmes 
* bandeau sous l'image (background )
* shape in css, triangle sur base a tourner par après
* texte bien placé
* ...


### Links
* https://sass-lang.com/guide
* https://webpack.js.org/concepts/
* https://www.sassmeister.com/
* https://brew.sh/index_fr.html
* https://gitlab.igloo.be/martin.petit/slicing-royalcanin-corporate
* https://codepen.io/pen/
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://github.com/LoicMahieu/dotfiles
* http://getbem.com/introduction/
* http://lostgrid.org/docs.html
* https://www.w3schools.com/cssref/pr_pos_z-index.asp

#NOtes Stages - 13-02-2018

### Links
* https://codepen.io/search/pens?q=hover+animation&limit=all&type=type-pens
* https://css-tricks.com/useful-nth-child-recipies/
* https://www.w3schools.com/css/css3_transitions.asp
* https://codepen.io/lukemeyrick/pen/apZOWm
* https://developer.mozilla.org/fr/docs/Web/CSS/::before
* https://developer.mozilla.org/fr/docs/Web/CSS/::after
* http://nicolasgallagher.com/an-introduction-to-css-pseudo-element-hacks/
* https://support.google.com/chrome/answer/157179?hl=fr
* https://codemyui.com/tag/button/page/5/

#NOtes Stages - 13-02-2018

## Magazine
### Add a page webpack 
```
page.js
...
export const title = 'Webpack Boilerplate'

export const pages = [
  {
    title: title,
    publicPath: 'index.html',
    page: 'home.html'
  },
  {
    title: 'Products',
    publicPath: 'products.html',
    page: 'products.html'
  },
  {
    title: 'Magazine',
    publicPath: 'magazine.html',
    page: 'magazine.html'
  }
]
```
### Add icon 
We create  a font composde by icon so we can use icon as text
`<i class="icon icon-bag-big"></i>`
### Links
* https://useiconic.com/open/
* https://getbootstrap.com/docs/4.0/extend/icons/

# Notes Stages - 15-02-2018
* http://www.topdesignagencies.com/nth-test/
* https://include-media.com/
* http://kenwheeler.github.io/slick/

## Done
* magazine list cards big and small done
* responsive version for magazine list cards 
* brief for next page: about -- start

## WIP
### About.html

* To use a js file (see example in panel-food with index.js)
  * create it in about
  * in the file import slick
  * export the function for it to be used elsewhere 
  `export default function () {`
  * import the file in main.js
  * use the function created

* SLICK - cool slideralready done
  * find a way to put template (own html) in it 


