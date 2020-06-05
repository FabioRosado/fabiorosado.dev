// import { includes, orderBy } from 'lodash'
import { orderBy } from 'lodash'

// export class SimilarArticlesFactory {
//     constructor (articles, currentArticlePath) {
//         this.articles = articles.filter(
//             (anArticle) => anArticle.path !== currentArticlePath
//         )

//         this.currentArticlePath = currentArticlePath
//         this.maxArticles = 3
//         this.categories = null
//     }

//     setMaxArticles(m) {
//         this.maxArticles = m;
//         return this;
//     }

//     setCategories(aCategory) {
//         this.categories = aCategory
//     }

//     getArticles() {
//         const {categories, articles, maxArticles, rating} = this
//         const identityMap = {}

//         if (!!categories === false) {
//             console.error("SimilarArticlesFactory: Categories not provided, use SetCategories().")
//         }

//         const getPath = (articles) => {
//             return articles.path;
//         }

//         const addToMap = (article) => {
//             const path = getPath(article)
//             let filteredRating = rating.filter(element => {
//                 return element.node["name"] === article.title
//             })

//             if (!identityMap.hasOwnProperty(path)) {
//                 identityMap[path] = {
//                     article: article,
//                     ratings: filteredRating[0].node,
//                     points: 0
//                 }
//             }
//         }

//         const addCategoriesPoints= (article, categories) => {
//             const addPoint = 2
//             const path = getPath(article)

//             article.categories.forEach((aCategory) => {
//                 if (includes(categories, aCategory)) {
//                     identityMap[path].points += addPoint
//                 }
//             })
//         }

//         const getIdentityMapAsArray = () => {
//             return Object.keys(identityMap).map((path) => identityMap[path]);
//         }

//         for (let article of articles) {
//             addToMap(article)
//             addCategoriesPoints(article, categories)
//         }

//         const arrayIdentityMap = getIdentityMapAsArray()

//         const similarArticles = orderBy(
//             arrayIdentityMap, ['points'], ['desc']
//         )

//         return similarArticles.splice(0, maxArticles)
//     }
// }




export class SimilarArticlesFactory {
    constructor (articles, currentArticlePath) {
        this.articles = articles.filter(
        (aArticle) => aArticle.frontmatter.slug !== currentArticlePath);
  
        this.currentArticlePath = currentArticlePath;
        this.maxArticles = 4;
        this.categories = null;

    }
  
    setMaxArticles(m) {
      this.maxArticles = m;
      return this;
    }
  
    setCategories(aCategory) {
      this.categories = aCategory;
      return this;
    }
  
    getArticles() {
      const {articles, categories, maxArticles } = this;
      const identityMap = {};

      if(!!categories === false ) {
        console.error('SimilarArticlesFactory: Categories not provided, use setCategories().');
        return [];
      }

      function getPath(article) {
        return article.frontmatter.slug;
      }
  
      function addToMap(article) {
        const path = getPath(article);
  
        if (!identityMap.hasOwnProperty(path)) {
          identityMap[path] ={
            article: article,
            points: 0
          }
        }
      }
  
      function addCategoriesPoints(article, categories) {
        const points = 3;
        const path = getPath(article);
  
        if (article.frontmatter.categories === categories) {
          identityMap[path].points += points;
        }
      }
  
  
      function getIdentityMapAsArray() {
        return Object.keys(identityMap).map((path) => identityMap[path]);
      }
  
      for (let article of articles) {
        addToMap(article);
        addCategoriesPoints(article, categories);
      }
  
      const arrayIdentityMap = getIdentityMapAsArray();
  
      const similarArticles = orderBy(
        arrayIdentityMap, ['points'], ['desc']
      )
      
      return similarArticles.splice(0, maxArticles);
    }
  }