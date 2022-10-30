export const handleAPIError = (error: any, displayError = false) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(error);
  }
  if (error && Object.getOwnPropertyNames(error).includes("response")) {
    console.log(displayError);
    const message = error?.response?.data?.message;

    if (displayError) {
      console.log("message", message);
      // toast errors
    }
    return message;
  }
};
