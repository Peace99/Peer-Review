export function ErrorHandlerMiddleware(req, res, next) {
  console.log(req);
  try {
    next();
  } catch (error) {
    res.status(error?.status || 500).json({
      message: error?.message || "An error occured",
    });
  }
}
