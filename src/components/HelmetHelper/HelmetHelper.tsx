import { Helmet, HelmetProvider } from "react-helmet-async";

interface HelmetHelperProps {
  title: string;
}

export const HelmetHelper = ({ title }: HelmetHelperProps) => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
    </div>
  );
};
