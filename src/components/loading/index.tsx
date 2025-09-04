import { LoaderCircle } from "lucide-react";
import React from "react";

const LoadingSpinnerSuspense: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center h-full absolute bg-white top-0 w-full">
      <LoaderCircle className="animate-spin text-primary text-4xl" />
      <p className="animate-pulse mt-1 font-bold">Yükleniyor...</p>
    </div>
  );
};
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center  w-full">
      <LoaderCircle className="animate-spin text-primary text-4xl" />
      <p className="animate-pulse mt-1 font-bold">Yükleniyor...</p>
    </div>
  );
};

type LoadingButtonProps = {
  color?: string;
};

const LoadingButton: React.FC<LoadingButtonProps> = ({
  color = "text-primary",
}) => {
  return (
    <div className="flex items-center flex-col justify-center w-full">
      <LoaderCircle className={`animate-spin text-4xl ${color}`} />
    </div>
  );
};

const BankRedirectLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <LoaderCircle className="animate-spin text-primary text-5xl" />
      <p className="animate-pulse mt-2 font-bold text-center">
        Banka sistemine yönlendiriliyorsunuz... <br />
        Lütfen işleminiz tamamlanana kadar bekleyiniz.
      </p>
    </div>
  );
};

export {
  LoadingSpinner,
  LoadingSpinnerSuspense,
  LoadingButton,
  BankRedirectLoading,
};
