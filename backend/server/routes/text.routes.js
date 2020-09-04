let express = require("express"),
  router = express.Router();

let text = require("../models/text-schema");

router.route("/create").post((req, res, next) => {
  text.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json({ id: data._id, name: data.name });
    }
  });
});

router.route("/").get((req, res, next) => {
  text.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
});

router.route("/find/:id").get((req, res, next) => {
  text.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
});

router.route("/modifyText/:id").put((req, res, next) => {
  text.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.status(200).json(data);
        console.log("Text Modified!");
      }
    }
  );
});

router.route("/delete/:id").delete((req, res, next) => {
  text.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
