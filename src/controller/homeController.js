const model = require("../model/homeModel");
const limit = 3;
async function pages() {
  const { count } = await model.countPosts();
  return Math.ceil(count / limit);
}

const GET = async (req, res) => {
  res.render("public/index.html", {
    categories: await model.getCategories(),
    posts: await model.getPosts(limit),
    pages: await pages(),
    page: 1,
    message: "Recent Posts",
    section: "post",
  });
};

const CATEGORY = async (req, res) => {
  const { id } = req.params;
  const { name } = await model.getCategoriesById(+id);
  res.render("public/index.html", {
    categories: await model.getCategories(),
    filter: await model.filterCategory(+id),
    message: `Posts related to "${name}"`,
    section: "category",
  });
};

const SEARCH = async (req, res) => {
  const { search } = req.query;
  const result = await model.search(search);
  if (result.length) {
    res.render("public/index.html", {
      categories: await model.getCategories(),
      search: await model.search(search),
      message: `Search results for: "${search}"`,
      section: "search",
    });
  } else {
    res.render("public/index.html", {
      categories: await model.getCategories(),
      message: "Nothing found",
      section: "not-found",
    });
  }
};

const PAGINATION = async (req, res) => {
  const { num } = req.params;
  res.render("public/index.html", {
    categories: await model.getCategories(),
    posts: await model.pagination((+num - 1) * limit, limit),
    pages: await pages(),
    page: +num,
    message: `page: ${num}`,
    section: "pagination",
  });
};

module.exports = {
  GET,
  CATEGORY,
  SEARCH,
  PAGINATION,
};
