// import { includes, orderBy } from 'lodash'
import { includes, orderBy } from 'lodash'

export class SimilarArticlesFactory {
  constructor(articles, currentArticlePath) {
    this.articles = articles.filter(
      (aArticle) => aArticle.frontmatter.slug !== currentArticlePath);

    this.currentArticlePath = currentArticlePath;
    this.maxArticles = 4;
    this.categories = null;
    this.tags = []

  }

  setMaxArticles(m) {
    this.maxArticles = m;
    return this;
  }

  setCategories(aCategory) {
    this.categories = aCategory;
    return this;
  }

  setTags(tagsArray) {
    this.tags = tagsArray
    return this
  }

  getArticles() {
    const { articles, categories, tags, maxArticles } = this;
    const identityMap = {};

    if (!!tags === false) {
      console.error("SimilarArticlesFactory: Tags not provided, use setTags()")
      return []
    }

    if (!!categories === false) {
      console.error('SimilarArticlesFactory: Categories not provided, use setCategories().');
      return [];
    }

    function getPath(article) {
      return article.frontmatter.slug;
    }

    function addToMap(article) {
      const path = getPath(article);

      if (!identityMap.hasOwnProperty(path)) {
        identityMap[path] = {
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

    function addTagsPoints(article, tags) {
      const tagPoint = 1;
      const path = getPath(article);

      article.frontmatter.tags.forEach((aTag) => {
        if (includes(tags, aTag)) {
          identityMap[path].points += tagPoint;
        }
      })
    }


    function getIdentityMapAsArray() {
      return Object.keys(identityMap).map((path) => identityMap[path]);
    }

    for (let article of articles) {
      addToMap(article);
      addCategoriesPoints(article, categories);
      addTagsPoints(article, tags)
    }

    const arrayIdentityMap = getIdentityMapAsArray();

    const similarArticles = orderBy(
      arrayIdentityMap, ['points'], ['desc']
    )

    return similarArticles.splice(0, maxArticles);
  }
}