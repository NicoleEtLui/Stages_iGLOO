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


* Discussion avec antoine : Le but est de m'intégrer à la boite à travers le front-end (plus de sensibilité a ça vu mon parcours et aussi simplement de par mes envies), et peut-être par la suite de me faie bosser sur du back-end. L'idée est de trouver le bon projet/moment. Proposition est de venir discuter à un moment d emon tfe avec eux afin qu'ils puissent à ce moment là se faire une idée de mon niveau et de où ils pourraient m'intégrer par la suite.

## 21-02-2018

### Résumé jusqu'ici :
* arriver dans la boite directmeent intégré en tant qu'employé (j'apparais des les premieres minutes sur le board des stands up meetings journalier qui débute la journée). Une fois mon setup fait (installé plusieurs programmes demandé par Loic (chef technique)(voir notes premier jour)), je suis assigné sur le projet en cours de la refonte du site royal-canin.be coté au coté de Gauthier coté front-end. Nous nous occupons du slicing du site en fichier html/css/js à partir du design fait (sketch/invision) par tiffany (designer). Je suis la pour l'instant pour alléger gauthier en front-end.
=> techno utilisée (cfr chaque jour)


### vs code
pom + shift + L = select all ocurences that match selection
pom + d = select next occurences of the selection
* https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-postcss-sorting
  * pom + shift + ctrl + S (pour sorting), sur une selection

### Links

* https://developer.mozilla.org/fr/docs/Web/API/Window/matchMedia //media query with js
* https://www.alsacreations.com/article/lire/1500-matchmedia-javascript-media-queries.html

## 22-02-2018

### links
* https://jsfiddle.net/8moenfqt/7/ interagir avec du svg => html, scss, js
* https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout
* https://infopython.wordpress.com/2007/08/28/mac-keyboard-shortcuts-how-write-a-pipe-or-backslash-on-macbook/
* check map svg https://www.youtube.com/watch?v=UZs8l50gxjU
* https://www.sharethis.com/
* https://developer.mozilla.org/fr/docs/Web/SVG/Element/g // '<g>' pour le svg
* https://developer.mozilla.org/fr/docs/Web/SVG
* https://developer.mozilla.org/fr/docs/Web/SVG/Element/svg

### rappel
* $( "a[hreflang|='en']" ).css( "border", "3px dotted green" );
  * $('.txt-region-1').addClass('blue'); // access to links
  * $("g[data-class|='txt-region-1']").css("transform", "scale(1.2)"); // access to a special property
* $( "td" ).hover(
  function() {
    $( this ).addClass( "hover" ); // mouseenter
  }, function() {
    $( this ).removeClass( "hover" ); // mouseleave
  }
);

## 23-02-2018
* https://css-tricks.com/cascading-svg-fill-color/
* https://css-tricks.com/scale-svg/

