'use client';

import CustomError from '@/app/components/common/CustomError';

const Error = () => {
  return (
    <CustomError
      text="We encountered an error while fetching Customers. Please try again
          later."
    />
  );
};

export default Error;
