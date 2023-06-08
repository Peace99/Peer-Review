export function ErrorHandlerMiddleware(req, res, next) {
  try {
    next();
  } catch (error) {
    res.status(error?.status || 500).json({
      message: error?.message || "An error occured",
    });
  }
}