* https://github.com/feross
* chec airbnb github ( tres actif dans la communauté js
* http://api.jquery.com/filter/
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match
* https://api.jquery.com/attribute-contains-selector/ !!!!!!!!!!!!!!!! trop bien
RTFM bordeeeeeel

### Lint convention
* check lint standard js (écrite par feross), chec airbnb github ( tres actif dans la communauté js)


---------------------------------------------------------------------------------------------------
SEMAINE 3
---------------------------------------------------------------------------------------------------

## 25-02-2018
* Brief BI
* Intro REACT w/ gauthier

### Links
* https://storybook.js.org/
* https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation
* http://blueprintjs.com/docs/v1/
* https://lodash.com/
* https://dmitripavlutin.com/how-three-dots-changed-javascript/
### Tech
* yarn
* styled components
* react-styled-flexboxgrid
* react-inspector
*

## 26-02-2018

### Links
* https://github.com/jakob101/RelativePath prachtig
* https://reactjs.org/docs/introducing-jsx.html

### REACT
* Dans le fichier Element.js = sorte de constructeur de l'element, quand on l'instencie autre part grace au <Element>, c'est la qu'on lui passe les props qui seront gérées dans le constructeur

ex:

```
//Button.js
const Button = ({ iconName, children }) => (
  <ButtonStyled iconName={iconName}>
    { children }
    { iconName && <span className='icon'><Icon icon={iconName} /></span> }
  </ButtonStyled>
)

export default Button
...
//MainLayout.sj
<Button iconName='more'>Vasqd qsd qsd qsd qd qslider</Button>
...
```

* {children} indique l'emplacement ou sera printer ce qui a l"intérieur du tag créé, ici, entre
<Button> et </Button>

* on peut renvoyer un component de facon conditionnelle en fonciton des props, ici, si to ou href est vrai on renvoie au component ButtonLink, sinon on reovie au component ButtonStandard
````
const getComponentFromProps = ({ to, href }) => to || href ? ButtonLink : ButtonStandard

````

## 27-02-2018

* cfr [button in react](./react_commented_button.js)

* react c'est aps si compliqué ... mais bon
* react-router = une des routeur react qui existe et ça marche bien
* => arrows = return implicite donc pas de return explicite

* ~ = `alt + n`
* vscode jump end begin of line `pom + lef/right arrow`
* https://www.webpagefx.com/blog/web-design/background-css-shorthand/

## Git
On peut faire une merge request sur un travail en cours !
  * push sur la branche distante ( en CLI ) ,l'avantage est que la CLI fournit le lien
  pour créer la merge request
  ```
    iMac-de-iGLOO:customer-platform igloo$ git push origin feature/PageNotFound
    Counting objects: 14, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (14/14), done.
    Writing objects: 100% (14/14), 533.95 KiB | 23.21 MiB/s, done.
    Total 14 (delta 5), reused 0 (delta 0)
    remote:
    remote: To create a merge request for feature/PageNotFound, visit:
    remote:   https://gitlab.igloo.be/boehringer/customer-platform/merge_requests/new?merge_request%5Bsource_branch%5D=feature%2FPageNotFound
    remote:
    To gitlab.igloo.be:boehringer/customer-platform.git
    * [new branch]      feature/PageNotFound -> feature/PageNotFound
    iMac-de-iGLOO:customer-platform igloo$
  ```
  * on va sur ce lien et on crée la merge request en mettant le tag (WIP), ainsi
  cette branche ne PEUT pas être merge tant que le tag est la mais on profite des
  test et du pipeline
## Task
* finished button components, change html tag depend on props passed to the element
cfr [button in react](./react_commented_button.js)

### TD
  * make the 404 page \/
  * add button where they must
  * Add traduction https://github.com/yahoo/react-intl

## Dotfiles
* facond de gérer ses "dotfiles" plus facilement sous forme d'une dir clean a la racine,
les dotfiles étant un moyen de gérer la config de différents programmes
* zsh = bash like, oh-my zsh = gestionnaire de plug-in
* zshrc ?  ? ? ?
* z = jumper, jump to a dossier facillement
* https://github.com/LoicMahieu/dotfiles
* https://github.com/thoughtbot/rcm
* https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins
* https://github.com/zsh-users/antigen

## 01-03-2018
* https://github.com/stylelint/stylelint
* https://standardjs.com/

### Links
  * mail templating, mettre en page les emails https://mjml.io/
  * launch a simple web server at any time http://get-serve.com/documentation/usage,
  for example with mjml, to serve the image
  * http://iamvdo.me/conf/kiwiparty-2015 font icon vs sprite
  * https://github.com/morajabi/styled-media-query include media for react
  * <meta name="viewport" content="width=device-width, initial-scale=1.0">,
  https://developers.google.com/web/fundamentals/design-and-ux/responsive/?hl=fr
  * https://github.com/nfl/react-helmet


---------------------------------------------------------------------------------------------------
SEMAINE 4
---------------------------------------------------------------------------------------------------
* align-items permet d'éviter qu'un élément ne se stretch sur la un seul coté (notamment), a permis de régler le problème d'écrsement de l'image sur la largeur seulement dans homepage - websites
* lost-column: 1 1; préciser quand il doit passer a la ligne permet d'éviter la marge a droite

## 06-03-2018

* inline-flex sur un parent lui fait prendre la width de ses enfants ( atetntion a ne pas laissr trainer un width 100% du coup ... lol)
* margin-top auto permet de pousser un élément en bas, etc...

## Links
* http://www.colorzilla.com/gradient-editor/
* https://stackoverflow.com/questions/9476923/css3-animate-border-color
* https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php

## Events
* aujourd'hui l'internet c'est de la daube ... sans internet on se retrouve vite useless c'est chiant d'attendre que l'internet revienne ... 

## 07-03-2018

* coupure d'eau au CEI ! :D 

## TD 
* tabs responsive en fonciton de si l'élément est overflow( => scroll) ou pas ! js/jquery et css
  * le problelem est que le .resize est pas fou ... le calcul savoir si la scroll bar est présente
  fait cliper entre true et false, de plus quand on fait disparaire le dernier élément de la liste du coup la scrollbar disparait et donc le dernier élément va réapparaitre ... c'est la mer noire ...
  * le problèm est qu'on peut pas juste display none les éléments car alors on ne sais pas quand on peut les faire réapparaitre car on ne sais quand on a de nouveau la place ... 
  * connaitre la somme totale des éléments du menu ?? 
  * https://jsfiddle.net/twvr5jsL/74/ first tests 
  * https://developer.mozilla.org/fr/docs/Web/API/Element/clientWidth
  * https://api.jquery.com/clone/
  * https://developer.mozilla.org/en-US/docs/Web/Events/overflow  fonctionne pas du totu ....

  ```
  jQuery.fn.hasScrollBar = function()
{
 return $(this)[0].scrollWidth >= $(this).innerWidth();
 
}

$( window ).resize(function() {
 $('.list').hasScrollBar() ? 
  $('.list .list-item:last-child').addClass('overflow'):
  $('.list .list-item:last-child').removeClass('overflow');
 });
 ```

 Déterminer la taille de la liste et la somme des élément de la liste 
 ```
 //console.log($('.list-item').innerWidth())
let listWidth = $('.list').innerWidth()
//console.log(totalWidth)

let itemWidth= 0;
$.each($('.list-item'), function () {
  itemWidth += $(this).innerWidth()
})

console.log(typeof $('.list').innerWidth())
console.log(itemWidth) 
console.log(listWidth) 

 ```

## 08-03-2018

* fixer une height  sur un component pose probleme lors du responsive + flex, en effet, le contenu va alors sortir de son parent flex vu que le parent ne peut pas grandir ... 

* Vscode: pom + u = annuler le dernier multicursor ajouté

* aujourd'hui, sur RCBE on recommence a traveiller avec le reste de l'équipe (florent) pour attaquer l'intégration de RCBE , du coup en attendant que florent lance tout ce qu'il fuat on est un peu bloqué ...

* coldfusion est utilisé en production, langage serveur propriétaire d'Adobe 
  * https://fr.wikipedia.org/wiki/ColdFusion
  * https://www.adobe.com/be_en/products/coldfusion-family.html
  * http://coldfusionexamples.com/
* je vais avoir besoin de docker et mysql 
  * https://gist.github.com/nrollr/3f57fc15ded7dddddcc4e82fe137b58e
  * le fichier "my.cnf" situé ici a /usr/local/etc/my.cnf permet de configurer mysql, on doit el faire notamment parce que certaines ancienens tables (des flags surtout), ne sont pas compatibles avec la version 5.7 installées par brew. On peut aussi définir les users et les mots de passe utilisé pour se connecter à mysql mais aussi donner des configs spécifiques 
  ex : 

  ``` 
  [client]
user = root
#password = ...

[mysqld]
#sql_mode=ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
sql_mode=NO_ENGINE_SUBSTITUTION
bind-address=0.0.0.0
innodb_strict_mode = 0
max_allowed_packet=500M

  ```






### Links 
* http://www.evotech.net/articles/testjsentities.html convert character like "|" into his value in js, css and numerical 


## 09-03-2018

* http://mmenu.frebsite.nl/
* https://github.com/xat/airtar
* https://www.imagemagick.org/script/index.php
* https://gruntjs.com/getting-started
* codfusion a besoin d'un mail server, il envoie notamment les logs d'erreur etc par mail ...  ou tenter de contacter de s clients, il faut que rien ne sorte => mailcatcher ou on récupère tout, disponible a localhost:1080
* docker est sur un autre réseau que localhost => pour qu'il puisse se connecter a la db mysql, il faut un utilisateur @% pour pourvoir se connecter dessus de l'extérieur.

* Du coup, la le setup c'est ...
  * un services mysql qui tourne 'brew services list', 'brew services mysql start', mais il start au démarrage apparemment
  * un container avec une image de coldfusion et une image de mailcatcher qui tourne, 
  npm run docker, /!\ j'ai du 'docker run -d -p 1080:80 -p 1025:25 --name mailcatcher tophfr/mailcatcher' parce que j'avais l'image de mail catcher mais elle "tournait pas ???" ... du coup maintennat, un simple npm run docker et c'est caisse
  * ya du webpack en plus pour simplifier les choses, le projet est énorme, jamais vu une arborescence comme celle la, depuis que florent est la (6 ans et demi), le projet est lancé .. donc il a eu le temps de grossir, Loic et florent se sont faits 10000 utilitaires en internes pour faciliter le developpement, pour la gestion des langues, des fonctions manquantes en coldfusion, ... tres surprenant de voir qu'une parte du projet est développée pour aider a dévelooper le projet. 
  * en fait une parite wysiwyg permet a un admin royal canin de créer du contenu pour un site, cette plateforme de wyziwyg est développée par igloo, cequi complexifie le projet un peu plus. 
  * le repo corporate bebsite de rcbe dépend de sous-modules https://git-scm.com/book/en/v2/Git-Tools-Submodules ??? 

---------------------------------------------------------------------------------------------------
SEMAINE 5
---------------------------------------------------------------------------------------------------
## 12-03-2018

Aujour'dhui je fais le tour des petites issues, qu'on a mis tout au long du projet en parallèle de l'intégration par florent. 
/!\ rappel on travaille a partir de la branche "v2" de corporate-website. !!! 

## 13-03-2018

Fix the 'bug' sur lequel j'ai travailler 6h heier ! dont 2h avec gauthier !!! C'etait une connerie ! Justification des réparations est importante, comprendre pk ca c afonctionne et une issue sur le repo github de la librairie m'as permis de justifier ce fix un peu hacky, il fallait attendre .45s au lieu de .4s ... 

Ajourd'hui grosse matinée refactoring, on attaque une deuxième "phase"  (puppyguide) et on se rend compte que certaines structures html diffèrent la ou elle ne devraient pas. Je note l'imprtance aussi accordée a se poser et juste réfléchir activement sur la suite, pour bien voir les problèmes a venir et surtout prévenir la réécriture de code, ce fléau ! En effet, l'objet du refactoring et de la réflexion qu'on a eu es essentiellement une question de pouvoir réutiliser le code écrit le plus possible en interne. Un deuxième problème est la maintenabilité de ce code, on va d'office devoir y revenir un jour du coup si c'est le bordel et qu'on a du mal a s'y retrouver apres deux heures, ce sera foutu après 2 mois on retrouvera plus rien.

En général, je remarque une importance énorme accordée à la compréhension des erreurs et surtout à leur correction bien sure mais surtout à la compréhension de cette correciotn, de nouveau dans un souci de maintenabilité, si on s'est retrouvé bloqué a cause d'un bug, en revenant dessus plus tard, on ne veut pas se retrouver a nouveau coincé dessus => essentiel de bien comprendre qu'est ce qui a réglé quoi, on ne laisse pas des "fixes" miraculeux dans le code sans les commenter => pour pouvoir commenter intelligemment il faut avoir compris qu'est qui corrige quoi et dans quelle mesure.  

Etonnat par rapport a ce qu'on m'avait dit ou on ne prenait pas le temps de comprendre, le temps c'est de l'argent, si ca fonctionne ca fonctionne. Ici on va "perdre du temps" à absolument tout comprendre, si on en comprend vraiment pas en général on va changer de solution. 

```
.card-style {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 5px 5px black;
}

.card-ranking {
  @extend .card-style;
}

%box-style {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 5px 5px black;
}

.box-ranking {
  @extend %box-style;
}

...
.card-style, .card-ranking {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 5px 5px black;
}

.box-ranking {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 5px 5px black;
}

```  
```
/* une belle petite map sass */ 
// =============================================================================
// Ranking
// =============================================================================

/* Deps
   ========================================================================== */
   @import 'variables';

/* Layout
  ========================================================================== */
.medal {
  background: $color-light;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
}

$rank: (
  gold: (#FFBB33, #FFEDA6, #FFDF80, #F2BA49),
  silver: (#B6B6BF, #EDF4FA, #DADCE6, #B6B6BF),
  bronze: (#B37E59, #FFD2B3, #F2C7AA, #B5815C)
);

/* For each key in the map, created an own class */
@each $name, $colors in $rank {
  $borderDarkGradient: nth($colors, 1);
  $borderLlightGradient: nth($colors, 2);
  $insideBg:nth($colors, 3);
  $insideShadow: nth($colors, 4);

  &.medal--#{$name} {
    background:
    linear-gradient(0deg, $borderDarkGradient 3%, $borderLlightGradient 100%);
    border-radius: 50%;
    position: relative;

    &::after {
      content: '';
      background: $insideBg;
      box-shadow: inset 0 1px 1px 0 $insideShadow;
      left: 3px;
      right: 3px;
      top: 3px;
      bottom: 3px;
      border-radius: 50%;
      position: absolute;
    }
  }
}
```


## 13-03-2018
* le texte a l'intérieur d'une div qui a un :after/:before qui lui meme possede un attribut bg est couvert ... la solution que j'ai trouvée est de rajouter une div qui contient le contenu a afficher et qui a un z-index de 1;
  * https://gist.github.com/LucaRosaldi/4584913
* fix height = nuuuuuullle ! essayer le moins possible, avec les width aussi d'ailleurs

## Links

* https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei permet de live reload a chaque changement dans les fichiers 

* https://help.adobe.com/en_US/ColdFusion/9.0/CFMLRef/WSc3ff6d0ea77859461172e0811cbec22c24-71aa.html
* https://helpx.adobe.com/coldfusion/cfml-reference/coldfusion-tags/tags-j-l/cfloop-looping-over-a-list-a-file-or-an-array.html

un peu de coldfusion 
```
<cfscript>
      data = [
        {nickname:"luna", score:"1238"},
        {nickname:"luna", score:"1238"},
        {nickname:"luna", score:"1238"},
        {nickname:"luna", score:"1238"},
        {nickname:"luna", score:"1238"}
      ];
      function _getMedalClass (required numeric pos) {
        switch(pos) {
          case '1':
            return 'medal--gold';
          case '2':
            return 'medal--silver';
          case '3':
            return 'medal--bronze';
        }
        return '';
      }
    </cfscript>
<!---     <cffunction name="_getMedalClass">
      <cfargument name="pos" type="numeric" />
      <cfswitch expression="#pos#">
        <cfcase value="1">
          <cfreturn 'medal--gold'/>
        </cfcase>
        <cfcase value="2">
          <cfreturn 'medal--silver'/>
        </cfcase>
        <cfcase value="3">
          <cfreturn 'medal--bronze'/>
        </cfcase>
      </cfswitch>
      <cfreturn '' />
    </cffunction> --->
    <cfset rank = 1 />
    <cfloop array="#data#" index="row">
      <cfoutput>
        <div class="ranking__list__item">
          <div class="medal #_getMedalClass(rank)#">#rank#</div>
          <div class="ranking__list__item__nickname">#row.nickname#</div>
          <div class="ranking__list__item__score">#row.score#</div>
        </div>
      </cfoutput>
    <cfset rank++/>
    </cfloop>
```


## 14-03-2018

 Grosse journée aujourd'hui, pas eu le temps de bcp prendre des notes ... tout commence a venir plus naturellement et rapidement 
 * juste remarque de loic, sur un selecteur jquery utilisant '|=', attention a toujours cibler un maximum (id étant un des bests) notamment au niveau des performances mais surtout pour éviter les sides effects qui pourrait advenir en selectionnant plus que ce qu'il ne faut 
 * https://www.w3.org/TR/SVG/styling.html#SVGStylingProperties


---------------------------------------------------------------------------------------------------
SEMAINE 6
---------------------------------------------------------------------------------------------------


* go check gatsby bootstrap https://www.gatsbyjs.org/1
* check npx 

* git closing issues automatically https://help.github.com/articles/closing-issues-using-keywords/

* https://www.alsacreations.com/astuce/lire/5-lien-precis-page-ancre-anchor-diese.html
* https://www.alsacreations.com/article/lire/572-Les-liens-d-evitement.html
* https://www.blog.niums.com/jquery-defilement-fluide-scroll-vers-une-id-une-ancre/
  * https://stackoverflow.com/questions/25020582/scrolling-to-an-anchor-using-transition-css3
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/get

* Aujourd'hui, evenement majeur : perdu pas mal de temsp a pas demander un truc sur lequel j'étais coincé, j'arrivais pas à trouver la doc d'un fonction get() qui est en fait du lodash https://lodash.com/docs/4.17.5#get
* de plus, je savais pas ce qui était utilisé pour faire l'appel asynchrone et donc je savais pas  quel évènement je pouvais utiliser pour tester l'état du component react ... on utilis ene fait react-refetch https://github.com/heroku/react-refetch et donc leur équivalent au promesse pour react  les PromiseState qui ont des méthodes 'pending, rejected, ...' qui indique l'état du fetch 

* a retenir: demander plus tot ! 
* quand on sait aps si un compoentn sera reutilisé dans l'app plus loin, on le fait en local et on oublie pas qu'il est la ... 
* se méfier de stackoverflow, pas toujours des bonnes pratiques présentes, bcp de hack ... 

import React from 'react'
import { connect } from 'react-refetch'
import get from 'lodash/get'
import { FormattedMessage } from 'react-intl'

import Promo from './Promo'

const Loading = () => <div className="loader">Loading....</div>

const Promos = ({ promos }) => {
  if (promos.pending) {
    return <Loading />
  }

  const entries = get(promos, 'value.data', [])

  return (
    <div>
      {entries.map((promo, i) => (
        <Promo key={'promo_' + i} promo={promo} />
      ))}
      {/* TODO: loader + message if not loading */}
      {!entries.length && <div>
        <FormattedMessage id='no_promo' default='Aucune promotion disponible' />
      </div>}
    </div>
  )
}

export default connect(({ reference }) => ({
  promos: `/api/product-detailpagecontroller/deals?ref=${reference}`
}))(Promos)


## 20 mars 2018

* http://easings.net/fr
* https://www.alsacreations.com/tuto/lire/876-transitions-css3-transition-timing-function.html

* https://www.mailgun.com/ ?? 

* aujourd'hui je repasse apres avoir checker plein de petits trucs sur BI, avec du react et tout le merdier, loic m'a demandé de faire un truc, il l'a fait en 5 minute, j'ai aps tout compris mais je pense que j'aurais mis deux ans a faire ça tout seul ... il faut absolument que je commence a étudier un peu react ! 
Rappel : * styled-components ! 
  * https://mobx.js.org/ state management (//redux)
  * 
  * demander de cancel l'animation quand le button est disabled, suffit simplement de mettre le :hover sous condition de la props disabled 
  => 

  `${p => !p.disabled && `
    &:hover {
      background: ${colors.primaryDk};
      cursor: pointer;
      color: #fff;
      text-decoration: none;
  `}
  `

  * https://stackoverflow.com/questions/8981194/changing-git-commit-message-after-push-given-that-no-one-pulled-from-remote


## 21 mars 2018

* https://stackoverflow.com/questions/8910271/how-can-i-reference-a-commit-in-an-issue-comment-on-github
* https://mobx.js.org/refguide/observable.html
Aujourd'hui on continue sur des corrections partagées entre BI et RC_BE, travail sur la template text qui va styler ce que les admins 
de sites ajoutent comme contenu
* https://css-tricks.com/parent-selectors-in-css/ pk il n'y a pas de selecteur parent en css ! 

## 22 mars 2018

* ce matin j'ai eu la chance de participer à une masterclass à propos de cssgridlayout (offert par igloo) donné par Raphael Goetters de alsacreation.fr et organisé par la feweb  ! cette masterclass fait suite à la conférence elle aussi organisée par la feweb sur le même sujet qui a eu lieu la veille (la aussi j'ai eu la chance d'avoir ma place par igloo) ! C'etait trop bien, on était 7 eleves dans un bureau du parc athena et on a passé +- 4h (9h -> 12h45) à faire des exercices donné et corrigé par Raphael. J'étai sun peu largué par rapport aux autres présents, vieux briscard du css et plus habitué à livecoder que moi ... impressionnant a quel point on a l'air de revenir de loin en css. Ca donne envie de s'y mettre encore plus a fond et gridlayout a l'air vraiment dingue, malheureusement très peu supporté sous edge.
* http://cssgridgarden.com/#fr
* https://gridbyexample.com/
* ... et beaucoup plus d'infos recues, dans les slides et dans la clé usb recue

* cet aprem un peu plus calme


---------------------------------------------------------------------------------------------------
SEMAINE 7
---------------------------------------------------------------------------------------------------

## 26 mars 2018
## 27 mars 2018
Je continue sur la liste d'issues relevée apres le tour du site avec l'équipe sur rcbe
* https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/
* https://github.com/JedWatson/classnames
* https://codepen.io/torbencolding/pen/PwEPBo?q=responsive+tabs+menu&limit=all&type=type-pens
* https://developer.mozilla.org/fr/docs/Web/CSS/writing-mode
* http://jsfiddle.net/jonathansampson/vxntq8b1/

## 28 mars 2018
il semble possible d'appliquer une transition sur fill (element svg) directement en css !!!! pas sure que ca soit supporté énormément par contre #IE

* petite astuce pour centrer un élément positionné par rapport au centre de son parent 

```
<div class="un">
</div>

.un {
  background: coral;
  width: 100px;
  height: 100px;
  border-radius: 3px;
  color: white; 
  margin: 300px;
  position: relative;
}

.un:after {
  content: ':'; 
  height: 20px;
  width: 20px;
  background: black;
  text-align: center;
  position: absolute;
  top: -10px;
  left: 50%; // on place le top left corner au milieu
  transform: translateX(-50%); // on translate l'élément négativement d'une distance équivalente a la moitié de sa propre taille 
}
```

## 29 mars 2018

* aujourd'hui panne chez ovh ! 

## 30 mars 2018
* attention un a fils d'un a ca fait tout péter .... 
According to the W3C specification for links HTML5: No.
Content model:
Transparent, but there must be no interactive content descendant.
* https://www.webpagefx.com/web-design/hex-to-rgb/
* https://embed.plnkr.co/8aKFdXxtLHn9Wrj7dTpi/






## 3 avril 2018
* https://www.webpagefx.com/web-design/hex-to-rgb/
* https://css-tricks.com/different-transitions-for-hover-on-hover-off/



## 2 avril 2018

---------------------------------------------------------------------------------------------------
SEMAINE 8
---------------------------------------------------------------------------------------------------


## 5 avril 2018

* https://www.w3.org/Style/Examples/007/color-bullets.en.html#colored


## 6 avril 2018

* https://css-tricks.com/what-you-should-know-about-collapsing-margins/
* https://csswizardry.com/2012/06/single-direction-margin-declarations/

---------------------------------------------------------------------------------------------------
SEMAINE 9
---------------------------------------------------------------------------------------------------

On m'a proposé de m'engager !!!!!! :D

## 10 avril 2018

* https://css-tricks.com/almanac/selectors/r/root/

## 11 avril 2018

* Le diable se cache dans les détails !!!!  

---------------------------------------------------------------------------------------------------
SEMAINE 10
---------------------------------------------------------------------------------------------------

* importnace de définir des styles de bases pour les éléments "nu" au DEBUT ! de manière générale, il vaut mieux styler en utilisant la priorité juste nécessaire afin de ne pas devoir revenir sur des styles prioritaire par la suite qui vont influencer plein d'autres choses et tout casser (l'enfer des liens et des listes sur rcbe ) 

* cependant une chose a eviter est de devoir "cancel" plein de trucs, si on passe plus de style a cancel plein


## 18 avril 2018

* Aujourd'hui on fait du testing IE ... j'ai droit a browserstack !!!! RCBE doit etre en ligne d'ici 2 trois semaines dependant de leur vitesse a fournir du contenu 
	=> compatible IE 10 et 11 avec qque chose de navigable en 9 si possible ... 
	* svg qui on pas de width font chier ... 
	* https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673531(v=vs.85)

* SKETCH ! pour exporter une image avec un rectangle transparent derrière, créer un symbole et exporter le symbome !!!

* https://github.com/JChemPaint/jchempaint/wiki/The-svg-font-problem-and-its-solution



## 19 avril 2018

* https://stackoverflow.com/questions/16808815/ie10-flexbox-p-element-non-wrapping IE 10 c'est vraiment bien :ok_hand: 

## 20 avril 2018
pour styler un input de manière stylée (comme un boutton, etc ...) on le display none et on style son label !!! 

* Quelque chose a peter dans qque part dans le nginx il semblerait, bref on recoit pleind 'alertes de services de client down, étonné de voir le calme avec laquelle l'équipe prend les choses en main et les smileys partou dans les messages d'erreurs

* TJS COMPRENDRE PK CA MArCHE PAS !!!!!! AGIR SUR QQUE CHOSE QU'ON NE COMPREND PAS C'EST SURE A 1000000% que dasn le meilleur des cas on repassera dessus plus tard, dans le pire des cas on laisse des trucs déguelasses et branlant en place ... 


---------------------------------------------------------------------------------------------------
SEMAINE 11
---------------------------------------------------------------------------------------------------

*  https://jsonplaceholder.typicode.com/

* 'unset' ne fonctionne pas sur ie11 => 'auto' c'est mieux, de manière générale si on doit mettre unset qque part ca doit etre end ernier recours (on a pas la main sur le style au dessus), il ne devrait pas falloi annuler des styles sans les remplaces par qque chose. 


---------------------------------------------------------------------------------------------------
SEMAINE 12
---------------------------------------------------------------------------------------------------

## 2 mai 2018

* aujourd'hui je commence une app react "quasi" from scratch, catalogue produit rationnement 
	* probleme de contexte, en js, petite explication sur call/apply/bind et fat arrows #this !!!
	* pas mettre de Component directement dans un state

---------------------------------------------------------------------------------------------------
SEMAINE 13
---------------------------------------------------------------------------------------------------

* Des qu'one st en react on oublie jquery !!!!!!!!!!!!! en modifiant le dom on risque de désynchroniser le dom et le dom virtuel géré par react, on utilise des state ! 
