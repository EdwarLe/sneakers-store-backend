
export const extractValidationData = (resultValidation) => {
    let errorMessages;
    let data;
    let hasError = !resultValidation.success
    
    if(hasError) errorMessages = JSON.parse(resultValidation.error.messages)
    if(!hasError) data = resultValidation.data

 
    return {
        hasError,
        errorMessages,
        data
    }
}