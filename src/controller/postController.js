const postModel = require("../model/postModel");
const homeModel = require("../model/homeModel");

const GET = async (req, res) => {
  const { id } = req.params;
  await postModel.updateViews(+id);
  const postInfo = await postModel.getPostById(id);
  console.log(postInfo);
  res.render("public/post.html", {
    categories: await homeModel.getCategories(),
    data: await postModel.getPostById(id),
    section: "post",
  });
};

module.exports = {
  GET,
};
