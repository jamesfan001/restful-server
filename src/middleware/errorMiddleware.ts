import {  Request, Response, NextFunction } from 'express';

interface ErrorResponse extends Error {
  statusCode?: number;
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {

  // console.error(err.stack);
  // res.status(500).send('Something broke!');


  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({
    message: err.message ,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { errorHandler };

// import { Request, Response, NextFunction } from 'express';

// const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
//   const statusCode = res.statusCode ? res.statusCode : 500;

//   res.status(statusCode);

//   res.json({
//     message: err.message + 'NODE MODE :' + process.env.NODE_ENV,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//   });
// };

// export { errorHandler };
