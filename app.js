const express = require('express');
const ExpressError = require('./expressError');
const { mean, median, mode } = require('./arithmetic');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Helper function for parsing query string of an integer array.
 * 
 *  queryNums: string of comma separated numbers provided from query string.
 */
function parseNums(queryNums) {
    if (queryNums === '') throw new ExpressError('nums are required', 400);
    const nums = queryNums.split(',').map(num => {
        if (isNaN(Number(num))) throw new ExpressError('NaN value found in nums.', 400);
        return Number(num);
    });
    return nums;
};

app.get('/mean', (req, res, next) => {
    try {
        const nums = parseNums(req.query.nums);
        res.json({
            response: {
                operation: 'mean',
                value: mean(nums)
            }
        });
    } catch (err) {
        return next(err);
    }
});

app.get('/median', (req, res, next) => {
    try {
        const nums = parseNums(req.query.nums);
        return res.json({
            response: {
                operation: 'median',
                value: median(nums)
            }
        });
    } catch (err) {
        return next(err);
    }
});

app.get('/mode', (req, res, next) => {
    try {
        const nums = parseNums(req.query.nums);
        return res.json({
            response: {
                operation: 'mode',
                value: mode(nums)
            }
        });
    } catch (err) {
        return next(err)
    }
});

app.use((err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(5000, () => {
    console.log('App listening on port 5000');
});