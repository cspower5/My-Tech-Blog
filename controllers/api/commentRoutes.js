const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const post = await Comment.create({
            // ...req.body,
            comment_text: req.body.comment,
            user_id: req.session.user_id,
        });

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', (req, res) => {
    Comment.findAll()
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;