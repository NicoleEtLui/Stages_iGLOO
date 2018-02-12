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

### En cours
```
<div class="section-products__list__cards__item">
          <div class="section-products__list__cards__item--top">
            <span class="promo"><span class="promo--text"></span>Nouveau</span>
          </div>
          <div class="section-products__list__cards__item--info"> 
            <div class="section-products__list__cards__item--info--title">Beagle adult</div>
            <div class="section-products__list__cards__item--info--subtitle">à partir de 2 mois</div>
            <a href="/" class="button button--secondary button--sm">Voir le produit</a>
          </div>
        </div>

 ...

 // =============================================================================
// Products
// =============================================================================

/* Deps
   ========================================================================== */
@import 'variables';
@import 'utils/mixins';


/* Styles
   ========================================================================== */
.section-products {
  .section-products__list { lost-column: 9/12; 
  
    .section-products__list__cards__item {
      lost-column: 1/3;
      border: solid 1px #EAEAEA;
      border-radius: 3px;
      margin-bottom: 30px;    
      overflow: hidden;  
    }
  }

  .section-products__form { lost-column: 3/12; }
}

.section-products__list__header {
  margin-bottom: 60px;

  .section-products__list__header__title { color: $color-brand; }

  .section-products__list__header__results { color: $color-dark-lt; }
}

.section-products__list__cards {
  display: flex;
  flex-wrap: wrap;
}

.section-products__list__cards__item--top { 
  border-bottom: solid 1px #EAEAEA;
  height: 200px;
  background: url("./assets/image_medium.png") center/contain no-repeat;
  position: relative;

  > img {
    margin-bottom: 35px;
    margin: 0 auto 35px auto;
  }

}

.section-products__list__cards__item--info {
  text-align: center;
  padding: 20px 0 20px 0;

  
}

.section-products__list__cards__item--info--title {
  @include font-size(16px);
  font-weight: 700;
  color: $color-brand;
} 

.section-products__list__cards__item--info--subtitle {
  @include font-size(14px);
  font-weight: lighter;
  color: $color-dark-lt;
  margin: 5px 0 20px 0;
}

// .promo{
//   position: absolute;
//   width: 50px;
// 	height: 50px;
//   background: $color-secondary;
//   color: white;
//   @include font-size(12px);
//   transform: rotate(-45deg);
// }

.promo{
  position: absolute;
  width: 0;
	height: 0;
	border-top: 100px solid $color-secondary;
  border-right: 100px solid transparent;
  z-index: -1;
  top: 0;
  left: 0;

  .promo--text{
    color: white;  
    @include font-size(12px);
    transform: rotate(-45deg);
  }
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

