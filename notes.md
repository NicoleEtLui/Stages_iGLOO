Outils :
* mail (mail.igloo.be)
* slack
* gitlab gitlab.igloo.be
* invision https://projects.invisionapp.com/d/main/default/#/console/9945455/269996300/inspect
* sourcetree
* teamwork https://igloowebstudio.teamworkpm.net/index.cfm#projects/48083/tasks + teamwork timer



# Notes Stages - 12-02-2018

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

# Notes Stages - 13-02-2018

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

# Notes Stages - 13-02-2018

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

# Notes Stages - 16-02-2018
* https://jsfiddle.net/kirana/b5bqk68j/

### TODO 16:02
* gérer le stle de la timeline dans le slider de about
* la page est full static donc au final on doit avoir un array d'objet (date, label) sur lequel on boucle et avec laquelle on remplit la timeline ET les slides. La funciton de bouclage se trouvera dans customPaging de slick (index.js).
* a terme cet array se trouvera dans nu fichier json par exemple et on viendra y chercher tout ce dont on a besoin.
* check .data() jquery

* https://projects.invisionapp.com/d/main/default/#/console/9945455/269996300/inspect
*  

# WEEK 2
## 19-02-2018
* Tout faire pour éviter l'utilistation d'image si on peut
  * css pour les formes
  * ::before et ::after sur des éléments
  * ...
* Ne jamais se satisfaire d'un "bug", l'objectif = pixel perfect (sans être nazi) et surtout l'objectif est d'être satisfait de ce qui se passe a l'écran, si on est pas satisfait l'utilisateur ne le sera pas. Ne pas se dire "l'utilisateur ne le verra pas".
* Ne pas oublier d'importer le css quand on installe un plug-in (#slick)
* Essayer de ne pas rajouter de markup inutile (genre une div supplémentaire pour qu'un enfant se comporte comme un block) 
* Pensertouojurs a plus tard

### Commandes utiles
* `flex-shrink:0` = tu ne peux pas être plus petit que ce que tu est

### Links
* https://developer.mozilla.org/fr/docs/Web/CSS/Animations_CSS
* https://developer.mozilla.org/fr/docs/Web/CSS/animation
* https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Transitions/Utiliser_transitions_CSS

## 20-02-2018
### Bonnes pratiques
* `flex : 1 0 auto` permet de gérer la compatibilité avec ie plutot que `flex: 1` tout court 