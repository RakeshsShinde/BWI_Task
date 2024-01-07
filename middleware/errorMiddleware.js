const errormiddleware = async (err, req, res, next) => {
    let statuscode = err.statuscode || 500;
    let message = err.message || "internal server error ";

    let errors = [];

    if (err.name === 'ZodError') {
        errors = err.errors[0].message;
        return res.status(statuscode).json({
            sucesss: false,
            message: errors,

        });
    }
    return res.status(statuscode).json({
        sucesss: false,
        message: message,

    });
}


export default errormiddleware;