export const handleApiErrors = (error: any) => {
  let message = 'Erro desconhecido. Por favor, tente novamente mais tarde.';
  let status = 500;

  if (error.data && error.status < 500) {
    message = error.data.message;
    status = error.data.statusCode;
  }

  return {
    message,
    status,
  };
};
