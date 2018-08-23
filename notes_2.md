### 08 aout 2018

* [debug](https://www.npmjs.com/package/debug) renvoie une fonction qui est une factory, qui va attendre d'être appelée pour renvoyer des logs en gros.
Du coup, il faut l'importer et lui passer le module pour pouvoir lancer en console par exemple "DEBUG=amaging:reader:image npm run test" qui ici va lancer des tests en récupérant les logs personnalisés écrits dans le module.
/!\ pas sure de la partie ligne de commande, a explorer ...

``
//commonjs
const debug = require('debug')('amaging:reader:image')

//become in es6 import/export
import debugFactory from 'debug'
const debug = debugFactory('amaging:reader:image')
``

* une fonction déclarée avec **async** devant renvoie TOUJOURS une Promise, attention la variable aà laquelle ce retour est assigné appartient au contexte global !
/!\ ne pas oublier d'inculer le await dans cette fonction !
  * https://promisesaplus.com/ specification actuelle de la promise
  * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise

* [supertest](https://github.com/visionmedia/supertest) permet de faire des fake appel http dans une application node sans même avoir un serveur qui écoute sur un port particulier !


#### Shortcuts
* `pom + L` : access browser navigation bar

* http://httpbin.org/#/HTTP_Methods

#### DEBUG

* pas hésiter a aller voir le splugins utilisers par les outils

#### ITERM

* `ctrl + Z` permet de suspendre un processus, suivi de `bg` il va faire reprendre ce processus en arrière-plan, la commande `fg` permet de le ramener à l'avant plan en foreground. http://www-inf.it-sudparis.eu/cours/UNIX/Web/7.48.html

#### LIB
* https://momentjs.com/ date and time !!!!

#### REACT

* state
```
class GalleryItem extends React.Component {
  state = {
    showModal: false
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render () {
    const {
      src,
      liked,
      likes
    } = this.props

    return (
      <Fragment>
        <Polaroid onClick={this.handleOpenModal}>
          <Picture src={src} />
          <Like>
            <LikeIcon icon='heart' liked={liked} />
            <Number>{likes}</Number>
          </Like>
        </Polaroid>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </Fragment>
    )
  }
}

export default GalleryItem
```
